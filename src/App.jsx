import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';

import { ConfigContext } from './context/ConfigContext';
import AdminRoute from './components/AdminRoute';

const STORAGE_KEY = 'sante_connectee_config_v2';

const DefaultConfig = {
  appName: 'Santé Connectée',
  theme: 'light',
  showVideos: true,
  hero: {
    title: 'Plateforme de Santé Connectée',
    subtitle:
      'Une solution innovante pour le suivi médical à distance, la gestion des dossiers patients et la collaboration entre professionnels de santé.',
    ctaPrimary: '#',
    ctaSecondary: '#',
    video: '',
  },
  features: [
    {
      id: 'patients',
      title: 'Dossiers Médicaux Intelligents',
      desc: 'Centralisez et sécurisez les données de vos patients. Accès rapide à l\'historique médical, aux traitements en cours et aux allergies.',
    },
    {
      id: 'doctors',
      title: 'Plateforme de Téléconsultation',
      desc: 'Effectuez des consultations à distance via vidéo sécurisée. Partagez des ordonnances et des résultats d\'analyse en temps réel.',
    },
    {
      id: 'pharmacies',
      title: 'Gestion des Ordonnances',
      desc: 'Recevez les ordonnances électroniques directement des médecins. Gérez les stocks et informez les patients de la disponibilité des médicaments.',
    },
    {
      id: 'hospitals',
      title: 'Collaboration Inter-établissements',
      desc: 'Facilitez le transfert de patients et le partage d\'informations entre hôpitaux et cliniques pour une meilleure continuité des soins.',
    },
  ],
  impact: {
    surchargeReduction: 0,
    productivityGain: 0,
    pharmacyGain: 0,
  },
  meta: {
    partnersCount: 0,
  },
  international: {
    text: 'Partenaires internationaux et experts techniques',
    partners: [
      { id: 'who', name: 'Organisation Mondiale de la Santé' },
      { id: 'worldbank', name: 'Banque Mondiale' },
      { id: 'usaid', name: 'USAID' },
    ],
  },
  videos: ['', '', ''],
  testimonials: [
    {
      id: 'doc1',
      quote:
        'La plateforme a transformé ma manière de suivre les patients. Un gain de temps incroyable et une meilleure qualité de soins.',
      name: 'Dr. Aïssatou Diop, Médecin Généraliste',
    },
    {
      id: 'phar1',
      quote:
        'La gestion des ordonnances est plus simple et plus sûre. Moins d\'erreurs et une meilleure communication avec les médecins.',
      name: 'M. Ndiaye, Pharmacien',
    },
  ],
  footer: {
    contact: 'contact@santeconnectee.sn',
  },
};

function deepMerge(target, source) {
  const output = { ...target };

  if (target && typeof target === 'object' && source && typeof source === 'object') {
    Object.keys(source).forEach(key => {
      if (source[key] && typeof source[key] === 'object' && key in target) {
        output[key] = deepMerge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DefaultConfig;
    const storedConfig = JSON.parse(raw);
    return deepMerge(DefaultConfig, storedConfig);
  } catch (e) {
    console.warn('loadConfig failed', e);
    return DefaultConfig;
  }
}

function saveConfig(cfg) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
  } catch (e) {
    console.warn('saveConfig failed', e);
  }
}

export default function App() {
  const [config, setConfig] = useState(loadConfig);

  useEffect(() => {
    saveConfig(config);
  }, [config]);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      <Router basename="/scs">
         <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="brightcoders" element={<AdminRoute />} />
            <Route path="*" element={<Landing />} />
         </Routes>
       </Router>
    </ConfigContext.Provider>

  );
}