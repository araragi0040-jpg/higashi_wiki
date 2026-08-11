(() => {
  "use strict";

  const config = window.WIKI_CONFIG || {};
  const elements = {
    dataStatus: document.getElementById("dataStatus"),
    personList: document.getElementById("personList"),
    personSearchInput: document.getElementById("personSearchInput"),
    personDropdownTrigger: document.getElementById("personDropdownTrigger"),
    personDropdownBody: document.getElementById("personDropdownBody"),
    initialMessage: document.getElementById("initialMessage"),
    personDetail: document.getElementById("personDetail"),
    detailImage: document.getElementById("detailImage"),
    detailName: document.getElementById("detailName"),
    detailRole: document.getElementById("detailRole"),
    detailSubtitle: document.getElementById("detailSubtitle"),
    profileList: document.getElementById("profileList"),
    featureText: document.getElementById("featureText"),
    historyText: document.getElementById("historyText"),
    worksAccordion: document.getElementById("worksAccordion"),
    hobbiesAccordion: document.getElementById("hobbiesAccordion"),
    favoritesAccordion: document.getElementById("favoritesAccordion"),
    profileSection: document.getElementById("profileSection"),
    featureSection: document.getElementById("featureSection"),
    historySection: document.getElementById("historySection"),
    worksSection: document.getElementById("worksSection"),
    hobbiesSection: document.getElementById("hobbiesSection"),
    favoritesSection: document.getElementById("favoritesSection")
  };

  let people = [];
  let currentPersonId = null;
  let timeoutId = null;
  let jsonpScript = null;

  function setStatus(text, type = "") {
    elements.dataStatus.textContent = text;
    elements.dataStatus.classList.remove("is-ok", "is-error");
    if (type) elements.dataStatus.classList.add(type);
  }

  function showMessage(title, text, isError = false) {
    elements.personDetail.hidden = true;
    elements.initialMessage.hidden = false;
    elements.initialMessage.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    elements.initialMessage.append(heading, paragraph);

    if (isError) setStatus("データ取得エラー", "is-error");
  }

  function parseParagraphs(value) {
    return String(value || "")
      .replace(/\r\n/g, "\n")
      .split(/\n\s*\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function parsePairs(value) {
    return String(value || "")
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const fullWidthIndex = line.indexOf("｜");
        const normalIndex = line.indexOf("|");
        const separatorIndex = fullWidthIndex >= 0 ? fullWidthIndex : normalIndex;

        if (separatorIndex < 0) return [line, ""];
        return [
          line.slice(0, separatorIndex).trim(),
          line.slice(separatorIndex + 1).trim()
        ];
      });
  }

  function normalizePerson(raw) {
    return {
      id: String(raw.id || "").trim(),
      name: String(raw.name || "").trim(),
      reading: String(raw.reading || "").trim(),
      role: String(raw.role || "").trim(),
      subtitle: String(raw.subtitle || "").trim(),
      profile: parsePairs(raw.profile),
      features: parseParagraphs(raw.features),
      history: parseParagraphs(raw.history),
      works: parsePairs(raw.works),
      hobbies: parsePairs(raw.hobbies),
      favorites: parsePairs(raw.favorites),
      imageUrl: String(raw.imageUrl || "").trim(),
      order: Number(raw.order || 9999)
    };
  }

  function renderPersonList(query = "") {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = people.filter((person) => {
      const haystack = `${person.name} ${person.reading} ${person.role} ${person.subtitle}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });

    elements.personList.innerHTML = "";

    if (!filtered.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = people.length ? "該当する人物がありません。" : "公開中の人物データがありません。";
      elements.personList.appendChild(empty);
      return;
    }

    filtered.forEach((person) => {
      const button = document.createElement("button");
      button.className = `person-item${person.id === currentPersonId ? " is-active" : ""}`;
      button.type = "button";
      button.dataset.personId = person.id;

      const name = document.createElement("span");
      name.className = "person-name";
      name.textContent = person.name;
      button.appendChild(name);

      if (person.role) {
        const role = document.createElement("span");
        role.className = "person-role";
        role.textContent = person.role;
        button.appendChild(role);
      }

      button.addEventListener("click", () => selectPerson(person.id));
      elements.personList.appendChild(button);
    });
  }

  function renderProfile(profile) {
    elements.profileList.innerHTML = "";
    profile.forEach(([label, value]) => {
      const row = document.createElement("div");
      row.className = "profile-row";
      const labelEl = document.createElement("div");
      labelEl.className = "profile-label";
      labelEl.textContent = label;
      const valueEl = document.createElement("div");
      valueEl.className = "profile-value";
      valueEl.textContent = value || "—";
      row.append(labelEl, valueEl);
      elements.profileList.appendChild(row);
    });
  }

  function renderParagraphs(target, paragraphs) {
    target.innerHTML = "";
    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      target.appendChild(p);
    });
  }

  function createAccordion(target, items) {
    target.innerHTML = "";
    items.forEach(([label, content], index) => {
      const item = document.createElement("div");
      item.className = `accordion-item${index === 0 ? " open" : ""}`;

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "accordion-trigger";
      trigger.setAttribute("aria-expanded", String(index === 0));

      const title = document.createElement("span");
      title.textContent = label;
      const arrow = document.createElement("span");
      arrow.textContent = "▾";
      trigger.append(title, arrow);

      const body = document.createElement("div");
      body.className = "accordion-body";
      body.textContent = content || "詳細情報はありません。";

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.toggle("open");
        trigger.setAttribute("aria-expanded", String(isOpen));
      });

      item.append(trigger, body);
      target.appendChild(item);
    });
  }

  function toggleSection(section, hasContent) {
    section.hidden = !hasContent;
  }

  function renderDetail(personId) {
    const person = people.find((item) => item.id === personId);
    if (!person) return;

    elements.initialMessage.hidden = true;
    elements.personDetail.hidden = false;
    elements.detailName.textContent = person.name || "名称未設定";
    elements.detailRole.textContent = person.role;
    elements.detailRole.hidden = !person.role;
    elements.detailSubtitle.textContent = person.subtitle;
    elements.detailSubtitle.hidden = !person.subtitle;

    if (person.imageUrl) {
      elements.detailImage.style.backgroundImage = `url(${JSON.stringify(person.imageUrl)})`;
      elements.detailImage.style.backgroundColor = "#d8c1aa";
    } else {
      elements.detailImage.style.backgroundImage = "linear-gradient(135deg, #d8c1aa 0%, #b37e57 45%, #7a5847 100%)";
    }

    renderProfile(person.profile);
    renderParagraphs(elements.featureText, person.features);
    renderParagraphs(elements.historyText, person.history);
    createAccordion(elements.worksAccordion, person.works);
    createAccordion(elements.hobbiesAccordion, person.hobbies);
    createAccordion(elements.favoritesAccordion, person.favorites);

    toggleSection(elements.profileSection, person.profile.length > 0);
    toggleSection(elements.featureSection, person.features.length > 0);
    toggleSection(elements.historySection, person.history.length > 0);
    toggleSection(elements.worksSection, person.works.length > 0);
    toggleSection(elements.hobbiesSection, person.hobbies.length > 0);
    toggleSection(elements.favoritesSection, person.favorites.length > 0);
  }

  function selectPerson(personId) {
    currentPersonId = personId;
    renderPersonList(elements.personSearchInput.value);
    renderDetail(personId);

    // スマホでは人物選択後にリストを閉じ、本文を読みやすくする。
    if (window.matchMedia("(max-width: 900px)").matches) {
      elements.personDropdownTrigger.classList.remove("is-open");
      elements.personDropdownTrigger.setAttribute("aria-expanded", "false");
      elements.personDropdownBody.classList.add("is-hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function clearRequestTimer() {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = null;
    }
  }

  function cleanupJsonpScript() {
    if (jsonpScript && jsonpScript.parentNode) jsonpScript.parentNode.removeChild(jsonpScript);
    jsonpScript = null;
  }

  window.wikiDataCallback = (payload) => {
    clearRequestTimer();
    cleanupJsonpScript();

    if (!payload || payload.ok !== true || !Array.isArray(payload.people)) {
      showMessage("データを取得できませんでした", payload?.error || "Apps Script 側の設定を確認してください。", true);
      return;
    }

    people = payload.people
      .map(normalizePerson)
      .filter((person) => person.id && person.name)
      .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name, "ja"));

    setStatus(`${people.length}人を読込済`, "is-ok");
    renderPersonList();

    if (!people.length) {
      showMessage("公開中の人物がありません", "スプレッドシートの「公開」列をTRUEにすると表示されます。", false);
      return;
    }

    currentPersonId = people[0].id;
    renderPersonList();
    renderDetail(currentPersonId);
  };

  function loadWikiData() {
    const url = String(config.GAS_WEB_APP_URL || "").trim();
    if (!url || url.includes("PASTE_YOUR_GAS_WEB_APP_URL_HERE")) {
      elements.personList.innerHTML = '<div class="empty-state">config.js に Apps Script のウェブアプリURLを設定してください。</div>';
      showMessage("初期設定が必要です", "config.js に Google Apps Script の /exec URL を貼り付けると、スプレッドシートの人物データを表示します。", true);
      setStatus("URL未設定", "is-error");
      return;
    }

    setStatus("スプレッドシート読込中…");
    const callback = encodeURIComponent(config.CALLBACK_NAME || "wikiDataCallback");
    const separator = url.includes("?") ? "&" : "?";
    const src = `${url}${separator}prefix=${callback}&_=${Date.now()}`;

    jsonpScript = document.createElement("script");
    jsonpScript.src = src;
    jsonpScript.async = true;
    jsonpScript.onerror = () => {
      clearRequestTimer();
      cleanupJsonpScript();
      showMessage("データを取得できませんでした", "Apps Script の公開設定または config.js のURLを確認してください。", true);
    };
    document.body.appendChild(jsonpScript);

    timeoutId = window.setTimeout(() => {
      cleanupJsonpScript();
      showMessage("読み込みがタイムアウトしました", "通信環境または Apps Script の公開設定を確認してください。", true);
    }, Number(config.REQUEST_TIMEOUT_MS || 15000));
  }

  elements.personSearchInput.addEventListener("input", (event) => {
    renderPersonList(event.target.value);
  });

  elements.personDropdownTrigger.addEventListener("click", () => {
    const isOpen = elements.personDropdownTrigger.classList.toggle("is-open");
    elements.personDropdownTrigger.setAttribute("aria-expanded", String(isOpen));
    elements.personDropdownBody.classList.toggle("is-hidden", !isOpen);
  });

  loadWikiData();
})();
