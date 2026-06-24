/* ============================================================
   TRINEEB TECH – DATA / CONTENT
   ============================================================ */

const DATA = {

  /* ── Services ────────────────────────────────────────── */
  services: [
    { icon: '🌐', title: 'Website Development',         desc: 'High-performance, responsive websites that convert visitors into customers.' },
    { icon: '📱', title: 'Mobile App Development',      desc: 'Cross-platform iOS & Android apps with seamless user experiences.' },
    { icon: '⚙️', title: 'Custom Software Development', desc: 'Tailored software solutions built around your unique business logic.' },
    { icon: '🤖', title: 'AI & Business Automation',    desc: 'Smart automation that eliminates manual tasks and boosts productivity.' },
    { icon: '📈', title: 'Digital Marketing',           desc: 'SEO, PPC, social media strategies that grow your online presence.' },
    { icon: '🎨', title: 'UI/UX Design',                desc: 'Intuitive, beautiful interfaces crafted for exceptional user delight.' },
    { icon: '☁️', title: 'Cloud Solutions',             desc: 'Scalable AWS, Azure, and GCP infrastructure for modern businesses.' },
    { icon: '🔒', title: 'Cybersecurity Services',      desc: 'Protect your digital assets with enterprise-grade security protocols.' },
    { icon: '📊', title: 'Data Analytics & Dashboards', desc: 'Real-time insights and business intelligence for smarter decisions.' },
    { icon: '💡', title: 'Technology Consulting',       desc: 'Strategic guidance to align technology with your business goals.' },
  ],

  /* ── Industries ──────────────────────────────────────── */
  industries: [
    { emoji: '🏢', title: 'Real Estate',            desc: 'Property portals, CRM systems, virtual tours.',       tag: 'Property Tech' },
    { emoji: '🎓', title: 'Education',              desc: 'LMS platforms, student portals, e-learning apps.',    tag: 'EdTech' },
    { emoji: '🏥', title: 'Healthcare',             desc: 'Patient management, telemedicine, health records.',   tag: 'HealthTech' },
    { emoji: '🛍️', title: 'Retail & E-Commerce',    desc: 'Online stores, POS systems, inventory management.',  tag: 'Commerce' },
    { emoji: '💰', title: 'Finance',                desc: 'Fintech apps, banking solutions, trading platforms.', tag: 'FinTech' },
    { emoji: '🏭', title: 'Manufacturing',          desc: 'ERP systems, supply chain, production tracking.',     tag: 'Industry 4.0' },
    { emoji: '🏨', title: 'Hospitality',            desc: 'Booking systems, hotel apps, guest management.',      tag: 'HospTech' },
    { emoji: '🚀', title: 'Startups',               desc: 'MVPs, product development, growth hacking tools.',    tag: 'Startup' },
    { emoji: '🏛️', title: 'Corporate Enterprises',  desc: 'Enterprise software, digital transformation, ERP.',  tag: 'Enterprise' },
  ],

  /* ── Solutions ───────────────────────────────────────── */
  solutions: [
    { icon: 'fa-solid fa-globe',           title: 'Business Websites' },
    { icon: 'fa-solid fa-users',           title: 'CRM Systems' },
    { icon: 'fa-solid fa-layer-group',     title: 'ERP Solutions' },
    { icon: 'fa-solid fa-cart-shopping',   title: 'E-Commerce Platforms' },
    { icon: 'fa-solid fa-mobile-screen',   title: 'Mobile Applications' },
    { icon: 'fa-solid fa-robot',           title: 'AI Chatbots' },
    { icon: 'fa-solid fa-funnel-dollar',   title: 'Lead Generation Systems' },
    { icon: 'fa-solid fa-gears',           title: 'Business Automation Tools' },
    { icon: 'fa-solid fa-user-circle',     title: 'Customer Portals' },
    { icon: 'fa-solid fa-chart-bar',       title: 'Analytics Dashboards' },
  ],

  /* ── Process Steps ───────────────────────────────────── */
  process: [
    { num: '01', icon: 'fa-solid fa-comments',      title: 'Discovery & Consultation',  desc: 'Deep-dive sessions to understand your business goals and challenges.' },
    { num: '02', icon: 'fa-solid fa-list-check',    title: 'Requirement Analysis',       desc: 'Detailed documentation of features, scope, and technical requirements.' },
    { num: '03', icon: 'fa-solid fa-compass-drafting', title: 'Strategy & Planning',     desc: 'Project roadmap, tech stack selection, and resource planning.' },
    { num: '04', icon: 'fa-solid fa-pen-ruler',     title: 'Design & Prototyping',       desc: 'Wireframes, UI/UX prototypes reviewed and approved by you.' },
    { num: '05', icon: 'fa-solid fa-code',          title: 'Development',                desc: 'Agile sprints with transparent progress and regular demos.' },
    { num: '06', icon: 'fa-solid fa-vial',          title: 'Testing & Optimization',     desc: 'QA testing, performance optimization, security audits.' },
    { num: '07', icon: 'fa-solid fa-rocket',        title: 'Launch',                     desc: 'Seamless deployment with zero downtime and full monitoring.' },
    { num: '08', icon: 'fa-solid fa-chart-line',    title: 'Support & Growth',           desc: 'Ongoing maintenance, analytics tracking, and feature enhancements.' },
  ],

  /* ── Tech Stack ──────────────────────────────────────── */
  techStack: [
    {
      label: 'Frontend',
      icon: 'fa-solid fa-display',
      items: [
        { icon: '⚛️', name: 'React' },
        { icon: '▲',  name: 'Next.js' },
        { icon: '🔷', name: 'TypeScript' },
        { icon: '🌐', name: 'HTML5' },
        { icon: '🎨', name: 'CSS3 / Tailwind' },
        { icon: '💚', name: 'Vue.js' },
      ]
    },
    {
      label: 'Backend',
      icon: 'fa-solid fa-server',
      items: [
        { icon: '🟢', name: 'Node.js' },
        { icon: '🐘', name: 'PHP / Laravel' },
        { icon: '🐍', name: 'Python / Django' },
        { icon: '☕', name: 'Java / Spring' },
        { icon: '🔷', name: 'GraphQL' },
        { icon: '🔌', name: 'REST APIs' },
      ]
    },
    {
      label: 'Database',
      icon: 'fa-solid fa-database',
      items: [
        { icon: '🐬', name: 'MySQL' },
        { icon: '🐘', name: 'PostgreSQL' },
        { icon: '🍃', name: 'MongoDB' },
        { icon: '🔴', name: 'Redis' },
        { icon: '🔥', name: 'Firebase' },
        { icon: '❄️',  name: 'Snowflake' },
      ]
    },
    {
      label: 'Cloud & DevOps',
      icon: 'fa-solid fa-cloud',
      items: [
        { icon: '☁️', name: 'AWS' },
        { icon: '🔵', name: 'Microsoft Azure' },
        { icon: '🌐', name: 'Google Cloud' },
        { icon: '🐳', name: 'Docker' },
        { icon: '☸️', name: 'Kubernetes' },
        { icon: '🔁', name: 'CI/CD Pipelines' },
      ]
    },
    {
      label: 'AI & Automation',
      icon: 'fa-solid fa-robot',
      items: [
        { icon: '🤖', name: 'OpenAI / GPT' },
        { icon: '🧠', name: 'Machine Learning' },
        { icon: '⚡', name: 'Zapier / Make' },
        { icon: '🔗', name: 'LangChain' },
        { icon: '📊', name: 'TensorFlow' },
        { icon: '🌀', name: 'n8n Automation' },
      ]
    },
  ],

  /* ── Portfolio ───────────────────────────────────────── */
  portfolio: [
    {
      emoji: '🏢',
      badge: 'Real Estate',
      industry: 'Real Estate',
      title: 'PropVista — Real Estate CRM & Portal',
      services: ['Website Development', 'CRM System', 'Mobile App'],
      result: '340% increase in lead conversions within 6 months',
    },
    {
      emoji: '🎓',
      badge: 'Education',
      industry: 'Education',
      title: 'EduSphere — Learning Management System',
      services: ['Custom Software', 'Mobile App', 'UI/UX Design'],
      result: '50,000+ students onboarded in the first quarter',
    },
    {
      emoji: '🏥',
      badge: 'Healthcare',
      industry: 'Healthcare',
      title: 'MediCore — Patient Management Platform',
      services: ['Software Development', 'Cloud Solutions', 'AI Automation'],
      result: 'Reduced admin time by 65% across 12 clinics',
    },
    {
      emoji: '🛒',
      badge: 'E-Commerce',
      industry: 'Retail',
      title: 'ShopElite — Premium E-Commerce Platform',
      services: ['E-Commerce', 'Mobile App', 'Digital Marketing'],
      result: '$2.4M in revenue in the first year of operation',
    },
    {
      emoji: '💰',
      badge: 'Finance',
      industry: 'Finance',
      title: 'FinTrack — Business Finance Dashboard',
      services: ['Custom Software', 'Data Analytics', 'API Integration'],
      result: 'Real-time reporting for 500+ business accounts',
    },
    {
      emoji: '🤖',
      badge: 'AI Solution',
      industry: 'Multiple Sectors',
      title: 'AutoBot — AI Business Automation Suite',
      services: ['AI Automation', 'Chatbot Development', 'Integration'],
      result: '80% reduction in manual workflows for 30+ businesses',
    },
  ],

  /* ── Testimonials ────────────────────────────────────── */
  testimonials: [
    {
      text: 'Trineeb Tech transformed our entire real estate operations. The CRM system they built has become the backbone of our business. Exceptional quality and professionalism throughout.',
      name: 'Ahmed Al-Rashid',
      company: 'Al-Rashid Properties',
      project: 'CRM & Property Portal',
      initials: 'AR',
    },
    {
      text: 'The e-learning platform Trineeb Tech developed exceeded all expectations. Our student engagement increased by 200% and the mobile app is simply outstanding.',
      name: 'Dr. Fatima Hassan',
      company: 'Bright Future Academy',
      project: 'LMS Platform & Mobile App',
      initials: 'FH',
    },
    {
      text: 'Working with Trineeb Tech was a game-changer. Their AI automation solution eliminated hours of manual work. Highly recommend for any business serious about digital transformation.',
      name: 'Marcus Wellington',
      company: 'Wellington Enterprises',
      project: 'AI & Business Automation',
      initials: 'MW',
    },
    {
      text: 'The e-commerce platform delivered was beyond our expectations — fast, beautiful, and incredibly powerful. Sales increased by 180% in the first three months after launch.',
      name: 'Priya Sharma',
      company: 'LuxeStyle Boutique',
      project: 'E-Commerce Platform',
      initials: 'PS',
    },
    {
      text: "Our hospital management system runs flawlessly. Trineeb Tech's team understood our complex requirements and delivered a solution that genuinely improves patient care.",
      name: 'Dr. Samuel Okafor',
      company: 'MediCore Hospital Group',
      project: 'Healthcare Software',
      initials: 'SO',
    },
    {
      text: 'From the initial consultation to the final launch, the experience was premium. Trineeb Tech are true professionals who deliver on every promise. Absolutely world-class.',
      name: 'Lisa Chen',
      company: 'Chen Global Holdings',
      project: 'Corporate Website & ERP',
      initials: 'LC',
    },
  ],

  /* ── Stats ───────────────────────────────────────────── */
  stats: [
    { icon: 'fa-solid fa-check-circle',  value: 250,  suffix: '+', label: 'Projects Delivered' },
    { icon: 'fa-solid fa-star',          value: 98,   suffix: '%', label: 'Client Satisfaction Rate' },
    { icon: 'fa-solid fa-industry',      value: 15,   suffix: '+', label: 'Industries Served' },
    { icon: 'fa-solid fa-calendar',      value: 8,    suffix: '+', label: 'Years of Experience' },
    { icon: 'fa-solid fa-code',          value: 500,  suffix: '+', label: 'Technology Solutions' },
  ],

};
