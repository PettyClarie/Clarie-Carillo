# Clarie Carillo — Fixed Personal Portfolio

This corrected package keeps **all files, including the four photos, in the same root folder**. This avoids the common GitHub Pages issue where the HTML is uploaded but the `images` folder is missing or nested in the wrong place.

## Files to upload together
- `index.html`
- `style.css`
- `app.js`
- `logo.svg`
- `clarie-portrait.jpg`
- `clarie-smile.jpg`
- `clarie-laugh.jpg`
- `clarie-outing.jpg`

Do not rename the files. Upload all of them into the same repository root (the main page where `index.html` is located).

## What was checked/fixed
- Updated all image paths to point to root-level photo files.
- Kept the custom CC logo and favicon.
- Corrected gradient background layering so the animated gradient can show behind the page.
- Checked the greeting, theme toggle, responsive menu, gallery lightbox, Escape-to-close, and current-year scripts.
- Added defensive JavaScript checks so a missing optional element does not stop other features.
- Kept responsive layouts and reduced-motion support.

## Publish / update on GitHub Pages
1. Open your GitHub repository.
2. Upload/replace all eight files listed above in the repository root.
3. If GitHub asks, confirm that you want to replace the existing files.
4. Open **Settings → Pages** and make sure deployment uses branch `main` and folder `/(root)`.
5. Wait for deployment, then refresh your website with **Ctrl + F5** (Windows) to clear the old cached page.

Your website address is usually `https://YOUR-USERNAME.github.io` for a repository named `YOUR-USERNAME.github.io`.

## Before publishing
Replace `your-email@example.com` in `index.html` with your email address.
