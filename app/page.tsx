import { ContactCard } from "@/components/ContactCard";
import { ContactForm } from "@/components/ContactForm";
import { CTAButton } from "@/components/CTAButton";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillMeter } from "@/components/SkillMeter";
import { TravelCard } from "@/components/TravelCard";
import { education, experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { designDecisions, stats, strengths, toolStack } from "@/data/profile";
import { travelPlaces } from "@/data/travel";

const certifications = experience.filter((item) => item.period === "Completed");
const fieldExperience = experience.filter((item) => item.period !== "Completed");

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-forest text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(45,212,191,0.22),transparent_30%),radial-gradient(circle_at_86%_10%,rgba(16,185,129,0.15),transparent_26%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.12),transparent_34%),linear-gradient(180deg,#071511,#020617_70%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-grid bg-[length:64px_64px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />

      <Navbar />

      <section id="top" className="relative px-5 pb-20 pt-32 sm:pt-40 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <ScrollReveal>
            <p className="mb-6 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-100 shadow-glow">
              Disponible para prácticas, freelance, networking y proyectos web
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Kevin Rojas<span className="text-gradient"> Developer</span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-emerald-100 sm:text-2xl">
              Estudiante de ingeniería de software, desarrollador web y guía de aventura con mentalidad de producto.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Construyo experiencias digitales modernas con React, Next.js, JavaScript y Python, conectando tecnología, análisis de datos y emprendimiento turístico desde San Carlos, Costa Rica.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="#projects">Ver proyectos</CTAButton>
              <CTAButton href="#contact" variant="secondary">Contactar</CTAButton>
              <CTAButton href="/Kevin-Rojas-CV.pdf" variant="ghost" download>Descargar CV</CTAButton>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="relative mx-auto w-full max-w-md">
            <div className="orb-float absolute -inset-5 rounded-[2.5rem] bg-emerald-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-emerald-950/40 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-gradient-to-br from-emerald-300 via-teal-700 to-slate-950 p-1">
                <div className="flex aspect-[4/5] flex-col justify-between rounded-[1.8rem] bg-slate-950/62 p-8 backdrop-blur-sm">
                  <div className="flex justify-between text-sm font-bold text-emerald-100">
                    <span>San Carlos, CR</span>
                    <span>2026</span>
                  </div>
                  <div className="grid place-items-center">
                    <div className="relative grid h-48 w-48 place-items-center rounded-full border border-emerald-200/40 bg-emerald-300/10 text-6xl font-black text-white shadow-glow">
                      KR
                      <span className="absolute -right-3 top-8 h-6 w-6 rounded-full bg-cyan-300 shadow-glow" />
                      <span className="absolute bottom-7 left-1 h-4 w-4 rounded-full bg-emerald-300" />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">Product-minded developer.</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">Tecnología, aventura, clientes reales y storytelling para crear experiencias útiles.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Sobre mí"
              title="Un perfil técnico con sensibilidad por las personas y el contexto real."
              description="Mi diferencial es combinar formación en ingeniería, curiosidad por frontend/backend y experiencia en turismo de aventura. Esa mezcla me permite diseñar soluciones claras, atractivas y orientadas a usuarios reales, no solo interfaces bonitas."
            />
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 120}>
                <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.075]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300/10 text-2xl text-emerald-100 ring-1 ring-emerald-300/30">{item.icon}</span>
                  <h3 className="mt-6 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal>
            <SectionTitle
              align="left"
              eyebrow="Tecnologías"
              title="Stack moderno para crear, integrar y aprender rápido."
              description="La sección prioriza habilidades relevantes para contratación: frontend profesional, bases full-stack, Python, datos, APIs y herramientas de entrega."
            />
            <div className="flex flex-wrap gap-3">
              {toolStack.map((tool) => (
                <span key={tool} className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-emerald-300/35 hover:text-emerald-100">
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <SkillMeter />
          </ScrollReveal>
        </div>
      </section>

      <section id="experience" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionTitle eyebrow="Experiencia" title="Práctica técnica y criterio operativo en campo." description="La experiencia en La Vieja Adventures se presenta como ventaja estratégica: trato con personas, operación real, comunicación, confianza y oportunidades digitales para turismo." />
          </ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {fieldExperience.map((item, index) => (
              <ScrollReveal key={`${item.title}-${item.organization}`} delay={index * 120}>
                <ExperienceCard item={item} />
              </ScrollReveal>
            ))}
            <ScrollReveal delay={160}>
              <div className="rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-300/15 to-cyan-300/5 p-6">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">Oportunidad de marca</p>
                <h3 className="mt-4 text-2xl font-black text-white">La Vieja Adventures como laboratorio de producto</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">El portafolio ahora posiciona este emprendimiento como un espacio para aplicar landing pages, reservas, analítica, automatización, storytelling visual y conversión para turismo local.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Proyectos destacados"
              title="Evidencia visual de potencial frontend, full-stack y producto."
              description="Las tarjetas se diseñaron como mini casos de estudio, con una presentación más premium y orientada a reclutadores: problema, stack, intención y posibilidad de crecimiento."
            />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ScrollReveal key={project.name} delay={index * 90}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionTitle eyebrow="Certificaciones" title="Aprendizaje continuo con enfoque práctico." />
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((item, index) => (
              <ScrollReveal key={`${item.title}-${item.organization}`} delay={index * 120}>
                <ExperienceCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionTitle eyebrow="Formación académica" title="Base de ingeniería para resolver problemas con estructura." />
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {education.map((item, index) => (
              <ScrollReveal key={`${item.title}-${item.organization}`} delay={index * 100}>
                <ExperienceCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="entrepreneurship" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Emprendimiento y La Vieja Adventures"
              title="Turismo, naturaleza y tecnología como narrativa diferenciadora."
              description="Esta sección fortalece la marca personal conectando aventura, sostenibilidad, diseño digital y oportunidades para productos turísticos modernos."
            />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {travelPlaces.map((place, index) => (
              <ScrollReveal key={place.name} delay={index * 120}>
                <TravelCard place={place} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Contacto"
              title="Listo para entrevistas, colaboración y proyectos digitales."
              description="Un cierre claro, accionable y profesional para convertir visitas en oportunidades reales."
            />
          </ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <ScrollReveal>
              <div className="space-y-4">
                <ContactCard label="Email" value="kevinrd1171@gmail.com" href="mailto:kevinrd1171@gmail.com" icon="✉" />
                <ContactCard label="Teléfono" value="+506 8451-9537" href="tel:+50684519537" icon="☎" />
                <ContactCard label="Ubicación" value="San Carlos, Costa Rica" icon="⌖" />
                <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                  <p className="mb-4 text-sm font-bold text-slate-300">Redes profesionales</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a key={link.name} href={link.url} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-emerald-300/40 hover:text-emerald-200">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-sm leading-7 text-slate-300">
          <p className="font-black uppercase tracking-[0.22em] text-emerald-200">Decisiones UX/UI aplicadas</p>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {designDecisions.map((decision) => <li key={decision}>• {decision}</li>)}
          </ul>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400 lg:px-8">
        <p>© 2026 Kevin Rojas. Desarrollo web, turismo, datos y experiencias digitales inspiradas en Costa Rica.</p>
      </footer>
    </main>
  );
}
