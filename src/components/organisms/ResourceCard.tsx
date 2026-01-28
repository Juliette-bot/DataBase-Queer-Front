import { ResourceCardHeader } from '../molecules/ResourceCardHeader';
import { ResourceCardContent } from '../molecules/ResourceCardContent';
import { ResourceCardActions } from '../molecules/ResourceCardActions';
import type { ResourceData } from '../../types/ResourceTypes'

interface ResourceCardProps {
  resource: ResourceData;
  onView?: (name: string) => void;
  showActions?: boolean;
}

export const ResourceCard = ({ 
  resource, 
  onView,
  showActions = true
}: ResourceCardProps) => {
  // Déterminer la couleur selon le type de média
  const mediaColors: { [key: string]: { border: string; accent: string; glow: string } } = {
    'Lire': { 
      border: 'border-indigo-400', 
      accent: 'bg-indigo-400',
      glow: 'shadow-[0_0_15px_rgba(99,102,241,0.5),6px_6px_0px_rgba(0,0,0,0.3)]'
    },
    'Écouter': { 
      border: 'border-cyan-400', 
      accent: 'bg-cyan-400',
      glow: 'shadow-[0_0_15px_rgba(6,182,212,0.5),6px_6px_0px_rgba(0,0,0,0.3)]'
    },
    'Regarder': { 
      border: 'border-blue-400', 
      accent: 'bg-blue-400',
      glow: 'shadow-[0_0_15px_rgba(59,130,246,0.5),6px_6px_0px_rgba(0,0,0,0.3)]'
    },
    'Jouer': { 
      border: 'border-violet-400', 
      accent: 'bg-violet-400',
      glow: 'shadow-[0_0_15px_rgba(139,92,246,0.5),6px_6px_0px_rgba(0,0,0,0.3)]'
    }
  };

  const colorScheme = mediaColors[resource.mediaType] || mediaColors['Lire'];

  return (
    <article className={`
      bg-retro-darker/90 backdrop-blur-sm
      rounded-pixel 
      border-4 ${colorScheme.border}
      shadow-pixel hover:${colorScheme.glow}
      transition-all duration-300
      p-6 space-y-4
      relative overflow-hidden
      group
      hover:translate-x-1 hover:translate-y-1
    `}>
      {/* Glow effect interne */}
      <div className={`absolute inset-0 ${colorScheme.accent} opacity-0 
                     group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
      
      {/* Coin décoratif supérieur */}
      <div className={`absolute top-0 right-0 w-6 h-6 ${colorScheme.accent}`}></div>
      <div className="absolute top-0 right-0 w-4 h-4 bg-retro-darker"></div>
      
      {/* Coin décoratif inférieur */}
      <div className={`absolute bottom-0 left-0 w-4 h-4 ${colorScheme.accent} 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Barre latérale colorée */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${colorScheme.accent}`}></div>
      
      {/* Contenu */}
      <div className="relative z-10">
        <ResourceCardHeader 
          title={resource.title}
          category={resource.categoryName} 
          tags={[resource.mediaType]} 
        />
        
        <ResourceCardContent 
          description={resource.description}
          location={resource.listenMetadata?.platform || resource.watchMetadata?.platform}
          createdAt={resource.readMetadata?.publicationDate || resource.createdAt} 
        />
        
        {showActions && onView && (
          <ResourceCardActions 
            onView={() => onView(resource.title)}
          />
        )}
      </div>
    </article>
  );
};