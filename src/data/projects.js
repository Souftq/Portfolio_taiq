

export const projects = [
  {
    id: 8,
    title: {
      fr: 'DEFAKE — Détection de désinformation climatique',
      en: 'DEFAKE — Climate Misinformation Detection',
    },
    description: {
      fr: "Plateforme web qui analyse un texte, une URL ou une image pour détecter les signaux de désinformation liée au climat. Le frontend React/TypeScript interroge une API FastAPI qui s'appuie sur un modèle de machine learning (TF-IDF) et restitue des indicateurs explicatifs (« flags ») : vocabulaire émotionnel, absence de source, appels au partage viral…",
      en: 'Web platform that analyzes text, a URL or an image to detect climate-related misinformation signals. The React/TypeScript frontend queries a FastAPI backend powered by a machine-learning model (TF-IDF), returning explainable indicators ("flags"): emotional wording, missing sources, viral-sharing calls…',
    },
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'Machine Learning', 'TF-IDF'],
    video: '/projects/defake.mp4',
    images: [
      '/projects/defake-1-analyse.webp',
      '/projects/defake-2-flags.webp',
      '/projects/defake-3-learn.webp',
    ],
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 1,
    title: {
      fr: 'BiblioGest — Bibliothèque en ligne',
      en: 'BiblioGest — Online Library',
    },
    description: {
      fr: "Plateforme de bibliothèque en ligne : recherche de livres, consultation de ressources numériques et achats sécurisés. Projet de fin d'études réalisé en équipe de 3 (~360h) — j'ai pris en charge l'interface (Next.js, Tailwind CSS) et l'authentification Clerk, les paiements Stripe étant synchronisés via webhooks.",
      en: 'Online library platform: book search, digital resources and secure purchases. Final-year project built by a team of 3 (~360h) — I handled the UI (Next.js, Tailwind CSS) and Clerk authentication, with Stripe payments synced via webhooks.',
    },
    tags: ['Next.js', 'Tailwind CSS', 'Clerk', 'Stripe'],
    video: '/projects/bibliogest.mp4',
    images: [
      '/projects/Accueil-biblio.webp',
      '/projects/Biblio.png',
      '/projects/FAQS.png',
      '/projects/Connexion.webp',
      '/projects/login.png',
    ],
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 2,
    title: {
      fr: "Site web — Cabinet d'architecture Oculus",
      en: 'Website — Oculus Architecture Studio',
    },
    description: {
      fr: "Site vitrine d'un cabinet d'architecture (projet de fin d'études en entreprise). Architecture React modulaire (composants réutilisables, hooks, context), style SCSS en méthodologie BEM, et formulaire de contact connecté à Firebase. Design entièrement responsive.",
      en: 'Showcase website for an architecture studio (company final-year project). Modular React architecture (reusable components, hooks, context), SCSS styling with the BEM methodology, and a contact form connected to Firebase. Fully responsive design.',
    },
    tags: ['React', 'SCSS', 'Firebase'],
    images: [
      '/projects/Oculus1.webp',
      '/projects/Oculus2.png',
      '/projects/Oculus3.webp',
      '/projects/Oculus4.png',
      '/projects/Oculus5.webp',
      '/projects/Oculus6.png',
      '/projects/Oculus7.png',
    ],
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 3,
    title: {
      fr: 'Jeu Tower Defense',
      en: 'Tower Defense Game',
    },
    description: {
      fr: "Jeu de type Tower Defense en Java, réalisé dans le cadre d'un module de programmation orientée objet. Conception objet (héritage, polymorphisme), pathfinding (A*), gestion des vagues d'ennemis et des ressources, sur plusieurs niveaux avec interface graphique (StdRaw).",
      en: 'A Tower Defense game in Java built for an object-oriented programming course. OOP design (inheritance, polymorphism), pathfinding (A*), enemy-wave and resource management across multiple levels, with a graphical interface (StdRaw).',
    },
    tags: ['Java', 'POO', 'A*', 'StdRaw'],
    images: ['/projects/TowerDefense.png'],
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 9,
    title: {
      fr: 'PC SHOP — E-commerce de PC',
      en: 'PC SHOP — PC E-commerce',
    },
    description: {
      fr: "Boutique en ligne d'ordinateurs développée avec Angular : catalogue avec filtres (type, marque, RAM, processeur, prix) et résultats classés par pertinence, configurateur assisté qui recommande un PC selon l'usage, panier avec gestion des quantités et authentification.",
      en: 'Online computer store built with Angular: catalog with filters (type, brand, RAM, CPU, price) and relevance-ranked results, a guided configurator that recommends a PC based on usage, a cart with quantity management and authentication.',
    },
    tags: ['Angular', 'TypeScript', 'E-commerce'],
    video: '/projects/pcshop.mp4',
    images: [
      '/projects/pcshop-1-accueil.png',
      '/projects/pcshop-2-catalogue.png',
      '/projects/pcshop-3-config-assistee.png',
      '/projects/pcshop-4-panier.png',
      '/projects/pcshop-5-connexion.png',
    ],
    github: '',
    demo: '',
    featured: false,
  },
  {
    id: 7,
    title: {
      fr: 'Bloc Notes — Application de notes',
      en: 'Bloc Notes — Notes App',
    },
    description: {
      fr: "Application web de prise de notes avec espace personnel : inscription, connexion, gestion du profil et création/consultation de notes. Développée avec Laravel (authentification via Breeze), vues Blade et Tailwind CSS, données stockées en base MySQL.",
      en: 'Notes-taking web app with a personal space: sign up, log in, profile management and create/view notes. Built with Laravel (Breeze authentication), Blade views and Tailwind CSS, with data stored in a MySQL database.',
    },
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    video: '/projects/blocnotes.mp4',
    images: [
      '/projects/Creer-une-note.png',
      '/projects/LoginBlocNOtes.png',
      '/projects/RegisterBlocNotes.png',
      '/projects/Profile_blocNotes.png',
    ],
    github: '',
    demo: '',
    featured: false,
  },
  {
    id: 4,
    title: {
      fr: 'BikeShop — E-commerce',
      en: 'BikeShop — E-commerce',
    },
    description: {
      fr: "Site e-commerce développé avec Flask : authentification, panier d'achat et base de données SQLite. Génération de pages statiques via Pelican.",
      en: 'E-commerce website built with Flask: authentication, shopping cart and SQLite database. Static page generation using Pelican.',
    },
    tags: ['Python', 'Flask', 'SQLite', 'Pelican'],
    images: ['/projects/Bikeshop.jpeg'],
    github: '',
    demo: '',
    featured: false,
  },
  {
    id: 5,
    title: {
      fr: 'Application Musées',
      en: 'Museums App',
    },
    description: {
      fr: 'Application de gestion de musées développée en Java Swing : interface CRUD complète, export PDF et gestion des données via une interface graphique Swing.',
      en: 'Museum management application built with Java Swing: full CRUD interface, PDF export and data management through a Swing GUI.',
    },
    tags: ['Java', 'Swing', 'CRUD', 'PDF'],
    images: ['/projects/ApplicationMusee.jpeg'],
    github: '',
    demo: '',
    featured: false,
  },
  {
    id: 6,
    title: {
      fr: 'Application VBA — Gestion des congés',
      en: 'VBA App — Leave Management',
    },
    description: {
      fr: "Réalisée lors d'un stage à la Préfecture de Marrakech : application Excel VBA pour la gestion des demandes de congés, avec enregistrement des données dans un tableau pour un suivi efficace.",
      en: 'Built during an internship at the Marrakech Prefecture: an Excel VBA application to manage leave requests, recording data in a spreadsheet for efficient tracking.',
    },
    tags: ['Excel', 'VBA'],
    images: ['/projects/VBA-application.jpeg'],
    github: '',
    demo: '',
    featured: false,
  },
]
