

export const profile = {

  name: 'Soufiane Taiq',

  email: 'taiqsoufiane7@gmail.com',
  phone: '+33 7 65 78 17 92', 
  location: {
    fr: 'Le Mans, France',
    en: 'France ',
  },

  socials: {
    github: 'https://github.com/Souftq',
    linkedin: 'https://www.linkedin.com/in/soufiane-taiq-7b4162372', 
    twitter: '',
    website: '',
  },

  resumeUrl: '/TaiqCV.pdf',

  role: {
    fr: 'Étudiant Ingénieur en Informatique',
    en: 'Software Engineering Student',
  },
  tagline: {
    fr: "Cycle ingénieur à l'ENSIM — en recherche active d'une alternance. Je conçois des applications web et logicielles, du frontend au backend.",
    en: 'Engineering student at ENSIM — actively looking for an apprenticeship. I build web and software applications, from frontend to backend.',
  },

  about: {
    fr: "Étudiant en cycle ingénieur informatique à l'ENSIM, je suis en recherche active d'une alternance (rythme 4 semaines école / 4 semaines entreprise). Titulaire d'une Licence 2 Informatique (ISTIC Rennes), j'y ai consolidé mes compétences en programmation, en conception de systèmes et en résolution de problèmes. Ma formation à l'École Supérieure de Technologie de Meknès m'a permis d'explorer le développement web, la cybersécurité et l'intelligence artificielle. Mon objectif : devenir ingénieur informatique spécialisé.",
    en: "Computer science engineering student at ENSIM, actively looking for an apprenticeship (4 weeks school / 4 weeks company rhythm). With a 2nd-year Computer Science degree (ISTIC Rennes), I strengthened my skills in programming, system design and problem solving. My studies at the Higher School of Technology in Meknès let me explore web development, cybersecurity and artificial intelligence. My goal: to become a specialized software engineer.",
  },
}

import javaIcon from 'devicon/icons/java/java-original.svg'
import pythonIcon from 'devicon/icons/python/python-original.svg'
import jsIcon from 'devicon/icons/javascript/javascript-original.svg'
import tsIcon from 'devicon/icons/typescript/typescript-original.svg'
import cIcon from 'devicon/icons/c/c-original.svg'
import phpIcon from 'devicon/icons/php/php-original.svg'
import htmlIcon from 'devicon/icons/html5/html5-original.svg'
import cssIcon from 'devicon/icons/css3/css3-original.svg'
import sassIcon from 'devicon/icons/sass/sass-original.svg'
import reactIcon from 'devicon/icons/react/react-original.svg'
import nextIcon from 'devicon/icons/nextjs/nextjs-original.svg'
import angularIcon from 'devicon/icons/angular/angular-original.svg'
import laravelIcon from 'devicon/icons/laravel/laravel-original.svg'
import mysqlIcon from 'devicon/icons/mysql/mysql-original.svg'
import oracleIcon from 'devicon/icons/oracle/oracle-original.svg'
import sqliteIcon from 'devicon/icons/sqlite/sqlite-original.svg'
import gitIcon from 'devicon/icons/git/git-original.svg'
import flaskIcon from 'devicon/icons/flask/flask-original.svg'
import fastapiIcon from 'devicon/icons/fastapi/fastapi-original.svg'


export const skills = [
  {
    category: { fr: 'Langages', en: 'Languages' },
    items: [
      { name: 'Java', icon: javaIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'TypeScript', icon: tsIcon },
      { name: 'C', icon: cIcon },
      { name: 'PHP', icon: phpIcon },
    ],
  },
  {
    category: { fr: 'Web', en: 'Web' },
    items: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'SCSS', icon: sassIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Next.js', icon: nextIcon, invertDark: true },
      { name: 'Angular', icon: angularIcon },
      { name: 'Laravel', icon: laravelIcon },
    ],
  },
  {
    category: { fr: 'Bases de données', en: 'Databases' },
    items: [
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'Oracle', icon: oracleIcon },
      { name: 'PL/SQL', lucide: 'Database' },
      { name: 'SQLite', icon: sqliteIcon },
    ],
  },
  {
    category: { fr: 'Outils & Concepts', en: 'Tools & Concepts' },
    items: [
      { name: 'Git', icon: gitIcon },
      { name: 'Flask', icon: flaskIcon, invertDark: true },
      { name: 'FastAPI', icon: fastapiIcon },
      { name: { fr: 'ML (TF-IDF)', en: 'ML (TF-IDF)' }, lucide: 'Brain' },
      { name: 'Excel (VBA)', lucide: 'FileSpreadsheet' },
      { name: { fr: 'POO', en: 'OOP' }, lucide: 'Boxes' },
      { name: { fr: 'Algorithmique', en: 'Algorithms' }, lucide: 'Binary' },
    ],
  },
  {
    category: { fr: 'Savoir-être', en: 'Soft skills' },
    items: [
      { name: { fr: 'Travail en équipe', en: 'Teamwork' }, lucide: 'Users' },
      { name: { fr: 'Communication', en: 'Communication' }, lucide: 'MessagesSquare' },
      { name: { fr: 'Gestion du temps', en: 'Time management' }, lucide: 'Clock' },
      { name: { fr: 'Adaptabilité', en: 'Adaptability' }, lucide: 'RefreshCw' },
      { name: { fr: 'Empathie', en: 'Empathy' }, lucide: 'HeartHandshake' },
    ],
  },
]
