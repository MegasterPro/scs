import React, { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';

export default function Footer() {
  const { config } = useContext(ConfigContext);
  const year = new Date().getFullYear();
  
  return (
    <footer className="mt-16 py-10 border-t border-white/10 bg-gradient-to-b from-transparent to-white/3">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-lg mb-2">Santé Connectée Sénégal</div>
            <p className="opacity-70 text-sm">Connecter les acteurs de santé pour une meilleure prise en charge.</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-cyan-300">Navigation</div>
            <div className="space-y-2 text-sm opacity-70">
              <div><a href="#features" className="hover:text-cyan-400 transition">Fonctionnalités</a></div>
              <div><a href="#impact" className="hover:text-cyan-400 transition">Impact</a></div>
              <div><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3 text-cyan-300">Contact</div>
            <div className="text-sm">
              <a href={`mailto:${config.footer.contact}`} className="opacity-70 hover:text-cyan-400 transition">
                {config.footer.contact}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 text-center opacity-60 text-sm">
          © {year} Santé Connectée Sénégal. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
