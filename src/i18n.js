export const PROJECTS_DATA = [
  {
    id: 1, slug: 'ai', name: 'AIAssistant',
    url: 'https://aiassistant-m1qo.onrender.com',
    screenshot: 'screenshots/aiassistant.jpg',
    subtitle: 'AI Systems',
    featured: true,
    tags: ['OpenAI', 'RAG', 'Streaming UI'],
    zh: {
      title: 'AI 智能客服／助手整合平台',
      description: '串接 OpenAI 或 Claude API，製作一個能根據使用者上傳的 PDF 或網址進行問答的工具。結合向量資料庫實現 RAG 概念。',
    },
    en: {
      title: 'AI Customer Service & Assistant Platform',
      description: 'Integrated OpenAI/Claude API to build a Q&A tool based on user-uploaded PDFs or URLs. Implements RAG with a vector database.',
    },
  },
  {
    id: 2, slug: 'flow', name: 'FlowBoard',
    url: 'https://flowboard-ovpt.onrender.com',
    screenshot: 'screenshots/flowboard.jpg',
    subtitle: 'Real-time',
    tags: ['WebSockets', 'Zustand'],
    zh: {
      title: '協作式看板工具',
      description: '類似 Trello 或 Notion，支援多人同時編輯、拖拽任務卡片，並以 WebSockets 實現即時同步。',
    },
    en: {
      title: 'Collaborative Kanban Board',
      description: 'Trello/Notion-like board with multi-user simultaneous editing, drag-and-drop cards, and real-time sync via WebSockets.',
    },
  },
  {
    id: 3, slug: 'crypto', name: 'CryptoLens',
    url: 'https://cryptolens-9wms.onrender.com',
    screenshot: 'screenshots/cryptolens.jpg',
    subtitle: 'Data & Visualization',
    tags: ['D3.js', 'Recharts'],
    zh: {
      title: '個人化金融／加密貨幣儀表板',
      description: '串接幣價或股市 API，提供即時圖表分析、資產佔比圓餅圖與自定義提醒。',
    },
    en: {
      title: 'Personal Finance / Crypto Dashboard',
      description: 'Connects to crypto and stock APIs for real-time chart analysis, asset allocation pie charts, and custom price alerts.',
    },
  },
  {
    id: 4, slug: 'pageforge', name: 'PageForge',
    url: 'https://pageforge-jiz8.onrender.com',
    screenshot: 'screenshots/pageforge.jpg',
    subtitle: 'Web Apps',
    tags: ['dnd-kit', 'JSON'],
    zh: {
      title: '低代碼／無代碼 網頁編輯器',
      description: '讓使用者透過「拖拉組件」來生成簡易網頁內容的工具，支援 JSON 序列化與解析。',
    },
    en: {
      title: 'Low-Code / No-Code Web Editor',
      description: 'A drag-and-drop tool for generating web content with component blocks, supporting JSON serialization and parsing.',
    },
  },
  {
    id: 5, slug: 'swift', name: 'SwiftCart',
    url: 'https://swiftcart-zyoe.onrender.com',
    screenshot: 'screenshots/swiftcart.jpg',
    subtitle: 'Web Apps',
    tags: ['Next.js', 'PWA', 'Lighthouse'],
    zh: {
      title: '高效能電商漸進式網頁',
      description: '具備離線瀏覽、加入購物車、模擬結帳流程，Next.js App Router 加持，Lighthouse 滿分。',
    },
    en: {
      title: 'High-Performance E-Commerce PWA',
      description: 'Offline browsing, cart, mock checkout flow — powered by Next.js App Router with a perfect Lighthouse score.',
    },
  },
  {
    id: 6, slug: 'saas', name: 'SaaSControl',
    url: 'https://saascontrol.onrender.com',
    screenshot: 'screenshots/saascontrol.jpg',
    subtitle: 'Web Apps',
    tags: ['NextAuth.js', 'Stripe', 'RBAC'],
    zh: {
      title: '訂閱制 SaaS 管理後台',
      description: '包含使用者登入（Auth）、權限管理（RBAC）、不同的方案切換與數據報表，串接 Stripe 模擬支付。',
    },
    en: {
      title: 'Subscription SaaS Admin Panel',
      description: 'User auth, role-based access control (RBAC), plan switching, data reports, and Stripe mock payment integration.',
    },
  },
  {
    id: 7, slug: 'ink', name: 'InkPress',
    url: 'https://inkpress-n8yf.onrender.com',
    screenshot: 'screenshots/inkpress.jpg',
    subtitle: 'Web Apps',
    tags: ['Headless CMS', 'ISR', 'SEO'],
    zh: {
      title: 'AI 驅動的技術博客／內容平台',
      description: '結合 AI 自動生成標籤或摘要，支援 Markdown 寫作，搭配 ISR 增量靜態再生實現極速 SEO。',
    },
    en: {
      title: 'AI-Driven Tech Blog / Content Platform',
      description: 'AI auto-generated tags and summaries, Markdown writing, and ISR incremental static regeneration for blazing-fast SEO.',
    },
  },
  {
    id: 8, slug: 'pixel', name: 'PixelCraft',
    url: 'https://pixelcraft-hp9e.onrender.com',
    screenshot: 'screenshots/pixelcraft.jpg',
    subtitle: 'Web Apps',
    tags: ['Canvas API', 'WebAssembly'],
    zh: {
      title: 'AI 影音／圖片處理工具',
      description: '利用瀏覽器效能進行簡單的濾鏡、裁切或 AI 背景移除，透過 WebAssembly 加速運算。',
    },
    en: {
      title: 'AI Media / Image Processing Tool',
      description: 'Browser-based image filters, cropping, and AI background removal accelerated via WebAssembly.',
    },
  },
  {
    id: 9, slug: 'note', name: 'NoteVault',
    url: 'https://notevault-2nlu.onrender.com',
    screenshot: 'screenshots/notevault.jpg',
    subtitle: 'Web Apps',
    tags: ['IndexedDB', 'CRDT', 'Offline'],
    zh: {
      title: '本地優先的筆記軟體',
      description: '資料優先存在瀏覽器 IndexedDB，離線也能用，並以 CRDT 技術解決多端同步衝突。',
    },
    en: {
      title: 'Local-First Note-Taking App',
      description: 'Data stored in browser IndexedDB — works fully offline, with CRDT technology for seamless cross-device sync.',
    },
  },
  {
    id: 10, slug: 'orbit', name: 'ProductOrbit',
    url: 'https://productorbit.onrender.com',
    screenshot: 'screenshots/productorbit.jpg',
    subtitle: 'Web Apps',
    tags: ['Three.js', 'React Three Fiber'],
    zh: {
      title: '互動式 3D 產品展示頁',
      description: '可以 360 度旋轉、更換顏色的 3D 產品展示頁面，以 React Three Fiber 實現燈光與模型渲染。',
    },
    en: {
      title: 'Interactive 3D Product Showcase',
      description: '360° rotating, color-swappable 3D product page built with React Three Fiber for lighting and model rendering.',
    },
  },
  {
    id: 11, slug: 'zheran', name: 'Zheran',
    url: 'https://zheran.onrender.com',
    screenshot: 'screenshots/zheran.jpg',
    subtitle: 'Animation',
    tags: ['GSAP', 'Parallax', 'Brand Site'],
    zh: {
      title: '摺然 — 輕鬆折疊的設計包',
      description: '採用褶皺結構的設計包品牌網站，以流暢的滾動動畫呈現產品細節，融合繁中排版美感與動態視差效果，打造沉浸式品牌體驗。',
    },
    en: {
      title: 'Zheran — The Foldable Design Bag',
      description: 'Brand website for a pleated foldable bag, featuring smooth scroll animations and dynamic parallax effects for an immersive product experience.',
    },
  },
  {
    id: 12, slug: 'sharkbay', name: 'SharkbaySalt',
    url: 'https://sharkbay-salt.onrender.com',
    screenshot: 'screenshots/sharkbay.jpg',
    subtitle: 'Animation',
    tags: ['Full-Screen Video', 'Brand Visual', 'E-Commerce'],
    zh: {
      title: 'THE SHARKBAY SALT — 鯊魚灣海鹽',
      description: '澳洲鯊魚灣天然海鹽的品牌網站，以精緻的視覺動畫與全螢幕影像呈現，傳遞產品的自然純粹感。',
    },
    en: {
      title: 'THE SHARKBAY SALT',
      description: 'Brand website for Australian Shark Bay natural sea salt, featuring full-screen visuals and refined animations to convey natural purity.',
    },
  },
  {
    id: 13, slug: 'jcuniverse', name: 'JCUniverse',
    url: 'https://jc-universe.onrender.com/',
    screenshot: 'screenshots/jcuniverse.jpg',
    subtitle: 'Animation',
    featured: true,
    tags: ['Scroll Animation', 'Immersive Design', 'Brand Site'],
    zh: {
      title: 'JC. universe — 人力資本網站',
      description: '以宇宙為概念的人力資本品牌網站，結合滾動動畫與沉浸式視覺設計，探索人才個性與企業文化的無限可能。',
    },
    en: {
      title: 'JC. universe — Human Capital Website',
      description: 'A universe-themed human capital brand site combining scroll animations and immersive design to explore talent individuality and corporate culture.',
    },
  },
]

