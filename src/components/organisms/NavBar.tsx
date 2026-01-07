// src/components/organisms/Navbar.tsx
import type React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';

interface NavbarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isAuthenticated = false,
  onLogout 
}) => {
  return (
    <nav className="bg-surface-light shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-action hover:text-action-hover transition-colors">
              Out Together
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-content-primary hover:text-action transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link 
              to="/resources" 
              className="text-content-primary hover:text-action transition-colors font-medium"
            >
              Ressources
            </Link>
            <Link 
              to="/share" 
              className="text-content-primary hover:text-action transition-colors font-medium"
            >
              Partage
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Button 
                  variant="neutral" 
                  onClick={onLogout}
                  className="hidden md:block"
                >
                  Déconnexion
                </Button>
                <div className="w-10 h-10 rounded-full bg-action flex items-center justify-center text-white font-semibold">
                  U
                </div>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button 
                    variant="neutral"
                    className="hidden md:block"
                  >
                    Connexion
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="action">
                    Inscription
                  </Button>
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-content-primary hover:text-action"
              aria-label="Menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};