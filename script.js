const people = [
  {
    id: 'yuuki',
    name: '結城 悠樹',
    role: '企画協力 / 思想対話',
    subtitle: '柔らかい第一印象と、深い構造理解を併せ持つ人物として整理されたサンプルページ。',
    image: 'linear-gradient(135deg, #d8c1aa 0%, #b37e57 45%, #7a5847 100%)',
    profile: [
      ['名前', '結城 悠樹（ゆうき ゆうき）'],
      ['立場', 'コミュニティメンバー / 企画協力'],
      ['所属', '西野亮廣オンラインサロン ほか'],
      ['出会い', '2017年10月頃'],
    ],
    features: [
      '温和な性格で知られ、第一印象としては「柔らかく、話しやすい人」と評されることが多い。',
      '一方で、心理学や宗教学に関する深い知見と、構造的思考による分析力を併せ持つため、感覚的な問いに対しても理論的裏づけを添える形で応答する力に長けている。',
      'また、武道、特に居合を嗜んでおり、静かな外見の裏に身体性と精神性の統合を感じさせる内面性を有する。'
    ],
    history: [
      '2017年10月に西野亮廣オンラインサロンメンバーが主催するイベントに来場者として参加。このイベントで、スタッフとして参加していた人物と出会う。',
      '以後、複数回にわたる対話や交流を通じて、哲学的思索や感情、自己理解に関する対話の機会を深めていく。',
      '同年以降も非公開イベントや日常的な対話の中で、構想に対して学術的・思想的な裏づけを与える存在としてたびたび登場している。'
    ],
    works: [
      ['コーチング', '本人の内面整理や視点の言語化に関わるサポートを行う。'],
      ['対話・企画伴走', '企画の土台整理、思想的背景の補助、方向性の言語化などを担うことがある。'],
      ['介護職', '対人支援と現場性を含んだ実務経験を持つ。']
    ],
    hobbies: [
      ['タロット', '読み解きよりも象徴体系そのものへの興味が強い。'],
      ['居合', '身体の軸や静けさに向き合う時間として継続。'],
      ['カメラ', '構図や空気感を切り取ることに関心がある。']
    ],
    favorites: [
      ['ファイブスター物語', '世界観構築・思想性・造形美に惹かれている。'],
      ['シュタインズ・ゲート', '構造や伏線、時間軸の組み立てへの評価が高い。'],
      ['銀河英雄伝説', '人物思想と組織構造の両面から好んでいる。'],
      ['鋼の錬金術師', '哲学と物語が接続された作品として印象深い。']
    ]
  },
  {
    id: 'misaki',
    name: '朝倉 美咲',
    role: '交流サポート',
    subtitle: '初参加者との会話の入口づくりや、場の緊張をほどく役割を担う人物サンプル。',
    image: 'linear-gradient(135deg, #e6d6d1 0%, #c5988c 45%, #8e6f69 100%)',
    profile: [
      ['名前', '朝倉 美咲（あさくら みさき）'],
      ['立場', '交流サポート'],
      ['役割', '初参加者フォロー / 受付補助'],
      ['関わり', '月例交流会'],
    ],
    features: [
      '初参加者でも入りやすい雰囲気をつくることに長けており、場の緊張を自然にほどく存在として認識されている。',
      '会話を広げるというより、相手が話しやすい状態をつくる支え方に強みがある。'
    ],
    history: [
      '交流会の受付補助から関わりが始まり、現在は新規参加者への導線づくりやフォローに関わる。',
      'イベント時には、全体進行よりも個別の安心感づくりを担うことが多い。'
    ],
    works: [
      ['受付補助', '最初の案内や場の導入を担当することがある。'],
      ['交流サポート', '一人になりがちな人へ自然に声をかける。']
    ],
    hobbies: [
      ['読書', '心理やエッセイ系の本を好んで読む。'],
      ['散歩', '考えを整理する時間として大切にしている。']
    ],
    favorites: [
      ['やさしい言葉の本', '押しつけずに寄り添う表現を好む。'],
      ['静かなカフェ', '落ち着いて話せる空間が好き。']
    ]
  },
  {
    id: 'takumi',
    name: '高瀬 匠',
    role: '企画運営',
    subtitle: '全体の流れや企画進行を整理する、運営寄り人物のサンプル。',
    image: 'linear-gradient(135deg, #d8d9cb 0%, #a6ac8b 45%, #69725f 100%)',
    profile: [
      ['名前', '高瀬 匠（たかせ たくみ）'],
      ['立場', '企画運営'],
      ['役割', '進行設計 / 当日調整'],
      ['関わり', 'イベント企画全般'],
    ],
    features: [
      '全体の流れを整理し、当日の動線や役割分担を見通して調整することを得意とする。',
      '前に出るというより、裏側で形を整えるタイプの人物。'
    ],
    history: [
      'イベント立ち上げ初期から運営側で関わり、進行設計や実務整理を担当。',
      '現在は企画案のたたき台づくりや役割整理でも中心的に関わる。'
    ],
    works: [
      ['進行設計', '企画の流れと当日の段取りを整理する。'],
      ['役割調整', '必要な人員配置や動線を調整する。']
    ],
    hobbies: [
      ['ノート整理', '思考を図式化してまとめることが好き。'],
      ['コーヒー', '作業前の切り替えとして楽しんでいる。']
    ],
    favorites: [
      ['作業しやすい文具', '整った道具にこだわりがある。'],
      ['設計系コンテンツ', '構造を分解して見ることが好き。']
    ]
  }
];

