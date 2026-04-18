import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const skills = {
  programming: ["JavaScript (ES6+)", "Python", "SQL"],
  frontend: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  tools: ["Git", "VS Code", "AWS (EC2 basics)"],
  workflow: ["Process mapping", "AI-assisted development", "Prompt engineering", "Claude", "ChatGPT"],
};

const experience = [
  {
    role: "AI Workflow Analyst Intern",
    company: "Insignia Design & Architecture Ltd",
    period: "Mar 2026 – Present",
    points: [
      "Analysed end-to-end architectural project workflows from client enquiry to delivery",
      "Identified inefficiencies in coordination, communication, and manual follow-ups",
      "Mapped current-state processes and highlighted delays and duplicated efforts",
      "Designed AI-assisted workflow solutions including automated email drafting and notifications",
      "Proposed a future-state workflow integrating AI tools to improve turnaround time",
      "Evaluated feasibility and provided a practical 3–6 month implementation roadmap",
    ],
  },
  {
    role: "Merchandising Assistant",
    company: "New World NZ",
    period: "Feb 2026 – Present",
    points: [
      "Replenishing and merchandising stock according to store standards",
      "Assisting customers and maintaining shop floor presentation",
    ],
  },
];

const projects = [
  {
    label: "Live Project",
    title: "Job Application Management System",
    description:
      "Full-stack multi-user web app for tracking job applications. Secure authentication with email verification, structured workflow for status tracking, follow-ups, and notes.",
    stack: ["React", "Full-Stack"],
    url: "https://manickavasan.com/job-app",
  },
  {
    label: "Live Project",
    title: "The Thinking Archive",
    description:
      "Personal blog platform with search, pagination, and structured content management. Built with React, focused on performance and readability.",
    stack: ["React", "Tailwind CSS", "Vite"],
    url: "https://manickavasan.com/blog",
  },
];

const cardClass =
  "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm";

function FadeIn({ children, delay = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </Motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className={cardClass}>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-sm text-cyan-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Manickavasan Rajendran — Portfolio";
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(96,165,250,0.14),transparent_22%),linear-gradient(to_bottom,#020617,#020617)]" />

      <Navbar
        onContactClick={scrollToSection}
        onBlogClick={() => navigate("/blog")}
      />

      <main id="home">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  <Briefcase className="h-3.5 w-3.5" />
                  AI Workflow Intern · Available for work
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Manickavasan Rajendran
                </h1>

                <p className="mt-1 text-base text-slate-400">— Vasan</p>

                <p className="mt-4 text-lg font-medium text-cyan-200 sm:text-xl">
                  Software Developer & AI Workflow Analyst
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  I build full-stack web applications and design AI-assisted workflows.
                  Currently completing my Master of IT at the University of Waikato while
                  gaining real-world experience at Insignia Design & Architecture. Available
                  for work — NZ student visa with legal work rights, Post-Study Work Visa
                  eligible from June 2026.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-sm text-slate-400">Quick Snapshot</p>
                    <p className="mt-1 text-lg font-semibold text-white">manickavasan.com</p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl bg-slate-900/70 p-4">
                      <p className="text-sm text-slate-400">Live Projects</p>
                      <p className="mt-1 font-medium text-white">2 shipped and live</p>
                    </div>

                    <div className="rounded-2xl bg-slate-900/70 p-4">
                      <p className="text-sm text-slate-400">Current Role</p>
                      <p className="mt-1 font-medium text-white">AI Workflow Intern</p>
                    </div>

                    <div className="rounded-2xl bg-slate-900/70 p-4">
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="mt-1 font-medium text-white">Hamilton, New Zealand</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Projects"
              title="Real software built to solve real problems"
            />
          </FadeIn>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.08}>
                <div className={`${cardClass} flex flex-col`}>
                  <div>
                    <p className="text-sm text-cyan-200">{project.label}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                    >
                      View Live
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Experience"
              title="Real-world exposure alongside study"
            />
          </FadeIn>

          <div className="mt-8 space-y-5">
            {experience.map((job, index) => (
              <FadeIn key={job.role} delay={index * 0.08}>
                <div className={cardClass}>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 text-sm text-cyan-200">{job.company}</p>
                    <p className="mt-1 text-sm text-slate-400">{job.period}</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {job.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/[0.08] bg-slate-900/60 p-4 text-sm leading-7 text-slate-300"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Skills"
              title="Technologies and tools I work with"
            />
          </FadeIn>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FadeIn>
              <SkillGroup title="Programming" items={skills.programming} />
            </FadeIn>
            <FadeIn delay={0.06}>
              <SkillGroup title="Frontend" items={skills.frontend} />
            </FadeIn>
            <FadeIn delay={0.12}>
              <SkillGroup title="Tools & Platforms" items={skills.tools} />
            </FadeIn>
            <FadeIn delay={0.18}>
              <SkillGroup title="Workflow & AI" items={skills.workflow} />
            </FadeIn>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-14 lg:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-cyan-400/10 to-blue-400/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/90">
                    Contact
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Let's connect.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    Open to software development roles, internships, and part-time
                    opportunities in New Zealand.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="mailto:manickavasan@icloud.com"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white transition hover:bg-white/15"
                    >
                      <Mail className="h-4 w-4" />
                      manickavasan@icloud.com
                    </a>

                    <a
                      href="https://linkedin.com/in/manickavasan"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white transition hover:bg-white/15"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/vasan.nz"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white transition hover:bg-white/15"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className={cardClass}>
                  <h3 className="text-lg font-semibold text-white">Quick details</h3>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                    <p className="flex items-start gap-3">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      Hamilton, New Zealand
                    </p>
                    <p className="flex items-start gap-3">
                      <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      Master of Information Technology — University of Waikato
                    </p>
                    <p className="flex items-start gap-3">
                      <Briefcase className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      NZ Student Visa with legal work rights during study
                    </p>
                    <p className="flex items-start gap-3">
                      <Briefcase className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      Post-Study Work Visa eligible from June 2026 (3-year open work visa)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}
