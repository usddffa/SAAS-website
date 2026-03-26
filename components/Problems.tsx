const items = [
  {
    title: 'The 5-Minute Window',
    text: "Lead conversion drops by 80% if you don't respond within the first 5 minutes.",
  },
  {
    title: 'Next Name on Google',
    text: 'If you do not answer, they immediately click the next result. You are literally paying to send leads away.',
  },
  {
    title: 'Busy Bias',
    text: "Being a good technician shouldn't mean being a bad business owner.",
  },
];

export function Problems() {
  return (
    <section id="features" className="section-shell py-16">
      <h2 className="text-3xl font-bold text-slate-900">A Missed Call is a Customer Lost.</h2>
      <p className="mt-2 text-slate-600">In today&apos;s fast-paced world, speed is the ultimate competitive advantage.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="card p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
