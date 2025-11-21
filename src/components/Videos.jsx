import React from 'react';

export default function Videos({ videos }) {
  return (
    <section className="mt-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Vidéos de campagne</h3>
        <p className="mt-2 opacity-80">Découvrez notre engagement</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <div 
            key={i} 
            className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 h-48 flex items-center justify-center border border-white/10 hover:border-cyan-400/50 transition"
          >
            {v ? (
              <iframe src={v} title={`v-${i}`} className="w-full h-full" frameBorder="0" allowFullScreen />
            ) : (
              <div className="text-center opacity-60">
                <div className="text-4xl mb-2">🎬</div>
                <div className="text-sm">Vidéo {i+1}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
