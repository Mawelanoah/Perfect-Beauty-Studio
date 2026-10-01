# Perfect Beauty Studio Website

## Deploy to GitHub Pages (IMPORTANT)

Your repo root must look like this:

```
Perfect-Beauty-Studio/
├── index.html
├── about.html
├── services.html
├── professionals.html
├── gallery.html
├── contact.html
├── booking.html
├── style.css          ← MUST be here (root)
├── script.js          ← MUST be here (root)
├── favicon.svg
├── favicon.ico
└── assets/
```

### Steps

1. Go to your GitHub repo: Perfect-Beauty-Studio
2. Delete ALL old files on GitHub
3. Upload every file from this folder to the **root** of the repo
   - Do NOT put files inside another folder called perfect-beauty-studio
4. Settings → Pages → Branch: main → Folder: / (root)
5. Wait 1–2 minutes
6. Hard refresh the site (Ctrl+Shift+R)

### Check that CSS loaded

Open this URL — you should see CSS code, NOT a 404 page:

https://mawelanoah.github.io/Perfect-Beauty-Studio/style.css

If you see 404, the style.css file is missing from the repo root.
