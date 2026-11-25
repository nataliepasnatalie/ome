// =========================================================================
// xX_EMO_BANK_2007_Xx — Interactive Web App (All 12 Screens + Real Leaflet Maps)
// =========================================================================

const BELL_SVG = `
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#FF1493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#FF1493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const EMO_ICONS = {
  search: `<circle cx="10.5" cy="10.5" r="6" fill="#2d1838" stroke="#ff1493" stroke-width="2.2"/><path d="M15.2 15.2L20.5 20.5" stroke="#ff8bca" stroke-width="2.6" stroke-linecap="square"/>`,
  qr: `<rect x="3" y="3" width="7" height="7" fill="#ff1493" stroke="#fff" stroke-width="1.5"/><rect x="14" y="3" width="7" height="7" fill="#2d1838" stroke="#ff99d6" stroke-width="1.5"/><rect x="3" y="14" width="7" height="7" fill="#2d1838" stroke="#ff99d6" stroke-width="1.5"/><rect x="14" y="14" width="3" height="3" fill="#ff8bca"/><rect x="18" y="18" width="3" height="3" fill="#ff1493"/><rect x="18" y="14" width="3" height="2" fill="#fff"/>`,
  nav: `<polygon points="12,2 21,21 12,16.5 3,21" fill="#ff1493" stroke="#fff" stroke-width="1.6" stroke-linejoin="miter"/>`,
  bus: `<rect x="4" y="4" width="16" height="14" rx="2" fill="#2d1838" stroke="#ff1493" stroke-width="1.8"/><rect x="6.5" y="7" width="11" height="5" fill="#ff8bca"/><circle cx="8" cy="15.5" r="1.3" fill="#fff"/><circle cx="16" cy="15.5" r="1.3" fill="#fff"/><path d="M6 18v2M18 18v2" stroke="#c6bfd2" stroke-width="2"/>`,
  taxi: `<rect x="8" y="4" width="8" height="3" fill="#ff8bca" stroke="#000" stroke-width="1"/><path d="M4 11l2-4h12l2 4v6H4v-6z" fill="#ff1493" stroke="#fff" stroke-width="1.5"/><circle cx="7.5" cy="17.5" r="2" fill="#c6bfd2" stroke="#000" stroke-width="1.2"/><circle cx="16.5" cy="17.5" r="2" fill="#c6bfd2" stroke="#000" stroke-width="1.2"/>`,
  fuel: `<rect x="4" y="4" width="11" height="16" fill="#2d1838" stroke="#ff1493" stroke-width="1.8"/><rect x="6.5" y="7" width="6" height="4" fill="#ff8bca"/><path d="M15 8h2.5l1.5 2v7a1.5 1.5 0 0 1-3 0v-4H15" stroke="#c6bfd2" stroke-width="1.8" fill="none"/>`,
  grid: `<rect x="3" y="3" width="7.5" height="7.5" fill="#ff1493" stroke="#fff" stroke-width="1.4"/><rect x="13.5" y="3" width="7.5" height="7.5" fill="#2d1838" stroke="#ff99d6" stroke-width="1.4"/><rect x="3" y="13.5" width="7.5" height="7.5" fill="#2d1838" stroke="#ff99d6" stroke-width="1.4"/><rect x="13.5" y="13.5" width="7.5" height="7.5" fill="#ff8bca" stroke="#000" stroke-width="1.4"/>`,
  heart: `<path d="M12 20.5S4 15.2 4 9.2A4.5 4.5 0 0 1 12 6.4a4.5 4.5 0 0 1 8 2.8c0 6-8 11.3-8 11.3z" fill="#ff1493" stroke="#fff" stroke-width="1.6"/>`,
  cart: `<path d="M3 5h3l2.2 10h10.5l2-7H7.2" fill="#2d1838" stroke="#ff1493" stroke-width="1.8" stroke-linejoin="miter"/><circle cx="10" cy="19" r="1.8" fill="#ff8bca"/><circle cx="17.5" cy="19" r="1.8" fill="#ff8bca"/>`,
  box: `<polygon points="12,3 21,7.5 12,12 3,7.5" fill="#ff1493" stroke="#fff" stroke-width="1.4"/><polygon points="3,7.5 12,12 12,21 3,16.5" fill="#2d1838" stroke="#ff99d6" stroke-width="1.4"/><polygon points="21,7.5 12,12 12,21 21,16.5" fill="#1b0f24" stroke="#c6bfd2" stroke-width="1.4"/>`,
  user: `<circle cx="12" cy="8" r="4" fill="#ff1493" stroke="#fff" stroke-width="1.6"/><path d="M4.5 20c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" fill="#2d1838" stroke="#ff8bca" stroke-width="1.8"/>`,
  calendar: `<rect x="3" y="5" width="18" height="16" fill="#2d1838" stroke="#ff1493" stroke-width="1.8"/><rect x="3" y="5" width="18" height="4.5" fill="#ff1493"/><path d="M8 3v4M16 3v4" stroke="#fff" stroke-width="2"/><rect x="7" y="13" width="3" height="3" fill="#ff8bca"/><rect x="13" y="13" width="3" height="3" fill="#ff99d6"/>`,
  ticket: `<path d="M3 7h18v3.5a2 2 0 0 0 0 3V17H3v-3.5a2 2 0 0 0 0-3V7z" fill="#ff1493" stroke="#fff" stroke-width="1.5"/><path d="M10 8v8" stroke="#000" stroke-width="1.6" stroke-dasharray="2 2"/>`,
  plus: `<rect x="4" y="4" width="16" height="16" fill="#2d1838" stroke="#ff1493" stroke-width="1.8"/><path d="M12 7v10M7 12h10" stroke="#ff8bca" stroke-width="2.4"/>`,
  bolt: `<polygon points="13,2 4,13 11,13 10,22 20,10 13,10" fill="#ff8bca" stroke="#000" stroke-width="1.4"/>`,
  coin: `<circle cx="12" cy="12" r="8.5" fill="#ff1493" stroke="#fff" stroke-width="1.6"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="11" font-weight="900" font-family="Tahoma">₽</text>`,
  support: `<path d="M4 5h16v11H9l-5 4V5z" fill="#ff1493" stroke="#fff" stroke-width="1.6" stroke-linejoin="miter"/><circle cx="9" cy="10.5" r="1.2" fill="#ff8bca"/><circle cx="12" cy="10.5" r="1.2" fill="#fff"/><circle cx="15" cy="10.5" r="1.2" fill="#ff8bca"/>`,
  wrench: `<path d="M14.5 5.5a4 4 0 0 0-4.9 5.5L4.5 16.1l3.4 3.4 5.1-5.1a4 4 0 0 0 5.5-4.9l-2.3 2.3-2.5-2.5 2.3-2.3z" fill="#c6bfd2" stroke="#ff1493" stroke-width="1.5"/>`,
  sparkle: `<polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" fill="#ff1493" stroke="#ff8bca" stroke-width="1.5"/>`,
  pencil: `<path d="M4 20l4.5-1.2L19 8.3 15.7 5 5.2 15.5 4 20z" fill="#ff1493" stroke="#fff" stroke-width="1.5"/><path d="M14 6.7l3.3 3.3" stroke="#ff8bca" stroke-width="1.8"/>`,
  scissors: `<circle cx="7" cy="17" r="3" fill="#ff1493" stroke="#fff" stroke-width="1.5"/><circle cx="17" cy="17" r="3" fill="#ff1493" stroke="#fff" stroke-width="1.5"/><path d="M9 14.5L16.5 4M15 14.5L7.5 4" stroke="#c6bfd2" stroke-width="2"/>`,
  car: `<path d="M3 13l2.5-5h13L21 13v5H3v-5z" fill="#2d1838" stroke="#ff1493" stroke-width="1.8"/><rect x="6.5" y="9.5" width="11" height="3" fill="#ff8bca"/><circle cx="7.5" cy="18" r="2" fill="#fff"/><circle cx="16.5" cy="18" r="2" fill="#fff"/>`,
  med: `<rect x="3" y="6" width="18" height="14" fill="#2d1838" stroke="#ff1493" stroke-width="1.8"/><path d="M9 6V4h6v2" stroke="#c6bfd2" stroke-width="1.8" fill="none"/><path d="M12 9.5v7M8.5 13h7" stroke="#ff8bca" stroke-width="2.4"/>`,
  tooth: `<path d="M7 4c-2.2 0-3.5 2-3 5 .5 3 2 11 4 11 1.2 0 1.8-3 4-3s2.8 3 4 3c2 0 3.5-8 4-11 .5-3-.8-5-3-5-1.8 0-3 1.2-5 1.2S8.8 4 7 4z" fill="#fff" stroke="#ff1493" stroke-width="1.8"/>`,
  flask: `<path d="M9 3h6M10 3v5l-5 11h14l-5-11V3" fill="#2d1838" stroke="#c6bfd2" stroke-width="1.7"/><path d="M7 15h10l1.5 3.5h-13L7 15z" fill="#ff8bca"/>`,
  scan: `<rect x="4" y="4" width="16" height="16" fill="#2d1838" stroke="#ff1493" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="#ff8bca" stroke-width="2"/><path d="M4 12h4M16 12h4" stroke="#fff" stroke-width="1.6"/>`,
  filter: `<path d="M3 5h18l-7 8v6l-4-2v-4L3 5z" fill="#ff1493" stroke="#fff" stroke-width="1.5"/>`,
};

function ico(name, cls = '') {
  const body = EMO_ICONS[name] || EMO_ICONS.sparkle;
  return `<svg class="emo-svg-ico ${cls}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${body}</svg>`;
}

// Real Leaflet instances (standard OpenStreetMap tiles — NO API KEY required)
let mainMapInstance = null;
let mainMarkersLayer = null;
let taxiMapInstance = null;

// Transport vehicles around UrFU / Center (Yekaterinburg)
const TRANSPORT_UNITS = [
  { id: 'a12', code: 'А12', type: 'bus', mine: true, label: 'Автобус №12 → Вокзал · 3 мин', lat: 56.8452, lng: 60.6512 },
  { id: 'a28', code: 'А28', type: 'bus', mine: false, label: 'Автобус №28 → Центр · 5 мин', lat: 56.8421, lng: 60.6585 },
  { id: 't4',  code: 'Т4',  type: 'tram', mine: true, label: 'Трамвай №4 → Парк · 6 мин', lat: 56.8415, lng: 60.6525 },
  { id: 't18', code: 'Т18', type: 'tram', mine: false, label: 'Трамвай №18 → ВИЗ · 8 мин', lat: 56.8464, lng: 60.6572 },
  { id: 'tr7', code: 'Тр7', type: 'trolley', mine: false, label: 'Троллейбус №7 → Академический · 4 мин', lat: 56.8432, lng: 60.6480 },
  { id: 'm1',  code: 'М',   type: 'metro', mine: true, label: 'Метро «Площадь 1905 года» · 11 мин пешком', lat: 56.8388, lng: 60.6455 },
];

const FUEL_STATIONS = [
  { code: 'АЗС', label: 'Газпромнефть · АИ-95: 57,40 ₽ · 600 м', lat: 56.8460, lng: 60.6500 },
  { code: 'АЗС', label: 'Лукойл · АИ-95: 58,10 ₽ · 1.1 км', lat: 56.8405, lng: 60.6590 },
];

const state = {
  screen: 'home',
  history: [],
  balanceHidden: false,
  debitBalance: 64250,
  savingsBalance: 84200,
  historyFilter: 'all', // all | expense | income
  historyQuery: '',
  transactions: [
    { icon: 'С', title: 'Супермаркет «Перекрёсток»', cat: 'Продукты', time: 'Сегодня, 14:20', amount: -1480 },
    { icon: 'Т', title: 'Городской транспорт', cat: 'Транспорт', time: 'Сегодня, 09:15', amount: -62 },
    { icon: '+', title: 'Пополнение по СБП', cat: 'Пополнение', time: 'Вчера, 19:40', amount: 15000 },
    { icon: 'К', title: 'Кофейня Surf Coffee', cat: 'Кафе', time: 'Вчера, 13:10', amount: -420 },
    { icon: '★', title: 'Кэшбэк за ноябрь', cat: 'Кэшбэк', time: '22 ноя, 10:00', amount: 1420 },
    { icon: 'M', title: 'Маркетплейс · Мир Кубиков', cat: 'Покупки', time: '20 ноя, 18:45', amount: -3990 },
    { icon: 'И', title: 'Интернет-провайдер', cat: 'Связь', time: '18 ноя, 12:05', amount: -650 },
  ],
  // Payments
  payTab: 'phone',
  bills: [
    { id: 'isp', title: 'Интернет-провайдер', sub: 'Оплата до 1 декабря · 650 ₽', amount: 650, paid: false },
    { id: 'gkh', title: 'ЖКХ (квартира)', sub: 'Начисление за ноябрь · 4 120 ₽', amount: 4120, paid: false },
  ],
  // Chats
  chatFilter: 'all',
  threads: [
    { id: 'support', cat: 'support', icon: 'assets/emo_assistant.jpg', title: 'Поддержка банка · MoLLy_2007', msg: 'Помогу с банком и сервисами или подключу оператора', date: 'Онлайн', unread: 1, go: 'assistant' },
    { id: 'market', cat: 'services', icon: 'assets/kawaii_marketplace.png', title: 'Маркетплейс · Заказ #4821', msg: 'Курьер привезёт заказ завтра 10–14', date: 'Вчера', unread: 2, go: 'marketplace' },
    { id: 'profi', cat: 'services', icon: 'assets/profi_av_01.jpg', title: 'Услуги · Алексей Смирнов', msg: 'Здравствуйте, могу приехать в четверг', date: 'Вчера', unread: 1 },
    { id: 'isp', cat: 'services', icon: 'assets/svc_internet.png', title: 'Интернет-провайдер', msg: 'Диагностика линии завершена', date: '20 ноя', unread: 0, go: 'internet' },
    { id: 'med', cat: 'services', icon: 'assets/kawaii_hospital.png', title: 'Медицина · Поликлиника №12', msg: 'Напоминание: терапевт 25 ноя, 14:30', date: '19 ноя', unread: 0, go: 'medicine' },
    { id: 'ops', cat: 'history', icon: 'assets/svc_gosuslugi.png', title: 'Уведомления по операциям', msg: 'Начислен кэшбэк 1 420 ₽ за ноябрь', date: '15 ноя', unread: 0, go: 'history' },
  ],
  // Services search
  serviceQuery: '',
  // Maps
  mapTab: 'transport', // nav | transport | fuel
  transportFilters: [], // multi-select array: [] = all; values: 'mine' | 'bus' | 'tram' | 'trolley' | 'metro'
  // Taxi
  taxiTo: '',
  taxiTariff: 'econ',
  taxiOrdered: false,
  taxiOptionsOpen: false,
  taxiComment: '',
  taxiOptions: [], // ['child', 'pet', 'ac', 'silent', 'luggage', 'non_smoking']
  // Fitness
  fitView: 'schedule', // schedule | bookings | favorites
  fitPoints: 24,
  fitWeekOffset: 0,
  fitDay: 2, // 0..6 (Пн..Вс)
  fitQuery: '',
  fitFiltersOpen: false,
  fitCat: 'Все',
  fitTimeFilter: 'Любое', // Любое | Утро | День | Вечер
  fitLevelFilter: 'Любой', // Любой | Новичок | Средний | Профи
  fitMaxPts: 0, // 0 = any
  fitOnlyFavs: false,
  fitFavStudios: ['s1'],
  fitSelectedSlots: {},
  fitBookings: [
    { id: 1, studio: 'Студия баланса «Воздух»', activity: 'Хатха-йога', date: 'Чт, 26 ноя', time: '19:30', pts: 4 },
  ],
  fitPastBookings: [
    { id: 901, studioId: 's1', studio: 'Студия баланса «Воздух»', activity: 'Хатха-йога и растяжка', date: 'Пн, 23 ноя', time: '18:00', pts: 4 },
    { id: 902, studioId: 's2', studio: 'Фитнес-клуб «Атлет»', activity: 'Силовая тренировка + зал', date: 'Пт, 20 ноя', time: '16:30', pts: 5 },
    { id: 903, studioId: 's3', studio: 'Аква-центр «Волна»', activity: 'Свободное плавание 25м', date: 'Вт, 17 ноя', time: '19:00', pts: 6 },
  ],
  // Internet
  ispTab: 'lk',
  ispBalance: 650,
  ispStatus: 'active',
  // Profi (Услуги и мастера)
  profiTab: 'specialists', // specialists | orders
  profiCat: 'Все',
  profiQuery: '',
  profiFiltersOpen: false,
  profiMinRating: 0,
  profiOrders: [
    {
      id: 101,
      category: 'Ремонт',
      title: 'Повесить полку и заменить розетку',
      budget: 2500,
      date: 'Завтра, 18:00',
      address: 'ул. Ленина, д. 12, кв. 45',
      status: '2 отклика от мастеров',
    },
  ],
  profiHistory: [
    {
      id: 91,
      category: 'Электрик',
      title: 'Установка люстры и проверка щитка',
      master: 'Алексей Смирнов',
      date: '14 ноября',
      price: 2200,
      rating: 0,
      review: '',
    },
    {
      id: 90,
      category: 'Уборка',
      title: 'Генеральная уборка 2-комнатной квартиры',
      master: 'Елена Морозова',
      date: '2 ноября',
      price: 3800,
      rating: 5,
      review: 'Всё блестит, приехала вовремя и привезла свои эко-средства!',
    },
  ],
  // Marketplace (real products with user's exact photos)
  mpTab: 'catalog',
  mpCat: 'Все',
  mpSubCat: '',
  mpCatalogMenuOpen: false,
  mpExpandedSection: 'Электроника и гаджеты',
  mpQuery: '',
  selectedProductId: null,
  selectedVariant: null,
  mpPvz: 'ПВЗ ул. Ленина, 12',
  mpInstallments: true,
  mpNotifs: true,
  mpPromoApplied: false,
  products: [
    {
      id: 1,
      store: 're:Store',
      title: 'Apple AirPods Max (USB-C)',
      cat: 're:Store',
      price: 47990,
      cash: '+4 799 ₽',
      rating: '4.9',
      reviews: 184,
      img: 'assets/prod_airpods_max.jpg',
      fav: true,
      variantsLabel: 'Цвет',
      variants: ['Розовый', 'Тёмная ночь', 'Звездный свет'],
      desc: 'Полноразмерные беспроводные наушники Apple с Hi-Fi звуком, активным шумоподавлением (ANC), режимом прозрачности и разъёмом USB-C.',
      specs: [
        ['Магазин', 're:Store (оригинал)'],
        ['Шумоподавление', 'Активное (ANC)'],
        ['Автономность', 'До 20 часов'],
        ['Разъём', 'USB-C'],
      ],
    },
    {
      id: 2,
      store: 're:Store',
      title: 'Apple iPhone 16 Pro 256 ГБ',
      cat: 're:Store',
      price: 160990,
      cash: '+16 099 ₽',
      rating: '5.0',
      reviews: 312,
      img: 'assets/prod_iphone16pro.jpg',
      fav: false,
      variantsLabel: 'Память',
      variants: ['256 ГБ', '512 ГБ', '1 ТБ'],
      desc: 'Флагманский смартфон в титановом корпусе с дисплеем OLED Super Retina XDR 6,3″ 120 Гц, чипом Apple A18 Pro и камерой Fusion 48 Мп с 5× оптическим зумом.',
      specs: [
        ['Магазин', 're:Store (оригинал)'],
        ['Дисплей', '6.3″ OLED 120 Гц'],
        ['Процессор', 'Apple A18 Pro'],
        ['Камера', '48 Мп + 5× зум'],
      ],
    },
    {
      id: 3,
      store: 'Street Beat',
      title: 'adidas Originals Jeremy Scott JS Poodle',
      cat: 'Street Beat',
      price: 29990,
      cash: '+2 999 ₽',
      rating: '5.0',
      reviews: 64,
      img: 'assets/prod_jeremy_scott.jpg',
      fav: true,
      variantsLabel: 'Размер (EU)',
      variants: ['36', '37', '38', '39', '40'],
      desc: 'Культовая лимитированная коллаборация adidas Originals × Jeremy Scott в ярко-розовом плюше с фирменным пуделем в солнцезащитных очках.',
      specs: [
        ['Магазин', 'Street Beat'],
        ['Коллаборация', 'adidas × Jeremy Scott'],
        ['Материал верха', 'Плюш / текстиль'],
        ['Подошва', 'Резина (розовая)'],
      ],
    },
    {
      id: 4,
      store: 'Street Beat',
      title: 'Onitsuka Tiger Mexico 66',
      cat: 'Street Beat',
      price: 17990,
      cash: '+1 799 ₽',
      rating: '4.9',
      reviews: 215,
      img: 'assets/prod_onitsuka.jpg',
      fav: false,
      variantsLabel: 'Размер (EU)',
      variants: ['37', '38', '40', '42', '43'],
      desc: 'Легендарные низкопрофильные кроссовки Onitsuka Tiger Mexico 66 из мягкой натуральной кожи в культовой жёлто-чёрной расцветке.',
      specs: [
        ['Магазин', 'Street Beat'],
        ['Модель', 'Mexico 66'],
        ['Материал верха', 'Натуральная кожа'],
        ['Подошва', 'Резина с протектором'],
      ],
    },
    {
      id: 5,
      store: 'Мир Кубиков',
      title: 'Конструктор LEGO 76968 Мир Юрского периода Скелет Тираннозавра',
      cat: 'Мир Кубиков',
      price: 34990,
      cash: '+3 499 ₽',
      rating: '5.0',
      reviews: 89,
      img: 'assets/prod_lego_trex.jpg',
      fav: true,
      variantsLabel: 'Комплектация',
      variants: ['Оригинальная коробка', 'Подарочная упаковка'],
      desc: 'Масштабная коллекционная модель скелета Тираннозавра из серии Jurassic Park (3 145 деталей) с подвижными суставами, подставкой и минифигурками Алана Гранта и Элли Сэттлер.',
      specs: [
        ['Магазин', 'Мир Кубиков'],
        ['Артикул', 'LEGO 76968'],
        ['Деталей', '3 145 шт.'],
        ['Возраст', '18+'],
      ],
    },
    {
      id: 6,
      store: 'Мир Кубиков',
      title: 'Конструктор LEGO Icons McLaren MP4/4 & Ayrton Senna 10330',
      cat: 'Мир Кубиков',
      price: 11990,
      cash: '+1 199 ₽',
      rating: '4.9',
      reviews: 112,
      img: 'assets/prod_lego_mclaren.png',
      fav: false,
      variantsLabel: 'Комплектация',
      variants: ['Оригинальная коробка', 'Подарочная упаковка'],
      desc: 'Коллекционный болид Формулы-1 McLaren MP4/4 1988 года с рабочим рулевым управлением, двигателем V6 и минифигуркой Айртона Сенны на пьедестале.',
      specs: [
        ['Магазин', 'Мир Кубиков'],
        ['Артикул', 'LEGO 10330'],
        ['Деталей', '693 шт.'],
        ['Возраст', '18+'],
      ],
    },
  ],
  cart: [1, 3],
  // Courses
  courseView: 'catalog', // catalog | my
  courseCat: 'Все',
  courseSubCat: '',
  courseMenuOpen: false,
  courseExpandedCat: 'IT и дизайн',
  courseQuery: '',
  myCourses: [
    { id: 'uxui', title: 'UX/UI Дизайнер с нуля', cat: 'IT и дизайн', progress: 35, lesson: 12, totalLessons: 34 },
  ],
  // Medicine
  medTab: 'oms', // oms | private | ask
  medQuery: '',
  medAskSpec: 'Терапевт',
  medAskAnon: false,
  medSelectedSlots: {},
  medUpcoming: { doc: 'Терапевт · Иванова Е.А.', info: '25 ноября, 14:30 · Городская поликлиника №12, каб. 204' },
  medDoctors: [
    {
      id: 'd1', name: 'Петров В.И.', type: 'oms', role: 'Терапевт · Поликлиника №12',
      slots: ['15:00', '16:00', '17:15'], img: 'assets/av_emo_checker.png',
      reviews: [
        { author: 'Анна К.', rating: 5, date: '19 ноя', text: 'Очень внимательный терапевт, всё подробно объяснил и без лишних назначений.' },
        { author: 'Максим Р.', rating: 5, date: '11 ноя', text: 'Принял вовремя по ОМС, выписал рабочее лечение.' },
      ],
    },
    {
      id: 'd2', name: 'Соколова О.Н.', type: 'private', role: 'Стоматолог · МедЦентр Плюс',
      slots: ['14:30', '15:30', '18:00'], img: 'assets/av_emo_happy.png',
      reviews: [
        { author: 'Наталия', rating: 5, date: '15 ноя', text: 'Лечила кариес абсолютно без боли, супер аккуратная врач!' },
        { author: 'Дарья С.', rating: 4, date: '3 ноя', text: 'Хорошая клиника и вежливый врач, всё понравилось.' },
      ],
    },
    {
      id: 'd3', name: 'Волкова А.С.', type: 'oms', role: 'ЛОР · Городская больница №6',
      slots: ['14:00', '15:20', '16:30'], img: 'assets/av_emo_bangs.png',
      reviews: [
        { author: 'Игорь Т.', rating: 5, date: '20 ноя', text: 'Быстро помогла с гайморитом, очень грамотный специалист.' },
      ],
    },
  ],
  medQuestions: [
    {
      id: 1,
      spec: 'Терапевт',
      date: '22 ноября',
      question: 'После пробежки на холоде першит горло, температуры нет. Чем лучше полоскать?',
      doctor: 'Иванова Е.А., терапевт',
      answer: 'Подойдут тёплые полоскания солевым раствором или ромашкой 3–4 раза в день, обильное тёплое питьё и покой для голоса. Если появится температура — запишитесь на очный приём.',
      status: 'Ответ получен',
    },
    {
      id: 2,
      spec: 'Стоматолог',
      date: '18 ноября',
      question: 'Нужно ли делать профгигиену перед установкой брекетов?',
      doctor: 'Соколова О.Н., стоматолог',
      answer: 'Да, профессиональная чистка и полная санация полости рта обязательны за 3–7 дней до фиксации брекет-системы.',
      status: 'Ответ получен',
    },
  ],
  // Virtual Bank Assistant & Escalation
  assistantEscalated: false,
  assistantMessages: [
    {
      from: 'bot',
      text: 'Привет, Наталия! ★ Я MoLLy_2007 — виртуальный помощник поддержки. Помогу по банку, навигации и сервисам, а если вопрос сложный — сразу переведу на живого оператора!',
    },
  ],
};

