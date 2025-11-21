import React from 'react';

function ImpactCard({ value, text, icon }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-transparent border border-white/10 hover:border-cyan-400/50 transition">
      <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">{value}</div>
      <div className="mt-3 opacity-90 font-medium">{text}</div>
    </div>
  );
}

export default function Impact({ impact, meta }) {
  return (
    <section id="impact" className="mt-16 py-12 bg-gradient-to-br from-white/3 via-white/1 to-transparent rounded-2xl px-6 border border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Impact national</h2>
          <p className="mt-2 opacity-80"> Résultats mesurables et bénéfices concrets</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImpactCard value={`${impact.surchargeReduction}%`} text="Réduction de la surcharge hospitalière" />
          <ImpactCard value={`${impact.productivityGain}%`} text="Efficacité administrative" />
          <ImpactCard value={`${impact.pharmacyGain}%`} text="Efficacité des pharmacies" />
        </div>
        <div className="mt-8 text-center">
          <div className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10">
            <span className="opacity-80">Partenaires enregistrés : </span>
            <span className="text-xl font-bold text-cyan-300">{meta.partnersCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
