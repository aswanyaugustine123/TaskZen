import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ProtectedRoutes from './ProtectedRoutes';
import configService from './ConfigService';

function App() {
  const [loadingConfig, setLoadingConfig] = useState(true);

  useEffect(() => {
    async function loadAppConfig() {
      await configService.loadConfig();
      setLoadingConfig(false);
    }
    loadAppConfig();
  }, []);

  if (loadingConfig) {
    return <div>Loading configuration...</div>;
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/*" element={<ProtectedRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
