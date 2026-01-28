import { useState, useEffect } from 'react';
import { ResourceCard } from '../components/organisms/ResourceCard';
import type {ResourceData} from '../types/ResourceTypes'
import { GetResourceService } from '../services/Api';

export const ResourcePage = () => {
  const [resources, setResources] = useState<ResourceData[]>([]);

  useEffect(() => {
    GetResourceService.getAll().then(data => setResources(data));
  }, []);

  const handleView = (name: string) => {
    console.log('Voir la ressource', name);
  };

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

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header avec style pixel */}
        <header className="mb-12">
          <div className="flex justify-center mb-6">
             <div className="inline-block px-6 py-2 bg-accent-neon/20 border-2 border-accent-neon 
                          rounded-pixel shadow-pixel-neon">
              <span className="text-accent-neon text-sm font-pixel tracking-widest">

                🏳️‍🌈 BIBLIOTHEQUE COMMUNAUTAIRE 🏳️‍🌈
              </span>
            </div>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3
                         drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]
                         [text-shadow:_3px_3px_0_rgb(0_0_0_/_50%)]">
              Ressources LGBTQIA+
            </h1>
            
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="w-3 h-3 bg-accent-neon rounded-full animate-pulse"></div>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-retro-darker/80 backdrop-blur-sm p-6 
                          border-4 border-cyan-400 rounded-pixel shadow-pixel-cyan
                          relative overflow-hidden">
              {/* Coins décoratifs */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-accent-neon"></div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-retro-darker"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-indigo-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-retro-darker"></div>
              
              {/* Glow effect interne */}
              <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none"></div>
              
              <p className="text-cyan-200 text-center text-base md:text-lg relative z-10">
                ▸ Découvre les ressources partagées par la communauté
              </p>
            </div>
          </div>

          {/* Stats ou filtres (optionnel) */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <div className="bg-retro-dark border-2 border-indigo-400 rounded-pixel px-4 py-2
                          shadow-pixel flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-400"></div>
              <span className="text-cyan-200 text-sm font-semibold">
                {resources.length} ressources
              </span>
            </div>
            <div className="bg-retro-dark border-2 border-violet-400 rounded-pixel px-4 py-2
                          shadow-pixel flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 animate-pulse"></div>
              <span className="text-cyan-200 text-sm font-semibold">
                Mis à jour récemment
              </span>
            </div>
          </div>
        </header>

        {/* Grille de ressources */}
        {resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                resource={resource}
                onView={handleView}
                showActions={true}
              />
            ))}
          </div>
        ) : (
          /* Message si pas de ressources - Style pixel */
          <div className="max-w-2xl mx-auto">
            <div className="bg-retro-darker/80 backdrop-blur-sm p-12 
                          border-4 border-violet-400 rounded-pixel shadow-pixel-violet
                          text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-violet-500/5 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-500 
                              border-4 border-white/30 rounded-pixel shadow-pixel-lg
                              flex items-center justify-center text-5xl mx-auto mb-6">
                  📚
                </div>
                <h3 className="text-2xl font-bold text-white mb-3
                             [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">
                  Aucune ressource disponible
                </h3>
                <p className="text-cyan-200 mb-6">
                  Sois le·la premier·ère à partager une ressource !
                </p>
                <button className="px-6 py-3 
                                 bg-gradient-to-r from-indigo-500 to-violet-500
                                 border-4 border-white/30 rounded-pixel
                                 text-white font-bold
                                 shadow-pixel-lg hover:shadow-[8px_8px_0px_rgba(0,0,0,0.5)]
                                 transition-all duration-200
                                 hover:translate-x-1 hover:translate-y-1
                                 active:translate-x-2 active:translate-y-2
                                 active:shadow-pixel">
                  ✨ Ajouter une ressource
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pixels décoratifs fixes */}
      <div className="fixed bottom-8 left-8 w-4 h-4 bg-accent-neon animate-pulse"></div>
      <div className="fixed bottom-8 right-8 w-4 h-4 bg-cyan-400 animate-pulse"></div>
    </div>
  );
};