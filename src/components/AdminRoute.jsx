import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ConfigContext } from '../context/ConfigContext';
import AdminPanel from './AdminPanel';
import TextField from './TextField';
import NumberField from './NumberField';

const DefaultConfig = {
  hero: {
    title: "La santé du futur commence aujourd'hui au Sénégal.",
    subtitle: "Une plateforme intelligente qui connecte hôpitaux, médecins, pharmacies et patients.",
    ctaPrimary: "#/platform",
    ctaSecondary: "#/vision",
    video: '',
  },
  features: [
    { id: 'hosp', title: 'Hôpitaux', desc: 'Profil complet : effectif, affluence, disponibilité, recrutement.' },
    { id: 'doc', title: 'Médecins', desc: 'Disponibilités, spécialités et rendez-vous.' },
    { id: 'pharm', title: 'Pharmacies', desc: 'Stock en temps réel, pharmacies de garde.' },
    { id: 'patient', title: 'Patients', desc: 'Orientation intelligente et accès aux urgences.' },
  ],
  impact: { surchargeReduction: 40, productivityGain: 30, pharmacyGain: 50 },
  international: {
    text: 'Future-ready health platform built from Africa to the world.',
    partners: [
      { id: 1, name: 'Partenaire A', logo: '' },
      { id: 2, name: 'Partenaire B', logo: '' },
      { id: 3, name: 'Partenaire C', logo: '' },
    ]
  },
  videos: ['', '', ''],
  testimonials: [
    { id: 1, name: 'Dr. A', quote: "Une révolution pour notre hôpital." },
    { id: 2, name: 'Infirmière B', quote: "Les files d'attente ont vraiment diminué." }
  ],
  footer: { contact: 'contact@santeconnectee.sn', socials: { twitter: '', facebook: '', linkedin: '' } },
  meta: { partnersCount: 12, officialLink: 'https://santeconnectee.sn' }
};

