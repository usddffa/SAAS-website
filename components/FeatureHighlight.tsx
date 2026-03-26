export function FeatureHighlight() {
  return (
    <section className="bg-white py-16" id="how-it-works">
      <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="card max-w-md p-6">
          <div className="space-y-3 text-sm">
            <div className="w-fit rounded-lg bg-slate-100 px-3 py-2">Hi, I need a quote for a kitchen leak.</div>
            <div className="w-fit rounded-lg bg-brand-500 px-3 py-2 text-white">
              Thanks for reaching out. We&apos;re currently on a job and we&apos;ll respond in under 5 min.
            </div>
            <div className="ml-auto w-fit rounded-lg bg-slate-100 px-3 py-2">Sure, here it is [Photo Sent]</div>
          </div>
        </div>

        <div>
          <p className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
            The 24/7 Receptionist
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight">The 24/7 Receptionist in Your Pocket.</h2>
          <p className="mt-4 text-slate-600">
            Verdant Flow detects when you miss a call and instantly sends a personalized WhatsApp message.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li>✓ 5-Second Response Time</li>
            <li>✓ Custom Branding & Voice</li>
            <li>✓ Zero App-Switching Required</li>
          </ul>
          <a
            href="#pricing"
            className="mt-7 inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            See How It Saves Sales
          </a>
        </div>
      </div>
    </section>
  );
}
