# Portfolio Redesign — Design Spec
**Date:** 2026-04-18  
**Approach:** Option A — Refine in place (same dark cyan/slate aesthetic, surgical fixes)

---

## 1. Goals

Transform the existing portfolio into a professional, recruiter-ready site that clearly communicates:
- Who Manickavasan is
- What he builds (live projects with proof)
- His experience
- How to contact him

Impress a recruiter within 10 seconds.

---

## 2. Personal Data

| Field | Value |
|---|---|
| Full name | Manickavasan Rajendran (Vasan) |
| Email | manickavasan@icloud.com |
| LinkedIn | https://linkedin.com/in/manickavasan |
| GitHub | https://github.com/vasan.nz |
| Location | Hamilton, New Zealand |
| Visa | NZ Student Visa with legal work rights; Post-Study Work Visa eligible June 2026 |

---

## 3. Page Structure

**Route: `/` (Home)**

1. Navbar
2. Hero
3. Projects ← primary focus, moved above experience
4. Experience
5. Skills
6. Contact

**Removed sections:** Roadmap, About (content folded into Hero bio)

**Route: `/blog`** — kept as-is with fixes (see Section 8)

---

## 4. Navbar

- Logo: `MANICKAVASAN` (links to `/`)
- Right side: `Blog` (navigates to `/blog` via React Router) | `Let's Connect` (scrolls to `#contact`)
- Remove: "NZ Working Rights" button — visa info belongs in Contact only

---

## 5. Hero

**Layout:** Two-column grid (existing layout kept)

**Left column:**
- Badge: `Actively building · AI Workflow Intern`
- Headline: `Manickavasan Rajendran`
- Sub-label: `— Vasan`
- Role line: `Software Developer & AI Workflow Analyst`
- Bio:
  > I build full-stack web applications and design AI-assisted workflows. Currently completing my Master of IT at the University of Waikato while gaining real-world experience at Insignia Design & Architecture. Available for work — NZ student visa with legal work rights, Post-Study Work Visa eligible from June 2026.
- CTAs: `View Projects →` (scrolls to `#projects`) | `Contact Me` (scrolls to `#contact`)

**Right column (stat card):**
- Replace vague "Portfolio Snapshot" with 3 clean stats:
  - Live Projects: 2
  - Current Role: AI Workflow Intern
  - Location: Hamilton, NZ

**Remove:** The 3 bottom stat cards referencing "Odoo internship"

---

## 6. Projects

**Section heading eyebrow:** `Projects`  
**Title:** `Real software built to solve real problems`

**Card 1 — Job Application Management System**
- Label: `Live Project`
- Description: Full-stack multi-user app for tracking job applications. Secure auth with email verification, structured workflow for status tracking, follow-ups, and notes.
- Stack tags: `React` `Full-Stack`
- CTA: `View Live →` → `https://manickavasan.com/job-app`

**Card 2 — The Thinking Archive**
- Label: `Live Project`
- Description: Personal blog platform with search, pagination, and structured content management. Built with React, focused on performance and readability.
- Stack tags: `React` `Tailwind CSS` `Vite`
- CTA: `View Live →` → `https://manickavasan.com/blog`

No placeholder cards. No filler.

---

## 7. Experience

**Card 1 — AI Workflow Analyst Intern**
- Company: Insignia Design & Architecture Ltd
- Period: Mar 2026 – Present
- Bullet points (all 6 from brief):
  - Analysed end-to-end architectural project workflows from client enquiry to delivery
  - Identified inefficiencies in coordination, communication, and manual follow-ups
  - Mapped current-state processes and highlighted delays and duplicated efforts
  - Designed AI-assisted workflow solutions including automated email drafting and notifications
  - Proposed a future-state workflow integrating AI tools to improve turnaround time
  - Evaluated feasibility and provided a practical 3–6 month implementation roadmap

**Card 2 — Merchandising Assistant**
- Company: New World NZ
- Period: Feb 2026 – Present
- Bullet points:
  - Replenishing and merchandising stock according to store standards
  - Assisting customers and maintaining shop floor presentation

**Removed:** Otibro Techni Pvt Ltd internship — completely gone

---

## 8. Skills

Four pill-tag groups (compact, no large cards):

- **Programming:** JavaScript (ES6+), Python, SQL
- **Frontend:** React, HTML5, CSS3, Tailwind CSS
- **Tools & Platforms:** Git, VS Code, AWS (EC2 basics)
- **Workflow & AI:** Process mapping, AI-assisted development, Prompt engineering, Claude, ChatGPT

---

## 9. Contact

- Email: `manickavasan@icloud.com`
- LinkedIn: `linkedin.com/in/manickavasan`
- GitHub: `github.com/vasan.nz` (shown publicly — was previously commented out)
- Visa note: Student visa / Post-Study Work Visa eligible June 2026
- Remove: CV download placeholder (no file exists)

---

## 10. Blog Page (`/blog`)

- Keep existing layout and functionality (search, pagination, dark/light mode toggle, modal reader)
- Remove: notice popup ("placeholder content" warning) — makes the page look unfinished
- Remove: all dummy posts from `src/posts/dummy.jsx`
- Keep: `ReactPost` (real post)
- Delete file: `src/posts/dummy.jsx`

---

## 11. Routing Fix

**Problem:** Direct URL access to `/blog` returns 404 on Hostinger (Apache) because the SPA fallback is missing.

**Fix:** Add `.htaccess` at project root (deployed alongside `dist/`):

```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

The React Router config (`BrowserRouter` + `Routes`) is already correct — no changes needed to `main.jsx` or `App.jsx`.

---

## 12. Files to Delete

- `src/main copy.jsx`
- `src/posts/dummy.jsx`

---

## 13. Files to Modify

| File | Changes |
|---|---|
| `src/pages/home.jsx` | Full content overhaul per sections 4–9 |
| `src/components/Navbar.jsx` | Remove visa button, simplify |
| `src/pages/blog.jsx` | Remove notice popup |
| `src/posts/index.js` | Remove dummy posts import |
| `.htaccess` | New file — Apache SPA fallback |

---

## 14. What Does NOT Change

- Tech stack: React + Vite + Tailwind CSS + React Router
- Visual style: dark slate/cyan aesthetic
- `blog.jsx` layout and functionality
- `Footer.jsx`
- `index.css`
- `main.jsx`
- `App.jsx`
