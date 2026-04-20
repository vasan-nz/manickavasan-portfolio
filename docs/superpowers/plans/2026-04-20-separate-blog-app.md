# Separate Blog App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract the blog into a standalone Vite React app at `D:/aa manickavasan/manickavasan-blog` that deploys to `manickavasan.com/blog/` and makes adding new posts as simple as pasting one object into `posts.js`.

**Architecture:** Single-page app with no router (blog is one page, posts open in a modal). Posts are plain JS objects in one data file — no JSX, no imports per post. Portfolio navbar updated to link to the absolute blog URL.

**Tech Stack:** React 19, Vite 7, Tailwind CSS v4 (@tailwindcss/vite), Framer Motion, Lucide React. Same versions as portfolio.

---

## File Map

**New project — `D:/aa manickavasan/manickavasan-blog/`**

| File | Responsibility |
|---|---|
| `package.json` | Project deps — same as portfolio |
| `vite.config.js` | `base: '/blog/'`, assetsDir: `blog-assets` |
| `index.html` | Entry HTML, title "The Thinking Archive" |
| `src/main.jsx` | ReactDOM root mount |
| `src/App.jsx` | Renders `<Blog />` directly, no router |
| `src/data/posts.js` | All posts as plain objects — the only file touched when adding posts |
| `src/pages/Blog.jsx` | Exact blog UI from current portfolio (search, pagination, modal, dark mode) |
| `src/components/Footer.jsx` | Same footer, dark/light props |
| `.htaccess` | Apache SPA fallback for the `/blog/` subdirectory |

**Modified in portfolio — `D:/aa manickavasan/manickavasan-portfolio/`**

| File | Change |
|---|---|
| `src/components/Navbar.jsx` | Blog `<Link to="/blog">` → `<a href="https://manickavasan.com/blog">` |
| `src/App.jsx` | Remove blog route and Blog import |
| `src/pages/home.jsx` | Update blog project card URL to `https://manickavasan.com/blog` (already correct) |

---

## Task 1: Scaffold new project

**Files:**
- Create: `D:/aa manickavasan/manickavasan-blog/package.json`
- Create: `D:/aa manickavasan/manickavasan-blog/vite.config.js`
- Create: `D:/aa manickavasan/manickavasan-blog/index.html`

- [ ] **Step 1: Create the project folder and package.json**

```bash
mkdir "D:/aa manickavasan/manickavasan-blog"
```

`D:/aa manickavasan/manickavasan-blog/package.json`:
```json
{
  "name": "manickavasan-blog",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.35.2",
    "lucide-react": "^0.577.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.2.1",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "tailwindcss": "^4.2.1",
    "vite": "^7.3.1"
  }
}
```

Note: No `react-router-dom` — blog has no routes.

- [ ] **Step 2: Create vite.config.js**

`D:/aa manickavasan/manickavasan-blog/vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/blog/',
  build: {
    assetsDir: 'blog-assets',
  },
})
```

`base: '/blog/'` is critical — ensures all asset paths resolve correctly when deployed to the `/blog/` subdirectory.

- [ ] **Step 3: Create index.html**

`D:/aa manickavasan/manickavasan-blog/index.html`:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Thinking Archive</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Install dependencies**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && npm install
```

Expected: `node_modules/` created, no errors.

- [ ] **Step 5: Commit**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && git init && git add package.json vite.config.js index.html && git commit -m "chore: scaffold blog app"
```

---

## Task 2: Create posts data file

**Files:**
- Create: `src/data/posts.js`

This is the only file a user touches to add a new post. Content is an array of strings (paragraphs) — no JSX required.

- [ ] **Step 1: Create `src/data/posts.js`**

```bash
mkdir -p "D:/aa manickavasan/manickavasan-blog/src/data"
```

`D:/aa manickavasan/manickavasan-blog/src/data/posts.js`:
```js
const posts = [
  {
    id: 1,
    title: "Why I Built My Portfolio Website First",
    date: "12 March 2026",
    excerpt:
      "My portfolio website became my first serious project and the starting point of my developer journey.",
    searchText:
      "portfolio website developer journey react structure layout design reusable components learn by building",
    content: [
      "Building my portfolio website first was an important decision in my developer journey. Instead of waiting until I felt ready, I decided to create something real that represented me.",
      "This project helped me understand how a website is structured, how sections connect, and how design affects the way people view my work.",
      "More than just a website, it became a practical learning experience. I started improving my React structure, layout design, reusable components, and styling choices.",
      "This portfolio is not only a place to showcase my work. It also represents my mindset: learn by building.",
    ],
  },
];

export default posts;
```

