import React from 'react';
import PropTypes from 'prop-types';

export default function International({ section = {} }) {
  const partnersSource = section.partners;
  const normalizedPartners = Array.isArray(partnersSource)
    ? partnersSource
    : partnersSource && typeof partnersSource === 'object'
      ? Object.values(partnersSource)
      : [];

  return (
    <section className="mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="font-semibold text-lg text-cyan-300">{section.text}</h3>
        </div>

        {normalizedPartners.length === 0 ? (
          <div className="text-center opacity-70">Aucun partenaire international pour le moment.</div>
        ) : (
          <div className="flex gap-6 justify-center flex-wrap">
            {normalizedPartners.map((p, idx) => (
              <div 
                key={p?.id ?? idx} 
                className="h-16 w-40 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-cyan-400/50 hover:from-white/8 transition"
              >
                {p?.logo ? (
                  <img src={p.logo} alt={p.name} className="h-12 max-w-[90%]" />
                ) : (
                  <span className="opacity-70 font-medium text-sm text-center px-2">{p?.name}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

International.propTypes = {
  section: PropTypes.shape({
    text: PropTypes.string,
    partners: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }),
};
