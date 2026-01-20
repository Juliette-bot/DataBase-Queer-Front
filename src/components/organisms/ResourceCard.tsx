import { ResourceCardHeader } from '../molecules/ResourceCardHeader';
import { ResourceCardContent } from '../molecules/ResourceCardContent';
import { ResourceCardActions } from '../molecules/ResourceCardActions';

export interface ResourceData {
  media: string;
  category: string;
  subCategory: string;
  name: string;
  description: string;
  url: string;
  image_url: string;
  creator: string;
  release_year: string;
  duration_minutes: string;
  platform: string;
}

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
        title={resource.name}
        category={resource.category}
        tags={[resource.subCategory, resource.media]}
      />
      
      <ResourceCardContent 
        description={resource.description}
        location={resource.platform}
        createdAt={resource.release_year}
      />
      
      {showActions && onView && (
        <ResourceCardActions 
          onView={() => onView(resource.name)}
        />
      )}
    </article>
  );
};
