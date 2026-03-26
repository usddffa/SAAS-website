const faqs = [
  {
    q: 'Will this replace my personal WhatsApp?',
    a: 'No, it integrates directly with your existing business or Personal WhatsApp account. You can stop and start automation anytime.',
  },
  {
    q: 'Is it difficult to set up?',
    a: 'Not at all. Setup takes about 2 minutes and is designed for non-technical teams.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes, you can switch your plan at any time. Changes take effect immediately.',
  },
  {
    q: 'How many users are included in the Pro plan?',
    a: 'The Pro plan supports up to 10 users with full dashboard access.',
  },
  {
    q: 'What makes the Enterprise plan different?',
    a: 'Enterprise includes advanced integrations, custom onboarding, and a dedicated account manager.',
  },
  {
    q: 'Does it work for missed landline calls?',
    a: 'Yes. You can route missed-call triggers from VoIP or landline systems to Verdant Flow automations.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-shell py-16">
      <h2 className="text-center text-4xl font-bold">Frequently Asked Questions</h2>
      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {faqs.map((faq) => (
          <details key={faq.q} className="card group p-5">
            <summary className="cursor-pointer list-none font-semibold text-slate-800">{faq.q}</summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
