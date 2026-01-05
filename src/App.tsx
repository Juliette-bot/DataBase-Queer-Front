// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './components/organisms/NavBar';
import { Footer } from './components/organisms/Footer';
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { ResourcesPage } from './pages/RessourcesPage';
import { SharePage } from './pages/SharePage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // TODO: Supprimer le token, etc.
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-surface-gray">
        <Navbar 
          isAuthenticated={isAuthenticated} 
          onLogout={handleLogout}
        />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/share" element={<SharePage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;