const steps = [
  { number: '1', title: 'Connect', text: 'Securely link your business line and WhatsApp account in two clicks.' },
  { number: '2', title: 'Customize', text: 'Write your perfect greeting message or choose from templates.' },
  { number: '3', title: 'Relax', text: 'Get back to work. Your virtual assistant handles the rest.' },
];

export function HowItWorks() {
  return (
    <section className="section-shell py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Simple as 1-2-3</h2>
        <p className="mt-2 text-slate-600">Set up in minutes, profit for a lifetime.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.number} className="text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">
              {step.number}
            </div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
