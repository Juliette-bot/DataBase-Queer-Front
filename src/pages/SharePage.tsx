import type React from 'react';
import { AddResourceForm } from '../components/organisms/AddResourceForm';

export const SharePage: React.FC = () => {
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

      {/* Header de la page */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Badge décoratif */}
          <div className="flex justify-center mb-6">
            <div className="inline-block px-6 py-2 bg-accent-neon/20 border-2 border-accent-neon 
                          rounded-pixel shadow-pixel-neon">
              <span className="text-accent-neon text-xs font-pixel tracking-wider">
                🌈 CONTRIBUTION COMMUNAUTAIRE 🌈
              </span>
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6
                       drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]
                       [text-shadow:_3px_3px_0_rgb(0_0_0_/_50%)]">
            Partage de ressources
          </h1>
          
          {/* Description */}
          <div className="bg-retro-darker/80 backdrop-blur-sm p-6 
                        border-4 border-violet-400 rounded-pixel shadow-pixel-violet
                        relative overflow-hidden">
            {/* Coins décoratifs */}
            <div className="absolute top-0 left-0 w-6 h-6 bg-accent-neon"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-retro-darker"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-retro-darker"></div>
            
            {/* Glow effect interne */}
            <div className="absolute inset-0 bg-violet-500/5 pointer-events-none"></div>
            
            <p className="text-cyan-200 text-base md:text-lg text-center leading-relaxed relative z-10">
              <span className="text-accent-neon font-bold">Out Together</span> est une plateforme collaborative 
              où chacun·e peut contribuer en partageant des ressources LGBTQIA+ utiles et inclusives. 
              <span className="block mt-2 text-white font-semibold">
                ▸ Votre contribution aide la communauté à grandir ! ✨
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <AddResourceForm />
    </div>
  );
};