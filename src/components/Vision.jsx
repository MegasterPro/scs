import React from 'react';

function SmallCard({ title, desc }) {
  return (
    <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-cyan-400/50 hover:from-white/8 transition">
      <div className="font-bold text-lg text-cyan-300">{title}</div>
      <div className="mt-2 text-sm opacity-80 leading-relaxed">{desc}</div>
    </div>
  );
}

export default function Vision() {
  return (
    <section className="mt-16 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Notre vision</h2>
          <p className="mt-4 opacity-90 leading-relaxed">
            Construire un écosystème national qui connecte chaque acteur de la chaîne de soin grâce au numérique. 
            <span className="text-cyan-300 font-semibold"> Intégrité, rapidité et équité</span> pour tous les citoyens.
          </p>
        </div>
        <ul className="space-y-3 opacity-90">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">✓</span>
            <span>Orientation intelligente des patients</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">✓</span>
            <span>Visibilité en temps réel pour hôpitaux et pharmacies</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">✓</span>
            <span>Préparation pour IA & téléconsultation</span>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <SmallCard title="🏥 Hôpitaux" desc="Effectifs, affluence, recrutement" />
        <SmallCard title="👨‍⚕️ Médecins" desc="Disponibilités & spécialités" />
        <SmallCard title="💊 Pharmacies" desc="Stock & gardes en temps réel" />
      </div>
    </section>
  );
}
