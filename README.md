# Portfolio — Soufiane Taiq

Portfolio personnel bilingue (FR / EN) construit avec **React + Vite + Tailwind CSS**.
Responsive, avec **mode sombre** et **bascule de langue**.

## 🚀 Démarrer

```bash
npm install      # installer les dépendances (une seule fois)
npm run dev      # lancer le serveur de développement
```

Puis ouvre l'URL affichée (par défaut http://localhost:5173).

```bash
npm run build    # générer la version de production (dossier dist/)
npm run preview  # prévisualiser le build de production
```

## ✏️ Où mettre TES infos

Tout le contenu est centralisé dans `src/data/` — pas besoin de toucher au code :

| Fichier | Contenu |
|---|---|
| `src/data/profile.js` | Ton nom, e-mail, réseaux, accroche, « à propos », compétences |
| `src/data/projects.js` | Tes projets réalisés (titre, description, technos, liens) |
| `src/data/ui.js` | Les textes fixes de l'interface (FR / EN) |

Chaque texte a une version **`fr`** et **`en`**, par ex. :

```js
title: { fr: 'Mon projet', en: 'My project' }
```

### Ajouter un projet
Ouvre `src/data/projects.js` et duplique un bloc `{ ... }` dans le tableau `projects`.
- `image` : mets une URL d'image, ou laisse `''` (un dégradé s'affiche).
- `github` / `demo` : laisse `''` pour masquer le bouton.
- `featured: true` met le projet en avant.

### Ajouter ton CV
Place ton PDF dans le dossier `public/` (ex: `public/cv.pdf`) puis renseigne
`resumeUrl: '/cv.pdf'` dans `src/data/profile.js`.

## 🌐 Mettre en ligne (gratuit)
Le projet se déploie facilement sur **Vercel**, **Netlify** ou **GitHub Pages**.
Le plus simple : connecter ce dépôt GitHub à [Vercel](https://vercel.com) — build automatique à chaque `git push`.

## 🛠️ Stack
React 19 · Vite · Tailwind CSS 4 · lucide-react (icônes)