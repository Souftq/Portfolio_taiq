// =============================================================
//  TES PROJETS RÉALISÉS  /  YOUR COMPLETED PROJECTS
//  👉 Duplique un bloc { ... } pour ajouter un projet.
//     - title / description : versions fr + en
//     - tags    : technologies utilisées
//     - image   : URL d'une image OU '' (un dégradé s'affiche sinon)
//     - github  : lien du dépôt   (laisse '' pour masquer)
//     - demo    : lien démo live   (laisse '' pour masquer)
//     - featured: true => mis en avant
// =============================================================

export const projects = [
  {
    id: 1,
    title: {
      fr: "Site web — Cabinet d'architecture Oculus",
      en: 'Website — Oculus Architecture Studio',
    },
    description: {
      fr: "Projet de fin d'études (PFE) : conception et développement du site web d'un cabinet d'architecture, urbanisme et décoration. Mise en valeur interactive des plans et maquettes, et intégration d'une fonctionnalité de candidature en ligne pour les stages.",
      en: "Final-year project (PFE): design and development of the website for an architecture, urban planning and interior design studio. Interactive showcase of plans and models, plus an online internship application feature.",
    },
    tags: ['React', 'SCSS'],
    image: '',
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 2,
    title: {
      fr: 'Jeu Tower Defense',
      en: 'Tower Defense Game',
    },
    description: {
      fr: "Jeu de type Tower Defense développé en Java avec interface graphique. Programmation orientée objet, pathfinding (algorithme A*) et gestion de vagues d'ennemis.",
      en: 'A Tower Defense game built in Java with a graphical interface. Object-oriented programming, pathfinding (A* algorithm) and enemy wave management.',
    },
    tags: ['Java', 'POO', 'A* / Pathfinding'],
    image: '',
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 3,
    title: {
      fr: 'BikeShop — E-commerce',
      en: 'BikeShop — E-commerce',
    },
    description: {
      fr: "Site e-commerce développé avec Flask : authentification, panier d'achat et base de données SQLite. Génération de pages statiques via Pelican.",
      en: 'E-commerce website built with Flask: authentication, shopping cart and SQLite database. Static page generation using Pelican.',
    },
    tags: ['Python', 'Flask', 'SQLite', 'Pelican'],
    image: '',
    github: '',
    demo: '',
    featured: false,
  },
  {
    id: 4,
    title: {
      fr: 'Application Musées',
      en: 'Museums App',
    },
    description: {
      fr: 'Application de gestion de musées développée en Java Swing : interface CRUD complète, export PDF et gestion des données via une interface graphique Swing.',
      en: 'Museum management application built with Java Swing: full CRUD interface, PDF export and data management through a Swing GUI.',
    },
    tags: ['Java', 'Swing', 'CRUD', 'PDF'],
    image: '',
    github: '',
    demo: '',
    featured: false,
  },
  {
    id: 5,
    title: {
      fr: 'Application VBA — Gestion des congés',
      en: 'VBA App — Leave Management',
    },
    description: {
      fr: "Réalisée lors d'un stage à la Préfecture de Marrakech : application Excel VBA pour la gestion des demandes de congés, avec enregistrement des données dans un tableau pour un suivi efficace.",
      en: 'Built during an internship at the Marrakech Prefecture: an Excel VBA application to manage leave requests, recording data in a spreadsheet for efficient tracking.',
    },
    tags: ['Excel', 'VBA'],
    image: '',
    github: '',
    demo: '',
    featured: false,
  },
]
