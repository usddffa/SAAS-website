'use client';

import { FormEvent, useState } from 'react';

export function CTAForm() {
  const [status, setStatus] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    setStatus(res.ok ? 'Thanks! We will be in touch shortly.' : 'Something went wrong. Please try again.');
    if (res.ok) event.currentTarget.reset();
  }

  return (
    <section id="cta" className="section-shell pb-16">
      <div className="rounded-3xl bg-brand-700 px-6 py-12 text-center text-white sm:px-10">
        <h2 className="text-4xl font-bold">Ready to never miss a lead again?</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-100">
          Join over 1,500 service professionals who trust Verdant Flow to grow their business.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-12 flex-1 rounded-xl border border-white/30 bg-white px-4 text-slate-900 outline-none ring-brand-200 placeholder:text-slate-400 focus:ring-2"
          />
          <button
            type="submit"
            className="h-12 rounded-xl bg-white px-5 font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Start My Free Trial
          </button>
        </form>
        {status && <p className="mt-3 text-sm text-brand-100">{status}</p>}
        <p className="mt-4 text-xs text-brand-100">No credit card required. 14-day free trial.</p>
      </div>
    </section>
  );
}
