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
  // add other default settings your app expects
};

function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DefaultConfig;
    return JSON.parse(raw);
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
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/brightcoders" element={<AdminRoute />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </Router>
    </ConfigContext.Provider>
  );
}