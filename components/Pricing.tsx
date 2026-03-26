const plans = [
  {
    name: 'Starter',
    price: '$49',
    detail: '/mo',
    points: ['Up to 100 Automated Replies', 'Basic Response Templates', 'Business Hours Support', '1 User Account'],
    cta: 'Choose Starter',
  },
  {
    name: 'Pro',
    price: '$99',
    detail: '/mo',
    points: ['Unlimited Automated Replies', 'AI-Powered Intent Detection', 'Multi-Agent Dashboard', 'Advanced CRM Integration'],
    cta: 'Start My Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    detail: '',
    points: ['Multi-location Support', 'Custom API Integrations', 'Dedicated Account Manager', 'White-label Options'],
    cta: 'Contact Sales',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Affordable Growth</h2>
          <p className="mt-2 text-slate-600">One saved job pays for the entire year.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`card p-6 ${plan.featured ? 'border-brand-500 ring-2 ring-brand-100' : ''}`}
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-4xl font-black">{plan.price}</p>
              {plan.detail && <p className="text-slate-500">{plan.detail}</p>}
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {plan.points.map((point) => (
                  <li key={point}>✓ {point}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'border border-brand-500 text-brand-700 hover:bg-brand-50'
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