export default function AdminRoute() {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(!!sessionStorage.getItem('sc_admin'));
  const { config, setConfig } = useContext(ConfigContext);
  const [local, setLocal] = useState(config);

  useEffect(() => {
    const cleanConfig = {
      ...DefaultConfig,
      ...config,
      hero: { ...DefaultConfig.hero, ...config?.hero },
      impact: { ...DefaultConfig.impact, ...config?.impact },
      meta: { ...DefaultConfig.meta, ...config?.meta },
      international: { ...DefaultConfig.international, ...config?.international },
      footer: { 
        ...DefaultConfig.footer, 
        ...config?.footer,
        socials: { ...DefaultConfig.footer.socials, ...config?.footer?.socials }
      },
      features: config?.features || DefaultConfig.features,
      videos: config?.videos || DefaultConfig.videos,
      testimonials: config?.testimonials || DefaultConfig.testimonials,
    };
    setLocal(cleanConfig);
  }, [config]);

  function loginDemo() {
    const pwd = prompt('Mot de passe admin (demo)');
    if (pwd === 'brightcoders' || pwd === 'admin') {
      sessionStorage.setItem('sc_admin', '1');
      setAuthed(true);
      return;
    }
    alert('Accès refusé');
  }

  if (!authed) return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-[#05021a] text-[#eaf6ff] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-violet-600 font-bold text-black mx-auto mb-6 text-2xl">SC</div>
        <h2 className="text-3xl font-bold">Espace Administrateur</h2>
        <p className="mt-3 opacity-80 text-lg">Accès sécurisé réservé aux administrateurs.</p>
        <button 
          onClick={loginDemo} 
          className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-600 font-semibold text-black hover:shadow-lg hover:shadow-cyan-400/50 transition"
        >
          Authentification
        </button>
        <p className="mt-4 text-xs opacity-60">Utilisez le mot de passe demo pour accéder.</p>
      </div>
    </div>
  );

  function handleSave() {
    setConfig(local);
    alert('Modifications sauvegardées (localStorage)');
  }

  function handleReset() {
    if (!confirm('Remettre les valeurs par défaut ?')) return;
    setLocal(DefaultConfig);
    setConfig(DefaultConfig);
    alert('Réinitialisé');
  }

  function handleFile(path, file) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const keys = path.split('.');
    const copy = JSON.parse(JSON.stringify(local));
    let cur = copy;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in cur)) cur[keys[i]] = {};
      cur = cur[keys[i]];
    }
    cur[keys[keys.length - 1]] = url;
    setLocal(copy);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-[#05021a] text-[#eaf6ff]">
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold">Administration du Contenu</h1>
            <p className="opacity-70 mt-1">Gérez tous les éléments du site</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button 
              onClick={handleSave} 
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-600 text-black font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition"
            >
              💾 Mettre à jour
            </button>
            <button 
              onClick={handleReset} 
              className="px-6 py-3 rounded-lg border-2 border-white/20 hover:border-cyan-400 hover:bg-white/5 transition"
            >
              🔄 Réinitialiser
            </button>
            <Link to="/" className="px-6 py-3 rounded-lg border-2 border-white/20 hover:border-cyan-400 hover:bg-white/5 transition">
              👁️ Aperçu
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AdminPanel title="🎬 Héros (Section principale)">
            <TextField label="Titre principal" value={local.hero.title} onChange={v => setLocal({ ...local, hero: { ...local.hero, title: v } })} />
            <TextField label="Sous-titre" value={local.hero.subtitle} onChange={v => setLocal({ ...local, hero: { ...local.hero, subtitle: v } })} />
            <TextField label="URL vidéo (embed)" value={local.hero.video} onChange={v => setLocal({ ...local, hero: { ...local.hero, video: v } })} />
            <div className="mt-3">
              <label className="block text-sm mb-2 font-medium text-cyan-300">Télécharger vidéo</label>
              <input type="file" accept="video/*" onChange={e => handleFile('hero.video', e.target.files?.[0])} className="text-sm" />
            </div>
          </AdminPanel>

          <AdminPanel title="📊 Impact & Métriques">
            <NumberField label="Réduction surcharge (%)" value={local.impact.surchargeReduction} onChange={v => setLocal({ ...local, impact: { ...local.impact, surchargeReduction: Number(v) } })} />
            <NumberField label="Gain productivité (%)" value={local.impact.productivityGain} onChange={v => setLocal({ ...local, impact: { ...local.impact, productivityGain: Number(v) } })} />
            <NumberField label="Gain pharmacies (%)" value={local.impact.pharmacyGain} onChange={v => setLocal({ ...local, impact: { ...local.impact, pharmacyGain: Number(v) } })} />
            <NumberField label="Nombre de partenaires" value={local.meta.partnersCount} onChange={v => setLocal({ ...local, meta: { ...local.meta, partnersCount: Number(v) } })} />
            <TextField label="Lien officiel plateforme" value={local.meta.officialLink} onChange={v => setLocal({ ...local, meta: { ...local.meta, officialLink: v } })} />
          </AdminPanel>

          <AdminPanel title="⚙️ Fonctionnalités principales">
            {local.features.map((f, idx) => (
              <div key={f.id} className="p-4 rounded-lg bg-white/3 border border-white/5">
                <div className="font-semibold mb-2 text-cyan-300">Fonctionnalité {idx+1}</div>
                <TextField label="Titre" value={f.title} onChange={v => { const c = { ...local }; c.features[idx].title = v; setLocal(c); }} />
                <TextField label="Description" value={f.desc} onChange={v => { const c = { ...local }; c.features[idx].desc = v; setLocal(c); }} />
              </div>
            ))}
          </AdminPanel>

          <AdminPanel title="🎥 Vidéos de campagne">
            {local.videos.map((v, i) => (
              <div key={i} className="p-4 rounded-lg bg-white/3 border border-white/5">
                <div className="font-semibold mb-2 text-cyan-300">Vidéo {i+1}</div>
                <TextField label="URL vidéo" value={v} onChange={val => { const c = { ...local }; c.videos[i] = val; setLocal(c); }} />
                <div className="mt-2">
                  <label className="block text-sm mb-1 text-cyan-300">Télécharger</label>
                  <input type="file" accept="video/*" onChange={e => handleFile(`videos.${i}`, e.target.files?.[0])} className="text-sm" />
                </div>
              </div>
            ))}
          </AdminPanel>

          <AdminPanel title="🤝 Partenaires & logos">
            {local.international.partners.map((p, i) => (
              <div key={p.id} className="p-4 rounded-lg bg-white/3 border border-white/5">
                <div className="font-semibold mb-2 text-cyan-300">Partenaire {i+1}</div>
                <TextField label="Nom du partenaire" value={p.name} onChange={v => { const c = { ...local }; c.international.partners[i].name = v; setLocal(c); }} />
                <div className="mt-2">
                  <label className="block text-sm mb-1 text-cyan-300">Logo</label>
                  <input type="file" accept="image/*" onChange={e => handleFile(`international.partners.${i}.logo`, e.target.files?.[0])} className="text-sm" />
                </div>
                {p.logo && <img src={p.logo} alt="logo" className="h-8 mt-2" />}
              </div>
            ))}
          </AdminPanel>

          <AdminPanel title="💬 Témoignages">
            {local.testimonials.map((t, i) => (
              <div key={t.id} className="p-4 rounded-lg bg-white/3 border border-white/5">
                <div className="font-semibold mb-2 text-cyan-300">Témoignage {i+1}</div>
                <TextField label="Nom" value={t.name} onChange={v => { const c = { ...local }; c.testimonials[i].name = v; setLocal(c); }} />
                <TextField label="Citation" value={t.quote} onChange={v => { const c = { ...local }; c.testimonials[i].quote = v; setLocal(c); }} />
              </div>
            ))}
          </AdminPanel>

          <AdminPanel title="📧 Contact & réseaux">
            <TextField label="Email contact" value={local.footer.contact} onChange={v => setLocal({ ...local, footer: { ...local.footer, contact: v } })} />
            <TextField label="Twitter" value={local.footer.socials.twitter} onChange={v => setLocal({ ...local, footer: { ...local.footer, socials: { ...local.footer.socials, twitter: v } } })} />
            <TextField label="Facebook" value={local.footer.socials.facebook} onChange={v => setLocal({ ...local, footer: { ...local.footer, socials: { ...local.footer.socials, facebook: v } } })} />
            <TextField label="LinkedIn" value={local.footer.socials.linkedin} onChange={v => setLocal({ ...local, footer: { ...local.footer, socials: { ...local.footer.socials, linkedin: v } } })} />
          </AdminPanel>
        </div>
      </div>
    </div>
  );
}
