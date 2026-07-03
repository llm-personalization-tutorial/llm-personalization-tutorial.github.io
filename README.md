# KDD 2026 Tutorial Website

This repository contains the static GitHub Pages website for:

**From Generic Intelligence to Personalized AI: A Tutorial on Foundations of LLM Personalization**

Website title:

**KDD 2026 Tutorial | LLM Personalization**

The GitHub organization is named `llm-personalization-tutorial`. The repository name is `llm-personalization-tutorial.github.io`. The final public website URL is:

```text
https://llm-personalization-tutorial.github.io/
```

## Project Overview

This is an academic tutorial landing page for the ACM SIGKDD 2026 lecture style tutorial on LLM personalization. The site presents the tutorial title, abstract, motivation, outline, tutorial schedule, presenters, materials, citation, and contact information.

The current page intentionally does not include separate `TUTORIAL INFORMATION` or `VISUAL OVERVIEW` sections. Confirmed tutorial metadata is shown in the hero snapshot panel, and the standalone cover image section has been removed.

The hero snapshot panel currently omits the `Location` row by design. The location value is still recorded here for future maintenance.

Confirmed tutorial information currently used by the website:

- Conference: `ACM SIGKDD 2026`
- Session Type: `Lecture Style Tutorial`
- Date: `Monday, August 10, 2026`
- Time: `9:00 AM – 12:00 PM`
- Duration: `3-hour tutorial`
- Location: `No Specified Location`
- Venue: `Jeju Island, Republic of Korea`

## Directory Structure

```text
kdd2026-tutorial-site/
├── index.html
├── README.md
├── .gitignore
├── .nojekyll
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── img/
    │   ├── cover.jpg
    │   └── presenters/
    │       ├── jianxin-li.png
    │       ├── li-sun.png
    │       ├── phillip-yu.png
    │       ├── qingkai-zeng.png
    │       ├── ruijie-wang.jpg
    │       ├── xuefei-wang.jpg
    │       └── yutong-ye.png
    └── files/
        └── LLMPersonalization_Tutorial_KDD2026.pdf
```

## Local Preview

Run a local static server:

```bash
cd "/Users/grsxsa/2026 Spring/KDD Tutorial/kdd2026-tutorial-site"
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment to GitHub Pages

Organization:

```text
llm-personalization-tutorial
```

Repository:

```text
llm-personalization-tutorial.github.io
```

Remote URL:

```text
https://github.com/llm-personalization-tutorial/llm-personalization-tutorial.github.io.git
```

First push:

```bash
cd "/Users/grsxsa/2026 Spring/KDD Tutorial/kdd2026-tutorial-site"
git init
git add .
git commit -m "Initial KDD 2026 tutorial website"
git branch -M main
git remote add origin https://github.com/llm-personalization-tutorial/llm-personalization-tutorial.github.io.git
git push -u origin main
```

If `origin` already exists:

```bash
git remote set-url origin https://github.com/llm-personalization-tutorial/llm-personalization-tutorial.github.io.git
git push -u origin main
```

GitHub Pages settings:

- Go to repository `Settings`
- Click `Pages`
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`
- Save
- Visit `https://llm-personalization-tutorial.github.io/`

## Manual Preparation Checklist

- Confirm final KDD room/location if the website should display room/location again
- Confirm final speaker assignment if needed
- Confirm exact break duration if needed
- Add final slides
- Add reading list
- Add official KDD tutorial page link if available
- Check DOI and BibTeX against final ACM DL record
- Review all presenter affiliations before publication
- Review presenter photos under `assets/img/presenters/`
- Review presenter homepage links
- Keep Xuefei Wang without a homepage link unless a public homepage becomes available
- Adjust section label size through `--font-section-kicker` in `assets/css/style.css`

## Acceptance Checklist

- Open `http://localhost:8000`
- Hero section displays correct title
- Hero eyebrow says only `ACM SIGKDD 2026 Tutorial`
- Keywords appear above the CTA buttons in the hero section
- Section labels such as `ABSTRACT`, `WHY THIS TUTORIAL`, `PRESENTERS`, and `CONTACT` are readable at the intended size
- Date is `Monday, August 10, 2026`
- Time is `9:00 AM – 12:00 PM`
- Hero snapshot does not show a `Location` row
- Page says `3-hour tutorial`
- `TUTORIAL INFORMATION` section has been removed
- `VISUAL OVERVIEW` section has been removed
- Website shows 7 tutorial team members in the presenter section
- Yutong Ye appears in the fourth presenter position
- Presenter biographies use the expanded biography text from the tutorial PDF
- Presenter photos display correctly
- Ruijie Wang, Qingkai Zeng, Yutong Ye, Li Sun, Jianxin Li, and Phillip S. Yu have Homepage links
- Xuefei Wang has no homepage button
- PDF link opens correctly
- Tutorial Resources does not include a Video card
- Schedule matches the confirmed 09:00–12:00 structure:
  - `09:00 – 10:00` Part I & Part II
  - `10:00 – 10:20` Coffee Break
  - `10:20 – 11:20` Part III & Part IV
  - `11:20 – 12:00` Q&A and Closing Remarks
- Each presenter occupies one full-width row
- Presenter rows include a dedicated photo/placeholder area
- Only homepage information is shown for presenter links
- No presenter card grid remains
- Navigation anchor links work
- Top navigation does not include a `Citation` link
- Mobile layout is not broken
- Citation is visible and copyable
- README deployment steps are clear

## Maintenance Notes

- Update `index.html` for content changes such as room, official KDD page link, materials, presenter photos, and presenter homepage links.
- Update `assets/css/style.css` for visual changes.
- Update `assets/js/main.js` only for lightweight interactions such as copy buttons or missing-asset fallbacks.
- Keep `.nojekyll` so GitHub Pages serves static assets directly.
- Keep `assets/files/LLMPersonalization_Tutorial_KDD2026.pdf` as the tutorial paper link target unless the file is renamed, then update all references in `index.html`.
- The cover image file may remain in `assets/img/cover.jpg` as source material, but it is no longer displayed as a standalone Visual Overview section.
