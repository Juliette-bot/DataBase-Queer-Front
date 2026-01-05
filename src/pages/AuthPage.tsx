// src/pages/AuthPage.tsx
import { useState } from 'react';
import type React from 'react';
import { LoginForm } from '../components/organisms/LginFrom';
import { RegisterForm } from '../components/organisms/RegisterForm';
import { Button } from '../components/atoms/Button';

export const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-content-primary mb-8">
          Authentification
        </h1>
        
        <div className="flex gap-4 mb-6 bg-surface-light p-2 rounded-card shadow-card">
          <Button
            variant={activeTab === 'login' ? 'action' : 'neutral'}
            onClick={() => setActiveTab('login')}
            className="flex-1"
          >
            Connexion
          </Button>
          <Button
            variant={activeTab === 'register' ? 'action' : 'neutral'}
            onClick={() => setActiveTab('register')}
            className="flex-1"
          >
            Inscription
          </Button>
        </div>
        
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};