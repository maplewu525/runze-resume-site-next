export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#1f2328]">
      {/* soft background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#2f6f5f]/10 blur-3xl" />
        <div className="absolute right-[-180px] top-[-160px] h-[460px] w-[460px] rounded-full bg-[#6b5b4d]/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 py-10">
        {/* Nav */}
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="text-lg font-semibold tracking-tight">
            Runze Dong
          </a>
          <nav className="flex flex-wrap gap-4 text-sm text-[#1f2328]/70">
            <a className="hover:text-[#1f2328]" href="#experience">Experience</a>
            <a className="hover:text-[#1f2328]" href="#projects">Projects</a>
            <a className="hover:text-[#1f2328]" href="#skills">Skills</a>
            <a className="hover:text-[#1f2328]" href="#education">Education</a>
          </nav>
        </header>

        {/* Hero */}
        <section id="top" className="mb-12">
          <div className="rounded-3xl border border-black/10 bg-white/60 p-7 shadow-[0_10px_30px_rgba(31,35,40,0.08)] backdrop-blur sm:p-10">
            <div className="inline-flex items-center rounded-full border border-[#6b5b4d]/20 bg-[#6b5b4d]/10 px-3 py-1 text-xs font-semibold text-[#6b5b4d]">
              Senior Software Engineer
            </div>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Building reliable, scalable systems for modern products.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1f2328]/70">
              Full-stack engineer experienced in cloud transformation, backend architecture, and performance optimization.
              Recently focused on low-code functional testing and AI-related product features.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm text-[#1f2328]/70">
              <span className="rounded-full border border-black/10 bg-white/50 px-3 py-1">Shanghai, China</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <Section
          id="experience"
          title="Experience"
          subtitle="Impact-focused work across full-stack development, cloud services, and performance."
        >
          <Stack>
            <Card
              title="OpenText — Senior Software Engineer"
              meta="Shanghai · Jun 2022 – Present"
              pill="Full-stack"
              bullets={[
                "Developed low-code (codeless) and AI-related features for a functional testing product to improve enterprise testing efficiency and reduce maintenance cost.",
                "Refactored and optimized existing AI capabilities, migrating from desktop to an Angular-based web application to support cloud transformation.",
                "Led backend development for a test file hosting service, enabling browser-based file management and supporting future cloud migration.",
              ]}
            />
            <Card
              title="LeetCode CN — Backend Engineer"
              meta="Shanghai · Dec 2020 – Jun 2022"
              pill="Backend"
              bullets={[
                "Owned backend development for community content features to improve user engagement and experience.",
                "Rebuilt and optimized the user home feed to support rapid user growth and fast product iteration.",
                "Designed and implemented a tipping/reward system to increase content creation and community activity.",
                "Led the mobile platform backend (middleware) build-out to improve API stability and performance.",
              ]}
            />
            <Card
              title="Twobulls LLC — Software Engineer"
              meta="New York · Aug 2016 – May 2020"
              pill="Product"
              bullets={[
                "Delivered enterprise solutions with the team, providing product development and technical support using modern technologies.",
                "Built early prototypes and iterated solutions independently using Python Django and AWS services.",
                "Implemented monitoring integrations and diagnostic tools to improve usability and team efficiency.",
              ]}
            />
          </Stack>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Selected Projects" subtitle="Highlighted work from recent roles.">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProjectCard
              title="Test File Hosting Service (OpenText)"
              desc="Led architecture and technology selection for a multi-user collaborative file hosting service. Integrated AWS CodeCommit for git-style versioning and implemented Redis distributed read/write locks for concurrent operations."
              tags={["AWS CodeCommit", "Redis", "Concurrency", "Architecture"]}
            />
            <ProjectCard
              title="Low-code Functional Testing Web App (OpenText)"
              desc="Built Angular features for a codeless functional testing product replacing a desktop app, enabling users to author tests in the browser and use AI-related capabilities. Worked on editor syntax highlighting/parsing and integrated the file hosting service."
              tags={["Angular", "Editor", "Syntax Highlight", "Integration"]}
            />
            <ProjectCard
              title="Mobile Data Middleware (LeetCode)"
              desc="Led monolith split and API optimization to improve stability and latency. Reduced P95 latency from ~2s to ~300ms and helped cut app crash rate to 0.3%. Owned core services and release management."
              tags={["Performance", "Service Split", "API", "Operations"]}
            />
            <ProjectCard
              title="Community Feed Optimization (LeetCode)"
              desc="Migrated activity feed data from PostgreSQL to NoSQL to support rapid growth, and implemented feature iterations on top of the new storage layer."
              tags={["PostgreSQL", "NoSQL", "Migration", "Backend"]}
            />
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" subtitle="Core technologies and tooling.">
          <div className="rounded-3xl border border-black/10 bg-white/55 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <SkillGroup title="Languages" items={["Python", "Go"]} />
              <SkillGroup title="Frameworks" items={["Django", "Angular"]} />
              <SkillGroup title="APIs & Messaging" items={["GraphQL", "gRPC"]} />
              <SkillGroup title="Databases" items={["MySQL", "DynamoDB", "Redis"]} />
              <SkillGroup title="Infra" items={["Docker", "Kubernetes", "AWS"]} />
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" subtitle="Academic background.">
          <Stack>
            <SimpleCard title="New York University" meta="M.S. in Electrical Engineering · Aug 2014 – May 2016" />
            <SimpleCard title="Nanjing University of Posts and Telecommunications" meta="B.Eng. in Communication Engineering · Sep 2010 – Jun 2014" />
          </Stack>
        </Section>

        <footer className="mt-10 pb-6 text-center text-xs text-[#1f2328]/60">
          © {new Date().getFullYear()} Runze Dong · Built with Next.js + Vercel
        </footer>
      </div>
    </div>
  );
}

function Section(props: { id: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={props.id} className="py-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold tracking-tight">{props.title}</h2>
        <p className="mt-1 text-sm text-[#1f2328]/70">{props.subtitle}</p>
        <div className="mt-3 h-1 w-11 rounded-full bg-[#6b5b4d]/35" />
      </div>
      {props.children}
    </section>
  );
}

function Stack(props: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">{props.children}</div>;
}

function Card(props: { title: string; meta: string; pill: string; bullets: string[] }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-[0_8px_24px_rgba(31,35,40,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(31,35,40,0.10)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold tracking-tight">{props.title}</h3>
          <div className="mt-0.5 text-sm text-[#1f2328]/70">{props.meta}</div>
        </div>
        <span className="shrink-0 rounded-full border border-[#2f6f5f]/25 bg-[#2f6f5f]/10 px-3 py-1 text-xs font-semibold text-[#143c32]">
          {props.pill}
        </span>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#1f2328]/70">
        {props.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

function SimpleCard(props: { title: string; meta: string }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white/55 p-6 backdrop-blur">
      <h3 className="text-base font-semibold tracking-tight">{props.title}</h3>
      <div className="mt-1 text-sm text-[#1f2328]/70">{props.meta}</div>
    </article>
  );
}

function ProjectCard(props: { title: string; desc: string; tags: string[] }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white/55 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(31,35,40,0.10)]">
      <h3 className="text-base font-semibold tracking-tight">{props.title}</h3>
      <p className="mt-2 text-sm text-[#1f2328]/70">{props.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {props.tags.map((t) => (
          <span key={t} className="rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs text-[#1f2328]/80">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function SkillGroup(props: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-[#1f2328]/80">{props.title}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {props.items.map((i) => (
          <span key={i} className="rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs text-[#1f2328]/80">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}