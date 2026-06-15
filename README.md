# Sawyer Portfolio — Deploy to Vercel via GitHub (No Computer Needed)

---

## 📁 Where does sawyer.png go?

Place `sawyer.png` in the **`public/`** folder:

```
sawyer-portfolio/
  public/
    sawyer.png      ← PUT IT HERE
    manifest.json
    sw.js
  src/
  index.html
  ...
```

It's used as the browser tab favicon, iOS home screen icon, Android PWA icon, and splash icon automatically.

---

## Step 1 — Upload to GitHub

1. Go to **github.com** → sign in → tap **+** → **New repository**
2. Name it `sawyer-portfolio`, set **Public**, tap **Create repository**
3. On the repo page, tap **uploading an existing file**
4. Unzip `sawyer-portfolio.zip` on your device first, then upload:
   - Root files: `index.html`, `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `README.md`
   - For `src/` folder: type `src/` before the filename when uploading (e.g. `src/App.jsx`)
   - For `public/` folder: type `public/` before each file (e.g. `public/sawyer.png`)
5. Commit with message `"initial commit"`

> **Tip:** If you press `.` on your GitHub repo, it opens github.dev where you can drag-and-drop the whole unzipped folder at once.

---

## Step 2 — Set the API key in Vercel

1. Go to **vercel.com** → sign in with GitHub
2. Tap **Add New Project** → import `sawyer-portfolio`
3. **Before deploying**, open **Environment Variables** and add:
   - **Name:** `VITE_GROQ_API_KEY`
   - **Value:** `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`
   - Select all environments (Production, Preview, Development)
4. Framework preset should auto-detect as **Vite**
5. Tap **Deploy** — done!

Your site will be live at something like `sawyer-portfolio.vercel.app`

---

## Updating later

Push any change to GitHub → Vercel automatically redeploys. No terminal needed.

## Rotating the API key

In Vercel dashboard → your project → **Settings** → **Environment Variables** → edit `VITE_GROQ_API_KEY` → redeploy.