**How to add a new post:** Paste a new object at the TOP of the array (highest id = newest). The blog renders newest-first automatically.

```js
// Example new post — paste above the existing post:
{
  id: 2,
  title: "Your post title",
  date: "20 April 2026",
  excerpt: "One sentence summary shown on the card.",
  searchText: "keywords for search to find this post",
  content: [
    "First paragraph text.",
    "Second paragraph text.",
    "As many paragraphs as you need.",
  ],
},
```

- [ ] **Step 2: Commit**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && git add src/data/posts.js && git commit -m "feat: add posts data file"
```

---

## Task 3: Create CSS and entry files

**Files:**
- Create: `src/index.css`
- Create: `src/main.jsx`
- Create: `src/App.jsx`

- [ ] **Step 1: Create `src/index.css`**

`D:/aa manickavasan/manickavasan-blog/src/index.css`:
```css
@import "tailwindcss";

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 2: Create `src/main.jsx`**

`D:/aa manickavasan/manickavasan-blog/src/main.jsx`:
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 3: Create `src/App.jsx`**

`D:/aa manickavasan/manickavasan-blog/src/App.jsx`:
```jsx
import Blog from "./pages/Blog";

export default function App() {
  return <Blog />;
}
```

No router needed — blog is a single page.

- [ ] **Step 4: Commit**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && git add src/ && git commit -m "feat: add entry files"
```

---

## Task 4: Create Footer component

**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Create `src/components/Footer.jsx`**

```bash
mkdir -p "D:/aa manickavasan/manickavasan-blog/src/components"
```

`D:/aa manickavasan/manickavasan-blog/src/components/Footer.jsx`:
```jsx
export default function Footer({ darkMode = false }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        darkMode
          ? "mt-20 border-t border-slate-800 bg-slate-950"
          : "mt-20 border-t border-slate-200 bg-slate-50"
      }
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="max-w-md">
            <h3
              className={
                darkMode
                  ? "text-xl font-semibold tracking-tight text-slate-100"
                  : "text-xl font-semibold tracking-tight text-slate-900"
              }
            >
              The Thinking Archive
            </h3>
            <p
              className={
                darkMode
                  ? "mt-4 text-sm leading-7 text-slate-400"
                  : "mt-4 text-sm leading-7 text-slate-600"
              }
            >
              A personal space for ideas, experiences, and reflections written
              by Manickavasan.
            </p>
          </div>

          <div className="max-w-md">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Ownership
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-sm leading-7 text-slate-400"
                  : "mt-4 text-sm leading-7 text-slate-600"
              }
            >
              All content published in{" "}
              <span
                className={
                  darkMode ? "font-medium text-slate-100" : "font-medium text-slate-900"
                }
              >
                The Thinking Archive
              </span>{" "}
              is the intellectual property of Manickavasan and is published on{" "}
              <a
                href="https://manickavasan.com/blog"
                className={
                  darkMode
                    ? "font-medium text-slate-100 underline underline-offset-4 transition hover:text-slate-300"
                    : "font-medium text-slate-900 underline underline-offset-4 transition hover:text-slate-700"
                }
              >
                manickavasan.com
              </a>
              .
            </p>
          </div>
        </div>

        <div
          className={
            darkMode
              ? "mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500"
              : "mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500"
          }
        >
          © {year} Manickavasan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && git add src/components/Footer.jsx && git commit -m "feat: add Footer component"
