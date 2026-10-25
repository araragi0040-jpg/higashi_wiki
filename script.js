(() => {
  "use strict";

  const config = window.WIKI_CONFIG || {};

  const demoPeople = [
    {
      id: "demo-totto",
      name: "トット",
      reading: "とっと",
      status: "オンライン",
      role: "対話と場づくり",
      subtitle: "問いを深め、つなげ、形にする人。人の想いを引き出し、対話を通じて次の一歩を一緒につくります。",
      tags: "対話が好き｜問いづくり｜コミュニティづくり",
      mainArea: "オンライン / 大阪・京都",
      themes: "教育・地域・人の可能性",
      currentWork: "語り場 / ○○プロジェクト",
      availableTime: "平日 夜 / 土日 日中",
      story: "人の中にある言葉になりきらない想いを引き出し、対話を通じて新しい可能性を一緒に探すのが好きです。人と人、想いと想いをつなぎ、形にしていくプロセスにワクワクします。",
      values: "好奇心｜多様性｜自由と責任｜信頼",
      together: "モヤモヤしている問い、形にしたい想い、誰かと一緒に考えたいこと。気軽に話しかけてもらえたらうれしいです。",
      questions: "どうすれば、一人ひとりが自分らしく生きられる？\n対話から生まれる可能性とは？\n安心感のある場をどうつくる？",
      likes: "対話すること｜人の話を聴くこと｜場をつくること｜旅・自然",
      influences: "教育・哲学・旅・地域の人たちの生き方",
      profile: "活動拠点｜大阪・京都 / オンライン\n得意なこと｜対話、問いづくり、企画整理\n大切にしていること｜その人自身の言葉を急がずに見つける",
      features: "柔らかく話しやすい雰囲気を持ちながら、感覚的な問いにも構造をつけて考えるタイプ。",
      history: "コミュニティ活動やイベント企画を通じて、人が自然につながる場づくりに関わる。\n\n最近は、対話を起点にした企画や学びの場にも取り組んでいる。",
      personStory: "人と話している中で生まれた問いを、その場だけで終わらせず次の活動につなげることが多い。",
      works: "対話の場づくり｜少人数の対話会や交流の場を企画。\n企画伴走｜アイデアを整理し、形になるところまで一緒に考える。",
      hobbies: "旅｜知らない土地を歩き、人や文化に触れること。\n自然｜山や海など、静かに過ごせる場所が好き。",
      favorites: "本｜対話・哲学・人間理解に関するもの。\n音楽｜その時の気分に合わせて幅広く聴く。",
      imageUrl: "",
      order: 1
    },
    {
      id: "demo-aoi",
      name: "アオイ",
      reading: "あおい",
      status: "",
      role: "企画・デザイン",
      subtitle: "人や活動の魅力を整理して、伝わる形にすることが好きです。",
      tags: "企画｜デザイン｜表現",
      mainArea: "東京 / オンライン",
      themes: "表現・働き方・学び",
      currentWork: "クリエイティブ企画",
      availableTime: "平日 夜",
      story: "誰かが持っている魅力や背景を見つけ、言葉やデザインで伝わる形に整えることを大切にしています。",
      values: "余白｜対等さ｜遊び心",
      together: "まだ言葉になっていない企画を、一緒に整理して形にしてみたいです。",
      questions: "その人らしさは、どこに現れる？\n伝えることで何が変わる？",
      likes: "写真｜展示を見る｜街を歩く｜デザイン",
      influences: "雑誌編集・写真集・街の小さなお店",
      profile: "活動拠点｜東京 / オンライン\n得意なこと｜企画、編集、ビジュアル整理",
      features: "観察してから動くタイプ。細かな違和感や良さを拾うのが得意。",
      history: "制作活動をしながら、コミュニティ内の企画や広報にも参加。",
      personStory: "",
      works: "企画編集｜情報を整理し、企画の軸をつくる。\nデザイン｜告知物やWebの見え方を整える。",
      hobbies: "写真｜日常の風景を撮る。",
      favorites: "映画｜静かな余韻が残る作品。",
      imageUrl: "",
      order: 2
    }
  ];

  const $ = (id) => document.getElementById(id);
  const elements = {
    directoryView: $("directoryView"),
    detailView: $("detailView"),
    personList: $("personList"),
    resultCount: $("resultCount"),
    dataStatus: $("dataStatus"),
    searchToggleButton: $("searchToggleButton"),
    searchPanel: $("searchPanel"),
    personSearchInput: $("personSearchInput"),
    backButton: $("backButton"),
    topbarPersonName: $("topbarPersonName"),
    detailImage: $("detailImage"),
    heroPlaceholder: $("heroPlaceholder"),
    heroInitial: $("heroInitial"),
    detailName: $("detailName"),
    detailStatus: $("detailStatus"),
    statusText: $("statusText"),
    detailRole: $("detailRole"),
    detailSubtitle: $("detailSubtitle"),
    detailTags: $("detailTags"),
    storySection: $("storySection"),
    storyText: $("storyText"),
    profileSection: $("profileSection"),
    profileList: $("profileList"),
    featureSection: $("featureSection"),
    featureText: $("featureText"),
    valuesSummarySection: $("valuesSummarySection"),
    valueChips: $("valueChips"),
    togetherSection: $("togetherSection"),
    togetherText: $("togetherText"),
    questionsSection: $("questionsSection"),
    questionList: $("questionList"),
    likesSection: $("likesSection"),
    likesChips: $("likesChips"),
    influencesSection: $("influencesSection"),
    influencesText: $("influencesText"),
    hobbiesSection: $("hobbiesSection"),
    hobbiesList: $("hobbiesList"),
    favoritesSection: $("favoritesSection"),
    favoritesList: $("favoritesList"),
    quickFactsSection: $("quickFactsSection"),
    quickFacts: $("quickFacts"),
    worksSection: $("worksSection"),
    worksList: $("worksList"),
    historySection: $("historySection"),
    historyText: $("historyText"),
    personStorySection: $("personStorySection"),
    personStoryText: $("personStoryText"),
    fatalMessage: $("fatalMessage"),
    fatalTitle: $("fatalTitle"),
    fatalText: $("fatalText"),
    retryButton: $("retryButton")
  };

  let people = [];
  let currentPersonId = null;
  let timeoutId = null;
  let jsonpScript = null;

  function parseParagraphs(value) {
    return String(value || "")
      .replace(/\r\n/g, "\n")
      .split(/\n\s*\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  /**
   * 見出し｜内容を1項目として取り出します。
   * 推奨: ◆見出し｜内容 (1項目1行)
   * 改行が消えた貼り付けにも備えて「◆」でも区切ります。
   * 既存の「見出し｜内容」の改行区切りもそのまま利用できます。
   */
  function parsePairs(value) {
    return String(value || "")
      .replace(/\r\n?/g, "\n")
      .replace(/\\n/g, "\n")
      .split(/\n|◆|(?:\s*\|\|\s*)/)
      .map((line) => line.trim().replace(/^[・●■]\s*/, ""))
      .filter(Boolean)
      .map((line) => {
        const full = line.indexOf("｜");
        const normal = line.indexOf("|");
        const at = full >= 0 ? full : normal;
        return at < 0 ? [line, ""] : [line.slice(0, at).trim(), line.slice(at + 1).trim()];
      })
      .filter(([label, body]) => label || body);
  }

  // List items can be delimited by a newline, ◆, ||, or ｜.
  // ◆ is recommended because spreadsheet copy/paste sometimes flattens newlines.
  // Keep the old comma-separated format for backward compatibility.
  function parseList(value) {
    return String(value || "")
      .replace(/\r\n?/g, "\n")
      .replace(/\\n/g, "\n")
      .split(/\n|◆|\|\||｜|\||、|，|,/)
      .map((item) => item.trim().replace(/^[・●■•]\s*/, ""))
      .filter(Boolean);
  }

  // Don't split at Japanese commas: a question may contain 「A、B」.
  // Newline, ◆ and || each mark the start of another question.
  function parseQuestions(value) {
    return String(value || "")
      .replace(/\r\n?/g, "\n")
      .replace(/\\n/g, "\n")
      .split(/\n|◆|\|\|/)
      .map((item) => item.trim().replace(/^(?:[・●■•]|[0-9]+[.)．、])\s*/, ""))
      .filter(Boolean);
  }

  // Standard Google Drive share links open a preview page rather than image bytes.
  // Try the Drive thumbnail endpoint for public/viewable image files.
  function normalizeImageUrl(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    try {
      const url = new URL(raw, window.location.href);
      if (url.hostname !== "drive.google.com") return raw;
      const match = url.pathname.match(/^\/file\/d\/([A-Za-z0-9_-]+)/);
      const fileId = match?.[1] || url.searchParams.get("id");
      if (fileId && /^[A-Za-z0-9_-]{10,}$/.test(fileId)) {
        return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w1600`;
      }
      return raw;
    } catch {
      return raw;
    }
  }

  function normalizePerson(raw) {
    return {
      id: String(raw.id || "").trim(),
      name: String(raw.name || "").trim(),
      reading: String(raw.reading || "").trim(),
      status: String(raw.status || "").trim(),
      role: String(raw.role || "").trim(),
      subtitle: String(raw.subtitle || "").trim(),
      tags: parseList(raw.tags),
      mainArea: String(raw.mainArea || "").trim(),
      themes: String(raw.themes || "").trim(),
      currentWork: String(raw.currentWork || "").trim(),
      availableTime: String(raw.availableTime || "").trim(),
      story: parseParagraphs(raw.story),
      values: parseList(raw.values),
      together: String(raw.together || "").trim(),
      questions: parseQuestions(raw.questions),
      likes: parseList(raw.likes),
      influences: parseParagraphs(raw.influences),
      profile: parsePairs(raw.profile),
      features: parseParagraphs(raw.features),
      history: parseParagraphs(raw.history),
      personStory: parseParagraphs(raw.personStory),
      works: parsePairs(raw.works),
      hobbies: parsePairs(raw.hobbies),
      favorites: parsePairs(raw.favorites),
      imageUrl: normalizeImageUrl(raw.imageUrl),
      order: Number(raw.order || 9999),
      updatedAt: String(raw.updatedAt || "").trim()
    };
  }

  function makeChip(text) {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = text;
    return span;
  }

  function fillChips(target, values) {
    target.innerHTML = "";
    values.forEach((value) => target.appendChild(makeChip(value)));
  }

  function renderParagraphs(target, paragraphs) {
    target.innerHTML = "";
    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      target.appendChild(p);
    });
  }

  function renderPairs(target, pairs, cardType = "") {
    target.innerHTML = "";
    pairs.forEach(([label, body]) => {
      const card = document.createElement("div");
      card.className = cardType === "work" ? "mini-card work-card" : "mini-card";
      const title = document.createElement("strong");
      title.textContent = label;
      card.appendChild(title);
      if (body) {
        const p = document.createElement("p");
        p.textContent = body;
        card.appendChild(p);
      }
      target.appendChild(card);
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

  function renderQuestions(questions) {
    elements.questionList.innerHTML = "";
    questions.forEach((question) => {
      const item = document.createElement("div");
      item.className = "question-card";
      item.textContent = question;
      elements.questionList.appendChild(item);
    });
  }

  function renderQuickFacts(person) {
    const facts = [
      ["主な活動エリア", person.mainArea],
      ["関心のあるテーマ", person.themes],
      ["いま関わっていること", person.currentWork],
      ["つながりやすい時間", person.availableTime]
    ].filter(([, value]) => value);

    elements.quickFacts.innerHTML = "";
    facts.forEach(([label, value]) => {
      const row = document.createElement("div");
      row.className = "fact-row";
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      row.append(dt, dd);
      elements.quickFacts.appendChild(row);
    });
    elements.quickFactsSection.hidden = facts.length === 0;
  }

  function setHero(person) {
    const photo = elements.detailImage;
    const hero = $("detailHero");
    const placeholder = elements.heroPlaceholder;
    elements.heroInitial.textContent = (person.name || "人").slice(0, 1);

    // 前の人物の画像が一瞬表示されないよう、読み込み完了後に切り替えます。
    photo.onload = null;
    photo.onerror = null;
    photo.hidden = true;
    placeholder.hidden = false;
    hero.classList.remove("has-photo");
    photo.removeAttribute("src");
    if (!person.imageUrl) return;

    const expectedUrl = person.imageUrl;
    photo.alt = `${person.name}の写真`;
    photo.onload = () => {
      if (photo.getAttribute("src") !== expectedUrl) return;
      photo.hidden = false;
      placeholder.hidden = true;
      hero.classList.add("has-photo");
    };
    photo.onerror = () => {
      if (photo.getAttribute("src") !== expectedUrl) return;
      console.warn("Wiki: 画像を読み込めませんでした。URLと公開権限をご確認ください。");
      photo.hidden = true;
      placeholder.hidden = false;
      hero.classList.remove("has-photo");
    };
    photo.src = expectedUrl;
  }

  function createCard(person) {
    const article = document.createElement("article");
    article.className = "person-card";
    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.setAttribute("aria-label", `${person.name}のプロフィールを見る`);

    const visual = document.createElement("div");
    visual.className = "card-visual";
    if (person.imageUrl) {
      const img = document.createElement("img");
      img.src = person.imageUrl;
      img.alt = `${person.name}の写真`;
      img.loading = "lazy";
      img.onerror = () => {
        console.warn("Wiki: 一覧用画像を読み込めませんでした。共有設定をご確認ください。");
        img.remove();
        const fallback = document.createElement("div");
        fallback.className = "card-placeholder";
        fallback.textContent = (person.name || "人").slice(0, 1);
        visual.appendChild(fallback);
      };
      visual.appendChild(img);
    } else {
      const fallback = document.createElement("div");
      fallback.className = "card-placeholder";
      fallback.textContent = (person.name || "人").slice(0, 1);
      visual.appendChild(fallback);
    }

    const body = document.createElement("div");
    body.className = "card-body";
    const nameRow = document.createElement("div");
    nameRow.className = "card-name-row";
    const name = document.createElement("h2");
    name.className = "card-name";
    name.textContent = person.name;
    nameRow.appendChild(name);
    if (person.status) {
      const status = document.createElement("span");
      status.className = "status-badge";
      status.innerHTML = '<span class="status-dot"></span>';
      status.appendChild(document.createTextNode(person.status));
      nameRow.appendChild(status);
    }
    body.appendChild(nameRow);

    if (person.role) {
      const role = document.createElement("p");
      role.className = "card-role";
      role.textContent = person.role;
      body.appendChild(role);
    }
    if (person.subtitle) {
      const subtitle = document.createElement("p");
      subtitle.className = "card-subtitle";
      subtitle.textContent = person.subtitle;
      body.appendChild(subtitle);
    }
    if (person.tags.length) {
      const chips = document.createElement("div");
      chips.className = "chip-row";
      person.tags.slice(0, 4).forEach((tag) => chips.appendChild(makeChip(tag)));
      body.appendChild(chips);
    }

    const facts = [
      ["主な活動エリア", person.mainArea],
      ["関心テーマ", person.themes],
      ["いま関わっていること", person.currentWork],
      ["つながりやすい時間", person.availableTime]
    ].filter(([, value]) => value);
    if (facts.length) {
      const dl = document.createElement("dl");
      dl.className = "card-facts";
      facts.forEach(([label, value]) => {
        const wrap = document.createElement("div");
        wrap.className = "card-fact";
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = label;
        dd.textContent = value;
        wrap.append(dt, dd);
        dl.appendChild(wrap);
      });
      body.appendChild(dl);
    }

    article.append(visual, body);
    const open = () => openPerson(person.id, true);
    article.addEventListener("click", open);
    article.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
    return article;
  }

  function renderPersonList(query = "") {
    const q = query.trim().toLowerCase();
    const filtered = people.filter((person) => {
      const text = [
        person.name, person.reading, person.role, person.subtitle,
        person.tags.join(" "), person.mainArea, person.themes, person.currentWork
      ].join(" ").toLowerCase();
      return text.includes(q);
    });

    elements.personList.innerHTML = "";
    elements.resultCount.textContent = `${filtered.length}人`;

    if (!filtered.length) {
      const empty = document.createElement("div");
      empty.className = "empty-list";
      empty.textContent = people.length ? "条件に合う人物が見つかりませんでした。" : "公開中の人物がありません。";
      elements.personList.appendChild(empty);
      return;
    }
    filtered.forEach((person) => elements.personList.appendChild(createCard(person)));
  }

  function toggleSection(element, visible) {
    element.hidden = !visible;
  }

  function renderDetail(person) {
    currentPersonId = person.id;
    elements.topbarPersonName.textContent = person.name;
    elements.detailName.textContent = person.name;
    setHero(person);

    elements.statusText.textContent = person.status;
    elements.detailStatus.hidden = !person.status;
    elements.detailRole.textContent = person.role;
    elements.detailRole.hidden = !person.role;
    elements.detailSubtitle.textContent = person.subtitle;
    elements.detailSubtitle.hidden = !person.subtitle;
    fillChips(elements.detailTags, person.tags);
    elements.detailTags.hidden = person.tags.length === 0;

    renderParagraphs(elements.storyText, person.story);
    toggleSection(elements.storySection, person.story.length > 0);
    renderProfile(person.profile);
    toggleSection(elements.profileSection, person.profile.length > 0);
    renderParagraphs(elements.featureText, person.features);
    toggleSection(elements.featureSection, person.features.length > 0);
    fillChips(elements.valueChips, person.values);
    toggleSection(elements.valuesSummarySection, person.values.length > 0);
    elements.togetherText.textContent = person.together;
    toggleSection(elements.togetherSection, Boolean(person.together));

    renderQuestions(person.questions);
    toggleSection(elements.questionsSection, person.questions.length > 0);
    fillChips(elements.likesChips, person.likes);
    toggleSection(elements.likesSection, person.likes.length > 0);
    renderParagraphs(elements.influencesText, person.influences);
    toggleSection(elements.influencesSection, person.influences.length > 0);
    renderPairs(elements.hobbiesList, person.hobbies);
    toggleSection(elements.hobbiesSection, person.hobbies.length > 0);
    renderPairs(elements.favoritesList, person.favorites);
    toggleSection(elements.favoritesSection, person.favorites.length > 0);

    renderQuickFacts(person);
    renderPairs(elements.worksList, person.works, "work");
    toggleSection(elements.worksSection, person.works.length > 0);
    renderParagraphs(elements.historyText, person.history);
    toggleSection(elements.historySection, person.history.length > 0);
    renderParagraphs(elements.personStoryText, person.personStory);
    toggleSection(elements.personStorySection, person.personStory.length > 0);

    setActiveTab("profile");
  }

  function setActiveTab(tabName) {
    document.querySelectorAll(".detail-tab").forEach((button) => {
      const active = button.dataset.tab === tabName;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === tabName);
    });
  }

  function showDirectory(updateHistory = false) {
    elements.detailView.hidden = true;
    elements.directoryView.hidden = false;
    elements.fatalMessage.hidden = true;
    currentPersonId = null;
    if (updateHistory) history.pushState({ view: "directory" }, "", location.pathname + location.search);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function openPerson(personId, updateHistory = false) {
    const person = people.find((item) => item.id === personId);
    if (!person) return;
    renderDetail(person);
    elements.directoryView.hidden = true;
    elements.detailView.hidden = false;
    elements.fatalMessage.hidden = true;
    if (updateHistory) history.pushState({ view: "person", personId }, "", `#person=${encodeURIComponent(personId)}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function applyInitialRoute() {
    const match = location.hash.match(/^#person=(.+)$/);
    if (match) {
      const id = decodeURIComponent(match[1]);
      if (people.some((person) => person.id === id)) {
        openPerson(id, false);
        return;
      }
    }
    showDirectory(false);
  }

  function finishLoad(rawPeople, modeText = "") {
    people = rawPeople
      .map(normalizePerson)
      .filter((person) => person.id && person.name)
      .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name, "ja"));
    elements.dataStatus.textContent = modeText;
    elements.dataStatus.classList.remove("is-error");
    renderPersonList(elements.personSearchInput.value);
    applyInitialRoute();
  }

  function showFatal(title, text) {
    elements.directoryView.hidden = true;
    elements.detailView.hidden = true;
    elements.fatalMessage.hidden = false;
    elements.fatalTitle.textContent = title;
    elements.fatalText.textContent = text;
  }

  function clearRequestTimer() {
    if (timeoutId) window.clearTimeout(timeoutId);
    timeoutId = null;
  }

  function cleanupJsonpScript() {
    if (jsonpScript?.parentNode) jsonpScript.parentNode.removeChild(jsonpScript);
    jsonpScript = null;
  }

  window.wikiDataCallback = (payload) => {
    clearRequestTimer();
    cleanupJsonpScript();
    if (!payload || payload.ok !== true || !Array.isArray(payload.people)) {
      showFatal("データを取得できませんでした", payload?.error || "Apps Script 側の設定を確認してください。");
      return;
    }
    finishLoad(payload.people, "スプレッドシート連携");
  };

  function loadWikiData() {
    const url = String(config.GAS_WEB_APP_URL || "").trim();
    const missing = !url || url.includes("PASTE_YOUR_GAS_WEB_APP_URL_HERE");
    if (missing) {
      if (config.USE_DEMO_DATA_WHEN_URL_MISSING !== false) {
        finishLoad(demoPeople, "デモデータ表示中");
      } else {
        showFatal("初期設定が必要です", "config.js にGoogle Apps Scriptの /exec URLを設定してください。");
      }
      return;
    }

    elements.dataStatus.textContent = "読込中…";
    const callback = encodeURIComponent(config.CALLBACK_NAME || "wikiDataCallback");
    const separator = url.includes("?") ? "&" : "?";
    jsonpScript = document.createElement("script");
    jsonpScript.src = `${url}${separator}prefix=${callback}&_=${Date.now()}`;
    jsonpScript.async = true;
    jsonpScript.onerror = () => {
      clearRequestTimer();
      cleanupJsonpScript();
      showFatal("データを取得できませんでした", "Apps Scriptの公開設定またはconfig.jsのURLを確認してください。");
    };
    document.body.appendChild(jsonpScript);
    timeoutId = window.setTimeout(() => {
      cleanupJsonpScript();
      showFatal("読み込みがタイムアウトしました", "通信環境またはApps Scriptの公開設定を確認してください。");
    }, Number(config.REQUEST_TIMEOUT_MS || 15000));
  }

  elements.searchToggleButton.addEventListener("click", () => {
    const open = elements.searchPanel.hidden;
    elements.searchPanel.hidden = !open;
    elements.searchToggleButton.setAttribute("aria-expanded", String(open));
    if (open) window.setTimeout(() => elements.personSearchInput.focus(), 0);
  });

  elements.personSearchInput.addEventListener("input", (event) => renderPersonList(event.target.value));
  elements.backButton.addEventListener("click", () => history.length > 1 ? history.back() : showDirectory(true));
  elements.retryButton.addEventListener("click", () => location.reload());

  document.querySelectorAll(".detail-tab").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.tab);
      // タブ切替後は本文の冒頭を見せます（大きな写真の再表示を避けます）。
      document.querySelector(".detail-tabs").scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  window.addEventListener("popstate", () => applyInitialRoute());

  loadWikiData();
})();
