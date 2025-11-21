import React from 'react';
import PropTypes from 'prop-types';

export default function Testimonials({ items = [] }) {
  const normalized = Array.isArray(items)
    ? items
    : items && typeof items === 'object'
      ? Object.values(items)
      : [];

  if (normalized.length === 0) {
    return (
      <section className="mt-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Témoignages</h3>
          <p className="mt-2 opacity-80">Voix de ceux qui font la différence</p>
        </div>
        <div className="text-center opacity-70">Aucun témoignage pour le moment.</div>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Témoignages</h3>
        <p className="mt-2 opacity-80">Voix de ceux qui font la différence</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {normalized.map((t, idx) => (
          <blockquote 
            key={t?.id ?? idx} 
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-400/10"
          >
            <div className="text-xl opacity-40 mb-3">"</div>
            <p className="mt-1 opacity-90 leading-relaxed italic">{t?.quote}</p>
            <div className="mt-4 font-semibold text-cyan-300">— {t?.name}</div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