const personList = document.getElementById('personList');
const personSearchInput = document.getElementById('personSearchInput');
const personDropdownTrigger = document.getElementById('personDropdownTrigger');
const personDropdownBody = document.getElementById('personDropdownBody');

const detailImage = document.getElementById('detailImage');
const detailName = document.getElementById('detailName');
const detailSubtitle = document.getElementById('detailSubtitle');
const profileList = document.getElementById('profileList');
const featureText = document.getElementById('featureText');
const historyText = document.getElementById('historyText');
const worksAccordion = document.getElementById('worksAccordion');
const hobbiesAccordion = document.getElementById('hobbiesAccordion');
const favoritesAccordion = document.getElementById('favoritesAccordion');

let currentPersonId = people[0].id;

function renderPersonList(query = '') {
  const normalized = query.trim().toLowerCase();
  const filtered = people.filter((person) => {
    const haystack = `${person.name} ${person.role} ${person.subtitle}`.toLowerCase();
    return haystack.includes(normalized);
  });

  if (!filtered.length) {
    personList.innerHTML = '<div class="empty-state">該当する人物がありません。</div>';
    return;
  }

  personList.innerHTML = filtered.map((person) => `
    <button class="person-item ${person.id === currentPersonId ? 'is-active' : ''}" data-person-id="${person.id}">
      <span class="person-name">${person.name}</span>
      <span class="person-role">${person.role}</span>
    </button>
  `).join('');

  personList.querySelectorAll('.person-item').forEach((button) => {
    button.addEventListener('click', () => {
      currentPersonId = button.dataset.personId;
      renderPersonList(personSearchInput.value);
      renderDetail(currentPersonId);
    });
  });
}

function renderParagraphs(target, items) {
  target.innerHTML = items.map((text) => `<p>${text}</p>`).join('');
}

function renderProfile(profile) {
  profileList.innerHTML = profile.map(([label, value]) => `
    <div class="profile-row">
      <div class="profile-label">${label}</div>
      <div class="profile-value">${value}</div>
    </div>
  `).join('');
}

function createAccordion(target, items) {
  target.innerHTML = items.map(([label, content], index) => `
    <div class="accordion-item ${index === 0 ? 'open' : ''}">
      <button class="accordion-trigger">
        <span>${label}</span>
        <span>▾</span>
      </button>
      <div class="accordion-body">${content}</div>
    </div>
  `).join('');

  target.querySelectorAll('.accordion-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement.classList.toggle('open');
    });
  });
}

function renderDetail(personId) {
  const person = people.find((item) => item.id === personId) || people[0];
  detailImage.style.background = person.image;
  detailName.textContent = person.name;
  detailSubtitle.textContent = person.subtitle;

  renderProfile(person.profile);
  renderParagraphs(featureText, person.features);
  renderParagraphs(historyText, person.history);
  createAccordion(worksAccordion, person.works);
  createAccordion(hobbiesAccordion, person.hobbies);
  createAccordion(favoritesAccordion, person.favorites);
}

personSearchInput.addEventListener('input', (event) => {
  renderPersonList(event.target.value);
});

personDropdownTrigger.addEventListener('click', () => {
  const isOpen = personDropdownTrigger.classList.toggle('is-open');
  personDropdownTrigger.setAttribute('aria-expanded', String(isOpen));
  personDropdownBody.classList.toggle('is-hidden', !isOpen);
});

renderPersonList();
renderDetail(currentPersonId);
