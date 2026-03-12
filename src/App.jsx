import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = {
  programming: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
  frameworks: ["React", "Odoo"],
  tools: ["Git", "VS Code", "AWS"],
};

const experience = {
  role: "Odoo Developer Intern",
  company: "Otibro Techni Pvt. Ltd.",
  period: "Previous Internship",
  points: [
    "Gained practical exposure to ERP development in a professional environment.",
    "Learned how development projects are structured and delivered in real workflows.",
    "Improved understanding of business requirements and how software supports them.",
    "Worked on an employee management project using Odoo.",
  ],
};

const project = {
  title: "Manickavasan.com",
  type: "Current Project",
  description:
    "A personal portfolio website built with React to showcase my profile, skills, professional journey, and future projects. This website serves as my digital presence and will continue to grow as I build stronger work over time.",
  stack: ["React", "Tailwind CSS", "Vite"],
};

const roadmap = [
  "Launch a polished professional portfolio",
  "Add stronger beginner-friendly showcase projects",
  "Improve frontend confidence through hands-on building",
  "Grow into a reliable software professional",
];

const cardClass =
  "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm";

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
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
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className={cardClass}>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
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

export default function App() {
  const [highlightVisa, setHighlightVisa] = useState(false);

  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  const triggerVisaHighlight = () => {
  setHighlightVisa(true);

  setTimeout(() => {
    setHighlightVisa(false);
  }, 9000);
};


  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(96,165,250,0.14),transparent_22%),linear-gradient(to_bottom,#020617,#020617)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-white">
            MANICKAVASAN
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                className="text-sm text-slate-300 transition hover:text-white bg-transparent border-0 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
          <button
            onClick={() => {
              scrollToSection("visa-status");
              triggerVisaHighlight();
            }}
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
            NZ Working Rights
         </button>

          <button
  onClick={() => scrollToSection("contact")}
  className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
>
  Let’s Connect
</button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  Actively building practical software projects and professional experience
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Manickavasan
                </h1>

                <p className="mt-4 text-lg font-medium text-cyan-200 sm:text-xl">
                  Master of Information Technology Student | Aspiring Software Developer
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  I am a Master of Information Technology student at the University of
                  Waikato in New Zealand. I am developing practical skills in software
                  development through hands-on projects, continuous learning, and
                  real-world problem solving. I am also interested in understanding
                  stakeholder business needs, working with data, and building reliable
                  software solutions that create practical value.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className={cardClass}>
                    <p className="text-sm text-slate-400">Current Focus</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Software development
                    </p>
                  </div>

                  <div className={cardClass}>
                    <p className="text-sm text-slate-400">Experience</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Odoo internship
                    </p>
                  </div>

                  <div className={cardClass}>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Hamilton, New Zealand
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-slate-400">Portfolio Snapshot</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        manickavasan.com
                      </p>
                    </div>
                    <MonitorSmartphone className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl bg-slate-900/70 p-4">
                      <p className="text-sm text-slate-400">Identity</p>
                      <p className="mt-1 font-medium text-white">
                        Early-career portfolio with serious intent
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-900/70 p-4">
                      <p className="text-sm text-slate-400">Strength</p>
                      <p className="mt-1 font-medium text-white">
                        Real internship exposure + active skill growth
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-900/70 p-4">
                      <p className="text-sm text-slate-400">Goal</p>
                      <p className="mt-1 font-medium text-white">
                        Build reliable software and grow professionally
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="A calm mindset, a professional direction, and a growing technical journey"
              description="This portfolio is designed to present my real strengths honestly while creating space for stronger projects and deeper technical growth over time."
            />
          </FadeIn>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <FadeIn>
              <div className={cardClass}>
                <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">Academic Path</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I am originally from India and currently studying for a Master of
                  Information Technology at the University of Waikato in New Zealand. I
                  completed my bachelor’s degree in India and am now focused on
                  strengthening my practical skills through development work,
                  continuous learning, and hands-on projects.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className={cardClass}>
                <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">How I Work</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I enjoy building software, understanding how technology supports
                  business needs, and growing into a capable professional in the IT
                  field. I like to keep a calm and positive mindset, and I value
                  creating a good environment while working with others.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className={cardClass}>
                <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                  <MonitorSmartphone className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">Broader Interest</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Outside core software development, I am also interested in business
                  operations and areas such as office administration and payroll
                  systems, because I enjoy understanding how organizations work as a
                  whole.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Experience"
              title="First real-world development exposure that already adds credibility"
              description="This internship matters because it shows practical exposure to a live software environment, business processes, and project workflows beyond classroom learning."
            />
          </FadeIn>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <FadeIn>
              <div className={cardClass}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <p className="mt-1 text-sm text-cyan-200">{experience.company}</p>
                    <p className="mt-1 text-sm text-slate-400">{experience.period}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {experience.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/8 bg-slate-900/60 p-4 text-sm leading-7 text-slate-300"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className={cardClass}>
                <h3 className="text-lg font-semibold text-white">What I gained</h3>
                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  <p>
                    My first real-life experience in a development environment.
                  </p>
                  <p>
                    Exposure to ERP development and how project workflow happens in
                    practice.
                  </p>
                  <p>
                    Better understanding of business needs and how software solutions
                    are shaped around them.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Skills"
              title="Clear skill positioning with honesty and room to grow"
              description="This section reflects the technologies, platforms, and tools I am currently comfortable with and continuing to build on."
            />
          </FadeIn>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <FadeIn>
              <SkillGroup title="Programming" items={skills.programming} />
            </FadeIn>

            <FadeIn delay={0.06}>
              <SkillGroup title="Frameworks & Platforms" items={skills.frameworks} />
            </FadeIn>

            <FadeIn delay={0.12}>
              <SkillGroup title="Tools & Technologies" items={skills.tools} />
            </FadeIn>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Projects"
              title="Starting with one real project and building stronger work next"
              description="This website itself is my first active showcase project. More practical projects will be added as the portfolio grows."
            />
          </FadeIn>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <FadeIn>
              <div className={cardClass}>
                <div>
                  <p className="text-sm text-cyan-200">{project.type}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
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
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className={cardClass}>
                <h3 className="text-xl font-semibold text-white">Next project direction</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  The next step is to build a strong beginner-friendly project that
                  demonstrates practical problem solving, cleaner UI work, and better
                  confidence in frontend development.
                </p>

                <div className="mt-5 rounded-2xl border border-white/8 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Suggested path
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Build one useful project with a clear purpose, good structure, and
                    polished presentation rather than many weak projects.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Roadmap"
              title="A portfolio designed to improve with every update"
              description="This structure starts simple, but it is ready to grow as stronger projects, better case studies, and clearer technical direction are added."
            />
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((item, index) => (
              <FadeIn key={item} delay={index * 0.05}>
                <div className={cardClass}>
                  <p className="text-sm font-medium leading-7 text-slate-200">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-14 lg:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-cyan-400/10 to-blue-400/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/90">
                    Contact
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Let’s connect professionally.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    I’m building my portfolio step by step and continuing to grow through
                    practical work, learning, and future projects.
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

                    {/* GitHub hidden for now
                    <a
                      href="https://github.com/vasan.nz"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white transition hover:bg-white/15"
                    >
                      GitHub
                    </a>
                    */}
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
                      Master of Information Technology student at the University of
                      Waikato
                    </p>
                    <p
                     id="visa-status"
                     className={`flex items-start gap-3 ${
                       highlightVisa ? "animate-pulse text-cyan-200" : ""
                      }`}
                    >  
                      <Briefcase className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      Student visa holder in New Zealand with legal work rights during study
                    </p>

                    <p  
                    className={`flex items-start gap-3 ${
                      highlightVisa ? "animate-pulse text-cyan-200" : ""
                    }`}
                    >
                      <Briefcase className="mt-1 h-4 w-4 shrink-0 text-cyan-300"/>
                      Eligible to apply for a 3-year Post-Study Work Visa after completing my Master’s degree in June 2026.
                    </p>
                    <p className="flex items-start gap-3">
                      <Download className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      CV download
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