import { ContactCard } from "@/components/ContactCard";
import { ContactForm } from "@/components/ContactForm";
import { CTAButton } from "@/components/CTAButton";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TravelCard } from "@/components/TravelCard";
import { education, experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { travelPlaces } from "@/data/travel";

const whatIDo = [
  {
    title: "Web Development",
    description: "I build fast, responsive and maintainable websites using modern React and Next.js practices.",
    icon: "</>",
  },
  {
    title: "UI/UX & Responsive Design",
    description: "I focus on clear layouts, accessible interfaces and user flows that work well on every screen size.",
    icon: "✦",
  },
  {
    title: "Adventure Tourism / Real-world Projects",
    description: "My tourism field experience helps me design for real users, local businesses and practical operations.",
    icon: "⌁",
  },
];

const navItems = ["About", "Education", "Projects", "Nature", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-forest text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(20,184,166,0.14),transparent_28%),linear-gradient(180deg,#071511,#020617_72%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="text-sm font-black uppercase tracking-[0.28em] text-white">
            Kevin<span className="text-emerald-300">.</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 transition hover:text-emerald-300">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="relative px-5 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-hero-grid bg-[length:56px_56px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal">
            <p className="mb-5 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              Available for freelance websites and technical opportunities
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Kevin <span className="text-emerald-300">Rojas</span>
            </h1>
            <p className="mt-5 text-xl font-semibold text-emerald-100 sm:text-2xl">
              Software Engineering Student | Freelance Web Developer | Tour Guide
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I build modern web experiences and connect technology with real-world adventure projects.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="#projects">View Projects</CTAButton>
              <CTAButton href="#contact" variant="secondary">Contact Me</CTAButton>
              <CTAButton href="/Kevin-Rojas-CV.pdf" variant="ghost" download>Download CV</CTAButton>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-emerald-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-emerald-950/40">
              <div className="rounded-[2rem] bg-gradient-to-br from-emerald-300 via-teal-700 to-slate-950 p-1">
                <div className="flex aspect-[4/5] flex-col justify-between rounded-[1.8rem] bg-slate-950/55 p-8 backdrop-blur-sm">
                  <div className="flex justify-between text-sm font-semibold text-emerald-100">
                    <span>San Carlos, CR</span>
                    <span>2026</span>
                  </div>
                  <div className="grid place-items-center">
                    <div className="grid h-44 w-44 place-items-center rounded-full border border-emerald-200/40 bg-emerald-300/10 text-6xl font-black text-white shadow-glow">
                      KR
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Developer mindset.</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">Field-tested perspective from tourism, nature and client-facing experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="About me"
            title="Technology, people and adventure in one professional profile."
            description="I am a Computer Engineering student from San Carlos, Costa Rica, building my path as a web developer while working close to nature and adventure tourism. That combination helps me understand both digital products and the real people who use them."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {whatIDo.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300/10 text-xl font-black text-emerald-200 ring-1 ring-emerald-300/30">{item.icon}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Formation & experience" title="A clearer path of education, certifications and field practice." />
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-2xl font-bold text-white">Education</h3>
              <div className="grid gap-4">
                {education.map((item) => <ExperienceCard key={`${item.title}-${item.organization}`} item={item} />)}
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-2xl font-bold text-white">Experience / Certifications</h3>
              <div className="grid gap-4">
                {experience.map((item) => <ExperienceCard key={`${item.title}-${item.organization}`} item={item} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Projects"
            title="Realistic portfolio projects with room to grow."
            description="These cards present current work, concepts and prepared spaces for future full-stack projects in a more professional way than generic placeholders."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </div>
      </section>

      <section id="nature" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Adventure, nature & field experience"
            title="Places that inspire my work"
            description="My experience in nature and tourism helps me understand real projects, real users and experiences outside the screen. It gives my design process a practical perspective: clear communication, trust, safety and memorable storytelling."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {travelPlaces.map((place) => <TravelCard key={place.name} place={place} />)}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something useful and memorable."
            description="Reach out for freelance websites, collaboration opportunities, technical interviews or tourism-related digital projects."
          />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <ContactCard label="Email" value="kevinrd1171@gmail.com" href="mailto:kevinrd1171@gmail.com" icon="✉" />
              <ContactCard label="Phone" value="+506 8451-9537" href="tel:+50684519537" icon="☎" />
              <ContactCard label="Location" value="San Carlos, Costa Rica" icon="⌖" />
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="mb-4 text-sm font-semibold text-slate-300">Social links</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a key={link.name} href={link.url} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-300/40 hover:text-emerald-200">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400 lg:px-8">
        <p>© 2026 Kevin Rojas. Web development, tourism and nature-inspired digital experiences.</p>
      </footer>
    </main>
  );
}
