import React from 'react';

export default function AdminPanel({ title, children }) {
  return (
    <section className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
      <h4 className="font-bold mb-4 text-lg text-cyan-300">{title}</h4>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
