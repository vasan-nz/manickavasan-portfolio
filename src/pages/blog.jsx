import Footer from "../components/Footer";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Search, X, Moon, Sun } from "lucide-react";
import posts from "../posts";

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
      const searchableText = [
        post.title,
        post.excerpt,
        post.date,
        post.searchText || "",
      ]
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
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPost(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPost]);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-white text-slate-900"
      }
    >
      <header
        className={
          darkMode
            ? "border-b border-slate-800 bg-slate-950/90 backdrop-blur"
            : "border-b border-slate-200 bg-white/90 backdrop-blur"
        }
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <BookOpen
              className={
                darkMode ? "h-5 w-5 text-slate-200" : "h-5 w-5 text-slate-800"
              }
            />
            <h1
              className={
                darkMode
                  ? "text-lg font-semibold tracking-tight text-slate-100"
                  : "text-lg font-semibold tracking-tight text-slate-900"
              }
            >
              The Thinking Archive
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={
                darkMode
                  ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
                  : "inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              }
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              {darkMode ? "Light" : "Dark"}
            </button>

            <Link
              to="/"
              className={
                darkMode
                  ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
                  : "inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              }
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          <p
            className={
              darkMode
                ? "text-xs font-semibold uppercase tracking-[0.35em] text-slate-500"
                : "text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
            }
          >
            The Thinking Archive
          </p>

          <h2
            className={
              darkMode
                ? "mt-1 text-2xl font-bold tracking-tight text-slate-200 sm:text-2xl"
                : "mt-1 text-2xl font-bold tracking-tight text-slate-700 sm:text-2xl"
            }
          >
            Ideas worth keeping. Experiences worth writing.
          </h2>

          <p
            className={
              darkMode
                ? "mt-3 max-w-2xl text-lg leading-6 text-slate-400"
                : "mt-3 max-w-2xl text-lg leading-6 text-slate-500"
            }
          >
            A personal collection of reflections, travel notes, learning
            moments, and thoughts that stay with me.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative max-w-xl">
            <Search
              className={
                darkMode
                  ? "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  : "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              }
            />
            <input
              type="text"
              placeholder="Search blogs by title, content, or date..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className={
                darkMode
                  ? "w-full rounded-2xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-sm text-slate-100 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-800"
                  : "w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              }
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={
                  darkMode
                    ? "cursor-pointer rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                    : "cursor-pointer rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                }
              >
                <p
                  className={
                    darkMode ? "text-sm text-slate-400" : "text-sm text-slate-500"
                  }
                >
                  {post.date}
                </p>

                <h3
                  className={
                    darkMode
                      ? "mt-2 text-2xl font-semibold text-slate-100"
                      : "mt-2 text-2xl font-semibold text-slate-900"
                  }
                >
                  {post.title}
                </h3>

                <p
                  className={
                    darkMode
                      ? "mt-3 leading-7 text-slate-400"
                      : "mt-3 leading-7 text-slate-600"
                  }
                >
                  {post.excerpt}
                </p>

                <div
                  className={
                    darkMode
                      ? "mt-5 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900"
                      : "mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                  }
                >
                  Read blog
                </div>
              </article>
            ))
          ) : (
            <div
              className={
                darkMode
                  ? "rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
                  : "rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center"
              }
            >
              <h3
                className={
                  darkMode
                    ? "text-xl font-semibold text-slate-100"
                    : "text-xl font-semibold text-slate-800"
                }
              >
                No blogs found
              </h3>
              <p
                className={
                  darkMode ? "mt-2 text-slate-400" : "mt-2 text-slate-600"
                }
              >
                Try a different keyword for your search.
              </p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={
                darkMode
                  ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                  : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              }
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = currentPage === page;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    isActive
                      ? darkMode
                        ? "rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900"
                        : "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                      : darkMode
                      ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
                      : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  }
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={
                darkMode
                  ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                  : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              }
            >
              Next
            </button>
          </div>
        )}
      </main>

      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6">
          <div
            className={
              darkMode
                ? "relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-slate-900 shadow-2xl"
                : "relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            }
          >
            <div
              className={
                darkMode
                  ? "flex items-start justify-between border-b border-slate-800 px-6 py-5"
                  : "flex items-start justify-between border-b border-slate-200 px-6 py-5"
              }
            >
              <div className="pr-4">
                <p
                  className={
                    darkMode ? "text-sm text-slate-400" : "text-sm text-slate-500"
                  }
                >
                  {selectedPost.date}
                </p>
                <h3
                  className={
                    darkMode
                      ? "mt-1 text-2xl font-bold text-slate-100"
                      : "mt-1 text-2xl font-bold text-slate-900"
                  }
                >
                  {selectedPost.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className={
                  darkMode
                    ? "rounded-full border border-slate-700 p-2 text-slate-300 transition hover:bg-slate-800"
                    : "rounded-full border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100"
                }
                aria-label="Close blog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">
              <div
                className={
                  darkMode
                    ? "space-y-5 text-lg leading-8 text-slate-300"
                    : "space-y-5 text-lg leading-8 text-slate-700"
                }
              >
                {selectedPost.content}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer darkMode={darkMode} />
    </div>
  );
}