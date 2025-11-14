import React from 'react'
import Spline from '@splinetool/react-spline'

const NAME = '[Your Name]'
const SPECIALIZATION = '[Your Specialization]'
const ACCENT = '#FF4F00'
const DEEP = '#0A2540'

const projects = [
  {
    title: 'E-commerce Recommendation Engine Data Backbone',
    goal: 'Enable real-time, personalized recommendations across web and mobile.',
    solution:
      'Designed a streaming-first architecture ingesting clickstream events via Kafka into S3-backed bronze storage. Built dbt models that materialize feature tables in Snowflake and orchestrated with Airflow. Implemented feature computation with Spark Structured Streaming and served aggregates via Snowflake for downstream ML.',
    tech: ['Kafka', 'AWS S3', 'dbt', 'Snowflake', 'Airflow', 'Spark', 'Python', 'SQL'],
    outcome: 'Drove a 15% increase in cross-sells and 8% lift in average order value.',
    github: 'https://github.com/your-username/recsys-data-backbone'
  },
  {
    title: 'Customer 360 Lakehouse for B2B SaaS',
    goal: 'Create a unified customer view to power revenue analytics and churn prediction.',
    solution:
      'Implemented CDC ingestion from Postgres using Airbyte into a medallion architecture on S3 + Delta. Modeled business entities with dbt and exposed curated marts in BigQuery for BI. Automated end-to-end freshness SLAs with Prefect and data quality tests using dbt expectations.',
    tech: ['Airbyte', 'AWS S3', 'Delta Lake', 'dbt', 'BigQuery', 'Prefect', 'Python', 'SQL'],
    outcome: 'Reduced time-to-insight from days to minutes; improved churn model precision by 12%.',
    github: 'https://github.com/your-username/customer-360-lakehouse'
  }
]

function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="max-w-5xl mx-auto text-center mb-8">
      {kicker && (
        <p className="tracking-widest uppercase text-sm text-white/60 mb-2">{kicker}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-white/80 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

function GridCard({ title, items }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
      <h3 className="text-white font-medium mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <span
            key={t}
            className="text-sm px-3 py-1 rounded-full border border-white/15 text-white/90 bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ p }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl ring-1 ring-black/5">
      <div className="flex items-center justify-between gap-4 mb-2">
        <h3 className="text-xl md:text-2xl font-semibold text-[var(--deep)]">{p.title}</h3>
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium" style={{ color: ACCENT }}
        >
          GitHub ↗
        </a>
      </div>
      <div className="text-[var(--deep)]/80">
        <p className="mb-3"><span className="font-semibold">The Goal:</span> {p.goal}</p>
        <p className="mb-3"><span className="font-semibold">My Solution:</span> {p.solution}</p>
        <div className="mb-3"><span className="font-semibold">Architecture/Tech:</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-[var(--deep)]/5 text-[var(--deep)] border border-[var(--deep)]/10">{t}</span>
            ))}
          </div>
        </div>
        <p className=""><span className="font-semibold">The Outcome:</span> {p.outcome}</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: DEEP }}>
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px, 48px 48px',
          backgroundPosition: '0 0, 0 0',
        }}
      />

      {/* Top nav anchor links */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="text-white font-semibold tracking-tight">{NAME}</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#summary" className="hover:text-white">Summary</a>
            <a href="#stack" className="hover:text-white">My Data Stack</a>
            <a href="#projects" className="hover:text-white">Case Studies</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-md text-white text-sm"
            style={{ backgroundColor: ACCENT }}
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section id="top" className="relative h-[80vh] md:h-[90vh] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Overlay copy */}
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
              <p className="text-white/80 mb-2">Data Engineer</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white max-w-3xl">
                Hi, I&apos;m {NAME}. I architect the data systems that power intelligent applications.
              </h1>
              <p className="mt-4 text-white/80 max-w-2xl">
                Specializing in {SPECIALIZATION}. Building reliable, observable, and cost-aware pipelines end-to-end.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#projects" className="px-4 py-2 rounded-md text-white font-medium" style={{ backgroundColor: ACCENT }}>
                  View Case Studies
                </a>
                <a href="#stack" className="px-4 py-2 rounded-md border border-white/30 text-white/90 hover:bg-white/10">
                  My Data Stack
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" className="relative py-16 md:py-24">
        <SectionHeading
          kicker="Summary"
          title="About Me"
          subtitle={`I focus on ${SPECIALIZATION}. I design fault-tolerant ingestion, scalable storage, and governed transformation layers that keep data fresh and trustworthy.`}
        />
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl ring-1 ring-black/5">
            <p className="text-[var(--deep)]/80 leading-relaxed">
              Over the last several years, I have delivered data platforms powering analytics and ML across e-commerce, SaaS, and fintech. My approach emphasizes event-driven design, declarative transformations, and strong contracts between producers and consumers. I champion observability, testing, and documentation so teams can ship confidently.
            </p>
            <pre className="mt-6 p-4 rounded-lg bg-[var(--deep)] text-white overflow-auto text-sm font-mono">
{`# values I optimize for\n- Freshness, quality, and cost\n- Simplicity over complexity\n- Reproducibility and lineage`}
            </pre>
          </div>
        </div>
      </section>

      {/* Data Stack */}
      <section id="stack" className="relative py-16 md:py-24">
        <SectionHeading kicker="Technical Architecture" title="My Data Stack" subtitle="Expertise across the modern data lifecycle." />
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <GridCard title="Data Ingestion" items={["Kafka", "Fivetran", "Airbyte", "Kinesis", "Webhook ETL"]} />
          <GridCard title="Data Storage" items={["AWS S3", "Snowflake", "BigQuery", "Delta Lake", "Postgres"]} />
          <GridCard title="Data Transformation" items={["dbt", "Spark", "SQL", "Python", "DuckDB"]} />
          <GridCard title="Orchestration" items={["Airflow", "Prefect", "Dagster", "Step Functions"]} />
          <GridCard title="BI / Visualization" items={["Tableau", "Looker", "Mode", "Metabase"]} />
          <GridCard title="Reliability & Observability" items={["Great Expectations", "Monte Carlo", "OpenLineage", "CloudWatch"]} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-16 md:py-24">
        <SectionHeading kicker="Case Studies" title="Selected Projects" subtitle="How I turn requirements into reliable, production data systems." />
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-16 md:py-24">
        <SectionHeading kicker="Contact" title="Let’s build something. Get in touch." />
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl ring-1 ring-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-[var(--deep)]/80">I’m open to roles, consulting, and collaborations.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md text-white font-medium"
                style={{ backgroundColor: ACCENT }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md border border-[var(--deep)]/20 text-[var(--deep)] hover:bg-[var(--deep)]/5"
              >
                LinkedIn
              </a>
              <a
                href="mailto:you@example.com"
                className="px-4 py-2 rounded-md border border-[var(--deep)]/20 text-[var(--deep)] hover:bg-[var(--deep)]/5"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
          <p>
            Built with a data-centric design • <span style={{ color: ACCENT }}>Deep Blue</span> + White + Orange
          </p>
        </div>
      </footer>

      {/* CSS variables injected for easy theming */}
      <style>{`:root{--accent:${ACCENT};--deep:${DEEP};}`}</style>
    </div>
  )
}
