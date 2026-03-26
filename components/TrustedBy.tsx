const brands = ['PLUMBING PROS', 'ELITE CLEANING', 'SPARK ELECTRIC', 'MASTER PAINTERS', 'CLIMATE COMFORT'];

export function TrustedBy() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="section-shell text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-slate-400">TRUSTED BY LOCAL SERVICE EXPERTS</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-slate-500">
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
