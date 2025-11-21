import React from 'react';

export default function CTA({ footer }) {
  return (
    <section id="contact" className="mt-16 py-12 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-2xl px-6 border border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Rejoignez la révolution digitale de la santé
        </h2>
        <p className="mt-4 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Ensemble, transformons le système de santé sénégalais pour plus d'efficacité et d'accessibilité.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a 
            href={`mailto:${footer.contact}`} 
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 font-semibold text-black hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105"
          >
            Nous contacter
          </a>
          <a 
            href="#" 
            className="px-8 py-4 rounded-xl border-2 border-white/20 hover:border-cyan-400 hover:bg-white/5 transition"
          >
            Devenir partenaire
          </a>
        </div>
      </div>
    </section>
  );
}
