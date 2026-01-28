// src/components/organisms/Navbar.tsx
import type React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isAuthenticated = false,
  onLogout 
}) => {
  return (
    <nav className="bg-retro-darker/95 backdrop-blur-md border-b-4 border-violet-400 
                    shadow-[0_4px_0_rgba(139,92,246,0.3)] sticky top-0 z-50 relative">
      {/* Glow effect subtil */}
      <div className="absolute inset-0 bg-violet-500/5 pointer-events-none"></div>
      
      {/* Pixels décoratifs */}
      <div className="absolute top-0 left-4 w-3 h-3 bg-accent-neon"></div>
      <div className="absolute top-0 right-4 w-3 h-3 bg-cyan-400"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand - Style Pixel */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 
                          border-2 border-white/30 rounded-pixel shadow-pixel
                          flex items-center justify-center
                          group-hover:scale-110 transition-transform duration-200">
              <span className="text-white text-lg">🏳️‍🌈</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white 
                         drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]
                         group-hover:text-accent-neon transition-colors duration-200
                         [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">
              Out Together
            </h1>
          </Link>

          {/* Navigation Links - Style Pixel */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/" 
              className="px-4 py-2 text-cyan-200 hover:text-white font-semibold
                       hover:bg-white/10 rounded-pixel border-2 border-transparent
                       hover:border-cyan-400 transition-all duration-200
                       [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]"
            >
              <span className="flex items-center gap-1">
                Accueil
              </span>
            </Link>
            <Link 
              to="/resource" 
              className="px-4 py-2 text-cyan-200 hover:text-white font-semibold
                       hover:bg-white/10 rounded-pixel border-2 border-transparent
                       hover:border-indigo-400 transition-all duration-200
                       [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]"
            >
              <span className="flex items-center gap-1">
                Ressources
              </span>
            </Link>
            <Link 
              to="/share" 
              className="px-4 py-2 text-cyan-200 hover:text-white font-semibold
                       hover:bg-white/10 rounded-pixel border-2 border-transparent
                       hover:border-violet-400 transition-all duration-200
                       [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]"
            >
              <span className="flex items-center gap-1">
                Partage
              </span>
            </Link>
          </div>

          {/* Auth Section - Style Pixel */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <button
                  onClick={onLogout}
                  className="hidden md:block px-4 py-2 
                           bg-retro-dark border-2 border-white/30 rounded-pixel
                           text-white font-semibold
                           hover:border-red-400 hover:text-red-300
                           shadow-pixel hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]
                           transition-all duration-200
                           hover:translate-x-0.5 hover:translate-y-0.5
                           active:translate-x-1 active:translate-y-1
                           active:shadow-none"
                >
                  ⏻ Déconnexion
                </button>
                <div className="w-10 h-10 bg-gradient-to-br from-accent-neon to-cyan-400 
                              border-2 border-white/30 rounded-pixel shadow-pixel
                              flex items-center justify-center 
                              text-retro-darker font-bold text-lg">
                  U
                </div>
              </>
            ) : (
              <>
                <Link to="/auth" className="hidden md:block">
                  <button
                    className="px-6 py-2 
                             bg-gradient-to-r from-violet-500 to-indigo-500
                             border-2 border-white/30 rounded-pixel
                             text-white font-bold
                             shadow-pixel hover:shadow-[5px_5px_0px_rgba(0,0,0,0.4)]
                             hover:border-accent-neon
                             transition-all duration-200
                             hover:translate-x-0.5 hover:translate-y-0.5
                             active:translate-x-1 active:translate-y-1
                             active:shadow-[2px_2px_0px_rgba(0,0,0,0.4)]
                             relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      ▶ Connexion
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-full 
                                  group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </Link>
              </>
            )}

            {/* Menu burger mobile - Style Pixel */}
            <button 
              className="md:hidden p-2 text-cyan-200 hover:text-accent-neon
                       border-2 border-white/20 rounded-pixel
                       hover:border-accent-neon hover:bg-white/5
                       transition-all duration-200"
              aria-label="Menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path 
                  strokeLinecap="square" 
                  strokeLinejoin="miter" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Barre décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                    from-indigo-500 via-violet-500 to-cyan-500 opacity-50"></div>
    </nav>
  );
};