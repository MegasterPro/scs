import React from 'react';

export default function TextField({ label, value, onChange }) {
  return (
    <label className="block">
      <div className="text-sm mb-2 font-medium text-cyan-300">{label}</div>
      <input 
        value={value} 
        onChange={e => onChange(e.target.value)} 
        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition"
        placeholder={label}
      />
    </label>
  );
}
