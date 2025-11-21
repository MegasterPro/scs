import React from 'react';
import PropTypes from 'prop-types';

export default function Features({ items = [] }) {
  // Normalize items so we never call .map on a non-array
  const normalizedItems = Array.isArray(items)
    ? items
    : items && typeof items === 'object'
      ? Object.values(items)
      : [];

  // Simple empty state to avoid rendering errors
  if (normalizedItems.length === 0) {
    return (
      <section id="features" className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Fonctionnalités principales</h2>
          <p className="mt-2 opacity-80">Quatre piliers pour connecter l'écosystème de santé</p>
        </div>
        <div className="mt-8 text-center opacity-70">Aucune fonctionnalité disponible pour le moment.</div>
      </section>
    );
  }

  return (
    <section id="features" className="mt-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Fonctionnalités principales</h2>
        <p className="mt-2 opacity-80">Quatre piliers pour connecter l'écosystème de santé</p>
      </div>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {normalizedItems.map((it, idx) => (
          <div 
            key={it?.id ?? idx} 
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-cyan-400/50 hover:from-white/8 transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-black mb-3">
              {idx + 1}
            </div>
            <div className="font-bold text-lg text-cyan-300">{it?.title}</div>
            <div className="mt-3 text-sm opacity-80 leading-relaxed">{it?.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Features.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
