// src/App.tsx
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './components/organisms/NavBar';
import { Footer } from './components/organisms/Footer';
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { ResourcePage } from './pages/RessourcesPage';
import { SharePage } from './pages/SharePage';
import { authService, tokenService } from './services/AuthApi';

// Composant wrapper pour avoir accès à useNavigate
function AppContent() {
  // Initialise directement l'état avec la valeur du token
  const [isAuthenticated, setIsAuthenticated] = useState(() => 
    tokenService.isAuthenticated()
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout(); // Supprime le token
    setIsAuthenticated(false);
    navigate('/'); // Redirige vers l'accueil
  };

  // Fonction pour mettre à jour l'état après connexion/inscription
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-gray">
      <Navbar 
        isAuthenticated={isAuthenticated} 
        onLogout={handleLogout}
      />
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/auth" 
            element={<AuthPage onAuthSuccess={handleAuthSuccess} />} 
          />
          <Route path="/resource" element={<ResourcePage />} />
          <Route path="/share" element={<SharePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;