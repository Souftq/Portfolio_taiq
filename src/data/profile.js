// =============================================================
//  TES INFORMATIONS PERSONNELLES  /  YOUR PERSONAL INFO
//  👉 Modifie librement les valeurs ci-dessous. Chaque texte
//     possède une version française (fr) et anglaise (en).
// =============================================================

export const profile = {
  // Nom affiché partout
  name: 'Soufiane Taiq',

  // Coordonnées / liens (laisse vide '' pour masquer un lien)
  email: 'taiqsoufiane7@gmail.com',
  phone: '+33 7 65 78 17 92', 
  location: {
    fr: 'Le Mans, France',
    en: 'France ',
  },

  // Liens réseaux — l'icône s'affiche seulement si l'URL est renseignée
  socials: {
    github: 'https://github.com/Souftq',
    linkedin: 'https://www.linkedin.com/in/soufiane-taiq-7b4162372', // ex: 'https://linkedin.com/in/...'
    twitter: '',
    website: '',
  },

  // Lien vers ton CV : place le fichier "TaiqCV.pdf" dans le dossier /public
  resumeUrl: '/TaiqCV.pdf',

  // Titre / accroche affichés dans la section Hero
  role: {
    fr: 'Élève-ingénieur en informatique (alternance)',
    en: 'Software Engineering Student (apprenticeship)',
  },
  tagline: {
    fr: "Cycle ingénieur à l'ENSIM. Je conçois des applications web et logicielles, du frontend au backend.",
    en: 'Engineering student at ENSIM. I build web and software applications, from frontend to backend.',
  },

  // Paragraphe « À propos »
  about: {
    fr: "Admis au cycle ingénieur en informatique en alternance à l'ENSIM, je poursuis actuellement ma formation. Titulaire d'une Licence 2 Informatique (ISTIC Rennes), j'y ai consolidé mes compétences en programmation, en conception de systèmes et en résolution de problèmes. Ma formation à l'École Supérieure de Technologie de Meknès m'a permis d'explorer le développement web, la cybersécurité et l'intelligence artificielle. Mon objectif : devenir ingénieur informatique spécialisé.",
    en: "Admitted to the software engineering apprenticeship program at ENSIM, I am currently pursuing my studies. With a 2nd-year Computer Science degree (ISTIC Rennes), I strengthened my skills in programming, system design and problem solving. My studies at the Higher School of Technology in Meknès let me explore web development, cybersecurity and artificial intelligence. My goal: to become a specialized software engineer.",
  },
}

// Compétences — regroupées par catégorie. Ajoute/retire ce que tu veux.
export const skills = [
  {
    category: { fr: 'Langages', en: 'Languages' },
    items: ['Java', 'Python', 'JavaScript', 'C', 'PHP'],
  },
  {
    category: { fr: 'Web', en: 'Web' },
    items: ['HTML5', 'CSS3', 'SCSS', 'React', 'Next.js', 'Laravel'],
  },
  {
    category: { fr: 'Bases de données', en: 'Databases' },
    items: ['MySQL', 'Oracle', 'PL/SQL', 'SQLite'],
  },
  {
    category: { fr: 'Outils & Concepts', en: 'Tools & Concepts' },
    items: ['Git', 'Flask', 'Excel (VBA)', 'POO', 'Algorithmique'],
  },
  {
    category: { fr: 'Savoir-être', en: 'Soft skills' },
    items: ['Travail en équipe', 'Communication', 'Gestion du temps', 'Adaptabilité', 'Empathie'],
  },
]
