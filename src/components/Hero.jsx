import React from 'react';

export default function Hero({ cfg }) {
  return (
    <section className="pt-16 pb-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
          {cfg.title}
        </h1>
        <p className="mt-6 text-xl opacity-90 leading-relaxed">{cfg.subtitle}</p>
        
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a href={cfg.ctaPrimary} className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-600 text-black hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105">
            Accéder à la plateforme
          </a>
          <a href={cfg.ctaSecondary} className="px-8 py-4 rounded-xl border-2 border-white/20 hover:border-cyan-400 hover:bg-white/5 transition">
            Découvrir la vision
          </a>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl h-[420px] bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center border border-white/10">
          {cfg.video ? (
            <iframe className="w-full h-full" src={cfg.video} title="Campagne" frameBorder="0" allowFullScreen />
          ) : (
            <div className="text-center opacity-50 px-6">
              <div className="text-lg">Zone vidéo de campagne</div>
              <div className="text-sm mt-2 opacity-75">Configurez via l'interface d'administration</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
