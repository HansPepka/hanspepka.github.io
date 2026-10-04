# Hans — Developer Portfolio

My personal portfolio, built with **Next.js 14** and **Tailwind CSS**, exported as a static site and hosted on **GitHub Pages**.
Based on the free [Logsfolio](https://themewagon.com/themes/logsfolio/) template by Logging Studio.

---

## 1. Make it yours (no coding needed)

Almost everything lives in one file: **`public/data.json`**. Edit it, save, and the site updates.

| What | Where in `data.json` |
|---|---|
| Name, title, location, bio | `personalInfo` |
| Social links + email | `contactInfo` |
| Jobs / internships | `workExperience` |
| Projects | `projects` |
| Skills (add or rename categories freely) | `skills` |
| Schools, diplomas, certificates | `education` |
| Quotes from people you've worked with | `testimonials` |
| Turn a whole section on/off | `visual.home.sections` |

**Things to fill in before you publish**

- [ ] Replace every `your-username` with your GitHub username (and your LinkedIn / X handles).
- [ ] Put your real email in `contactInfo.email`.
- [ ] Fill in `education` (it currently has placeholder text).
- [ ] Check the Capto start date in `workExperience` and that you're happy to show the Capto project publicly.

### Your profile photo

Save your photo as **`public/assets/profile.jpg`** (`.png` or `.webp` also work). That's it — the site picks it up automatically on the next build.
Until a photo is there, a circle with your initials is shown instead. A square photo of at least 600×600 px looks best.

### Social media icons

The icons use the official brand logos and colours (GitHub, LinkedIn, X, Instagram, Facebook, WhatsApp, Gmail).
**An icon only appears if its link is filled in.** Leave a link as `""` to hide it. Examples:

```json
"instagram": "https://www.instagram.com/your-username",
"facebook": "https://www.facebook.com/your-username",
"whatsapp": "250788123456"
```

For WhatsApp you can give just the phone number with country code (no `+`, no spaces); it's turned into a `wa.me` link for you.
If your email is a Gmail address the Gmail logo is shown, otherwise a mail icon.

### Testimonials and blog

Both sections stay hidden until they have content.

- **Testimonials:** add real quotes to `testimonials` in `data.json` (put any avatar photos in `public/assets/`).
- **Blog:** copy the folder `src/app/blogs/_example-post`, rename the copy (e.g. `my-first-post`), edit it and set `isPublished: true`. Instructions are inside the file.

---

## 2. Run it on your computer

You need Node.js 18 or newer (`node -v` to check). From the project folder:

```bash
npm install      # first time only
npm run dev      # then open http://localhost:3000
```

The page reloads as you edit `data.json`. Stop the server with `Ctrl + C`.

To check the exact files that will be published:

```bash
npm run build    # creates the "out" folder
npm run preview  # serves "out" at http://localhost:3000
```

---

## 3. Publish on GitHub Pages

The included workflow (`.github/workflows/deploy.yml`) builds and publishes the site every time you push to `main`.

1. **Create a repository on GitHub.**
   - Name it **`<your-username>.github.io`** → your site will be at `https://<your-username>.github.io/` *(recommended)*.
   - Any other name (e.g. `portfolio`) also works → `https://<your-username>.github.io/portfolio/`. The sub-path is handled automatically.
   - Leave "Add a README" unticked.
2. **Push this project to it** (run inside the project folder):
   ```bash
   git init
   git add .
   git commit -m "First version of my portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. **Turn on Pages:** in the repo go to **Settings → Pages → Build and deployment → Source** and pick **GitHub Actions**.
4. Open the **Actions** tab. When the "Deploy to GitHub Pages" run shows a green tick (about 1–2 minutes), your site is live.
   If the first run started before step 3 and failed, click it and choose **Re-run all jobs**.

**Updating later:** edit, then `git add .`, `git commit -m "..."`, `git push`. The site redeploys by itself.

---

## Project structure

```
public/
  data.json            <- all your content
  assets/              <- photo, project images
src/
  app/page.tsx         <- the home page layout
  app/blogs/           <- blog posts (MDX)
  components/
    brandIcons.tsx     <- official social media logos
    profileAvatar.tsx  <- photo / initials circle
    logo.tsx           <- the "H" logo in the navbar
.github/workflows/deploy.yml  <- automatic GitHub Pages deploy
```

## Credits

- Design and original code: [Logging Studio](https://github.com/Logging-Studio), MIT licence, distributed by [ThemeWagon](https://themewagon.com).
- Brand icons: [Simple Icons](https://simpleicons.org) (CC0). Brand names and logos belong to their owners.
