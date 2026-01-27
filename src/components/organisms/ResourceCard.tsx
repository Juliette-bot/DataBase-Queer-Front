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
    return (
        <article className="bg-surface-light rounded-card shadow-card hover:shadow-card-hover transition-shadow p-6 space-y-4">
            <ResourceCardHeader 
                title={resource.title}
                category={resource.categoryName} 
                tags={[resource.mediaType]} 
            />
            <ResourceCardContent 
                description={resource.description}
                location={resource.listenMetadata?.platform || resource.watchMetadata?.platform}  // 👈 Depuis les métadonnées
                createdAt={resource.readMetadata?.publicationDate || resource.createdAt} 
            />
            {showActions && onView && (
                <ResourceCardActions 
                    onView={() => onView(resource.title)}
                />
            )}
        </article>
    );
};
