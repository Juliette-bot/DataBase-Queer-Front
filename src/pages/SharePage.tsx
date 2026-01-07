// src/pages/SharePage.tsx
import type React from 'react';
import { AddResourceForm } from '../components/organisms/AddResourceForm';

export const SharePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-content-primary mb-6">
          Partage de ressources
        </h1>
        <p className="text-content-secondary mb-8">
          Out Together est une plateforme collaborative où chacun·e peut contribuer en partageant des ressources LGBTQIA+ utiles et inclusives. Votre contribution aide la communauté à grandir ! 🌈
        </p>
        
        <AddResourceForm />
      </div>
    </div>
  );
};