```

---

## Task 5: Create Blog page

**Files:**
- Create: `src/pages/Blog.jsx`

This is the full blog UI — identical to the current portfolio blog page. Key differences:
- `content` renders as `{para}` strings via `.map()`, not JSX
- "Home" back button uses `href="https://manickavasan.com"` (absolute, not `/`)
- Imports posts from `../data/posts`

- [ ] **Step 1: Create `src/pages/Blog.jsx`**

```bash
mkdir -p "D:/aa manickavasan/manickavasan-blog/src/pages"
```

`D:/aa manickavasan/manickavasan-blog/src/pages/Blog.jsx`:
```jsx
import Footer from "../components/Footer";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BookOpen, Search, X, Moon, Sun } from "lucide-react";
import posts from "../data/posts";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
    if (!q) return sortedPosts;
    return sortedPosts.filter((post) => {
      const searchableText = [post.title, post.excerpt, post.date, post.searchText || ""]
        .join(" ")
        .toLowerCase();
      return searchableText.includes(q);
    });
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    document.title = "The Thinking Archive";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") setSelectedPost(null); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedPost]);

  return (
    <div className={darkMode ? "min-h-screen bg-slate-950 text-slate-100" : "min-h-screen bg-white text-slate-900"}>
      <header className={darkMode ? "border-b border-slate-800 bg-slate-950/90 backdrop-blur" : "border-b border-slate-200 bg-white/90 backdrop-blur"}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <BookOpen className={darkMode ? "h-5 w-5 text-slate-200" : "h-5 w-5 text-slate-800"} />
            <h1 className={darkMode ? "text-lg font-semibold tracking-tight text-slate-100" : "text-lg font-semibold tracking-tight text-slate-900"}>
              The Thinking Archive
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={darkMode ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800" : "inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {darkMode ? "Light" : "Dark"}
            </button>

            <a
              href="https://manickavasan.com"
              className={darkMode ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800" : "inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"}
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          <p className={darkMode ? "text-xs font-semibold uppercase tracking-[0.35em] text-slate-500" : "text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"}>
            The Thinking Archive
          </p>
          <h2 className={darkMode ? "mt-1 text-2xl font-bold tracking-tight text-slate-200 sm:text-2xl" : "mt-1 text-2xl font-bold tracking-tight text-slate-700 sm:text-2xl"}>
            Ideas worth keeping. Experiences worth writing.
          </h2>
          <p className={darkMode ? "mt-3 max-w-2xl text-lg leading-6 text-slate-400" : "mt-3 max-w-2xl text-lg leading-6 text-slate-500"}>
            A personal collection of reflections, travel notes, learning moments, and thoughts that stay with me.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative max-w-xl">
            <Search className={darkMode ? "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" : "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"} />
            <input
              type="text"
              placeholder="Search blogs by title, content, or date..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className={darkMode ? "w-full rounded-2xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-sm text-slate-100 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-800" : "w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={darkMode ? "cursor-pointer rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20" : "cursor-pointer rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"}
              >
                <p className={darkMode ? "text-sm text-slate-400" : "text-sm text-slate-500"}>{post.date}</p>
                <h3 className={darkMode ? "mt-2 text-2xl font-semibold text-slate-100" : "mt-2 text-2xl font-semibold text-slate-900"}>{post.title}</h3>
                <p className={darkMode ? "mt-3 leading-7 text-slate-400" : "mt-3 leading-7 text-slate-600"}>{post.excerpt}</p>
                <div className={darkMode ? "mt-5 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900" : "mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"}>
                  Read blog
                </div>
              </article>
            ))
          ) : (
            <div className={darkMode ? "rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center" : "rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center"}>
              <h3 className={darkMode ? "text-xl font-semibold text-slate-100" : "text-xl font-semibold text-slate-800"}>No blogs found</h3>
              <p className={darkMode ? "mt-2 text-slate-400" : "mt-2 text-slate-600"}>Try a different keyword for your search.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={darkMode ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40" : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => {
              const page = i + 1;
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={isActive ? (darkMode ? "rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900" : "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white") : (darkMode ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800" : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100")}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={darkMode ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40" : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"}
            >
              Next
            </button>
          </div>
        )}
      </main>

      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6">
          <div className={darkMode ? "relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-slate-900 shadow-2xl" : "relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"}>
            <div className={darkMode ? "flex items-start justify-between border-b border-slate-800 px-6 py-5" : "flex items-start justify-between border-b border-slate-200 px-6 py-5"}>
              <div className="pr-4">
                <p className={darkMode ? "text-sm text-slate-400" : "text-sm text-slate-500"}>{selectedPost.date}</p>
                <h3 className={darkMode ? "mt-1 text-2xl font-bold text-slate-100" : "mt-1 text-2xl font-bold text-slate-900"}>{selectedPost.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className={darkMode ? "rounded-full border border-slate-700 p-2 text-slate-300 transition hover:bg-slate-800" : "rounded-full border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100"}
                aria-label="Close blog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">
              <div className={darkMode ? "space-y-5 text-lg leading-8 text-slate-300" : "space-y-5 text-lg leading-8 text-slate-700"}>
                {selectedPost.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
}
```

- [ ] **Step 2: Verify dev server renders correctly**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && npm run dev
```

Open `http://localhost:5174` — confirm blog renders, search works, post modal opens, dark mode toggles, Home link shows `https://manickavasan.com`.

- [ ] **Step 3: Commit**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && git add src/pages/Blog.jsx && git commit -m "feat: add Blog page"
```

---

## Task 6: Create .htaccess for Apache

**Files:**
- Create: `public/.htaccess`

- [ ] **Step 1: Create `public/.htaccess`**

```bash
mkdir -p "D:/aa manickavasan/manickavasan-blog/public"
```

`D:/aa manickavasan/manickavasan-blog/public/.htaccess`:
```apache
Options -MultiViews
RewriteEngine On
RewriteBase /blog/

RewriteRule ^blog-assets/ - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

- [ ] **Step 2: Commit**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && git add public/.htaccess && git commit -m "feat: add .htaccess for Apache SPA routing"
```

---

## Task 7: Production build

- [ ] **Step 1: Build the app**

```bash
cd "D:/aa manickavasan/manickavasan-blog" && npm run build
```

Expected: `dist/` folder created. Verify `dist/index.html` references assets with `/blog/blog-assets/` paths.

```bash
grep "blog-assets" "D:/aa manickavasan/manickavasan-blog/dist/index.html"
```

Expected: at least one match confirming correct base path.

- [ ] **Step 2: Commit dist (optional — only if deploying from repo)**

If uploading `dist/` manually to Hostinger, no commit needed. Otherwise:
```bash
cd "D:/aa manickavasan/manickavasan-blog" && git add dist/ && git commit -m "build: production build for Hostinger"
```

---

## Task 8: Update portfolio to remove blog route

**Files:**
- Modify: `D:/aa manickavasan/manickavasan-portfolio/src/components/Navbar.jsx`
- Modify: `D:/aa manickavasan/manickavasan-portfolio/src/App.jsx`

- [ ] **Step 1: Update Navbar Blog link to absolute URL**

In `src/components/Navbar.jsx`, change:
```jsx
// BEFORE
<Link
  to="/blog"
  className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
>
  Blog
</Link>
```

```jsx
// AFTER
<a
  href="https://manickavasan.com/blog"
  className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
>
  Blog
</a>
```

Also remove the `import { Link } from "react-router-dom"` if Link is no longer used. Check if the logo still uses `<Link to="/">` — if so, keep the import.

- [ ] **Step 2: Remove blog route from App.jsx**

In `src/App.jsx`, change:
```jsx
// BEFORE
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}
```

```jsx
// AFTER
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
```

Note: Keep ScrollToTop and react-router-dom — portfolio still uses them for the home route.

- [ ] **Step 3: Build portfolio to verify no errors**

```bash
cd "D:/aa manickavasan/manickavasan-portfolio" && npm run build
```

Expected: build succeeds, no import errors.

- [ ] **Step 4: Commit portfolio changes**

```bash
cd "D:/aa manickavasan/manickavasan-portfolio" && git add src/components/Navbar.jsx src/App.jsx && git commit -m "feat: update blog link to absolute URL (blog now separate app)"
```

---

## Deployment Checklist (Hostinger)

After both builds succeed:

1. Upload `manickavasan-blog/dist/` contents to `public_html/blog/` on Hostinger
   - The `dist/` folder should contain: `index.html`, `blog-assets/`, `.htaccess`
2. Verify `https://manickavasan.com/blog` loads correctly
3. Verify clicking a post opens the modal
4. Verify search works
5. Verify "Home" button goes to `https://manickavasan.com`
6. Upload updated portfolio build to `public_html/` (root) on Hostinger
7. Verify portfolio Navbar Blog link goes to `https://manickavasan.com/blog`
