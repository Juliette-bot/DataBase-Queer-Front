// src/pages/HomePage.tsx
import type React from 'react';
import { Button } from '../components/atoms/Button';

export const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-content-primary mb-6">
          Bienvenue sur Queer Database
        </h1>
        <p className="text-xl text-content-secondary mb-8">
          Une plateforme collaborative pour partager et découvrir des ressources 
          LGBTQIA+ inclusives et bienveillantes.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="action" className="px-8">
            Découvrir les ressources
          </Button>
          <Button variant="neutral" className="px-8">
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  );
};