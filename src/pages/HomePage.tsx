// src/pages/HomePage.tsx
import type React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-retro relative overflow-hidden">
      {/* Pattern de fond pixel */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-10"></div>
      
      {/* Scanlines effet rétro */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{
             background: 'repeating-linear-gradient(0deg, rgba(0,0,0,.15) 0px, transparent 1px, transparent 2px, rgba(0,0,0,.15) 3px)',
             opacity: 0.03
           }}>
      </div>

      {/* Éléments décoratifs animés */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-accent-neon opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-10 h-10 bg-violet-400 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-indigo-400 opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* Badge "NEW" style arcade */}
            <div className="flex justify-center mb-8 animate-bounce">
              <div className="inline-block px-6 py-2 bg-accent-neon/20 border-4 border-accent-neon 
                            rounded-pixel shadow-pixel-neon">
                <span className="text-accent-neon text-xs font-pixel tracking-wider animate-pulse">
                 ★ PLATEFORME COMMUNAUTAIRE ★
                </span>
              </div>
            </div>

            {/* Logo/Icon principal */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-500 
                            border-4 border-white/30 rounded-pixel shadow-pixel-lg
                            flex items-center justify-center text-6xl
                            animate-pulse">
                🏳️‍🌈
              </div>
            </div>

            {/* Titre principal avec effet glitch subtle */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6
                         drop-shadow-[0_0_20px_rgba(139,92,246,0.8)]
                         [text-shadow:_4px_4px_0_rgb(0_0_0_/_50%)]
                         animate-fade-in">
              Out Together
            </h1>

            {/* Ligne décorative */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-violet-400"></div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-indigo-400"></div>
                <div className="w-3 h-3 bg-violet-400"></div>
                <div className="w-3 h-3 bg-cyan-400"></div>
              </div>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent via-violet-400 to-cyan-400"></div>
            </div>

            {/* Description dans une box pixel */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-retro-darker/80 backdrop-blur-md p-8 
                            border-4 border-violet-400 rounded-pixel shadow-pixel-violet
                            relative overflow-hidden group
                            hover:shadow-[0_0_30px_rgba(139,92,246,0.8),10px_10px_0px_rgba(0,0,0,0.5)]
                            transition-all duration-300">
                {/* Coins décoratifs */}
                <div className="absolute top-0 left-0 w-6 h-6 bg-accent-neon"></div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-retro-darker"></div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-cyan-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-retro-darker"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-indigo-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-retro-darker"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-violet-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-retro-darker"></div>
                
                {/* Glow effect interne */}
                <div className="absolute inset-0 bg-violet-500/5 pointer-events-none 
                              group-hover:bg-violet-500/10 transition-colors duration-300"></div>
                
                <p className="text-xl md:text-2xl text-cyan-200 leading-relaxed relative z-10">
                  Une plateforme collaborative pour partager et découvrir des ressources 
                  <span className="text-accent-neon font-bold"> LGBTQIA+ </span>
                  inclusives et bienveillantes.
                </p>
              </div>
            </div>

            {/* Boutons d'action style arcade */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/resource">
                <button className="w-full sm:w-auto px-10 py-4
                                 bg-gradient-to-r from-indigo-500 to-violet-500
                                 border-4 border-white/30 rounded-pixel
                                 text-white font-bold text-lg uppercase
                                 shadow-pixel-lg hover:shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
                                 transition-all duration-200
                                 hover:translate-x-1 hover:translate-y-1
                                 active:translate-x-2 active:translate-y-2
                                 active:shadow-pixel
                                 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🎮 Découvrir les ressources
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-x-full 
                                group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </Link>

              <Link to="/share">
                <button className="w-full sm:w-auto px-10 py-4
                                 bg-retro-dark
                                 border-4 border-cyan-400 rounded-pixel
                                 text-cyan-300 font-bold text-lg uppercase
                                 shadow-pixel-lg hover:shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
                                 hover:border-accent-neon hover:text-accent-neon
                                 transition-all duration-200
                                 hover:translate-x-1 hover:translate-y-1
                                 active:translate-x-2 active:translate-y-2
                                 active:shadow-pixel
                                 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    ✨ Partager une ressource
                  </span>
                  <div className="absolute inset-0 bg-cyan-400/10 translate-x-full 
                                group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Section Features - Style cartes arcade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Feature 1 */}
            <div className="bg-retro-darker/80 backdrop-blur-sm p-6 
                          border-4 border-indigo-400 rounded-pixel shadow-pixel
                          hover:shadow-[0_0_20px_rgba(99,102,241,0.7),8px_8px_0px_rgba(0,0,0,0.4)]
                          transition-all duration-300
                          hover:translate-x-1 hover:translate-y-1
                          relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-4 h-4 bg-indigo-400"></div>
              <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-indigo-500 border-2 border-white/30 rounded-pixel
                            flex items-center justify-center text-4xl mb-4 shadow-pixel
                            group-hover:scale-110 transition-transform duration-200">
                📚
              </div>
              <h3 className="text-xl font-bold text-white mb-2 
                           [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">
                Ressources variées
              </h3>
              <p className="text-cyan-200 text-sm">
                Livres, podcasts, vidéos, jeux... Trouve ce qui te correspond !
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-retro-darker/80 backdrop-blur-sm p-6 
                          border-4 border-cyan-400 rounded-pixel shadow-pixel
                          hover:shadow-[0_0_20px_rgba(6,182,212,0.7),8px_8px_0px_rgba(0,0,0,0.4)]
                          transition-all duration-300
                          hover:translate-x-1 hover:translate-y-1
                          relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400"></div>
              <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-cyan-500 border-2 border-white/30 rounded-pixel
                            flex items-center justify-center text-4xl mb-4 shadow-pixel
                            group-hover:scale-110 transition-transform duration-200">
                🤝
              </div>
              <h3 className="text-xl font-bold text-white mb-2 
                           [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">
                Communauté active
              </h3>
              <p className="text-cyan-200 text-sm">
                Partage, découvre et connecte-toi avec d'autres membres.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-retro-darker/80 backdrop-blur-sm p-6 
                          border-4 border-violet-400 rounded-pixel shadow-pixel
                          hover:shadow-[0_0_20px_rgba(139,92,246,0.7),8px_8px_0px_rgba(0,0,0,0.4)]
                          transition-all duration-300
                          hover:translate-x-1 hover:translate-y-1
                          relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-4 h-4 bg-violet-400"></div>
              <div className="absolute inset-0 bg-violet-500/5 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-violet-500 border-2 border-white/30 rounded-pixel
                            flex items-center justify-center text-4xl mb-4 shadow-pixel
                            group-hover:scale-110 transition-transform duration-200">
                🌈
              </div>
              <h3 className="text-xl font-bold text-white mb-2 
                           [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">
                Safe & Inclusif
              </h3>
              <p className="text-cyan-200 text-sm">
                Un espace bienveillant et respectueux pour tou·te·s.
              </p>
            </div>
          </div>

          {/* Call to action final */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-retro-darker/60 backdrop-blur-sm px-8 py-4 
                          border-2 border-accent-neon/50 rounded-pixel">
              <p className="text-accent-neon text-sm font-bold tracking-wider animate-pulse">
                ▸ PRESS START TO BEGIN YOUR JOURNEY ▸
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};