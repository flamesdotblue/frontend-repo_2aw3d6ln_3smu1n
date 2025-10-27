import { Cloud, Database, Mail, BarChart3, ShieldCheck, Workflow } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Solutions',
    description:
      'Manage, integrate, and optimize your data with warehousing, ETL pipelines, migrations, and database tuning to unlock reliable insights.',
    bullets: ['Data warehousing', 'ETL & integration', 'Migration & optimization'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Design, migrate, and scale on AWS, Azure, and GCP. We bake in DevOps best practices for performance, security, and agility.',
    bullets: ['AWS • Azure • GCP', 'DevOps automation', 'Cloud security'],
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'Data-driven campaigns that personalize at scale, automate journeys, and boost conversions and retention.',
    bullets: ['Lifecycle automation', 'Segmentation & personalization', 'Deliverability optimization'],
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description:
      'Turn complex datasets into clear, interactive dashboards that empower decision-making and BI adoption.',
    bullets: ['Interactive dashboards', 'Self-serve analytics', 'KPI monitoring'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solutions built for growth</h2>
          <p className="mt-3 text-gray-600">
            From data platforms to cloud modernization and marketing automation, we deliver end-to-end outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, bullets }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="why" className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gradient-to-tr from-indigo-600/10 to-sky-500/10 p-4">
                  <div className="flex items-center gap-2 font-medium text-gray-900"><ShieldCheck className="text-emerald-600" size={18} /> Security-first</div>
                  <p className="mt-1 text-sm text-gray-600">Best practices for identity, data protection, and compliance.</p>
                </div>
                <div className="rounded-xl bg-gradient-to-tr from-indigo-600/10 to-sky-500/10 p-4">
                  <div className="flex items-center gap-2 font-medium text-gray-900"><Workflow className="text-indigo-600" size={18} /> DevOps built-in</div>
                  <p className="mt-1 text-sm text-gray-600">CI/CD, IaC, observability, and cost governance from day one.</p>
                </div>
                <div className="rounded-xl bg-gradient-to-tr from-indigo-600/10 to-sky-500/10 p-4">
                  <div className="flex items-center gap-2 font-medium text-gray-900"><BarChart3 className="text-sky-600" size={18} /> Measurable ROI</div>
                  <p className="mt-1 text-sm text-gray-600">Outcomes tied to speed, reliability, and conversion.</p>
                </div>
                <div className="rounded-xl bg-gradient-to-tr from-indigo-600/10 to-sky-500/10 p-4">
                  <div className="flex items-center gap-2 font-medium text-gray-900"><Cloud className="text-indigo-600" size={18} /> Multi-cloud ready</div>
                  <p className="mt-1 text-sm text-gray-600">Architected for AWS, Azure, and GCP with portability in mind.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Why GoAurex</h3>
            <p className="mt-3 text-gray-600">
              We bring seasoned engineering with a strategic lens. Our playbooks accelerate delivery while ensuring
              security, performance, and maintainability. Partner with a team that ships value, not just tickets.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-black/90">Schedule a discovery call</a>
              <a href="#services" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">View case studies</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
