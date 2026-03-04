# Deploying to GitHub Pages

## Prerequisites
- Node.js 18+
- A GitHub account
- Git installed locally

## Steps

### 1. Create a GitHub repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `TrishanWebsite` (must match `base` in `vite.config.js`)
3. Set visibility to Public (required for free GitHub Pages)
4. Do **not** initialise with README

### 2. Update homepage in package.json
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/TrishanWebsite"
```

### 3. Initialise git and push
```bash
cd ~/claude-projects/TrishanWebsite
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/TrishanWebsite.git
git push -u origin main
```

### 4. Deploy
```bash
npm run deploy
```

This will:
- Run `npm run build` to produce the `dist/` folder
- Publish the `dist/` folder to the `gh-pages` branch

### 5. Enable GitHub Pages in repository settings
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `gh-pages` / folder: `/ (root)`
4. Click **Save**

Your site will be live at:
`https://YOUR_GITHUB_USERNAME.github.io/TrishanWebsite`

---

## Re-deploying after changes
```bash
npm run deploy
```

## Local development
```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # build production assets to dist/
npm run preview   # preview the production build locally
```
