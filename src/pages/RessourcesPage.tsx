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
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-content-primary mb-2">
          Ressources LGBTQIA+
        </h1>
        <p className="text-content-secondary">
          Découvre les ressources partagées par la communauté
        </p>
      </header>

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
    </div>
  );
};
