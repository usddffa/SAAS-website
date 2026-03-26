export function Hero() {
  return (
    <section className="section-shell py-10 lg:py-16">
      <div className="grid gap-8 rounded-3xl bg-[#eceef1] p-6 md:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            Stop Losing Customers to Your Competitors{' '}
            <span className="text-brand-600">Just Because You&apos;re Busy.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Turn every missed call into a saved sale. Our 24/7 automated WhatsApp responder greets your
            customers instantly, even when you&apos;re on the job.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Start My Free Trial
            </a>
            <a
              href="#how-it-works"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-600 hover:text-brand-700"
            >
              Watch Demo
            </a>
          </div>
        </div>
        <div className="card p-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-slate-100 p-8">
            <div className="mx-auto aspect-[4/3] w-full max-w-md rounded-xl bg-white/60 p-6">
              <div className="h-full rounded-lg border border-brand-100 bg-white p-4">
                <p className="text-sm text-slate-500">Incoming missed call</p>
                <div className="mt-3 rounded-lg bg-brand-100 p-3 text-brand-700">Thanks for reaching out 👋</div>
                <div className="mt-3 rounded-lg bg-slate-100 p-3 text-slate-700">Want to book a quote?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
