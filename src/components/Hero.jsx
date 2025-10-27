import { Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700 shadow-sm">
              <Sparkles size={14} />
              Powering growth with data, cloud, and marketing
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Operate smarter. Scale faster. Lead with data.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              GoAurex blends technology and strategy to deliver data solutions, cloud modernization,
              email marketing, and interactive analytics that drive efficiency and impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700">
                Explore Solutions
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">
                Talk to an expert
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-600">
              <Shield size={16} className="text-emerald-600" />
              Enterprise-grade security and compliance
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="h-full w-full bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 opacity-10" />
              <div className="absolute inset-0 grid place-items-center p-6">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-gray-900">Data Solutions</p>
                    <p className="mt-1 text-xs text-gray-600">Warehousing, ETL, migration, optimization</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-gray-900">Cloud Solutions</p>
                    <p className="mt-1 text-xs text-gray-600">AWS, Azure, GCP, DevOps, security</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-gray-900">Email Marketing</p>
                    <p className="mt-1 text-xs text-gray-600">Automation, personalization, conversion</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-gray-900">Data Visualization</p>
                    <p className="mt-1 text-xs text-gray-600">Interactive dashboards, BI insights</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">Built for teams that value performance, security, and results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