export const FILTERS = ['All', 'AI Systems', 'Real-time', 'Web Apps', 'Data & Visualization', 'Animation']

export const UI = {
  zh: {
    nav: { portfolio: '作品集', contact: '聯絡我' },
    hero: {
      eyebrow: 'FULL-STACK DEVELOPER · BUILD REAL PRODUCTS',
      line1: 'Josie',
      line2: 'Frontend Development',
      subtitle: 'Turning complex ideas into intuitive user interfaces.',
      cta1: '實際案例',
      cta2: '聯絡合作',
      scroll: 'scroll ↓',
    },
    projects: {
      empty: '沒有符合的項目',
      overlay: '開啟網站 →',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: ['「實際產品」', '最佳', '解決方案'],
      sub: '有想法，我可以幫你把它做出來。',
      cta: '傳訊息給我 →',
      emailLabel: 'EMAIL',
      emailHint: '最直接的聯絡方式',
      githubLabel: 'GITHUB',
      githubHint: '查看我的實際專案',
      lineLabel: 'LINE',
      lineHint: '最快回覆',
    },
    footer: '© 2026 JC.前端工作室',
  },
  en: {
    nav: { portfolio: 'Portfolio', contact: 'Contact' },
    hero: {
      eyebrow: 'FULL-STACK DEVELOPER · BUILD REAL PRODUCTS',
      line1: 'Josie',
      line2: 'Frontend Development',
      subtitle: 'Focused on shipping real products, not just mockups.',
      cta1: 'View Projects',
      cta2: "Let's Collaborate",
      scroll: 'scroll ↓',
    },
    projects: {
      empty: 'No matching projects',
      overlay: 'Open Site →',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: ['"Real Products"', 'Best', 'Solutions'],
      sub: 'Have an idea? I can help you build it.',
      cta: 'Message Me →',
      emailLabel: 'EMAIL',
      emailHint: 'Most direct contact',
      githubLabel: 'GITHUB',
      githubHint: 'View my actual projects',
      lineLabel: 'LINE',
      lineHint: 'Fastest reply',
    },
    footer: '© 2026 JC. Studio',
  },
}