const fmtRub = (n) => `${Math.abs(n).toLocaleString('ru-RU')} ₽`;
const fmtBal = (n) => `${n.toLocaleString('ru-RU')},00 ₽`;

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

function destroyMaps() {
  if (mainMapInstance) {
    mainMapInstance.remove();
    mainMapInstance = null;
    mainMarkersLayer = null;
  }
  if (taxiMapInstance) {
    taxiMapInstance.remove();
    taxiMapInstance = null;
  }
}

const MAIN_TABS = ['home', 'payments', 'chats', 'services'];

function go(screenName, pushHistory = true) {
  if (MAIN_TABS.includes(screenName)) {
    // Navigating to a top-level tab resets inner history
    state.history = [];
  } else if (pushHistory && state.screen !== screenName) {
    // Always remember the top-level tab we entered services from, not another service
    if (MAIN_TABS.includes(state.screen)) {
      state.history = [state.screen];
    } else if (!state.history.length) {
      state.history = ['services'];
    }
  }
  destroyMaps();
  state.screen = screenName;
  render();
  document.getElementById('screenViewport').scrollTop = 0;
}

function goBack() {
  if (state.screen === 'marketplace' && state.selectedProductId !== null) {
    state.selectedProductId = null;
    render();
    document.getElementById('screenViewport').scrollTop = 0;
    return;
  }
  destroyMaps();
  const origin = state.history.find(s => MAIN_TABS.includes(s)) || 'services';
  state.history = [];
  state.screen = origin;
  render();
  document.getElementById('screenViewport').scrollTop = 0;
}

window.openMarketplaceCatalog = (cat = 'Все') => {
  state.mpTab = 'catalog';
  state.mpCat = cat;
  state.selectedProductId = null;
  go('marketplace');
};

window.openMarketplaceOrders = () => {
  state.mpTab = 'orders';
  state.selectedProductId = null;
  go('marketplace');
};

window.openProductDetail = (id) => {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  state.selectedProductId = id;
  state.selectedVariant = p.variants[0];
  render();
  document.getElementById('screenViewport').scrollTop = 0;
};

// Modals
function openModal(html) {
  const backdrop = document.getElementById('modalBackdrop');
  const sheet = document.getElementById('modalSheet');
  sheet.innerHTML = html;
  backdrop.classList.add('open');
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
}

document.getElementById('modalBackdrop').addEventListener('click', (e) => {
  if (e.target.id === 'modalBackdrop') closeModal();
});

function openTopUpModal() {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="section-heading">Пополнить основную карту</div>
    <div class="grid-3">
      <button class="btn-dark" onclick="doTopUp(1000)">+1 000 ₽</button>
      <button class="btn-dark" onclick="doTopUp(5000)">+5 000 ₽</button>
      <button class="btn-dark" onclick="doTopUp(10000)">+10 000 ₽</button>
    </div>
    <button class="btn-pink btn-full" onclick="doTopUp(3000)">Пополнить на 3 000 ₽ (СБП)</button>
    <button class="btn-dark btn-full" onclick="closeModal()">Отмена</button>
  `);
}

function doTopUp(amount) {
  state.debitBalance += amount;
  state.transactions.unshift({ icon: '+', title: 'Пополнение по СБП', time: 'Только что', amount });
  closeModal();
  showToast(`Баланс пополнен на +${fmtRub(amount)} ★`);
  render();
}

function openTransferModal(recipient = '') {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="section-heading">Перевод по СБП</div>
    <div class="search-box">
      <input id="trName" placeholder="Имя или номер телефона" value="${recipient}" />
    </div>
    <div class="search-box">
      <input id="trSum" type="number" placeholder="Сумма в ₽" value="500" />
    </div>
    <button class="btn-pink btn-full" onclick="doTransfer()">Перевести сейчас →</button>
    <button class="btn-dark btn-full" onclick="closeModal()">Отмена</button>
  `);
}

function doTransfer() {
  const name = document.getElementById('trName').value.trim() || 'Получатель';
  const sum = Math.max(1, parseInt(document.getElementById('trSum').value, 10) || 0);
  if (sum > state.debitBalance) {
    showToast('Недостаточно средств на карте');
    return;
  }
  state.debitBalance -= sum;
  state.transactions.unshift({ icon: '→', title: `Перевод: ${name}`, time: 'Только что', amount: -sum });
  closeModal();
  showToast(`Переведено ${fmtRub(sum)} → ${name}`);
  render();
}

function openQrModal() {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="section-heading">Сканер QR-кода</div>
    <div class="card" style="align-items:center;padding:24px;border:2px dashed var(--hot-pink);">
      <div style="display:flex;justify-content:center;padding:8px 0;">${ico('qr', 'lg')}</div>
      <div class="text-pink" style="font-size:12px;text-align:center;">Наведите камеру на QR-код СБП для оплаты без комиссии</div>
    </div>
    <button class="btn-pink btn-full" onclick="doQrPay()">Симулировать оплату 390 ₽</button>
    <button class="btn-dark btn-full" onclick="closeModal()">Закрыть</button>
  `);
}

function doQrPay() {
  state.debitBalance -= 390;
  state.transactions.unshift({ icon: '⊞', title: 'Оплата по QR · Кофейня', time: 'Только что', amount: -390 });
  closeModal();
  showToast('Оплачено 390 ₽ по QR-коду ★');
  render();
}

function openLiveChat(title, firstMsg) {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="row-between">
      <div class="section-heading">${title}</div>
      <button class="btn-dark btn-sm" onclick="closeModal()">✕</button>
    </div>
    <div class="chat-messages" id="liveChatBox">
      <div class="msg-bubble msg-in">${firstMsg}</div>
    </div>
    <div class="row-center">
      <div class="search-box" style="flex:1;padding:8px 10px;">
        <input id="chatMsgInput" placeholder="Написать сообщение..." />
      </div>
      <button class="btn-pink btn-sm" onclick="sendChatMsg()">→</button>
    </div>
  `);
}

function sendChatMsg() {
  const inp = document.getElementById('chatMsgInput');
  const box = document.getElementById('liveChatBox');
  const txt = inp.value.trim();
  if (!txt) return;
  box.innerHTML += `<div class="msg-bubble msg-out">${txt}</div>`;
  inp.value = '';
  box.scrollTop = box.scrollHeight;
  setTimeout(() => {
    box.innerHTML += `<div class="msg-bubble msg-in">Принято! 🖤 Уже проверяем и вернёмся с ответом через минуту.</div>`;
    box.scrollTop = box.scrollHeight;
  }, 450);
}

window.openCancelIspModal = () => {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="section-heading">Отказаться от услуг</div>
    <div class="text-pink" style="font-size:12px;">
      Договор № 4920184 · ул. Ленина, д. 12, кв. 45. Вы можете временно заморозить тариф бесплатно или подать заявку на полное расторжение.
    </div>
    <button class="btn-dark btn-full" onclick="setIspStatus('paused')">Приостановить интернет на 30 дней</button>
    <button class="btn-danger btn-full" onclick="setIspStatus('cancelled')">Расторгнуть договор и отключить услуги</button>
    <button class="btn-pink btn-full" onclick="closeModal()">Остаться на тарифе</button>
  `);
};

window.setIspStatus = (st) => {
  state.ispStatus = st;
  closeModal();
  showToast(st === 'paused' ? 'Тариф приостановлен на 30 дней' : 'Заявка на отказ от услуг оформлена');
  render();
};

window.openPvzModal = () => {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="section-heading">Выберите пункт выдачи (ПВЗ)</div>
    <button class="btn-dark btn-full" onclick="setPvz('ПВЗ ул. Ленина, 12')">ПВЗ ул. Ленина, 12 (рядом с домом)</button>
    <button class="btn-dark btn-full" onclick="setPvz('ПВЗ ул. Мира, 19 (УрФУ)')">ПВЗ ул. Мира, 19 (УрФУ)</button>
    <button class="btn-dark btn-full" onclick="setPvz('Курьером до двери')">Курьером до двери · 0 ₽</button>
    <button class="btn-pink btn-full" onclick="closeModal()">Закрыть</button>
  `);
};

window.setPvz = (addr) => {
  state.mpPvz = addr;
  closeModal();
  showToast(`Адрес доставки: ${addr}`);
  render();
};

// =========================================================================
// REAL LEAFLET MAPS INITIALIZATION (NO API KEY NEEDED)
// =========================================================================
function initMainLeafletMap() {
  const el = document.getElementById('leafletMap');
  if (!el || typeof L === 'undefined') return;

  mainMapInstance = L.map(el, {
    center: [56.8438, 60.6540],
    zoom: 15,
    zoomControl: false,
    attributionControl: true,
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap',
  }).addTo(mainMapInstance);

  const userIcon = L.divIcon({
    className: '',
    html: '<div class="emo-user-marker"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
  L.marker([56.8438, 60.6540], { icon: userIcon }).addTo(mainMapInstance)
    .on('click', () => showToast('Вы здесь: район УрФУ, ул. Мира, 19'));

  mainMarkersLayer = L.layerGroup().addTo(mainMapInstance);
  renderMapMarkers();
}

function renderMapMarkers() {
  if (!mainMarkersLayer || typeof L === 'undefined') return;
  mainMarkersLayer.clearLayers();

  if (state.mapTab === 'fuel') {
    FUEL_STATIONS.forEach(st => {
      const icon = L.divIcon({
        className: '',
        html: `<div class="emo-map-marker metro">⛽</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
      });
      L.marker([st.lat, st.lng], { icon })
        .addTo(mainMarkersLayer)
        .on('click', () => showToast(st.label));
    });
  }
}

function initTaxiLeafletMap() {
  const el = document.getElementById('taxiLeafletMap');
  if (!el || typeof L === 'undefined') return;

  taxiMapInstance = L.map(el, {
    center: [56.8438, 60.6540],
    zoom: 16,
    zoomControl: false,
    attributionControl: false,
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(taxiMapInstance);

  const pickupIcon = L.divIcon({
    className: '',
    html: '<div class="emo-user-marker"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
  L.marker([56.8438, 60.6540], { icon: pickupIcon }).addTo(taxiMapInstance);
}

// =========================================================================
// SCREEN RENDERERS
// =========================================================================

function renderHome() {
  const total = state.debitBalance + state.savingsBalance;
  return `
    <div class="content-col">
      <div class="top-header">
        <div class="user-greet">
          <img src="assets/av_girl.jpg" alt="Наталия" class="avatar-ring" />
          <div>
            <div class="greet-sub">Добрый день,</div>
            <div class="greet-name">xX_Наталия_Xx ★</div>
          </div>
        </div>
        <button class="bell-btn" onclick="go('chats')" title="Уведомления">${BELL_SVG}</button>
      </div>

      <div class="card card-hero">
        <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:6px;">
          <img src="assets/sticker_skull.jpg" alt="" class="sticker-img" style="width:32px;height:32px;border-radius:8px;justify-self:start;" />
          <span class="balance-label" style="white-space:nowrap;">Общий баланс</span>
          <button class="pill-btn" style="padding:4px 9px;font-size:11px;justify-self:end;white-space:nowrap;" onclick="toggleBalance()">
            ${state.balanceHidden ? 'Показать ◉' : 'Скрыть ◉'}
          </button>
        </div>
        <div class="balance-hero-center">
          <div class="balance-amount">${state.balanceHidden ? '••• ••• ₽' : fmtBal(total)}</div>
        </div>
        <div class="row-center" style="gap:8px;">
          <button class="btn-pink" style="flex:1;height:40px;padding:0 12px;gap:6px;" onclick="go('payments')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;" aria-hidden="true">
              <path d="M4 12h15M13 6l6 6-6 6" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Перевести</span>
          </button>
          <button class="btn-dark" style="flex:1;height:40px;padding:0 12px;gap:6px;" onclick="openTopUpModal()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;" aria-hidden="true">
              <path d="M12 5v14M5 12h14" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round"/>
            </svg>
            <span>Пополнить</span>
          </button>
          <button class="btn-dark" style="height:40px;padding:0 12px;gap:6px;" onclick="openQrModal()">${ico('qr', 'sm')} <span>QR</span></button>
        </div>
      </div>

      <div class="row-between">
        <span class="section-heading">Мои счета и карты</span>
        <span class="section-sub clickable" onclick="showToast('Заявка на новую эмо-карту отправлена ★')">+ Открыть</span>
      </div>
      <div class="grid-2">
        <div class="card card-zebra clickable" onclick="openTopUpModal()">
          <div class="row-between">
            <span style="font-size:12px;font-weight:600;">Основная</span>
            <span class="text-pink" style="font-size:11px;">•• 4821</span>
          </div>
          <div style="font-size:18px;font-weight:800;">${state.balanceHidden ? '•• ••• ₽' : fmtRub(state.debitBalance)}</div>
          <div class="text-pink" style="font-size:11px;">Кэшбэк до 5%</div>
        </div>
        <div class="card clickable" onclick="showToast('Накопительный счёт под 16% годовых')">
          <div class="row-between">
            <span style="font-size:12px;font-weight:600;">Накопления</span>
            <span style="font-size:11px;font-weight:800;color:var(--hot-pink);">16%</span>
          </div>
          <div style="font-size:18px;font-weight:800;">${state.balanceHidden ? '•• ••• ₽' : fmtRub(state.savingsBalance)}</div>
          <div class="text-pink" style="font-size:11px;">+1 120 ₽ в мес</div>
        </div>
      </div>

      <div class="section-heading">Быстрый доступ к сервисам</div>
      <div class="grid-4">
        <div class="eco-tile clickable" onclick="go('maps')">
          <img src="assets/kawaii_maps_transport.png" class="kawaii-icon" alt="Карты" />
          <span>Карты</span>
        </div>
        <div class="eco-tile clickable" onclick="openMarketplaceCatalog('Все')">
          <img src="assets/kawaii_marketplace.png" class="kawaii-icon" alt="Маркет" />
          <span>Маркет</span>
        </div>
        <div class="eco-tile clickable" onclick="go('medicine')">
          <img src="assets/kawaii_hospital.png" class="kawaii-icon" alt="Врачи" />
          <span>Врачи</span>
        </div>
        <div class="eco-tile clickable" onclick="go('internet')">
          <img src="assets/svc_internet.png" class="kawaii-icon" alt="Интернет" />
          <span>Интернет</span>
        </div>
      </div>

      <div class="card">
        <div class="row-between">
          <span class="section-heading">Финансы за ноябрь</span>
          <img src="assets/sticker_heart.jpg" alt="" class="sticker-img" style="width:38px;height:26px;" />
          <span style="font-size:12px;font-weight:700;">Кэшбэк: +1 420 ₽</span>
        </div>
        <div class="text-pink" style="font-size:13px;">Расходы: 42 180 ₽</div>
        <div class="progress-segments">
          <span style="background:#ff1493;"></span>
          <span style="background:#ff2ea2;"></span>
          <span style="background:#6d2850;"></span>
          <span style="background:#381632;"></span>
        </div>
        <div class="chips-row">
          <span class="chip">Продукты 38%</span>
          <span class="chip">Транспорт 19%</span>
          <span class="chip">Сервисы 14%</span>
        </div>
      </div>

      <div class="row-between">
        <span class="section-heading">Последние операции</span>
        <span class="section-sub clickable" onclick="go('history')">История ›</span>
      </div>
      <div class="card" style="gap:11px;">
        ${state.transactions.slice(0, 4).map(t => `
          <div class="row-between">
            <div class="row-center">
              <div style="width:34px;height:34px;border-radius:10px;background:var(--surface);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--baby-pink);">${t.icon}</div>
              <div>
                <div style="font-size:13px;font-weight:600;">${t.title}</div>
                <div class="text-muted" style="font-size:11px;">${t.time}</div>
              </div>
            </div>
            <div style="font-size:13px;font-weight:700;color:${t.amount > 0 ? 'var(--hot-pink)' : '#fff'};">
              ${t.amount > 0 ? '+' : '−'}${fmtRub(t.amount)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderHistory() {
  const q = state.historyQuery.toLowerCase();
  const filtered = state.transactions.filter(t => {
    if (state.historyFilter === 'expense' && t.amount >= 0) return false;
    if (state.historyFilter === 'income' && t.amount <= 0) return false;
    if (q && !t.title.toLowerCase().includes(q) && !(t.cat || '').toLowerCase().includes(q)) return false;
    return true;
  });

  const totalIn = state.transactions.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const totalOut = state.transactions.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0);

  return `
    <div class="nav-header">
      <div class="nav-left">
        <button class="back-btn" onclick="goBack()">←</button>
        <span class="nav-title">История операций</span>
      </div>
      <span class="tag-pill">${state.transactions.length} шт.</span>
    </div>
    <div class="content-col">
      <div class="grid-2">
        <div class="card" style="padding:11px;gap:3px;">
          <span class="text-muted" style="font-size:11px;">Пополнения</span>
          <span style="font-size:16px;font-weight:800;color:var(--hot-pink);">+${fmtRub(totalIn)}</span>
        </div>
        <div class="card" style="padding:11px;gap:3px;">
          <span class="text-muted" style="font-size:11px;">Расходы</span>
          <span style="font-size:16px;font-weight:800;">−${fmtRub(totalOut)}</span>
        </div>
      </div>

      <div class="search-box">
        ${ico('search', 'sm')}
        <input id="historySearchInput" placeholder="Поиск по операциям..." value="${state.historyQuery}" oninput="setHistoryQuery(this.value)" />
      </div>

      <div class="chips-row">
        <button class="chip ${state.historyFilter === 'all' ? 'active' : ''}" onclick="setHistoryFilter('all')">Все</button>
        <button class="chip ${state.historyFilter === 'expense' ? 'active' : ''}" onclick="setHistoryFilter('expense')">Расходы</button>
        <button class="chip ${state.historyFilter === 'income' ? 'active' : ''}" onclick="setHistoryFilter('income')">Пополнения</button>
      </div>

      <div class="card" style="gap:12px;">
        ${filtered.length === 0 ? `<div class="text-pink" style="font-size:12px;">Операции не найдены</div>` : filtered.map(t => `
          <div class="row-between">
            <div class="row-center" style="min-width:0;">
              <div style="width:36px;height:36px;border-radius:10px;background:var(--surface);border:1px solid var(--border-dark);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--baby-pink);flex-shrink:0;">${t.icon}</div>
              <div style="min-width:0;">
                <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t.title}</div>
                <div class="text-muted" style="font-size:11px;">${t.cat ? `${t.cat} · ` : ''}${t.time}</div>
              </div>
            </div>
            <div style="font-size:13px;font-weight:700;white-space:nowrap;color:${t.amount > 0 ? 'var(--hot-pink)' : '#fff'};">
              ${t.amount > 0 ? '+' : '−'}${fmtRub(t.amount)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPayments() {
  const unpaidCount = state.bills.filter(b => !b.paid).length;
  const placeholders = {
    phone: '+7 (___) ___‑__‑__ или имя',
    card: 'Номер карты получателя',
    between: 'С основной на Накопления',
  };
  return `
    <div class="content-col">
      <div class="top-header">
        <div class="page-title">Платежи</div>
        <div class="header-right">
          <button class="bell-btn" onclick="go('chats')">${BELL_SVG}</button>
          <button class="btn-pink btn-sm" onclick="openQrModal()">${ico('qr', 'sm')} QR</button>
        </div>
      </div>

      <div class="card">
        <div class="segmented">
          <button class="seg-btn ${state.payTab === 'phone' ? 'active' : ''}" onclick="setPayTab('phone')">По телефону</button>
          <button class="seg-btn ${state.payTab === 'card' ? 'active' : ''}" onclick="setPayTab('card')">По карте</button>
          <button class="seg-btn ${state.payTab === 'between' ? 'active' : ''}" onclick="setPayTab('between')">Между счетами</button>
        </div>
        <div class="search-box clickable" onclick="openTransferModal()">
          <span class="text-muted" style="font-size:13px;flex:1;">${placeholders[state.payTab]}</span>
          <span class="text-pink" style="font-size:11px;font-weight:700;">СБП</span>
        </div>
        <div class="grid-4">
          <div class="contact-item" onclick="openTransferModal('Анна')">
            <img src="assets/av_girl.jpg" class="contact-avatar" alt="Анна" />
            <span>Анна</span>
          </div>
          <div class="contact-item" onclick="openTransferModal('Дмитрий')">
            <img src="assets/av_boy.jpg" class="contact-avatar" alt="Дмитрий" />
            <span>Дмитрий</span>
          </div>
          <div class="contact-item" onclick="openTransferModal('Мама')">
            <img src="assets/av_mama_cat.jpg" class="contact-avatar" alt="Мама" />
            <span>Мама</span>
          </div>
          <div class="contact-item" onclick="openTransferModal('')">
            <div class="contact-plus">+</div>
            <span>Новый</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="row-between">
          <span class="section-heading">Счета к оплате (${unpaidCount})</span>
          <span class="section-sub">Автоплатежи ›</span>
        </div>
        ${state.bills.map(b => `
          <div class="row-between">
            <div>
              <div style="font-size:13px;font-weight:600;">${b.title}</div>
              <div class="text-pink" style="font-size:11px;">${b.paid ? 'Оплачено ✓' : b.sub}</div>
            </div>
            <button class="btn-dark btn-sm" ${b.paid ? 'disabled style="opacity:0.5;"' : `onclick="payBill('${b.id}')"`}>
              ${b.paid ? 'Оплачен' : 'Оплатить'}
            </button>
          </div>
        `).join('')}
      </div>

      <div class="row-between">
        <span class="section-heading">Шаблоны</span>
        <span class="section-sub clickable" onclick="showToast('Новый шаблон добавлен')">+ Добавить</span>
      </div>
      <div class="grid-3">
        <button class="chip" onclick="openTransferModal('Квартира')">Квартира</button>
        <button class="chip" onclick="openTransferModal('Мобильный')">Мобильный</button>
        <button class="chip" onclick="go('fitness')">Фитнес</button>
      </div>

      <div class="section-heading">Оплата услуг</div>
      <div class="grid-2">
        <div class="card clickable" style="flex-direction:row;align-items:center;padding:11px;" onclick="openTransferModal('Мобильная связь')">
          <img src="assets/svc_mobile.png" class="kawaii-icon" alt="" />
          <span style="font-size:12px;font-weight:600;">Мобильная связь</span>
        </div>
        <div class="card clickable" style="flex-direction:row;align-items:center;padding:11px;" onclick="openTransferModal('ЖКХ и дом')">
          <img src="assets/svc_gkh.png" class="kawaii-icon" alt="" />
          <span style="font-size:12px;font-weight:600;">ЖКХ и дом</span>
        </div>
        <div class="card clickable" style="flex-direction:row;align-items:center;padding:11px;" onclick="go('internet')">
          <img src="assets/svc_internet.png" class="kawaii-icon" alt="" />
          <span style="font-size:12px;font-weight:600;">Интернет и ТВ</span>
        </div>
        <div class="card clickable" style="flex-direction:row;align-items:center;padding:11px;" onclick="go('maps')">
          <img src="assets/svc_transport.png" class="kawaii-icon" alt="" />
          <span style="font-size:12px;font-weight:600;">Транспорт и штрафы</span>
        </div>
        <div class="card clickable" style="flex-direction:row;align-items:center;padding:11px;" onclick="openTransferModal('Госуслуги')">
          <img src="assets/svc_gosuslugi.png" class="kawaii-icon" alt="" />
          <span style="font-size:12px;font-weight:600;">Госуслуги и налоги</span>
        </div>
        <div class="card clickable" style="flex-direction:row;align-items:center;padding:11px;" onclick="go('courses')">
          <img src="assets/kawaii_courses_new.jpg" class="kawaii-icon" alt="" />
          <span style="font-size:12px;font-weight:600;">Курсы</span>
        </div>
      </div>
    </div>
  `;
}

function renderChats() {
  const filtered = state.chatFilter === 'all'
    ? state.threads
    : state.threads.filter(t => t.cat === state.chatFilter);
  return `
    <div class="content-col">
      <div class="top-header">
        <div class="page-title" style="font-size:20px;">Чаты и уведомления</div>
        <button class="bell-btn" onclick="showToast('Все уведомления актуальны ★')">${BELL_SVG}</button>
      </div>

      <div class="segmented">
        <button class="seg-btn ${state.chatFilter === 'all' ? 'active' : ''}" onclick="setChatFilter('all')">Все</button>
        <button class="seg-btn ${state.chatFilter === 'support' ? 'active' : ''}" onclick="setChatFilter('support')">Поддержка</button>
        <button class="seg-btn ${state.chatFilter === 'services' ? 'active' : ''}" onclick="setChatFilter('services')">Сервисы</button>
        <button class="seg-btn ${state.chatFilter === 'history' ? 'active' : ''}" onclick="setChatFilter('history')">История</button>
      </div>

      <div class="card thread-list">
        ${filtered.map(t => `
          <div class="thread-row" onclick="${t.go ? (t.go === 'marketplace' ? "openMarketplaceCatalog('Все')" : `go('${t.go}')`) : `openLiveChat('${t.title}', '${t.msg}')`}">
            ${t.isTextIcon
              ? `<div style="width:42px;height:42px;border-radius:12px;background:var(--hot-pink);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;flex-shrink:0;">${t.icon}</div>`
              : `<img src="${t.icon}" class="kawaii-icon" style="width:42px;height:42px;" alt="" />`
            }
            <div style="flex:1;min-width:0;">
              <div style="font-size:13px;font-weight:700;">${t.title}</div>
              <div class="text-pink" style="font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t.msg}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;">
              <span class="text-muted" style="font-size:10px;">${t.date}</span>
              ${t.unread ? `<span class="badge-count">${t.unread}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderServices() {
  const q = state.serviceQuery.toLowerCase();
  const match = (txt) => !q || txt.toLowerCase().includes(q);
  return `
    <div class="content-col">
      <div class="top-header">
        <div class="page-title">Сервисы</div>
        <div class="header-right">
          <button class="pill-btn" onclick="showToast('Город: Екатеринбург')">Екатеринбург ▾</button>
          <button class="bell-btn" onclick="go('chats')">${BELL_SVG}</button>
        </div>
      </div>

      <div class="search-box">
        ${ico('search', 'sm')}
        <input id="svcSearchInput" placeholder="Поиск сервисов..." value="${state.serviceQuery}" oninput="setServiceQuery(this.value)" />
      </div>

      ${match('маркетплейс товары каталог restore street beat мир кубиков') ? `
      <div class="card card-zebra clickable" onclick="openMarketplaceCatalog('Все')">
        <div class="row-between">
          <div class="row-center">
            <img src="assets/kawaii_marketplace.png" class="kawaii-icon" style="width:42px;height:42px;" alt="" />
            <div>
              <div style="font-size:17px;font-weight:800;">Маркетплейс</div>
              <div class="text-pink" style="font-size:12px;">Товары с кэшбэком и доставкой</div>
            </div>
          </div>
          <img src="assets/sticker_heart.jpg" class="sticker-img" style="width:44px;height:30px;" alt="" />
        </div>
        <div class="chips-row">
          <button class="chip active" onclick="event.stopPropagation();openMarketplaceCatalog('Все')">Каталог</button>
          <button class="chip" onclick="event.stopPropagation();openMarketplaceOrders()">Заказы</button>
        </div>
      </div>` : ''}

      <div class="section-sub">Город и передвижение</div>
      <div class="grid-2">
        ${match('карты транспорт навигатор заправки') ? `
        <div class="card svc-card clickable" onclick="go('maps')">
          <div class="row-between">
            <img src="assets/kawaii_maps_transport.png" class="kawaii-icon" alt="" />
            <span class="tag-pill">Карта</span>
          </div>
          <div class="svc-card-title">Карты и транспорт</div>
          <div class="svc-card-desc">Навигатор, отслеживание транспорта в реальном времени, карта заправок</div>
        </div>` : ''}
        ${match('такси машина заказ') ? `
        <div class="card svc-card clickable" onclick="go('taxi')">
          <div class="row-between">
            <img src="assets/kawaii_taxi_new.jpg" class="kawaii-icon" alt="" />
            <span class="tag-pill">от 240 ₽</span>
          </div>
          <div class="svc-card-title">Такси</div>
          <div class="svc-card-desc">Быстрый и удобный заказ такси</div>
        </div>` : ''}
      </div>

      <div class="section-sub">Дом и услуги</div>
      <div class="grid-2">
        ${match('интернет провайдер тариф') ? `
        <div class="card svc-card clickable" onclick="go('internet')">
          <div class="row-between">
            <img src="assets/svc_internet.png" class="kawaii-icon" alt="" />
            <span class="tag-pill">ЛК</span>
          </div>
          <div class="svc-card-title">Интернет-провайдер</div>
          <div class="svc-card-desc">Личный кабинет, тариф, баланс и заявка на установку</div>
        </div>` : ''}
        ${match('услуги мастера специалисты') ? `
        <div class="card svc-card clickable" onclick="go('profi')">
          <div class="row-between">
            <img src="assets/av_emo_bangs.png" class="kawaii-icon" alt="" />
            <span class="tag-pill">Заказы</span>
          </div>
          <div class="svc-card-title">Услуги и мастера</div>
          <div class="svc-card-desc">Подбор проверенных специалистов и мастеров для любых задач</div>
        </div>` : ''}
      </div>

      <div class="section-sub">Здоровье и спорт</div>
      <div class="grid-2">
        ${match('медицина клиники врачи больницы') ? `
        <div class="card svc-card clickable" onclick="go('medicine')">
          <div class="row-between">
            <img src="assets/kawaii_hospital.png" class="kawaii-icon" alt="" />
            <span class="tag-pill">ОМС/ЧК</span>
          </div>
          <div class="svc-card-title">Медицина и клиники</div>
          <div class="svc-card-desc">Онлайн-запись в частные и государственные больницы</div>
        </div>` : ''}
        ${match('фитнес абонемент спорт йога') ? `
        <div class="card svc-card clickable" onclick="go('fitness')">
          <div class="row-between">
            <img src="assets/kawaii_fitness_new.jpg" class="kawaii-icon" alt="" />
            <span class="tag-pill">${state.fitPoints} б.</span>
          </div>
          <div class="svc-card-title">Фитнес-абонемент</div>
          <div class="svc-card-desc">Единый абонемент и запись в студии и спортзалы</div>
        </div>` : ''}
      </div>

      <div class="section-sub">Развитие и обучение</div>
      ${match('допобразование курсы обучение') ? `
      <div class="card clickable" style="flex-direction:row;align-items:center;" onclick="go('courses')">
        <img src="assets/kawaii_courses_new.jpg" class="kawaii-icon" style="width:44px;height:44px;" alt="" />
        <div style="flex:1;">
          <div style="font-size:15px;font-weight:700;">Допобразование и курсы</div>
          <div class="text-pink" style="font-size:12px;">Освоение новых профессий, онлайн-курсы и сертификаты</div>
        </div>
        <span class="text-pink" style="font-size:18px;">›</span>
      </div>` : ''}

      <div class="section-sub">Активные записи и заказы</div>
      <div class="card thread-list">
        <div class="thread-row" onclick="openMarketplaceOrders()">
          <img src="assets/kawaii_marketplace.png" class="kawaii-icon" style="width:38px;height:38px;" alt="" />
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:600;">Заказ #4821 · Маркетплейс</div>
            <div class="text-pink" style="font-size:12px;">Доставка завтра, 10:00–14:00</div>
          </div>
          <span class="text-muted" style="font-size:16px;">›</span>
        </div>
        <div class="thread-row" onclick="go('medicine')">
          <img src="assets/kawaii_hospital.png" class="kawaii-icon" style="width:38px;height:38px;" alt="" />
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:600;">${state.medUpcoming.doc}</div>
            <div class="text-pink" style="font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${state.medUpcoming.info}</div>
          </div>
          <span class="text-muted" style="font-size:16px;">›</span>
        </div>
        <div class="thread-row" onclick="go('internet')">
          <img src="assets/svc_internet.png" class="kawaii-icon" style="width:38px;height:38px;" alt="" />
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:600;">Интернет · Договор №4920184</div>
            <div class="text-pink" style="font-size:12px;">Баланс ${state.ispBalance} ₽ · оплата до 01.12</div>
          </div>
          <span class="text-muted" style="font-size:16px;">›</span>
        </div>
      </div>
    </div>
  `;
}

const TRANSPORT_FILTER_ITEMS = [
  ['mine', '★ Мой транспорт'],
  ['bus', 'Автобусы'],
  ['tram', 'Трамваи'],
  ['trolley', 'Троллейбусы'],
  ['metro', 'Метро'],
];

function renderMapsSheetChips() {
  if (state.mapTab === 'transport') {
    const allActive = state.transportFilters.length === 0;
    const activeLabels = TRANSPORT_FILTER_ITEMS
      .filter(([id]) => state.transportFilters.includes(id))
      .map(([, lbl]) => lbl);
    return `
      <button class="chip ${allActive ? 'active' : ''}" onclick="clearTransportFilters()">Показать всё</button>
      <button class="chip ${!allActive ? 'active' : ''}" onclick="openTransportFilterModal()">
        ⊟ Фильтр${activeLabels.length ? `: ${activeLabels.join(', ')}` : ' транспорта'}
      </button>
    `;
  }
  if (state.mapTab === 'fuel') {
    return `
      <button class="chip active" onclick="showToast('Показаны АЗС с АИ-95')">АИ-95</button>
      <button class="chip" onclick="showToast('Показаны АЗС с АИ-92')">АИ-92</button>
      <button class="chip" onclick="showToast('Показаны АЗС с ДТ')">Дизель</button>
      <button class="chip" onclick="showToast('Показаны электрозарядки')">Электро</button>
    `;
  }
  // Navigator mode — NO transport filters here!
  return `
    <button class="chip" onclick="showToast('Маршрут домой: 14 мин на авто')">Дом</button>
    <button class="chip" onclick="showToast('Маршрут на работу: 21 мин')">Работа</button>
    <button class="chip" onclick="showToast('Рядом 12 кафе и ресторанов')">Где поесть</button>
    <button class="chip" onclick="showToast('Парковки рядом отмечены')">Парковки</button>
  `;
}

function renderMaps() {
  return `
    <div style="display:flex;flex-direction:column;flex:1;min-height:100%;">
      <div class="map-viewport">
        <div id="leafletMap" class="leaflet-host"></div>

        <button class="map-float-btn" style="left:14px;top:12px;" onclick="goBack()">←</button>
        <button class="map-float-btn" style="right:14px;top:12px;" onclick="showToast('Слои: Карта + Пробки')">▤</button>
        <button class="map-float-btn" style="right:14px;top:58px;" onclick="showToast('Пробки: 4 балла')">◉</button>
        <button class="map-float-btn" style="right:14px;top:104px;" onclick="showToast('Погода: +1°, облачно')">1°</button>
        <button class="map-float-btn" style="right:14px;top:190px;" onclick="mapZoomIn()">+</button>
        <button class="map-float-btn" style="right:14px;top:234px;" onclick="mapZoomOut()">−</button>
        <button class="map-float-btn" style="right:14px;top:284px;" onclick="mapCenterUser()">➤</button>

        <button class="map-float-btn" style="left:14px;bottom:14px;border-radius:12px;" onclick="showToast('Построение маршрута')">⇄</button>
        <button class="map-float-btn" style="left:60px;bottom:14px;border-radius:12px;" onclick="showToast('Домой: 18 мин')">⌂</button>
      </div>

      <div class="map-sheet">
        <div class="sheet-handle"></div>
        <div class="row-center">
          <div class="search-box" style="flex:1;padding:9px 12px;">
            ${ico('search', 'sm')}
            <input placeholder="${state.mapTab === 'nav' ? 'Куда едем? Адрес или место' : (state.mapTab === 'fuel' ? 'Поиск АЗС...' : 'Поиск остановок и маршрутов')}" />
          </div>
          ${state.mapTab === 'transport' ? `
            <button class="icon-filter-btn ${state.transportFilters.length ? 'active' : ''}" id="mapFilterBtn" onclick="openTransportFilterModal()" title="Фильтр транспорта">
              ${ico('filter', 'sm')}
              ${state.transportFilters.length ? `<span class="icon-filter-badge">${state.transportFilters.length}</span>` : ''}
            </button>
          ` : `<button class="btn-dark" style="padding:9px 11px;" onclick="showToast('Сохранённые места')" title="Закладки">${ico('heart', 'sm')}</button>`}
        </div>

        <div class="chips-row" id="mapsSheetChips">
          ${renderMapsSheetChips()}
        </div>

        <div class="card clickable" style="flex-direction:row;align-items:center;justify-content:space-between;padding:10px 12px;" onclick="go('taxi')">
          <div>
            <div style="font-size:13px;font-weight:700;">Вызвать такси отсюда</div>
            <div class="text-pink" style="font-size:11px;">Эконом · 4 мин · от 240 ₽</div>
          </div>
          <span class="btn-pink btn-sm">Такси →</span>
        </div>
      </div>
    </div>
  `;
}

const TAXI_OPTIONS = [
  { id: 'child', label: 'Детское кресло', extra: 100 },
  { id: 'pet', label: 'С питомцем', extra: 120 },
  { id: 'ac', label: 'Кондиционер', extra: 0 },
  { id: 'silent', label: 'Молчаливый водитель', extra: 0 },
  { id: 'luggage', label: 'Крупный багаж', extra: 80 },
  { id: 'non_smoking', label: 'Некурящий салон', extra: 0 },
];

function renderTaxi() {
  const tariffs = [
    { id: 'econ', name: 'Эконом', price: 240, eta: '4 мин', img: 'assets/car_econ.jpg' },
    { id: 'comf', name: 'Комфорт', price: 340, eta: '3 мин', img: 'assets/car_comf.jpg' },
    { id: 'deliv', name: 'Доставка', price: 290, eta: '6 мин', img: 'assets/car_deliv.jpg' },
  ];
  const cur = tariffs.find(t => t.id === state.taxiTariff);
  const extraPrice = TAXI_OPTIONS
    .filter(o => state.taxiOptions.includes(o.id))
    .reduce((sum, o) => sum + o.extra, 0);
  const totalPrice = cur.price + extraPrice;
  const optCount = state.taxiOptions.length + (state.taxiComment.trim() ? 1 : 0);

  return `
    <div style="display:flex;flex-direction:column;flex:1;min-height:100%;">
      <div class="map-viewport" style="min-height:210px;">
        <div id="taxiLeafletMap" class="leaflet-host"></div>
        <button class="map-float-btn" style="left:14px;top:12px;" onclick="goBack()">←</button>
        <div style="position:absolute;left:50%;top:64px;transform:translateX(-50%);background:var(--hot-pink);padding:6px 12px;border-radius:14px;font-size:11px;font-weight:700;white-space:nowrap;z-index:500;box-shadow:0 4px 16px rgba(255,20,147,0.6);">
          ${state.taxiOrdered ? '★ Водитель уже едет (3 мин)' : `Подача: ${cur.eta} · ул. Мира, 19`}
        </div>
      </div>

      <div class="map-sheet" style="flex:1;">
        <div class="card" style="padding:10px 12px;gap:8px;">
          <div class="row-center" style="font-size:13px;">
            <span style="width:12px;height:12px;border-radius:50%;background:var(--hot-pink);display:inline-block;"></span>
            <span>Откуда: ул. Мира, 19 (УрФУ)</span>
          </div>
          <div style="height:1px;background:var(--border-dark);"></div>
          <div class="row-center">
            <span style="width:12px;height:12px;border-radius:50%;background:var(--surface-alt);display:inline-block;"></span>
            <input style="background:transparent;border:none;outline:none;color:#fff;font-size:13px;font-weight:600;width:100%;" placeholder="Куда поедем?" value="${state.taxiTo}" oninput="state.taxiTo=this.value" />
          </div>
        </div>

        <div class="grid-3">
          <button class="chip" onclick="setTaxiTo('Дом · 15 мин')">Дом · 15 мин</button>
          <button class="chip" onclick="setTaxiTo('Работа · 22 мин')">Работа · 22 мин</button>
          <button class="chip" onclick="setTaxiTo('Аэропорт')">Аэропорт</button>
        </div>

        <div class="section-sub">Выберите тариф</div>
        <div class="grid-3">
          ${tariffs.map(t => `
            <div class="tariff-card ${state.taxiTariff === t.id ? 'active' : ''}" onclick="setTaxiTariff('${t.id}')">
              <img src="${t.img}" class="tariff-car" alt="${t.name}" />
              <div style="font-size:12px;font-weight:700;">${t.name}</div>
              <div style="font-size:14px;font-weight:800;">${t.price} ₽</div>
              <div class="text-pink" style="font-size:10px;">${t.eta}</div>
            </div>
          `).join('')}
        </div>

        <div class="row-between" style="font-size:12px;">
          <span>Оплата: Карта •• 4821 ▾</span>
          <button class="text-pink clickable" style="background:none;border:none;font-size:12px;font-weight:700;cursor:pointer;padding:0;" onclick="toggleTaxiOptions()">
            Комментарий / опции${optCount ? ` (${optCount})` : ''} ${state.taxiOptionsOpen ? '▾' : '›'}
          </button>
        </div>

        ${state.taxiOptionsOpen ? `
          <div class="filter-panel">
            <div class="section-sub" style="margin:0;">Комментарий водителю</div>
            <input id="taxiCommentInput" class="form-field" style="padding:8px 10px;font-size:12px;" placeholder="Подъезд, домофон, код шлагбаума..." value="${state.taxiComment}" oninput="state.taxiComment=this.value" />
            <div class="section-sub" style="margin:2px 0 0;">Пожелания к поездке</div>
            <div class="chips-row" style="flex-wrap:wrap;">
              ${TAXI_OPTIONS.map(o => `
                <button class="chip ${state.taxiOptions.includes(o.id) ? 'active' : ''}" onclick="toggleTaxiOption('${o.id}')">
                  ${o.label}${o.extra ? ` +${o.extra} ₽` : ''}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <button class="btn-pink btn-full" onclick="orderTaxi(${totalPrice}, '${cur.name}')">
          ${state.taxiOrdered ? 'Отменить заказ такси' : `Заказать такси · ${totalPrice} ₽`}
        </button>
      </div>
    </div>
  `;
}

const FITNESS_STUDIOS = [
  { id: 's1', name: 'Студия баланса «Воздух»', activity: 'Хатха-йога и растяжка', cat: 'Йога', timeOfDay: 'Вечер', level: 'Новичок', meta: 'Йога · 0.6 км · ★ 4.9', pts: 4, slots: ['18:00','19:30'], img: 'assets/fit_studio_1.jpg' },
  { id: 's2', name: 'Фитнес-клуб «Атлет»', activity: 'Силовая тренировка + зал', cat: 'Зал', timeOfDay: 'День', level: 'Средний', meta: 'Тренажёрный зал · 1.1 км · ★ 4.8', pts: 5, slots: ['13:00','16:30','20:00'], img: 'assets/fit_studio_2.jpg' },
  { id: 's3', name: 'Аква-центр «Волна»', activity: 'Свободное плавание 25м', cat: 'Бассейн', timeOfDay: 'Вечер', level: 'Новичок', meta: 'Бассейн 25м · 1.4 км · ★ 4.9', pts: 6, slots: ['19:00','21:00'], img: 'assets/fit_studio_3.jpg' },
  { id: 's4', name: 'Пилатес-лофт «Грань»', activity: 'Утренний пилатес на реформере', cat: 'Пилатес', timeOfDay: 'Утро', level: 'Средний', meta: 'Пилатес · 0.9 км · ★ 5.0', pts: 5, slots: ['08:30','10:00'], img: 'assets/fit_studio_4.jpg' },
  { id: 's5', name: 'Dance Lab «Neon»', activity: 'High Heels & Hip-Hop', cat: 'Танцы', timeOfDay: 'Вечер', level: 'Профи', meta: 'Танцы · 1.2 км · ★ 4.9', pts: 4, slots: ['18:30','20:30'], img: 'assets/fit_studio_5.jpg' },
];

function getFitnessWeekDays(offset) {
  const base = new Date(2026, 10, 23); // Пн, 23 ноября 2026
  base.setDate(base.getDate() + offset * 7);
  const wds = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    days.push({
      wd: wds[i],
      dd: d.getDate(),
      month: months[d.getMonth()],
      full: `${wds[i]}, ${d.getDate()} ${months[d.getMonth()]}`,
    });
  }
  const rangeLabel = `${days[0].dd} ${days[0].month} – ${days[6].dd} ${days[6].month}`;
  return { days, rangeLabel };
}

function renderFitnessStudioCard(st, selectedDateLabel) {
  const isFav = state.fitFavStudios.includes(st.id);
  const pickedSlot = state.fitSelectedSlots[st.id] || st.slots[0];
  return `
    <div class="card">
      <div class="row-between" style="align-items:flex-start;gap:8px;">
        <div class="row-center" style="flex:1;min-width:0;">
          <img src="${st.img}" class="emo-thumb" style="background:#fff;padding:3px;object-fit:contain;" alt="${st.name}" />
          <div style="min-width:0;">
            <div style="font-size:14px;font-weight:700;">${st.name}</div>
            <div style="font-size:12px;color:#fff;margin-top:1px;">${st.activity}</div>
            <div class="text-pink" style="font-size:11px;">${st.meta} · ${st.level}</div>
            <div style="font-size:12px;font-weight:700;margin-top:2px;">${st.pts} балла</div>
          </div>
        </div>
        <button class="studio-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFitFav('${st.id}')" title="${isFav ? 'Убрать из избранного' : 'В избранное'}">
          ${isFav ? '♥' : '♡'}
        </button>
      </div>
      <div class="row-between">
        <div class="row-center" style="gap:6px;flex-wrap:wrap;">
          ${st.slots.map(sl => `
            <button class="chip ${pickedSlot === sl ? 'active' : ''}" onclick="selectFitSlot('${st.id}', '${sl}')">${sl}</button>
          `).join('')}
        </div>
        <button class="btn-pink btn-sm" onclick="bookFitness('${st.id}', '${selectedDateLabel}')">Записаться</button>
      </div>
    </div>
  `;
}

function renderFitness() {
  const { days, rangeLabel } = getFitnessWeekDays(state.fitWeekOffset);
  const selectedDayObj = days[state.fitDay] || days[0];
  const cats = ['Все', 'Йога', 'Бассейн', 'Зал', 'Пилатес', 'Танцы'];
  const times = ['Любое', 'Утро', 'День', 'Вечер'];
  const levels = ['Любой', 'Новичок', 'Средний', 'Профи'];
  const activeFilterCount =
    (state.fitCat !== 'Все' ? 1 : 0) +
    (state.fitTimeFilter !== 'Любое' ? 1 : 0) +
    (state.fitLevelFilter !== 'Любой' ? 1 : 0) +
    (state.fitMaxPts > 0 ? 1 : 0) +
    (state.fitOnlyFavs ? 1 : 0);

  const q = state.fitQuery.toLowerCase();
  const filteredStudios = FITNESS_STUDIOS.filter(s => {
    if (state.fitView === 'favorites' && !state.fitFavStudios.includes(s.id)) return false;
    if (state.fitView === 'schedule') {
      if (state.fitCat !== 'Все' && s.cat !== state.fitCat) return false;
      if (state.fitTimeFilter !== 'Любое' && s.timeOfDay !== state.fitTimeFilter) return false;
      if (state.fitLevelFilter !== 'Любой' && s.level !== state.fitLevelFilter) return false;
      if (state.fitMaxPts > 0 && s.pts > state.fitMaxPts) return false;
      if (state.fitOnlyFavs && !state.fitFavStudios.includes(s.id)) return false;
      if (q && !s.name.toLowerCase().includes(q) && !s.activity.toLowerCase().includes(q) && !s.cat.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  let body = '';
  if (state.fitView === 'bookings') {
    body = `
      <div class="row-between">
        <div class="section-heading">Мои записи (${state.fitBookings.length})</div>
        <span class="tag-pill">${state.fitPoints} балла</span>
      </div>
      ${state.fitBookings.length === 0 ? `
        <div class="card text-pink">У вас пока нет активных записей. Выберите занятие в расписании!</div>
        <button class="btn-pink btn-full" onclick="setFitView('schedule')">Перейти к расписанию</button>
      ` : state.fitBookings.map(b => `
        <div class="card">
          <div class="row-between">
            <span class="tag-pill">${b.date} · ${b.time}</span>
            <span class="text-pink" style="font-size:12px;font-weight:700;">${b.pts} б.</span>
          </div>
          <div style="font-size:14px;font-weight:700;">${b.studio}</div>
          <div class="text-pink" style="font-size:12px;">${b.activity}</div>
          <div class="row-between" style="margin-top:4px;">
            <span class="text-muted" style="font-size:11px;">Бесплатная отмена за 2 ч</span>
            <button class="btn-danger btn-sm" onclick="cancelFitnessBooking(${b.id})">Отменить запись</button>
          </div>
        </div>
      `).join('')}

      <div class="section-sub" style="margin-top:6px;">Прошедшие тренировки (${state.fitPastBookings.length})</div>
      ${state.fitPastBookings.map(p => `
        <div class="card" style="opacity:0.88;">
          <div class="row-between">
            <span class="text-muted" style="font-size:11px;font-weight:600;">${p.date} · ${p.time}</span>
            <span class="tag-pill">✓ Посещено</span>
          </div>
          <div style="font-size:14px;font-weight:700;">${p.studio}</div>
          <div class="text-pink" style="font-size:12px;">${p.activity}</div>
          <div class="row-between" style="margin-top:2px;">
            <span class="text-muted" style="font-size:11px;">Списано ${p.pts} б.</span>
            <button class="btn-dark btn-sm" onclick="bookFitness('${p.studioId}', '${selectedDayObj.full}')">Повторить ↻</button>
          </div>
        </div>
      `).join('')}
    `;
  } else if (state.fitView === 'favorites') {
    body = `
      <div class="row-between">
        <div class="section-heading">Любимые студии (${state.fitFavStudios.length})</div>
        <span class="tag-pill">${state.fitPoints} балла</span>
      </div>
      <div class="text-pink" style="font-size:12px;">Отслеживайте расписание только любимых студий на ${selectedDayObj.full}</div>
      ${filteredStudios.length === 0 ? `
        <div class="card text-pink">Список избранного пуст — нажмите ♡ на карточке любой студии.</div>
        <button class="btn-pink btn-full" onclick="setFitView('schedule')">Смотреть все студии</button>
      ` : filteredStudios.map(st => renderFitnessStudioCard(st, selectedDayObj.full)).join('')}
    `;
  } else {
    body = `
      <div class="row-between">
        <span class="text-pink" style="font-size:12px;font-weight:600;">Абонемент активен</span>
        <span class="tag-pill">${state.fitPoints} балла</span>
      </div>

      <div class="row-center" style="gap:8px;">
        <div class="search-box" style="flex:1;">
          ${ico('search', 'sm')}
          <input id="fitSearchInput" placeholder="Поиск занятий или студии..." value="${state.fitQuery}" oninput="setFitQuery(this.value)" />
        </div>
        <button class="icon-filter-btn ${state.fitFiltersOpen || activeFilterCount ? 'active' : ''}" onclick="toggleFitFilters()" title="Расширенный фильтр">
          ${ico('filter', 'sm')}
          ${activeFilterCount ? `<span class="icon-filter-badge">${activeFilterCount}</span>` : ''}
        </button>
      </div>

      ${state.fitFiltersOpen ? `
        <div class="filter-panel">
          <div class="row-between">
            <span style="font-size:13px;font-weight:700;">Расширенный фильтр</span>
            <button class="btn-dark btn-sm" onclick="resetFitFilters()">Сбросить</button>
          </div>
          <div class="section-sub" style="margin:0;">Направление</div>
          <div class="chips-row" style="flex-wrap:wrap;">
            ${cats.map(c => `<button class="chip ${state.fitCat === c ? 'active' : ''}" onclick="setFitCat('${c}')">${c}</button>`).join('')}
          </div>
          <div class="section-sub" style="margin:0;">Время суток</div>
          <div class="chips-row" style="flex-wrap:wrap;">
            ${times.map(t => `<button class="chip ${state.fitTimeFilter === t ? 'active' : ''}" onclick="setFitTimeFilter('${t}')">${t}</button>`).join('')}
          </div>
          <div class="section-sub" style="margin:0;">Уровень подготовки</div>
          <div class="chips-row" style="flex-wrap:wrap;">
            ${levels.map(l => `<button class="chip ${state.fitLevelFilter === l ? 'active' : ''}" onclick="setFitLevelFilter('${l}')">${l}</button>`).join('')}
          </div>
          <div class="section-sub" style="margin:0;">Стоимость в баллах</div>
          <div class="chips-row">
            ${[[0,'Любые'],[4,'до 4 б.'],[5,'до 5 б.'],[6,'до 6 б.']].map(([v, lbl]) => `
              <button class="chip ${state.fitMaxPts === v ? 'active' : ''}" onclick="setFitMaxPts(${v})">${lbl}</button>
            `).join('')}
          </div>
          <div class="check-row ${state.fitOnlyFavs ? 'active' : ''}" onclick="toggleFitOnlyFavs()">
            <span>♥ Только любимые студии</span>
            <span class="check-box">${state.fitOnlyFavs ? '✓' : ''}</span>
          </div>
        </div>
      ` : ''}

      <div class="week-bar">
        <button class="week-nav-btn" onclick="shiftFitWeek(-1)" title="Предыдущая неделя">←</button>
        <span style="font-size:12px;font-weight:700;color:var(--baby-pink);">${rangeLabel}</span>
        <button class="week-nav-btn" onclick="shiftFitWeek(1)" title="Следующая неделя">→</button>
      </div>

      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;">
        ${days.map((d, i) => `
          <button class="day-pill ${state.fitDay === i ? 'active' : ''}" style="padding:6px 2px;" onclick="setFitDay(${i})">
            <span class="day-wd" style="font-size:10px;">${d.wd}</span>
            <span class="day-num" style="font-size:12px;">${d.dd}</span>
          </button>
        `).join('')}
      </div>

      <div class="chips-row">
        ${cats.map(c => `<button class="chip ${state.fitCat === c ? 'active' : ''}" onclick="setFitCat('${c}')">${c}</button>`).join('')}
      </div>

      ${filteredStudios.length === 0 ? `
        <div class="card text-pink">По выбранным фильтрам занятий не найдено. Попробуйте сбросить фильтр.</div>
      ` : filteredStudios.map(st => renderFitnessStudioCard(st, selectedDayObj.full)).join('')}
    `;
  }

  return `
    <div class="nav-header">
      <div class="nav-left">
        <button class="back-btn" onclick="${state.fitView !== 'schedule' ? "setFitView('schedule')" : 'goBack()'}">←</button>
        <span class="nav-title">Фитнес</span>
      </div>
      <div class="nav-actions">
        <button class="pill-btn" style="${state.fitView === 'favorites' ? 'background:var(--hot-pink);color:#fff;' : ''}" onclick="setFitView(state.fitView === 'favorites' ? 'schedule' : 'favorites')" title="Избранные студии">
          ♥ ${state.fitFavStudios.length}
        </button>
        <button class="pill-btn" style="${state.fitView === 'bookings' ? 'background:var(--hot-pink);color:#fff;' : ''}" onclick="setFitView(state.fitView === 'bookings' ? 'schedule' : 'bookings')">
          Записи (${state.fitBookings.length})
        </button>
      </div>
    </div>
    <div class="content-col">${body}</div>
  `;
}

function renderInternet() {
  const statusMap = {
    active: '● Активен',
    paused: '⏸ Приостановлен (30 дн.)',
    cancelled: '✕ Заявка на отключение',
  };
  return `
    <div class="nav-header">
      <div class="nav-left">
        <button class="back-btn" onclick="goBack()">←</button>
        <span class="nav-title">Интернет</span>
      </div>
      <span class="pill-btn">Договор</span>
    </div>
    <div class="content-col">
      <div class="segmented">
        <button class="seg-btn ${state.ispTab === 'lk' ? 'active' : ''}" onclick="setIspTab('lk')">Личный кабинет</button>
        <button class="seg-btn ${state.ispTab === 'new' ? 'active' : ''}" onclick="setIspTab('new')">Подключить адрес</button>
      </div>

      ${state.ispTab === 'lk' ? `
      <div class="card">
        <div class="row-between">
          <span class="text-pink" style="font-size:12px;font-weight:600;">Договор № 4920184</span>
          <span class="tag-pill">${statusMap[state.ispStatus]}</span>
        </div>
        <div class="text-pink" style="font-size:13px;">ул. Ленина, д. 12, кв. 45</div>
        <div class="row-between">
          <div>
            <div style="font-size:24px;font-weight:800;">${state.ispBalance},00 ₽</div>
            <div class="text-pink" style="font-size:11px;">Списание 1 декабря · 650 ₽</div>
          </div>
          <button class="btn-pink" onclick="topUpIsp()">Пополнить</button>
        </div>
      </div>

      <div class="card">
        <div class="row-between">
          <span class="text-pink" style="font-size:12px;font-weight:600;">Ваш тариф</span>
          <span style="font-size:12px;font-weight:700;">Сменить ›</span>
        </div>
        <div style="font-size:16px;font-weight:700;">Домашний 500 Мбит/с + ТВ</div>
        <div class="chips-row">
          <span class="chip">500 Мбит/с</span>
          <span class="chip">180 каналов</span>
          <span class="chip">Wi-Fi роутер</span>
        </div>
      </div>

      <div class="grid-2">
        <div class="card clickable" onclick="setIspTab('new')">
          <div class="tile-icon-badge">${ico('plus')}</div>
          <div style="font-size:13px;font-weight:700;">Заказать установку</div>
        </div>
        <div class="card clickable" onclick="showToast('Сеть стабильна: 492 Мбит/с, пинг 4 мс ★')">
          <div class="tile-icon-badge">${ico('bolt')}</div>
          <div style="font-size:13px;font-weight:700;">Диагностика сети</div>
        </div>
        <div class="card clickable" onclick="showToast('Обещанный платёж на 7 дней доступен')">
          <div class="tile-icon-badge">${ico('coin')}</div>
          <div style="font-size:13px;font-weight:700;">Обещанный платёж</div>
        </div>
        <div class="card clickable" onclick="openIspSupportModal()">
          <div class="tile-icon-badge">${ico('support')}</div>
          <div style="font-size:13px;font-weight:700;">Поддержка</div>
        </div>
      </div>

      <div class="card card-hero">
        <div style="font-size:14px;font-weight:700;">Подключить новый адрес или роутер</div>
        <div class="text-pink" style="font-size:12px;">Проверим доступность дома и назначим удобное время визита инженера</div>
        <button class="btn-pink btn-full" onclick="setIspTab('new')">Оставить заявку на установку</button>
      </div>

      <button class="btn-danger btn-full" onclick="openCancelIspModal()">
        ✕ Отказаться от услуг / Расторгнуть договор
      </button>
      ` : `
      <div class="card">
        <div class="section-heading">Заявка на подключение</div>
        <div class="search-box"><input placeholder="Город, улица, дом и квартира" /></div>
        <div class="search-box"><input placeholder="Контактный телефон" value="+7 (999) 123-45-67" /></div>
        <div class="chips-row">
          <span class="chip active">500 Мбит/с · 650 ₽</span>
          <span class="chip">1 Гбит/с · 950 ₽</span>
        </div>
        <button class="btn-pink btn-full" onclick="showToast('Заявка на подключение принята! ★');setIspTab('lk')">Отправить заявку</button>
      </div>
      `}
    </div>
  `;
}

function openCreateProfiOrderModal(preCat = 'Ремонт') {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="row-between">
      <div class="section-heading">Новая заявка на услугу</div>
      <button class="btn-dark btn-sm" onclick="closeModal()">✕</button>
    </div>
    <select id="profiCat" class="form-field">
      ${['Ремонт', 'Уборка', 'Репетиторы', 'Электрик', 'Красота', 'Авто'].map(c =>
        `<option value="${c}" ${c === preCat ? 'selected' : ''}>${c}</option>`
      ).join('')}
    </select>
    <input id="profiTitle" class="form-field" placeholder="Что нужно сделать? (например, собрать шкаф)" />
    <textarea id="profiDesc" class="form-field" rows="3" placeholder="Опишите задачу подробнее..."></textarea>
    <div class="grid-2">
      <input id="profiBudget" type="number" class="form-field" placeholder="Бюджет, ₽" value="2000" />
      <input id="profiDate" class="form-field" placeholder="Когда?" value="Завтра, 18:00" />
    </div>
    <input id="profiAddr" class="form-field" placeholder="Адрес" value="ул. Ленина, д. 12" />
    <button class="btn-pink btn-full" onclick="submitProfiOrder()">Опубликовать заявку →</button>
  `);
}

window.submitProfiOrder = () => {
  const category = document.getElementById('profiCat').value;
  const title = document.getElementById('profiTitle').value.trim() || `Услуга: ${category}`;
  const budget = Math.max(300, parseInt(document.getElementById('profiBudget').value, 10) || 1500);
  const date = document.getElementById('profiDate').value.trim() || 'По договорённости';
  const address = document.getElementById('profiAddr').value.trim() || 'Екатеринбург';

  state.profiOrders.unshift({
    id: Date.now(),
    category,
    title,
    budget,
    date,
    address,
    status: 'Опубликована · ждём отклики',
  });
  state.profiTab = 'orders';
  closeModal();
  showToast('Заявка опубликована! Мастера скоро откликнутся ★');
  render();
};

window.cancelProfiOrder = (id) => {
  state.profiOrders = state.profiOrders.filter(o => o.id !== id);
  showToast('Заявка удалена');
  render();
};

window.setProfiTab = (t) => { state.profiTab = t; render(); };

const PROFI_ALL_CATEGORIES = [
  'Все', 'Ремонт', 'Уборка', 'Репетиторы', 'Электрик', 'Красота', 'Авто',
  'Сантехник', 'Сборка мебели', 'Переезд и грузчики', 'Компьютерная помощь',
  'Фото и видео', 'Ветеринар и груминг', 'Юрист и бухгалтер',
  'Дизайн интерьера', 'Праздники и ведущие', 'Няня и сиделка', 'Спорт и тренеры',
];

const PROFI_SPECIALISTS = [
  { id: 'p1', cat: 'Ремонт', tags: ['Ремонт', 'Сантехник', 'Сборка мебели'], name: 'Алексей Смирнов', role: 'Мастер на час · Сантехник · Сборка мебели', rating: '4.9', reviews: 112, price: 'от 1 500 ₽', img: 'assets/profi_av_01.jpg', greeting: 'Здравствуйте! Подскажите, какие работы планируются?' },
  { id: 'p2', cat: 'Электрик', tags: ['Электрик', 'Ремонт'], name: 'Дмитрий Волков', role: 'Электрик · Замена проводки и розеток', rating: '4.9', reviews: 87, price: 'от 1 200 ₽', img: 'assets/profi_av_03.jpg', greeting: 'Добрый день! Выезжаю со своим инструментом сегодня.' },
  { id: 'p3', cat: 'Уборка', tags: ['Уборка', 'Няня и сиделка'], name: 'Елена Морозова', role: 'Клининг, генеральная уборка и помощь по дому', rating: '5.0', reviews: 95, price: 'от 2 400 ₽', img: 'assets/profi_av_02.jpg', greeting: 'Здравствуйте! Привожу гипоаллергенные эко-средства.' },
  { id: 'p4', cat: 'Репетиторы', tags: ['Репетиторы', 'Няня и сиделка'], name: 'Марина Козлова', role: 'Репетитор по английскому (B1–C1)', rating: '5.0', reviews: 64, price: '1 800 ₽ / час', img: 'assets/profi_av_08.jpg', greeting: 'Привет! Готова провести пробное занятие в удобное время.' },
  { id: 'p5', cat: 'Красота', tags: ['Красота', 'Праздники и ведущие'], name: 'Алина Соколова', role: 'Стилист-колорист · Макияж и укладки', rating: '4.9', reviews: 141, price: 'от 2 200 ₽', img: 'assets/profi_av_05.jpg', greeting: 'Привет! Делаю яркое окрашивание и макияж с выездом ★' },
  { id: 'p6', cat: 'Авто', tags: ['Авто', 'Переезд и грузчики'], name: 'Игорь Кравцов', role: 'Выездная диагностика авто · Переезды', rating: '4.8', reviews: 53, price: 'от 1 900 ₽', img: 'assets/profi_av_04.jpg', greeting: 'Добрый день! Подскажите марку авто или маршрут переезда.' },
  { id: 'p7', cat: 'Компьютерная помощь', tags: ['Компьютерная помощь', 'Фото и видео'], name: 'Артём Белов', role: 'Ремонт ПК и Mac · Настройка Wi-Fi · Монтаж видео', rating: '4.9', reviews: 78, price: 'от 1 400 ₽', img: 'assets/profi_av_07.jpg', greeting: 'Привет! Помогу с ноутбуком, сетью или монтажом.' },
  { id: 'p8', cat: 'Ветеринар и груминг', tags: ['Ветеринар и груминг'], name: 'Ксения Орлова', role: 'Выездной груминг и консультация ветеринара', rating: '5.0', reviews: 61, price: 'от 1 800 ₽', img: 'assets/profi_av_09.jpg', greeting: 'Здравствуйте! Стрижка и уход для котиков и собак на дому ♥' },
  { id: 'p9', cat: 'Дизайн интерьера', tags: ['Дизайн интерьера', 'Фото и видео', 'Спорт и тренеры'], name: 'София Лебедева', role: 'Дизайнер интерьеров · Фотосъёмка', rating: '4.9', reviews: 44, price: 'от 3 000 ₽', img: 'assets/profi_av_06.jpg', greeting: 'Здравствуйте! Помогу с планировкой или фотосессией ★' },
  { id: 'p10', cat: 'Юрист и бухгалтер', tags: ['Юрист и бухгалтер', 'Спорт и тренеры', 'Праздники и ведущие'], name: 'Олег Тихонов', role: 'Юрист · Договоры, налоги и консультации', rating: '4.8', reviews: 39, price: 'от 2 000 ₽', img: 'assets/profi_av_10.jpg', greeting: 'Добрый день! Опишите ваш вопрос, подскажу решение.' },
];

window.setProfiCat = (c) => {
  state.profiCat = state.profiCat === c && c !== 'Все' ? 'Все' : c;
  render();
};
window.setProfiQuery = (v) => { state.profiQuery = v; renderKeepFocus('profiSearchInput'); };
window.toggleProfiFilters = () => { state.profiFiltersOpen = !state.profiFiltersOpen; render(); };
window.setProfiMinRating = (r) => { state.profiMinRating = r; render(); };
window.resetProfiFilters = () => {
  state.profiCat = 'Все';
  state.profiMinRating = 0;
  state.profiQuery = '';
  showToast('Фильтры услуг сброшены');
  render();
};

function renderProfi() {
  const pq = state.profiQuery.toLowerCase();
  const activeProfiFilters = (state.profiCat !== 'Все' ? 1 : 0) + (state.profiMinRating > 0 ? 1 : 0);
  const visibleSpecs = PROFI_SPECIALISTS.filter(sp => {
    const catOk = state.profiCat === 'Все' || sp.cat === state.profiCat || (sp.tags && sp.tags.includes(state.profiCat));
    const ratingOk = parseFloat(sp.rating) >= state.profiMinRating;
    const qOk = !pq || sp.name.toLowerCase().includes(pq) || sp.role.toLowerCase().includes(pq) || sp.cat.toLowerCase().includes(pq);
    return catOk && ratingOk && qOk;
  });

  return `
    <div class="nav-header">
      <div class="nav-left">
        <button class="back-btn" onclick="goBack()">←</button>
        <span class="nav-title">Услуги и мастера</span>
      </div>
      ${state.profiTab === 'specialists' ? `
        <button class="pill-btn" onclick="setProfiTab('orders')">Мои заявки (${state.profiOrders.length})</button>
      ` : ''}
    </div>
    <div class="content-col">
      <div class="segmented">
        <button class="seg-btn ${state.profiTab === 'specialists' ? 'active' : ''}" onclick="setProfiTab('specialists')">Специалисты</button>
        <button class="seg-btn ${state.profiTab === 'orders' ? 'active' : ''}" onclick="setProfiTab('orders')">Мои заявки (${state.profiOrders.length})</button>
      </div>

      <button class="btn-pink btn-full" onclick="openCreateProfiOrderModal(state.profiCat === 'Все' ? 'Ремонт' : state.profiCat)">+ Создать заявку и получить отклики</button>

      ${state.profiTab === 'specialists' ? `
        <div class="row-center" style="gap:8px;">
          <div class="search-box" style="flex:1;">
            ${ico('search', 'sm')}
            <input id="profiSearchInput" placeholder="Какая услуга нужна?" value="${state.profiQuery}" oninput="setProfiQuery(this.value)" />
          </div>
          <button class="icon-filter-btn ${state.profiFiltersOpen || activeProfiFilters ? 'active' : ''}" onclick="toggleProfiFilters()" title="Все категории и фильтр">
            ${ico('filter', 'sm')}
            ${activeProfiFilters ? `<span class="icon-filter-badge">${activeProfiFilters}</span>` : ''}
          </button>
        </div>

        ${state.profiFiltersOpen ? `
          <div class="filter-panel">
            <div class="row-between">
              <span style="font-size:13px;font-weight:700;">Все услуги (${PROFI_ALL_CATEGORIES.length - 1}) и фильтры</span>
              <button class="btn-dark btn-sm" onclick="resetProfiFilters()">Сбросить</button>
            </div>
            <div class="section-sub" style="margin:0;">Категория услуг</div>
            <div class="chips-row" style="flex-wrap:wrap;">
              ${PROFI_ALL_CATEGORIES.map(c => `
                <button class="chip ${state.profiCat === c ? 'active' : ''}" onclick="setProfiCat('${c}')">${c}</button>
              `).join('')}
            </div>
            <div class="section-sub" style="margin:2px 0 0;">Рейтинг мастера</div>
            <div class="chips-row">
              ${[[0,'Любой'],[4.8,'от 4.8 ★'],[4.9,'от 4.9 ★'],[5,'только 5.0 ★']].map(([val, lbl]) => `
                <button class="chip ${state.profiMinRating === val ? 'active' : ''}" onclick="setProfiMinRating(${val})">${lbl}</button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="row-between">
          <div class="section-sub">Популярные категории</div>
          ${state.profiCat !== 'Все' ? `<button class="btn-dark btn-sm" onclick="setProfiCat('Все')">Все категории ✕</button>` : ''}
        </div>
        <div class="grid-3">
          ${[['wrench','Ремонт'],['sparkle','Уборка'],['pencil','Репетиторы'],['bolt','Электрик'],['scissors','Красота'],['car','Авто']].map(([ic, lbl]) => `
            <div class="card clickable" style="align-items:center;padding:10px;gap:6px;${state.profiCat === lbl ? 'border-color:var(--hot-pink);background:rgba(255,20,147,0.16);' : ''}" onclick="setProfiCat('${lbl}')">
              <div class="tile-icon-badge">${ico(ic)}</div>
              <span style="font-size:11px;font-weight:700;">${lbl}</span>
            </div>
          `).join('')}
        </div>

        <div class="section-sub">${state.profiCat === 'Все' ? 'Проверенные мастера рядом' : `Специалисты: ${state.profiCat}`} (${visibleSpecs.length})</div>
        ${visibleSpecs.length === 0 ? `<div class="card text-pink">По запросу «${state.profiQuery}» мастера не найдены</div>` : visibleSpecs.map(sp => `
          <div class="card">
            <div class="row-center">
              <img src="${sp.img}" class="contact-avatar" style="width:48px;height:48px;background:#fff;object-fit:cover;" alt="" />
              <div>
                <div style="font-size:14px;font-weight:700;">${sp.name}</div>
                <div class="text-pink" style="font-size:12px;">${sp.role}</div>
                <div style="font-size:11px;font-weight:600;">★ ${sp.rating} (${sp.reviews} отзывов)</div>
              </div>
            </div>
            <div class="row-between">
              <span style="font-size:14px;font-weight:800;">${sp.price}</span>
              <div class="row-center" style="gap:6px;">
                <button class="btn-dark btn-sm" onclick="openLiveChat('${sp.name}', '${sp.greeting}')">Чат</button>
                <button class="btn-pink btn-sm" onclick="showToast('Специалист ${sp.name} выбран ★')">Выбрать</button>
              </div>
            </div>
          </div>
        `).join('')}
      ` : `
        <div class="section-sub">Активные заявки (${state.profiOrders.length})</div>
        ${state.profiOrders.length === 0 ? `<div class="card text-pink">У вас пока нет активных заявок — нажмите «+ Создать заявку» выше</div>` : state.profiOrders.map(o => `
          <div class="card">
            <div class="row-between">
              <span class="tag-pill">${o.category}</span>
              <span class="text-pink" style="font-size:11px;font-weight:600;">${o.status}</span>
            </div>
            <div style="font-size:14px;font-weight:700;">${o.title}</div>
            <div class="text-muted" style="font-size:11px;">${o.date} · ${o.address}</div>
            <div class="row-between">
              <span style="font-size:14px;font-weight:800;">до ${fmtRub(o.budget)}</span>
              <button class="btn-danger btn-sm" onclick="cancelProfiOrder(${o.id})">Отменить</button>
            </div>
          </div>
        `).join('')}

        <div class="section-sub" style="margin-top:6px;">История обращений (${state.profiHistory.length})</div>
        ${state.profiHistory.map(h => `
          <div class="card">
            <div class="row-between">
              <span class="tag-pill">${h.category}</span>
              <span class="text-muted" style="font-size:11px;">Завершено · ${h.date}</span>
            </div>
            <div style="font-size:14px;font-weight:700;">${h.title}</div>
            <div class="text-pink" style="font-size:12px;">Мастер: ${h.master} · ${fmtRub(h.price)}</div>
            ${h.rating > 0 ? `
              <div style="background:var(--surface);border:1px solid var(--border-dark);border-radius:10px;padding:8px 10px;font-size:12px;">
                <div style="color:var(--hot-pink);font-weight:700;margin-bottom:2px;">${'★'.repeat(h.rating)}${'☆'.repeat(5 - h.rating)} · Ваш отзыв</div>
                <div class="text-pink">${h.review}</div>
              </div>
            ` : `
              <div class="row-between" style="margin-top:2px;">
                <span class="text-muted" style="font-size:11px;">Оцените работу мастера</span>
                <button class="btn-pink btn-sm" onclick="openProfiReviewModal(${h.id})">★ Оставить отзыв</button>
              </div>
            `}
          </div>
        `).join('')}
      `}
    </div>
  `;
}

function renderProductDetail(p) {
  const partPrice = Math.round(p.price / 4);
  return `
    <div class="nav-header">
      <div class="nav-left">
        <button class="back-btn" onclick="goBack()">←</button>
        <span class="nav-title">${p.store}</span>
      </div>
      <button class="pill-btn" onclick="toggleFav(${p.id})">${p.fav ? '♥ В избранном' : '♡ В избранное'}</button>
    </div>
    <div class="content-col">
      <div class="pd-hero">
        <img src="${p.img}" alt="${p.title}" onerror="this.src='assets/prod_headphones.jpg'" />
        <span class="store-badge" style="position:absolute;left:10px;top:10px;">★ ${p.store}</span>
      </div>

      <div class="card">
        <div class="row-between">
          <span style="font-size:22px;font-weight:800;">${fmtRub(p.price)}</span>
          <span class="tag-pill">Кэшбэк ${p.cash}</span>
        </div>
        <div style="font-size:15px;font-weight:700;line-height:1.3;">${p.title}</div>
        <div class="row-between" style="font-size:12px;">
          <span class="text-pink">★ ${p.rating} · ${p.reviews} отзывов</span>
          <span class="text-muted">Частями: 4 × ${fmtRub(partPrice)}</span>
        </div>
      </div>

      <div class="card">
        <div class="section-sub">${p.variantsLabel}</div>
        <div class="chips-row">
          ${p.variants.map(v => `
            <button class="chip ${state.selectedVariant === v ? 'active' : ''}" onclick="setSelectedVariant('${v}')">${v}</button>
          `).join('')}
        </div>
      </div>

      <div class="card">
        <div class="section-heading" style="font-size:13px;">Описание</div>
        <div class="text-pink" style="font-size:12px;line-height:1.45;">${p.desc}</div>
      </div>

      <div class="card" style="gap:2px;">
        <div class="section-heading" style="font-size:13px;margin-bottom:4px;">Характеристики</div>
        ${p.specs.map(([k, v]) => `
          <div class="spec-row">
            <span class="text-muted">${k}</span>
            <span style="font-weight:600;text-align:right;">${v}</span>
          </div>
        `).join('')}
      </div>

      <div class="row-center" style="gap:8px;">
        ${(() => {
          const qty = state.cart.filter(x => x === p.id).length;
          return qty > 0 ? `
            <div class="qty-stepper lg" style="width:100%;">
              <button class="qty-btn" onclick="decCartProduct(${p.id})">−</button>
              <span class="qty-val">В корзине: ${qty} шт.</span>
              <button class="qty-btn" onclick="addToCart(${p.id})">+</button>
            </div>
          ` : `<button class="btn-pink btn-full" onclick="addToCart(${p.id})">В корзину · ${fmtRub(p.price)}</button>`;
        })()}
      </div>
    </div>
  `;
}

const MP_CATALOG_SECTIONS = [
  {
    name: 'Электроника и гаджеты',
    store: 're:Store',
    icon: '🎧',
    subs: [
      { label: 'Наушники и аудио', kw: 'AirPods' },
      { label: 'Смартфоны Apple', kw: 'iPhone' },
      { label: 'Ноутбуки и планшеты', kw: '' },
      { label: 'Умные часы и аксессуары', kw: '' },
    ],
  },
  {
    name: 'Одежда и обувь',
    store: 'Street Beat',
    icon: '👟',
    subs: [
      { label: 'Кроссовки и кеды', kw: 'Onitsuka' },
      { label: 'Лимитированные коллаборации', kw: 'Jeremy Scott' },
      { label: 'Толстовки и худи', kw: '' },
      { label: 'Рюкзаки и сумки', kw: '' },
    ],
  },
  {
    name: 'Хобби и конструкторы',
    store: 'Мир Кубиков',
    icon: '🧱',
    subs: [
      { label: 'LEGO Jurassic World', kw: 'Тираннозавра' },
      { label: 'LEGO Icons & Формула-1', kw: 'McLaren' },
      { label: 'Коллекционные наборы 18+', kw: 'LEGO' },
      { label: 'Настольные игры', kw: '' },
    ],
  },
  {
    name: 'Красота и уход',
    store: 'Все',
    icon: '✦',
    subs: [
      { label: 'Парфюмерия', kw: '' },
      { label: 'Уход за кожей', kw: '' },
      { label: 'Стайлинг и аксессуары', kw: '' },
    ],
  },
  {
    name: 'Дом и лайфстайл',
    store: 'Все',
    icon: '⌂',
    subs: [
      { label: 'Умный дом и свет', kw: '' },
      { label: 'Декор и постеры', kw: '' },
      { label: 'Термосы и посуда', kw: '' },
    ],
  },
];

function renderMarketplace() {
  if (state.selectedProductId !== null) {
    const p = state.products.find(x => x.id === state.selectedProductId);
    if (p) return renderProductDetail(p);
  }

  const cats = ['Все', 're:Store', 'Street Beat', 'Мир Кубиков'];
  let body = '';

  if (state.mpTab === 'catalog' || state.mpTab === 'fav') {
    const q = state.mpQuery.toLowerCase();
    const list = state.products.filter(p => {
      if (state.mpTab === 'fav') return p.fav;
      const catOk = state.mpCat === 'Все' || p.cat === state.mpCat;
      const qOk = !q || p.title.toLowerCase().includes(q) || p.store.toLowerCase().includes(q);
      return catOk && qOk;
    });
    body = `
      ${state.mpTab === 'catalog' ? `
        <div class="search-box">
          ${ico('search', 'sm')}
          <input id="mpSearchInput" placeholder="Искать в re:Store, Street Beat, Мир Кубиков..." value="${state.mpQuery}" oninput="setMpQuery(this.value)" />
        </div>
        <div class="row-between">
          <div class="text-pink clickable" style="font-size:12px;" onclick="openPvzModal()">Доставка: ${state.mpPvz} ▾</div>
          ${state.mpSubCat ? `<button class="btn-dark btn-sm" onclick="clearMpSubCat()">✕ ${state.mpSubCat}</button>` : ''}
        </div>

        <button class="btn-dark btn-full" style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-color:${state.mpCatalogMenuOpen ? 'var(--hot-pink)' : 'var(--border-dark)'};" onclick="toggleMpCatalogMenu()">
          <span style="font-weight:700;">☰ Каталог товаров</span>
          <span class="text-pink">${state.mpCatalogMenuOpen ? '▲ Свернуть' : '▼ Открыть'}</span>
        </button>

        ${state.mpCatalogMenuOpen ? `
          <div class="accordion-menu">
            ${MP_CATALOG_SECTIONS.map(sec => {
              const isOpen = state.mpExpandedSection === sec.name;
              return `
                <div class="acc-section">
                  <button class="acc-header" onclick="toggleMpSection('${sec.name}')">
                    <span>${sec.icon} ${sec.name}</span>
                    <span class="text-pink">${isOpen ? '▾' : '›'}</span>
                  </button>
                  ${isOpen ? `
                    <div class="acc-subs">
                      <button class="acc-sub-btn ${state.mpCat === sec.store && !state.mpSubCat ? 'active' : ''}" onclick="selectMpSubCat('${sec.store}', '', '')">Все в разделе</button>
                      ${sec.subs.map(sub => `
                        <button class="acc-sub-btn ${state.mpSubCat === sub.label ? 'active' : ''}" onclick="selectMpSubCat('${sec.store}', '${sub.label}', '${sub.kw}')">${sub.label}</button>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}

        <div class="chips-row">
          ${cats.map(c => `<button class="chip ${state.mpCat === c ? 'active' : ''}" onclick="setMpCat('${c}')">${c}</button>`).join('')}
        </div>
        <div class="card card-zebra" style="flex-direction:row;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:14px;font-weight:700;">Кэшбэк до 15% + оплата частями</div>
            <div class="text-pink" style="font-size:11px;">Промокод EMO2007 даёт −10% в корзине</div>
          </div>
          <img src="assets/sticker_heart.jpg" class="sticker-img" style="width:48px;height:36px;" alt="" />
        </div>
      ` : `<div class="section-heading">Избранные товары (${list.length})</div>`}

      <div class="grid-2">
        ${list.map(p => {
          const qty = state.cart.filter(x => x === p.id).length;
          return `
            <div class="product-card clickable" onclick="openProductDetail(${p.id})">
              <div>
                <div class="product-img-wrap">
                  <img src="${p.img}" alt="${p.title}" onerror="this.src='assets/prod_headphones.jpg'" />
                  <span class="store-badge" style="position:absolute;left:5px;bottom:5px;padding:2px 6px;font-size:9px;">${p.store}</span>
                  <button class="fav-heart-btn ${p.fav ? 'active' : ''}" onclick="event.stopPropagation();toggleFav(${p.id})">${p.fav ? '♥' : '♡'}</button>
                </div>
                <div class="row-center" style="margin-top:8px;gap:5px;flex-wrap:wrap;">
                  <span style="font-size:14px;font-weight:800;">${fmtRub(p.price)}</span>
                  <span class="tag-pill">${p.cash}</span>
                </div>
                <div class="text-pink" style="font-size:11px;margin-top:4px;line-height:1.3;">${p.title}</div>
              </div>
              ${qty > 0 ? `
                <div class="qty-stepper" onclick="event.stopPropagation()">
                  <button class="qty-btn" onclick="decCartProduct(${p.id})">−</button>
                  <span class="qty-val">${qty}</span>
                  <button class="qty-btn" onclick="addToCart(${p.id})">+</button>
                </div>
              ` : `<button class="btn-pink btn-sm btn-full" onclick="event.stopPropagation();addToCart(${p.id})">В корзину</button>`}
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (state.mpTab === 'cart') {
    const groupedMap = new Map();
    state.cart.forEach(id => {
      const p = state.products.find(x => x.id === id);
      if (!p) return;
      if (groupedMap.has(id)) groupedMap.get(id).qty += 1;
      else groupedMap.set(id, { p, qty: 1 });
    });
    const grouped = Array.from(groupedMap.values());
    const totalCount = state.cart.length;
    const subtotal = grouped.reduce((s, item) => s + item.p.price * item.qty, 0);
    const total = state.mpPromoApplied ? Math.round(subtotal * 0.9) : subtotal;
    body = `
      <div class="section-heading">Корзина (${totalCount})</div>
      ${grouped.length === 0 ? `<div class="card text-pink">Корзина пуста — добавьте товары из каталога</div>` : `
        ${grouped.map(({ p, qty }) => `
          <div class="card clickable" style="gap:10px;" onclick="openProductDetail(${p.id})">
            <div class="row-center">
              <img src="${p.img}" class="emo-thumb" alt="" onerror="this.src='assets/prod_headphones.jpg'" />
              <div style="flex:1;min-width:0;">
                <div class="text-muted" style="font-size:10px;font-weight:700;">${p.store}</div>
                <div style="font-size:13px;font-weight:700;line-height:1.25;">${p.title}</div>
                <div class="text-pink" style="font-size:13px;font-weight:800;margin-top:3px;">
                  ${fmtRub(p.price * qty)}${qty > 1 ? ` <span class="text-muted" style="font-size:10px;font-weight:600;">(${fmtRub(p.price)} × ${qty})</span>` : ''}
                </div>
              </div>
            </div>
            <div class="row-between" style="gap:8px;" onclick="event.stopPropagation()">
              <div class="qty-stepper" style="width:128px;">
                <button class="qty-btn" onclick="decCartProduct(${p.id})">−</button>
                <span class="qty-val">${qty}</span>
                <button class="qty-btn" onclick="addToCart(${p.id})">+</button>
              </div>
              <button class="btn-dark btn-sm" onclick="removeProductFromCart(${p.id})">Удалить</button>
            </div>
          </div>
        `).join('')}
        <div class="card card-hero">
          ${state.mpPromoApplied ? `<div class="text-pink" style="font-size:11px;">✓ Промокод EMO2007 применён (−10%)</div>` : ''}
          <div class="row-between">
            <span>Итого к оплате</span>
            <span style="font-size:18px;font-weight:800;">${fmtRub(total)}</span>
          </div>
          <button class="btn-pink btn-full" onclick="checkoutCart(${total})">Оплатить картой •• 4821</button>
        </div>
      `}
    `;
  } else if (state.mpTab === 'orders') {
    body = `
      <div class="section-heading">Мои заказы</div>
      <div class="card">
        <div class="row-between">
          <span style="font-weight:700;">Заказ #4821 · re:Store</span>
          <span class="tag-pill">В пути</span>
        </div>
        <div class="text-pink" style="font-size:12px;">Apple AirPods Max (USB-C) · Доставка завтра 10:00–14:00</div>
      </div>
      <div class="card">
        <div class="row-between">
          <span style="font-weight:700;">Заказ #4705 · Мир Кубиков</span>
          <span class="tag-pill">Получен</span>
        </div>
        <div class="text-pink" style="font-size:12px;">LEGO Botanicals «Мини-орхидея» · ПВЗ ул. Ленина, 12</div>
      </div>
    `;
  } else {
    body = `
      <div class="card card-hero" style="flex-direction:row;align-items:center;justify-content:space-between;">
        <div class="row-center">
          <img src="assets/av_girl.jpg" class="avatar-ring" style="width:50px;height:50px;" alt="" />
          <div>
            <div style="font-size:15px;font-weight:800;">xX_Наталия_Xx ★</div>
            <div class="text-pink" style="font-size:11px;">Статус: Emo Prime · Кэшбэк 15%</div>
          </div>
        </div>
        <span class="tag-pill">PRO</span>
      </div>

      <div class="grid-3">
        <div class="card" style="padding:10px;align-items:center;gap:2px;">
          <span style="font-size:15px;font-weight:800;color:var(--hot-pink);">1 420 ₽</span>
          <span class="text-pink" style="font-size:10px;">Бонусы</span>
        </div>
        <div class="card clickable" style="padding:10px;align-items:center;gap:2px;" onclick="setMpTab('orders')">
          <span style="font-size:15px;font-weight:800;">8</span>
          <span class="text-pink" style="font-size:10px;">Заказов</span>
        </div>
        <div class="card clickable" style="padding:10px;align-items:center;gap:2px;" onclick="showToast('У вас 5 опубликованных отзывов ★')">
          <span style="font-size:15px;font-weight:800;">5</span>
          <span class="text-pink" style="font-size:10px;">Отзывов</span>
        </div>
      </div>

      <div class="card">
        <div class="section-heading" style="font-size:13px;">Промокод на скидку</div>
        <div class="row-center">
          <div class="search-box" style="flex:1;padding:8px 10px;">
            <input id="promoInput" placeholder="Введите EMO2007" value="${state.mpPromoApplied ? 'EMO2007' : ''}" />
          </div>
          <button class="btn-pink btn-sm" onclick="applyPromo()">Ок</button>
        </div>
      </div>

      <div class="card thread-list">
        <div class="thread-row" onclick="openPvzModal()">
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:700;">Пункт выдачи и адреса</div>
            <div class="text-pink" style="font-size:11px;">${state.mpPvz}</div>
          </div>
          <span class="text-pink">›</span>
        </div>
        <div class="thread-row" onclick="toggleMpInstallments()">
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:700;">Оплата частями 0%</div>
            <div class="text-pink" style="font-size:11px;">Карта •• 4821 · ${state.mpInstallments ? 'Включено' : 'Выключено'}</div>
          </div>
          <span class="tag-pill">${state.mpInstallments ? 'ВКЛ' : 'ВЫКЛ'}</span>
        </div>
        <div class="thread-row" onclick="toggleMpNotifs()">
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:700;">Уведомления о скидках</div>
            <div class="text-pink" style="font-size:11px;">Снижение цен на товары из Избранного</div>
          </div>
          <span class="tag-pill">${state.mpNotifs ? 'ВКЛ' : 'ВЫКЛ'}</span>
        </div>
        <div class="thread-row" onclick="showToast('Возвратов и споров нет ✓')">
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:700;">Возвраты и поддержка заказов</div>
            <div class="text-pink" style="font-size:11px;">Бесплатный возврат в течение 14 дней</div>
          </div>
          <span class="text-pink">›</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="nav-header">
      <div class="nav-left">
        <button class="back-btn" onclick="goBack()">←</button>
        <span class="nav-title">Маркетплейс</span>
      </div>
    </div>
    <div class="content-col">${body}</div>
  `;
}

const COURSE_MENU_SECTIONS = [
  { name: 'IT и дизайн', icon: '💻', subs: ['UX/UI Дизайн', 'Аналитика данных', 'Frontend-разработка', 'Python и ML'] },
  { name: 'Языки', icon: '🌍', subs: ['Английский для работы', 'Разговорный клуб', 'Японский с нуля'] },
  { name: 'Бизнес', icon: '📈', subs: ['Финансовая грамотность', 'Управление проектами', 'Маркетинг'] },
  { name: 'Дети', icon: '🎮', subs: ['Scratch и игры', 'Python для школьников', 'Цифровое рисование'] },
];

const COURSE_CATALOG = [
  { id: 'data', title: 'Аналитик данных (Python + SQL)', cat: 'IT и дизайн', sub: 'Аналитика данных', meta: '6 месяцев · Онлайн · Диплом', price: 'от 4 200 ₽/мес', lessons: 42, img: 'assets/course_data.jpg' },
  { id: 'frontend', title: 'Frontend-разработчик (JS + React)', cat: 'IT и дизайн', sub: 'Frontend-разработка', meta: '7 месяцев · Онлайн · Портфолио', price: 'от 4 800 ₽/мес', lessons: 48, img: 'assets/course_frontend.jpg' },
  { id: 'eng', title: 'Английский для работы (B1–B2)', cat: 'Языки', sub: 'Английский для работы', meta: '3 месяца · Индивидуально', price: 'от 3 100 ₽/мес', lessons: 24, img: 'assets/course_eng.jpg' },
  { id: 'jp', title: 'Японский с нуля (JLPT N5)', cat: 'Языки', sub: 'Японский с нуля', meta: '4 месяца · Групповой', price: 'от 2 900 ₽/мес', lessons: 32, img: 'assets/course_jp.jpg' },
  { id: 'fin', title: 'Финансовая грамотность и бюджет', cat: 'Бизнес', sub: 'Финансовая грамотность', meta: '4 недели · Мини-курс', price: 'Бесплатно', lessons: 12, img: 'assets/course_fin.jpg' },
  { id: 'scratch', title: 'Программирование на Scratch для детей', cat: 'Дети', sub: 'Scratch и игры', meta: '2 месяца · Игровой формат', price: 'от 2 500 ₽/мес', lessons: 16, img: 'assets/course_scratch.jpg' },
];

function renderCourses() {
  const cats = ['Все', 'IT и дизайн', 'Языки', 'Бизнес', 'Дети'];
  const q = state.courseQuery.toLowerCase();
  const list = COURSE_CATALOG.filter(c => {
    const catOk = state.courseCat === 'Все' || c.cat === state.courseCat;
    const subOk = !state.courseSubCat || c.sub === state.courseSubCat;
    const qOk = !q || c.title.toLowerCase().includes(q) || c.meta.toLowerCase().includes(q) || c.sub.toLowerCase().includes(q);
    return catOk && subOk && qOk;
  });

  if (state.courseView === 'my') {
    return `
      <div class="nav-header">
        <div class="nav-left">
          <button class="back-btn" onclick="setCourseView('catalog')">←</button>
          <span class="nav-title">Мои курсы</span>
        </div>
        <button class="pill-btn" onclick="setCourseView('catalog')">Каталог</button>
      </div>
      <div class="content-col">
        <div class="section-heading">Активное обучение (${state.myCourses.length})</div>
        ${state.myCourses.length === 0 ? `
          <div class="card text-pink">Вы пока не записаны ни на один курс. Выберите программу в каталоге!</div>
          <button class="btn-pink btn-full" onclick="setCourseView('catalog')">Перейти в каталог</button>
        ` : state.myCourses.map(mc => `
          <div class="card card-hero">
            <div class="row-between">
              <span class="tag-pill">${mc.cat}</span>
              <span style="font-size:12px;font-weight:800;">${mc.progress}%</span>
            </div>
            <div style="font-size:15px;font-weight:700;">${mc.title}</div>
            <div class="text-pink" style="font-size:11px;">Урок ${mc.lesson} из ${mc.totalLessons}</div>
            <div style="height:8px;border-radius:4px;background:var(--surface);overflow:hidden;">
              <div style="width:${mc.progress}%;height:100%;background:var(--hot-pink);"></div>
            </div>
            <div class="row-between" style="gap:8px;">
              <button class="btn-pink btn-full" onclick="advanceCourse('${mc.id}')">Открыть урок №${mc.lesson}</button>
              <button class="btn-dark btn-sm" onclick="dropCourse('${mc.id}')" title="Отписаться">✕</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const firstCourse = state.myCourses[0];

  return `
    <div class="nav-header">
      <div class="nav-left">
        <button class="back-btn" onclick="goBack()">←</button>
        <span class="nav-title">Обучение</span>
      </div>
      <button class="pill-btn" onclick="setCourseView('my')">Мои курсы (${state.myCourses.length})</button>
    </div>
    <div class="content-col">
      <div class="search-box">
        ${ico('search', 'sm')}
        <input id="courseSearchInput" placeholder="Поиск курса или профессии..." value="${state.courseQuery}" oninput="setCourseQuery(this.value)" />
      </div>

      <button class="btn-dark btn-full" style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-color:${state.courseMenuOpen ? 'var(--hot-pink)' : 'var(--border-dark)'};" onclick="toggleCourseMenu()">
        <span style="font-weight:700;">☰ Меню курсов и направлений</span>
        <span class="text-pink">${state.courseMenuOpen ? '▲ Свернуть' : '▼ Открыть'}</span>
      </button>

      ${state.courseMenuOpen ? `
        <div class="accordion-menu">
          ${COURSE_MENU_SECTIONS.map(sec => {
            const isOpen = state.courseExpandedCat === sec.name;
            return `
              <div class="acc-section">
                <button class="acc-header" onclick="toggleCourseSection('${sec.name}')">
                  <span>${sec.icon} ${sec.name}</span>
                  <span class="text-pink">${isOpen ? '▾' : '›'}</span>
                </button>
                ${isOpen ? `
                  <div class="acc-subs">
                    <button class="acc-sub-btn ${state.courseCat === sec.name && !state.courseSubCat ? 'active' : ''}" onclick="selectCourseSubCat('${sec.name}', '')">Все в разделе</button>
                    ${sec.subs.map(sub => `
                      <button class="acc-sub-btn ${state.courseSubCat === sub ? 'active' : ''}" onclick="selectCourseSubCat('${sec.name}', '${sub}')">${sub}</button>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}

      <div class="chips-row">
        ${cats.map(c => `<button class="chip ${state.courseCat === c && !state.courseSubCat ? 'active' : ''}" onclick="setCourseCat('${c}')">${c}</button>`).join('')}
      </div>

      ${state.courseSubCat ? `
        <div class="row-between">
          <span class="text-pink" style="font-size:12px;">Направление: <b>${state.courseSubCat}</b></span>
          <button class="btn-dark btn-sm" onclick="selectCourseSubCat('Все', '')">✕ Сбросить</button>
        </div>
      ` : ''}

      ${firstCourse ? `
        <div class="card card-hero">
          <div class="row-between">
            <span class="text-pink" style="font-size:11px;font-weight:600;">Продолжить обучение</span>
            <span style="font-size:12px;font-weight:800;">${firstCourse.progress}%</span>
          </div>
          <div style="font-size:15px;font-weight:700;">${firstCourse.title}</div>
          <div style="height:8px;border-radius:4px;background:var(--surface);overflow:hidden;">
            <div style="width:${firstCourse.progress}%;height:100%;background:var(--hot-pink);"></div>
          </div>
          <button class="btn-pink btn-full" onclick="advanceCourse('${firstCourse.id}')">Открыть урок №${firstCourse.lesson}</button>
        </div>
      ` : ''}

      <div class="section-sub">Популярные программы (${list.length})</div>
      ${list.length === 0 ? `<div class="card text-pink">По выбранному фильтру курсов не найдено</div>` : list.map(cr => {
        const enrolled = state.myCourses.some(m => m.id === cr.id);
        return `
          <div class="card">
            <div class="row-center">
              <img src="${cr.img}" class="emo-thumb" style="width:54px;height:54px;background:#fff;padding:3px;object-fit:contain;" alt="${cr.title}" />
              <div>
                <div style="font-size:14px;font-weight:700;">${cr.title}</div>
                <div class="text-pink" style="font-size:11px;">${cr.meta}</div>
              </div>
            </div>
            <div class="row-between">
              <span style="font-size:13px;font-weight:800;">${cr.price}</span>
              ${enrolled
                ? `<button class="btn-dark btn-sm" onclick="setCourseView('my')">✓ В моих курсах</button>`
                : `<button class="btn-pink btn-sm" onclick="enrollCourse('${cr.id}')">Записаться</button>`}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderMedicine() {
  const q = state.medQuery.toLowerCase();
  const specialties = ['Терапевт','Стоматолог','Педиатр','ЛОР','Анализы','УЗИ / МРТ']
    .filter(sp => !q || sp.toLowerCase().includes(q));
  const docs = state.medDoctors.filter(d => (!q || d.name.toLowerCase().includes(q) || d.role.toLowerCase().includes(q)));

  const askSpecs = ['Терапевт', 'Стоматолог', 'Педиатр', 'ЛОР', 'Дерматолог', 'Кардиолог'];

  return `
    <div class="nav-header">
      <div class="nav-left">
        <button class="back-btn" onclick="goBack()">←</button>
        <span class="nav-title">Медицина</span>
      </div>
      <span class="pill-btn">Медкарта</span>
    </div>
    <div class="content-col">
      <div class="segmented">
        <button class="seg-btn ${state.medTab === 'oms' ? 'active' : ''}" style="font-size:11px;padding:7px 4px;" onclick="setMedTab('oms')">ОМС</button>
        <button class="seg-btn ${state.medTab === 'private' ? 'active' : ''}" style="font-size:11px;padding:7px 4px;" onclick="setMedTab('private')">Частные</button>
        <button class="seg-btn ${state.medTab === 'ask' ? 'active' : ''}" style="font-size:11px;padding:7px 4px;" onclick="setMedTab('ask')">Вопрос врачу</button>
      </div>

      ${state.medTab === 'ask' ? `
        <div class="card card-hero">
          <div class="section-heading" style="font-size:14px;">Задать вопрос дежурному врачу</div>
          <div class="text-pink" style="font-size:11px;">Ответ сертифицированного специалиста обычно приходит за 15 минут</div>
          <select id="medAskSpecSelect" class="form-field" onchange="state.medAskSpec=this.value">
            ${askSpecs.map(sp => `<option value="${sp}" ${state.medAskSpec === sp ? 'selected' : ''}>${sp}</option>`).join('')}
          </select>
          <textarea id="medAskText" class="form-field" rows="3" placeholder="Опишите симптомы или задайте вопрос врачу..."></textarea>
          <div class="check-row ${state.medAskAnon ? 'active' : ''}" onclick="toggleMedAskAnon()">
            <span style="font-size:12px;">Отправить вопрос анонимно</span>
            <span class="check-box">${state.medAskAnon ? '✓' : ''}</span>
          </div>
          <button class="btn-pink btn-full" onclick="submitMedQuestion()">Отправить вопрос врачу →</button>
        </div>

        <div class="section-sub">Мои вопросы и ответы (${state.medQuestions.length})</div>
        ${state.medQuestions.map(mq => `
          <div class="card">
            <div class="row-between">
              <span class="tag-pill">${mq.spec}</span>
              <span class="text-muted" style="font-size:11px;">${mq.date} · ${mq.status}</span>
            </div>
            <div style="font-size:13px;font-weight:700;line-height:1.35;">${mq.question}</div>
            ${mq.answer ? `
              <div style="background:var(--surface);border-left:3px solid var(--hot-pink);border-radius:8px;padding:8px 10px;">
                <div style="font-size:11px;font-weight:700;color:var(--hot-pink);margin-bottom:3px;">${mq.doctor}</div>
                <div class="text-pink" style="font-size:12px;line-height:1.4;">${mq.answer}</div>
              </div>
            ` : `
              <div class="text-muted" style="font-size:11px;">⏳ Дежурный ${mq.spec.toLowerCase()} уже изучает ваш вопрос...</div>
            `}
          </div>
        `).join('')}
      ` : `
        <div class="search-box">
          ${ico('search', 'sm')}
          <input id="medSearchInput" placeholder="Врач, специальность или больница..." value="${state.medQuery}" oninput="setMedQuery(this.value)" />
        </div>

        <div class="card card-hero">
          <div class="row-between">
            <span class="text-pink" style="font-size:11px;font-weight:600;">Ближайшая запись</span>
            <span style="font-size:12px;font-weight:700;">Талон ›</span>
          </div>
          <div style="font-size:15px;font-weight:700;">${state.medUpcoming.doc}</div>
          <div class="text-pink" style="font-size:12px;">${state.medUpcoming.info}</div>
        </div>

        ${specialties.length ? `
          <div class="section-sub">Выберите специалиста</div>
          <div class="grid-3">
            ${specialties.map(sp => {
              const medIconMap = { 'Терапевт': 'med', 'Стоматолог': 'tooth', 'Педиатр': 'heart', 'ЛОР': 'sparkle', 'Анализы': 'flask', 'УЗИ / МРТ': 'scan' };
              return `
                <div class="card clickable" style="align-items:center;padding:10px;gap:6px;" onclick="setMedQuery('${sp}')">
                  <div class="tile-icon-badge">${ico(medIconMap[sp] || 'med')}</div>
                  <span style="font-size:11px;font-weight:700;">${sp}</span>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}

        <div class="section-sub">Свободные врачи сегодня (${docs.length})</div>
        ${docs.length === 0 ? `<div class="card text-pink">Врачи по запросу «${state.medQuery}» не найдены</div>` : docs.map(d => {
          const pickedSlot = state.medSelectedSlots[d.id] || d.slots[0];
          const avgRating = d.reviews.length
            ? (d.reviews.reduce((s, r) => s + r.rating, 0) / d.reviews.length).toFixed(1)
            : '5.0';
          return `
            <div class="card">
              <div class="row-between" style="align-items:flex-start;">
                <div class="row-center">
                  <img src="${d.img}" class="kawaii-icon" style="border-radius:50%;" alt="" />
                  <div>
                    <div style="font-size:14px;font-weight:700;">${d.name}</div>
                    <div class="text-pink" style="font-size:11px;">${d.role}</div>
                    <button class="text-pink clickable" style="background:none;border:none;padding:2px 0 0;font-size:11px;font-weight:700;cursor:pointer;" onclick="openDoctorReviewsModal('${d.id}')">
                      ★ ${avgRating} · Отзывы (${d.reviews.length}) ›
                    </button>
                  </div>
                </div>
              </div>
              <div class="row-between">
                <div class="row-center" style="gap:6px;flex-wrap:wrap;">
                  ${d.slots.map(sl => `
                    <button class="chip ${pickedSlot === sl ? 'active' : ''}" onclick="selectMedSlot('${d.id}', '${sl}')">${sl}</button>
                  `).join('')}
                </div>
                <button class="btn-pink btn-sm" onclick="bookDoctor('${d.name}', '${d.role}', '${pickedSlot}')">Записаться</button>
              </div>
            </div>
          `;
        }).join('')}
      `}
    </div>
  `;
}

// =========================================================================
// BOTTOM BARS
// =========================================================================
function renderBottomBar() {
  const slot = document.getElementById('bottomBarSlot');
  const mainTabs = ['home', 'payments', 'chats', 'services'];

  if (mainTabs.includes(state.screen)) {
    const unpaid = state.bills.filter(b => !b.paid).length;
    const unread = state.threads.reduce((s, t) => s + t.unread, 0);
    const items = [
      { id: 'home', img: 'assets/nav_home.jpg', label: 'Главная', badge: 0 },
      { id: 'payments', img: 'assets/nav_payments.jpg', label: 'Платежи', badge: unpaid },
      { id: 'chats', img: 'assets/nav_chats.jpg', label: 'Чаты', badge: unread },
      { id: 'services', img: 'assets/nav_services.jpg', label: 'Сервисы', badge: 0 },
    ];
    slot.innerHTML = `
      <nav class="bottom-bar">
        <div class="bottom-tabs">
          ${items.map(it => `
            <button class="tab-btn ${state.screen === it.id ? 'active' : ''}" onclick="go('${it.id}', false)">
              <div class="tab-icon-img-wrap">
                <img src="${it.img}" class="tab-icon-img" alt="${it.label}" />
                ${it.badge ? `<span class="tab-badge">${it.badge}</span>` : ''}
              </div>
              <span>${it.label}</span>
            </button>
          `).join('')}
        </div>
      </nav>
    `;
  } else if (state.screen === 'maps') {
    const items = [
      { id: 'nav', icon: ico('nav'), label: 'Навигатор' },
      { id: 'transport', icon: ico('bus'), label: 'Транспорт' },
      { id: 'taxi', icon: ico('taxi'), label: 'Такси' },
      { id: 'fuel', icon: ico('fuel'), label: 'Заправки' },
    ];
    slot.innerHTML = `
      <nav class="bottom-bar">
        <div class="bottom-tabs">
          ${items.map(it => `
            <button class="tab-btn ${state.mapTab === it.id ? 'active' : ''}" onclick="${it.id === 'taxi' ? "go('taxi')" : `setMapTab('${it.id}')`}">
              <div class="tab-icon-box">${it.icon}</div>
              <span>${it.label}</span>
            </button>
          `).join('')}
        </div>
      </nav>
    `;
  } else if (state.screen === 'marketplace') {
    const favCount = state.products.filter(p => p.fav).length;
    const cartCount = state.cart.length;
    const items = [
      { id: 'catalog', icon: ico('grid'), label: 'Каталог', badge: 0 },
      { id: 'fav', icon: ico('heart'), label: 'Избранное', badge: favCount },
      { id: 'cart', icon: ico('cart'), label: 'Корзина', badge: cartCount },
      { id: 'orders', icon: ico('box'), label: 'Заказы', badge: 0 },
      { id: 'account', icon: ico('user'), label: 'Аккаунт', badge: 0 },
    ];
    slot.innerHTML = `
      <nav class="bottom-bar">
        <div class="bottom-tabs">
          ${items.map(it => `
            <button class="tab-btn ${state.selectedProductId === null && state.mpTab === it.id ? 'active' : ''}" onclick="setMpTab('${it.id}')">
              <div class="tab-icon-box">
                ${it.icon}
                ${it.badge ? `<span class="tab-badge">${it.badge}</span>` : ''}
              </div>
              <span>${it.label}</span>
            </button>
          `).join('')}
        </div>
      </nav>
    `;
  } else if (state.screen === 'fitness') {
    const items = [
      { id: 'schedule', icon: ico('calendar'), label: 'Расписание', badge: 0 },
      { id: 'favorites', icon: ico('heart'), label: 'Избранное', badge: state.fitFavStudios.length },
      { id: 'bookings', icon: ico('ticket'), label: 'Мои записи', badge: state.fitBookings.length },
    ];
    slot.innerHTML = `
      <nav class="bottom-bar">
        <div class="bottom-tabs">
          ${items.map(it => `
            <button class="tab-btn ${state.fitView === it.id ? 'active' : ''}" onclick="setFitView('${it.id}')">
              <div class="tab-icon-box">
                ${it.icon}
                ${it.badge ? `<span class="tab-badge">${it.badge}</span>` : ''}
              </div>
              <span>${it.label}</span>
            </button>
          `).join('')}
        </div>
      </nav>
    `;
  } else {
    slot.innerHTML = '';
  }
}

function renderKeepFocus(inputId) {
  render();
  const inp = document.getElementById(inputId);
  if (inp) {
    inp.focus();
    const len = inp.value.length;
    inp.setSelectionRange(len, len);
  }
}

// =========================================================================
// INTERACTIVE ACTIONS
// =========================================================================
window.toggleBalance = () => { state.balanceHidden = !state.balanceHidden; render(); };
window.setHistoryFilter = (f) => { state.historyFilter = f; render(); };
window.setHistoryQuery = (v) => { state.historyQuery = v; renderKeepFocus('historySearchInput'); };
window.setPayTab = (t) => { state.payTab = t; render(); };
window.payBill = (id) => {
  const b = state.bills.find(x => x.id === id);
  if (!b || b.paid) return;
  b.paid = true;
  state.debitBalance -= b.amount;
  state.transactions.unshift({ icon: '✓', title: b.title, time: 'Только что', amount: -b.amount });
  showToast(`Счёт «${b.title}» оплачен (${fmtRub(b.amount)}) ★`);
  render();
};
window.setChatFilter = (f) => { state.chatFilter = f; render(); };
window.setServiceQuery = (v) => { state.serviceQuery = v; renderKeepFocus('svcSearchInput'); };
window.mapZoomIn = () => { if (mainMapInstance) mainMapInstance.zoomIn(); };
window.mapZoomOut = () => { if (mainMapInstance) mainMapInstance.zoomOut(); };
window.mapCenterUser = () => {
  if (mainMapInstance) mainMapInstance.setView([56.8438, 60.6540], 15);
  showToast('Вы здесь: ул. Мира, 19 (УрФУ)');
};
window.setMapTab = (t) => {
  state.mapTab = t;
  const chipsEl = document.getElementById('mapsSheetChips');
  if (chipsEl) chipsEl.innerHTML = renderMapsSheetChips();
  renderMapMarkers();
  renderBottomBar();
  const titles = { nav: 'Режим: Навигатор', transport: 'Режим: Транспорт онлайн', fuel: 'Режим: Карта заправок' };
  showToast(titles[t] || t);
};
function syncMapsFilterUI() {
  renderMapMarkers();
  const chipsEl = document.getElementById('mapsSheetChips');
  if (chipsEl) chipsEl.innerHTML = renderMapsSheetChips();
  const btn = document.getElementById('mapFilterBtn');
  if (btn) {
    btn.classList.toggle('active', state.transportFilters.length > 0);
    btn.innerHTML = `${ico('filter', 'sm')}${state.transportFilters.length ? `<span class="icon-filter-badge">${state.transportFilters.length}</span>` : ''}`;
  }
}

window.clearTransportFilters = () => {
  state.transportFilters = [];
  syncMapsFilterUI();
  showToast('Показан весь транспорт');
};

window.toggleTransportFilter = (f) => {
  const idx = state.transportFilters.indexOf(f);
  if (idx >= 0) state.transportFilters.splice(idx, 1);
  else state.transportFilters.push(f);
  syncMapsFilterUI();
};

window.openTransportFilterModal = () => {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="row-between">
      <div class="section-heading">Фильтр транспорта</div>
      <button class="btn-dark btn-sm" onclick="closeModal()">✕</button>
    </div>
    <div class="text-pink" style="font-size:12px;">Выберите одну или несколько категорий:</div>
    <div id="transportFilterModalList" style="display:flex;flex-direction:column;gap:8px;">
      ${TRANSPORT_FILTER_ITEMS.map(([id, lbl]) => {
        const checked = state.transportFilters.includes(id);
        return `
          <div class="check-row ${checked ? 'active' : ''}" onclick="toggleModalTransportFilter('${id}')">
            <span>${lbl}</span>
            <span class="check-box">${checked ? '✓' : ''}</span>
          </div>
        `;
      }).join('')}
    </div>
    <div class="row-between" style="gap:8px;">
      <button class="btn-dark btn-full" onclick="clearTransportFilters();closeModal()">Показать всё</button>
      <button class="btn-pink btn-full" onclick="closeModal();showToast(state.transportFilters.length ? 'Применено категорий: ' + state.transportFilters.length : 'Показан весь транспорт')">Применить</button>
    </div>
  `);
};

window.toggleModalTransportFilter = (f) => {
  window.toggleTransportFilter(f);
  window.openTransportFilterModal();
};

window.setTaxiTo = (v) => { state.taxiTo = v; render(); };
window.setTaxiTariff = (id) => { state.taxiTariff = id; render(); };
window.toggleTaxiOptions = () => { state.taxiOptionsOpen = !state.taxiOptionsOpen; render(); };
window.toggleTaxiOption = (id) => {
  const idx = state.taxiOptions.indexOf(id);
  if (idx >= 0) state.taxiOptions.splice(idx, 1);
  else state.taxiOptions.push(id);
  render();
};
window.orderTaxi = (price, name) => {
  state.taxiOrdered = !state.taxiOrdered;
  const opts = state.taxiOptions.length ? ` · опций: ${state.taxiOptions.length}` : '';
  showToast(state.taxiOrdered ? `Такси «${name}» (${price} ₽${opts}) уже в пути! 🖤` : 'Заказ такси отменён');
  render();
};

// Fitness actions
window.setFitView = (v) => { state.fitView = v; render(); };
window.setFitDay = (i) => { state.fitDay = i; render(); };
window.shiftFitWeek = (delta) => { state.fitWeekOffset += delta; render(); };
window.setFitQuery = (v) => { state.fitQuery = v; renderKeepFocus('fitSearchInput'); };
window.toggleFitFilters = () => { state.fitFiltersOpen = !state.fitFiltersOpen; render(); };
window.setFitCat = (c) => { state.fitCat = c; render(); };
window.setFitTimeFilter = (t) => { state.fitTimeFilter = t; render(); };
window.setFitLevelFilter = (l) => { state.fitLevelFilter = l; render(); };
window.setFitMaxPts = (v) => { state.fitMaxPts = v; render(); };
window.toggleFitOnlyFavs = () => { state.fitOnlyFavs = !state.fitOnlyFavs; render(); };
window.resetFitFilters = () => {
  state.fitCat = 'Все';
  state.fitTimeFilter = 'Любое';
  state.fitLevelFilter = 'Любой';
  state.fitMaxPts = 0;
  state.fitOnlyFavs = false;
  state.fitQuery = '';
  showToast('Фильтры фитнеса сброшены');
  render();
};
window.toggleFitFav = (id) => {
  const idx = state.fitFavStudios.indexOf(id);
  if (idx >= 0) {
    state.fitFavStudios.splice(idx, 1);
    showToast('Студия удалена из избранного');
  } else {
    state.fitFavStudios.push(id);
    showToast('Студия добавлена в избранное ♥');
  }
  render();
};
window.selectFitSlot = (studioId, slot) => {
  state.fitSelectedSlots[studioId] = slot;
  render();
};
window.bookFitness = (studioId, dateLabel) => {
  const st = FITNESS_STUDIOS.find(s => s.id === studioId);
  if (!st) return;
  if (state.fitPoints < st.pts) return showToast('Недостаточно баллов абонемента');
  const time = state.fitSelectedSlots[studioId] || st.slots[0];
  state.fitPoints -= st.pts;
  state.fitBookings.unshift({
    id: Date.now(),
    studio: st.name,
    activity: st.activity,
    date: dateLabel,
    time,
    pts: st.pts,
  });
  showToast(`Вы записаны в «${st.name}» на ${time} (−${st.pts} б.) ★`);
  render();
};
window.cancelFitnessBooking = (id) => {
  const idx = state.fitBookings.findIndex(b => b.id === id);
  if (idx < 0) return;
  const [removed] = state.fitBookings.splice(idx, 1);
  state.fitPoints += removed.pts;
  showToast(`Запись отменена · +${removed.pts} б. возвращено`);
  render();
};

// Internet Support Modal (Chat + Call Master + Diagnostics)
window.openIspSupportModal = () => {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="row-between">
      <div class="section-heading">Поддержка интернета</div>
      <button class="btn-dark btn-sm" onclick="closeModal()">✕</button>
    </div>
    <div class="text-pink" style="font-size:12px;">Договор № 4920184 · ул. Ленина, д. 12, кв. 45</div>
    <div class="card clickable" style="flex-direction:row;align-items:center;justify-content:space-between;" onclick="closeModal();openLiveChat('Поддержка интернета', 'Здравствуйте! Чем можем помочь по договору № 4920184?')">
      <div class="row-center">
        <div class="tile-icon-badge">${ico('support')}</div>
        <div>
          <div style="font-size:13px;font-weight:700;">Чат с поддержкой</div>
          <div class="text-pink" style="font-size:11px;">Оператор отвечает за 1–2 минуты</div>
        </div>
      </div>
      <span class="text-pink">›</span>
    </div>
    <div class="card clickable" style="flex-direction:row;align-items:center;justify-content:space-between;" onclick="openIspMasterForm()">
      <div class="row-center">
        <div class="tile-icon-badge">${ico('wrench')}</div>
        <div>
          <div style="font-size:13px;font-weight:700;">Вызвать мастера на дом</div>
          <div class="text-pink" style="font-size:11px;">Настройка роутера, кабеля или ТВ-приставки</div>
        </div>
      </div>
      <span class="text-pink">›</span>
    </div>
    <div class="card clickable" style="flex-direction:row;align-items:center;justify-content:space-between;" onclick="closeModal();showToast('Порт перезагружен · Скорость 496 Мбит/с ★')">
      <div class="row-center">
        <div class="tile-icon-badge">${ico('bolt')}</div>
        <div>
          <div style="font-size:13px;font-weight:700;">Перезагрузить линию</div>
          <div class="text-pink" style="font-size:11px;">Быстрое обновление сессии без звонка</div>
        </div>
      </div>
      <span class="text-pink">›</span>
    </div>
  `);
};

window.openIspMasterForm = () => {
  openModal(`
    <div class="sheet-handle"></div>
    <div class="row-between">
      <div class="section-heading">Вызов мастера</div>
      <button class="btn-dark btn-sm" onclick="openIspSupportModal()">← Назад</button>
    </div>
    <select id="ispMasterReason" class="form-field">
      <option>Слабый сигнал Wi-Fi / настройка роутера</option>
      <option>Нет подключения к интернету</option>
      <option>Повреждён кабель в квартире</option>
      <option>Настройка ТВ-приставки</option>
    </select>
    <input id="ispMasterTime" class="form-field" placeholder="Удобное время" value="Завтра, 14:00 – 17:00" />
    <button class="btn-pink btn-full" onclick="submitIspMasterVisit()">Подтвердить визит мастера</button>
  `);
};

window.submitIspMasterVisit = () => {
  const time = document.getElementById('ispMasterTime')?.value.trim() || 'Завтра';
  closeModal();
  showToast(`Заявка на визит мастера (${time}) создана ★`);
};

// Profi Review Modal
let _profiReviewStars = 5;
window.openProfiReviewModal = (id) => {
  const item = state.profiHistory.find(h => h.id === id);
  if (!item) return;
  _profiReviewStars = 5;
  openModal(`
    <div class="sheet-handle"></div>
    <div class="row-between">
      <div class="section-heading">Отзыв о мастере</div>
      <button class="btn-dark btn-sm" onclick="closeModal()">✕</button>
    </div>
    <div class="text-pink" style="font-size:12px;">${item.master} · ${item.title}</div>
    <div class="star-picker" id="profiStarPicker">
      ${[1,2,3,4,5].map(n => `<button class="star-btn ${n <= _profiReviewStars ? 'active' : ''}" onclick="setProfiReviewStars(${n})">★</button>`).join('')}
    </div>
    <textarea id="profiReviewText" class="form-field" rows="3" placeholder="Расскажите, как прошла работа..."></textarea>
    <button class="btn-pink btn-full" onclick="submitProfiReview(${id})">Опубликовать отзыв ★</button>
  `);
};

window.setProfiReviewStars = (n) => {
  _profiReviewStars = n;
  const picker = document.getElementById('profiStarPicker');
  if (picker) {
    picker.innerHTML = [1,2,3,4,5].map(i => `<button class="star-btn ${i <= n ? 'active' : ''}" onclick="setProfiReviewStars(${i})">★</button>`).join('');
  }
};

window.submitProfiReview = (id) => {
  const item = state.profiHistory.find(h => h.id === id);
  if (!item) return;
  const txt = document.getElementById('profiReviewText')?.value.trim() || 'Отличная работа, рекомендую!';
  item.rating = _profiReviewStars;
  item.review = txt;
  closeModal();
  showToast('Спасибо! Ваш отзыв опубликован ★');
  render();
};

window.setIspTab = (t) => { state.ispTab = t; render(); };
window.topUpIsp = () => {
  state.ispBalance += 650;
  state.debitBalance -= 650;
  showToast('Баланс интернета пополнен на 650 ₽ ★');
  render();
};
window.setMpTab = (t) => { state.mpTab = t; state.selectedProductId = null; render(); };
window.setMpCat = (c) => { state.mpCat = c; state.mpSubCat = ''; render(); };
window.setMpQuery = (v) => { state.mpQuery = v; renderKeepFocus('mpSearchInput'); };
window.toggleMpCatalogMenu = () => { state.mpCatalogMenuOpen = !state.mpCatalogMenuOpen; render(); };
window.toggleMpSection = (name) => { state.mpExpandedSection = state.mpExpandedSection === name ? '' : name; render(); };
window.selectMpSubCat = (store, subLabel, kw) => {
  state.mpCat = store;
  state.mpSubCat = subLabel;
  state.mpQuery = kw || '';
  state.mpCatalogMenuOpen = false;
  showToast(subLabel ? `Раздел: ${subLabel}` : `Магазин: ${store}`);
  render();
};
window.clearMpSubCat = () => {
  state.mpCat = 'Все';
  state.mpSubCat = '';
  state.mpQuery = '';
  render();
};
window.setSelectedVariant = (v) => { state.selectedVariant = v; render(); };
window.toggleFav = (id) => {
  const p = state.products.find(x => x.id === id);
  if (p) {
    p.fav = !p.fav;
    showToast(p.fav ? 'Добавлено в Избранное ♥' : 'Удалено из Избранного');
    render();
  }
};
window.addToCart = (id) => {
  state.cart.push(id);
  showToast('Товар добавлен в корзину ★');
  render();
};
window.decCartProduct = (id) => {
  const idx = state.cart.lastIndexOf(id);
  if (idx >= 0) {
    state.cart.splice(idx, 1);
    render();
  }
};
window.removeFromCart = (idx) => {
  state.cart.splice(idx, 1);
  render();
};
window.removeProductFromCart = (productId) => {
  state.cart = state.cart.filter(id => id !== productId);
  render();
};
window.applyPromo = () => {
  const val = (document.getElementById('promoInput')?.value || '').trim().toUpperCase();
  if (val === 'EMO2007') {
    state.mpPromoApplied = true;
    showToast('Промокод EMO2007 активирован (−10% в корзине) ★');
    render();
  } else {
    showToast('Попробуйте промокод EMO2007');
  }
};
window.toggleMpInstallments = () => { state.mpInstallments = !state.mpInstallments; render(); };
window.toggleMpNotifs = () => { state.mpNotifs = !state.mpNotifs; render(); };
window.checkoutCart = (total) => {
  if (total > state.debitBalance) return showToast('Недостаточно средств на карте');
  state.debitBalance -= total;
  state.transactions.unshift({ icon: 'M', title: 'Маркетплейс · Заказ', time: 'Только что', amount: -total });
  state.cart = [];
  state.mpTab = 'orders';
  showToast(`Заказ оплачен (${fmtRub(total)})! Кэшбэк начислен ★`);
  render();
};
window.setCourseView = (v) => { state.courseView = v; render(); };
window.toggleCourseMenu = () => { state.courseMenuOpen = !state.courseMenuOpen; render(); };
window.toggleCourseSection = (name) => { state.courseExpandedCat = state.courseExpandedCat === name ? '' : name; render(); };
window.selectCourseSubCat = (cat, sub) => {
  state.courseCat = cat;
  state.courseSubCat = sub;
  state.courseMenuOpen = false;
  showToast(sub ? `Направление: ${sub}` : `Категория: ${cat}`);
  render();
};
window.setCourseCat = (c) => { state.courseCat = c; state.courseSubCat = ''; render(); };
window.setCourseQuery = (v) => { state.courseQuery = v; renderKeepFocus('courseSearchInput'); };
window.enrollCourse = (id) => {
  const cr = COURSE_CATALOG.find(c => c.id === id);
  if (!cr) return;
  if (!state.myCourses.some(m => m.id === id)) {
    state.myCourses.unshift({ id: cr.id, title: cr.title, cat: cr.cat, progress: 0, lesson: 1, totalLessons: cr.lessons });
  }
  showToast(`Вы записались на «${cr.title}» ★`);
  render();
};
window.advanceCourse = (id) => {
  const mc = state.myCourses.find(m => m.id === id) || state.myCourses[0];
  if (!mc) return;
  mc.lesson = Math.min(mc.totalLessons, mc.lesson + 1);
  mc.progress = Math.min(100, Math.round((mc.lesson / mc.totalLessons) * 100));
  showToast(`Урок пройден! Прогресс: ${mc.progress}% ★`);
  render();
};
window.dropCourse = (id) => {
  state.myCourses = state.myCourses.filter(m => m.id !== id);
  showToast('Курс удалён из «Моих курсов»');
  render();
};
window.setMedTab = (t) => { state.medTab = t; render(); };
window.setMedQuery = (v) => { state.medQuery = v; renderKeepFocus('medSearchInput'); };
window.toggleMedAskAnon = () => { state.medAskAnon = !state.medAskAnon; render(); };
window.submitMedQuestion = () => {
  const text = (document.getElementById('medAskText')?.value || '').trim();
  if (!text) return showToast('Введите текст вопроса врачу');
  state.medQuestions.unshift({
    id: Date.now(),
    spec: state.medAskSpec,
    date: 'Только что',
    question: text,
    doctor: '',
    answer: '',
    status: state.medAskAnon ? 'Отправлен анонимно' : 'Отправлен врачу',
  });
  showToast(`Вопрос отправлен (${state.medAskSpec}) · ответ через ~15 мин ★`);
  render();
};
window.selectMedSlot = (docId, slot) => {
  state.medSelectedSlots[docId] = slot;
  render();
};

let _docReviewStars = 5;
window.openDoctorReviewsModal = (docId) => {
  const doc = state.medDoctors.find(d => d.id === docId);
  if (!doc) return;
  _docReviewStars = 5;
  openModal(`
    <div class="sheet-handle"></div>
    <div class="row-between">
      <div class="section-heading">Отзывы · ${doc.name}</div>
      <button class="btn-dark btn-sm" onclick="closeModal()">✕</button>
    </div>
    <div class="text-pink" style="font-size:12px;">${doc.role}</div>
    <div style="display:flex;flex-direction:column;gap:8px;max-height:190px;overflow-y:auto;">
      ${doc.reviews.map(r => `
        <div class="card" style="padding:10px;gap:4px;">
          <div class="row-between" style="font-size:11px;">
            <span style="font-weight:700;">${r.author}</span>
            <span class="text-pink">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)} · ${r.date}</span>
          </div>
          <div class="text-pink" style="font-size:12px;line-height:1.35;">${r.text}</div>
        </div>
      `).join('')}
    </div>
    <div class="section-sub" style="margin-top:2px;">Оставить отзыв о враче</div>
    <div class="star-picker" id="docStarPicker">
      ${[1,2,3,4,5].map(n => `<button class="star-btn ${n <= _docReviewStars ? 'active' : ''}" onclick="setDocReviewStars(${n})">★</button>`).join('')}
    </div>
    <textarea id="docReviewText" class="form-field" rows="2" placeholder="Напишите впечатление о приёме..."></textarea>
    <button class="btn-pink btn-full" onclick="submitDoctorReview('${doc.id}')">Опубликовать отзыв ★</button>
  `);
};

window.setDocReviewStars = (n) => {
  _docReviewStars = n;
  const picker = document.getElementById('docStarPicker');
  if (picker) {
    picker.innerHTML = [1,2,3,4,5].map(i => `<button class="star-btn ${i <= n ? 'active' : ''}" onclick="setDocReviewStars(${i})">★</button>`).join('');
  }
};

window.submitDoctorReview = (docId) => {
  const doc = state.medDoctors.find(d => d.id === docId);
  if (!doc) return;
  const txt = (document.getElementById('docReviewText')?.value || '').trim();
  if (!txt) return showToast('Напишите текст отзыва');
  doc.reviews.unshift({ author: 'Наталия', rating: _docReviewStars, date: 'Только что', text: txt });
  showToast('Отзыв о враче опубликован ★');
  openDoctorReviewsModal(docId);
  render();
};

window.bookDoctor = (name, role, slot) => {
  state.medUpcoming = { doc: `${role.split(' · ')[0]} · ${name}`, info: `Сегодня, ${slot} · ${role.split(' · ')[1] || 'Клиника'}` };
  showToast(`Вы записаны к ${name} на ${slot} ★`);
  render();
};

// =========================================================================
// VIRTUAL BANK & ECOSYSTEM ASSISTANT (Full-screen chat)
// =========================================================================
const BANK_SCREENS = ['home', 'payments', 'chats', 'services', 'history'];

function getAssistantReply(text) {
  const q = text.toLowerCase();
  const total = state.debitBalance + state.savingsBalance;
  const unpaid = state.bills.filter(b => !b.paid);

  if (q.includes('оператор') || q.includes('человек') || q.includes('жив') || q.includes('не помог') || q.includes('эскалац') || q.includes('жалоб') || q.includes('поддержк')) {
    return {
      escalate: true,
      text: 'Поняла, вопрос требует участия специалиста! Передаю историю нашего диалога живому оператору поддержки — секунду ★',
    };
  }
  if (q.includes('баланс') || q.includes('денег') || q.includes('сколько') || q.includes('накоплен')) {
    return {
      text: `Общий баланс: ${fmtBal(total)}. На основной карте •• 4821 — ${fmtRub(state.debitBalance)}, на накопительном счёте (16%) — ${fmtRub(state.savingsBalance)} ★`,
      actionLabel: 'История операций →',
      actionScreen: 'history',
    };
  }
  if (q.includes('счета') || q.includes('жкх') || q.includes('неоплач')) {
    if (!unpaid.length) return { text: 'Все счета уже оплачены — задолженностей нет! ♥' };
    const list = unpaid.map(b => `«${b.title}» (${fmtRub(b.amount)})`).join(', ');
    return {
      text: `У тебя ${unpaid.length} неоплаченных счёта: ${list}. Оплатить можно в 1 клик во вкладке «Платежи».`,
      actionLabel: 'Перейти в Платежи →',
      actionScreen: 'payments',
    };
  }
  if (q.includes('перевод') || q.includes('перевест') || q.includes('сбп') || q.includes('qr')) {
    return {
      text: 'Переводы по СБП без комиссии до 100 000 ₽/мес! В разделе «Платежи» можно перевести по номеру телефона, карте, между своими счетами или оплатить по QR.',
      actionLabel: 'Открыть Платежи →',
      actionScreen: 'payments',
    };
  }
  if (q.includes('кэшбэк') || q.includes('кешбэк') || q.includes('промокод') || q.includes('бонус')) {
    return {
      text: 'За ноябрь уже начислено +1 420 ₽ кэшбэка! А в Маркетплейсе действует промокод EMO2007 — даёт −10% в корзине ★',
      actionLabel: 'Открыть Маркетплейс →',
      actionScreen: 'marketplace',
    };
  }
  if (q.includes('истори') || q.includes('операц') || q.includes('расход') || q.includes('трат')) {
    return {
      text: `В истории сейчас ${state.transactions.length} операций, расходы за ноябрь — 42 180 ₽. Там есть поиск и фильтры по расходам/пополнениям.`,
      actionLabel: 'Открыть Историю →',
      actionScreen: 'history',
    };
  }
  if (q.includes('карт') && (q.includes('блок') || q.includes('потеря') || q.includes('безопас'))) {
    return { text: 'Если карта •• 4821 потерялась, её можно временно заморозить — деньги останутся в безопасности, а разморозить карту можно в любой момент.' };
  }
  if (q.includes('такси') || q.includes('доехат') || q.includes('машин')) {
    return {
      text: 'В сервисе «Такси» можно выбрать тариф (Эконом, Комфорт, Доставка), указать комментарий водителю и опции (детское кресло, питомец, кондиционер и др.).',
      actionLabel: 'Вызвать Такси →',
      actionScreen: 'taxi',
    };
  }
  if (q.includes('карт') || q.includes('транспорт') || q.includes('навигатор') || q.includes('заправ')) {
    return {
      text: 'В «Картах и транспорте» работает живая карта с навигатором, заправками и мульти-фильтром транспорта.',
      actionLabel: 'Открыть Карты →',
      actionScreen: 'maps',
    };
  }
  if (q.includes('фитнес') || q.includes('трениров') || q.includes('зал') || q.includes('йог') || q.includes('балл')) {
    return {
      text: `У тебя сейчас ${state.fitPoints} балла абонемента и ${state.fitBookings.length} активных записей. В Фитнесе можно листать недели, фильтровать занятия, добавлять студии в избранное и отменять записи с возвратом баллов.`,
      actionLabel: 'Открыть Фитнес →',
      actionScreen: 'fitness',
    };
  }
  if (q.includes('интернет') || q.includes('провайдер') || q.includes('роутер') || q.includes('договор')) {
    return {
      text: `Договор № 4920184 активен, баланс интернета — ${state.ispBalance} ₽. Внутри раздела есть кнопка «Поддержка» с чатом, вызовом мастера и перезагрузкой линии.`,
      actionLabel: 'Открыть Интернет →',
      actionScreen: 'internet',
    };
  }
  if (q.includes('мастер') || q.includes('услуг') || q.includes('ремонт') || q.includes('уборк') || q.includes('заявк')) {
    return {
      text: `В «Услугах и мастерах» можно выбрать категорию специалистов, написать мастеру в чат, создать заявку или оставить отзыв в «Истории обращений». Активных заявок: ${state.profiOrders.length}.`,
      actionLabel: 'Открыть Услуги →',
      actionScreen: 'profi',
    };
  }
  if (q.includes('маркет') || q.includes('товар') || q.includes('корзин') || q.includes('купит') || q.includes('магаз')) {
    return {
      text: `В Маркетплейсе открыт «Каталог товаров» (re:Store, Street Beat, Мир Кубиков). Сейчас в корзине товаров: ${state.cart.length} шт. Не забудь промокод EMO2007 на −10%!`,
      actionLabel: 'Открыть Маркетплейс →',
      actionScreen: 'marketplace',
    };
  }
  if (q.includes('курс') || q.includes('обучен') || q.includes('учеб') || q.includes('образован')) {
    return {
      text: `В «Допобразовании» есть меню по направлениям и раздел «Мои курсы» (сейчас ты записана на ${state.myCourses.length} курс(а)).`,
      actionLabel: 'Открыть Обучение →',
      actionScreen: 'courses',
    };
  }
  if (q.includes('врач') || q.includes('медицин') || q.includes('поликлиник') || q.includes('запис') || q.includes('больниц')) {
    return {
      text: `Ближайшая запись: ${state.medUpcoming.doc} (${state.medUpcoming.info}). В «Медицине» можно выбрать время приёма, почитать отзывы о врачах или задать вопрос дежурному врачу онлайн.`,
      actionLabel: 'Открыть Медицину →',
      actionScreen: 'medicine',
    };
  }
  if (q.includes('сервис') || q.includes('экосистем') || q.includes('навигац') || q.includes('где найти') || q.includes('что умеешь')) {
    return {
      text: 'В хабе «Сервисы» собрано всё: Карты и транспорт, Такси, Фитнес, Интернет, Услуги и мастера, Маркетплейс, Обучение и Медицина. Напиши название любого сервиса — сразу открою!',
      actionLabel: 'Открыть все Сервисы →',
      actionScreen: 'services',
    };
  }
  if (q.includes('привет') || q.includes('здравств') || q.includes('хай')) {
    return { text: 'Привет! 🖤 Спрашивай про банк, переводы, навигацию или любой из 8 сервисов экосистемы — помогу и сразу перекину куда нужно!' };
  }
  if (q.includes('спасибо') || q.includes('пасиб')) {
    return { text: 'Всегда рада помочь! Если понадобится что-то ещё — я в правом нижнем углу на всех страницах банка ♥' };
  }
  return {
    text: 'Я могу подсказать по балансу, переводам, кэшбэку и счетам, а также помочь с любым сервисом: Карты, Такси, Фитнес, Интернет, Услуги, Маркетплейс, Курсы и Медицина. Выбери подсказку ниже или напиши, что ищешь ★',
  };
}

function renderAssistant() {
  const quickPrompts = state.assistantEscalated
    ? ['Проверить перевод', 'Оспорить списание', 'Вернуть MoLLy_2007']
    : [
        'Позвать оператора',
        'Мой баланс',
        'Неоплаченные счета',
        'Что есть в сервисах?',
        'Фитнес и мои баллы',
        'Маркетплейс и промокод',
        'Запись к врачу',
      ];
  return `
    <div class="assistant-screen">
      <div class="nav-header">
        <div class="nav-left">
          <button class="back-btn" onclick="goBack()">←</button>
          <img src="${state.assistantEscalated ? 'assets/profi_av_02.jpg' : 'assets/emo_assistant.jpg'}" class="assistant-avatar-lg" alt="Поддержка" />
          <div>
            <div class="nav-title" style="font-size:15px;">${state.assistantEscalated ? 'Оператор Анна · 24/7' : 'MoLLy_2007 ★'}</div>
            <div class="text-pink" style="font-size:11px;">${state.assistantEscalated ? '● Живой оператор поддержки' : '● Онлайн · Поддержка и сервисы'}</div>
          </div>
        </div>
        ${state.assistantEscalated
          ? `<button class="pill-btn" style="font-size:10px;padding:4px 8px;" onclick="returnToMolly()">MoLLy</button>`
          : `<button class="pill-btn" style="font-size:10px;padding:4px 8px;" onclick="escalateToOperator()">Оператор</button>`}
      </div>

      <div class="assistant-messages" id="assistantChatBody">
        ${state.assistantMessages.map(m => m.from === 'user' ? `
          <div class="assistant-row user">
            <div class="msg-bubble msg-out">${m.text}</div>
          </div>
        ` : m.from === 'system' ? `
          <div style="text-align:center;font-size:11px;color:var(--muted-pink);padding:4px 8px;">${m.text}</div>
        ` : `
          <div class="assistant-row">
            <img src="${m.from === 'operator' ? 'assets/profi_av_02.jpg' : 'assets/emo_assistant.jpg'}" class="assistant-avatar-sm" alt="" />
            <div class="msg-bubble msg-in" style="display:flex;flex-direction:column;gap:8px;">
              ${m.from === 'operator' ? `<div style="font-size:10px;font-weight:700;color:var(--hot-pink);">Оператор Анна</div>` : ''}
              <div>${m.text}</div>
              ${m.actionScreen ? `
                <button class="btn-pink btn-sm" style="align-self:flex-start;" onclick="go('${m.actionScreen}')">${m.actionLabel}</button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="assistant-composer">
        <div class="chips-row">
          ${quickPrompts.map(q => `
            <button class="chip" onclick="sendAssistantMessage('${q}')">${q}</button>
          `).join('')}
        </div>
        <div class="row-center" style="gap:8px;">
          <input id="assistantInput" class="form-field" style="flex:1;" placeholder="${state.assistantEscalated ? 'Напишите оператору Анне...' : 'Напиши MoLLy_2007...'}" onkeydown="if(event.key==='Enter')sendAssistantMessage()" />
          <button class="btn-pink" onclick="sendAssistantMessage()">→</button>
        </div>
      </div>
    </div>
  `;
}

window.escalateToOperator = () => {
  if (state.assistantEscalated) return;
  state.assistantEscalated = true;
  state.assistantMessages.push({
    from: 'bot',
    text: 'Передаю диалог живому специалисту поддержки — вся переписка сохранится ★',
  });
  state.assistantMessages.push({
    from: 'system',
    text: '— К чату подключилась оператор Анна (Поддержка 24/7) —',
  });
  state.assistantMessages.push({
    from: 'operator',
    text: 'Здравствуйте, Наталия! Я оператор Анна, уже вижу ваш вопрос. Подскажите детали — решу всё вручную прямо сейчас 🖤',
  });
  render();
  requestAnimationFrame(() => {
    const body = document.getElementById('assistantChatBody');
    if (body) body.scrollTop = body.scrollHeight;
  });
};

window.returnToMolly = () => {
  state.assistantEscalated = false;
  state.assistantMessages.push({
    from: 'system',
    text: '— Диалог снова ведёт MoLLy_2007 ★ —',
  });
  state.assistantMessages.push({
    from: 'bot',
    text: 'Я снова на связи! Если понадобится оператор — просто нажми «Оператор» сверху ★',
  });
  render();
  requestAnimationFrame(() => {
    const body = document.getElementById('assistantChatBody');
    if (body) body.scrollTop = body.scrollHeight;
  });
};

window.sendAssistantMessage = (customText) => {
  const inp = document.getElementById('assistantInput');
  const txt = (typeof customText === 'string' ? customText : (inp?.value || '')).trim();
  if (!txt) return;

  if (txt === 'Вернуть MoLLy_2007') {
    window.returnToMolly();
    return;
  }

  state.assistantMessages.push({ from: 'user', text: txt });

  if (state.assistantEscalated) {
    state.assistantMessages.push({
      from: 'operator',
      text: 'Приняла в работу! Уже проверяю данные по вашей карте •• 4821 — вернусь с точным ответом в течение минуты ★',
    });
  } else {
    const reply = getAssistantReply(txt);
    if (reply.escalate) {
      state.assistantEscalated = true;
      state.assistantMessages.push({ from: 'bot', text: reply.text });
      state.assistantMessages.push({ from: 'system', text: '— К чату подключилась оператор Анна (Поддержка 24/7) —' });
      state.assistantMessages.push({
        from: 'operator',
        text: 'Здравствуйте, Наталия! Я оператор Анна, уже изучила вашу переписку с MoLLy_2007. Чем именно помочь?',
      });
    } else {
      state.assistantMessages.push({
        from: 'bot',
        text: reply.text,
        actionLabel: reply.actionLabel || '',
        actionScreen: reply.actionScreen || '',
      });
    }
  }

  render();
  requestAnimationFrame(() => {
    const body = document.getElementById('assistantChatBody');
    if (body) body.scrollTop = body.scrollHeight;
    const nextInp = document.getElementById('assistantInput');
    if (nextInp && typeof customText !== 'string') nextInp.focus();
  });
};

// =========================================================================
// MAIN RENDER LOOP
// =========================================================================
const renderers = {
  home: renderHome,
  history: renderHistory,
  assistant: renderAssistant,
  payments: renderPayments,
  chats: renderChats,
  services: renderServices,
  maps: renderMaps,
  taxi: renderTaxi,
  fitness: renderFitness,
  internet: renderInternet,
  profi: renderProfi,
  marketplace: renderMarketplace,
  courses: renderCourses,
  medicine: renderMedicine,
};

function render() {
  destroyMaps();
  const viewport = document.getElementById('screenViewport');
  viewport.innerHTML = (renderers[state.screen] || renderHome)();
  renderBottomBar();

  const fab = document.getElementById('assistantFab');
  if (fab) {
    const showFab = BANK_SCREENS.includes(state.screen);
    fab.classList.toggle('hidden', !showFab);
    fab.classList.toggle('low', state.screen === 'history');
  }

  document.querySelectorAll('.side-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.go === state.screen);
  });

  if (state.screen === 'maps') {
    requestAnimationFrame(initMainLeafletMap);
  } else if (state.screen === 'taxi') {
    requestAnimationFrame(initTaxiLeafletMap);
  }
}

document.querySelectorAll('.side-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.go;
    if (MAIN_TABS.includes(target)) {
      go(target, false);
    } else {
      // Preserve the actual main tab we came from (or default to 'services')
      if (MAIN_TABS.includes(state.screen)) {
        state.history = [state.screen];
      } else if (!state.history.length) {
        state.history = ['services'];
      }
      if (target === 'marketplace') {
        state.mpTab = 'catalog';
        state.mpCat = 'Все';
        state.selectedProductId = null;
      }
      go(target, false);
    }
  });
});

render();
