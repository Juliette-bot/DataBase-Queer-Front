// src/pages/AuthPage.tsx
import { useState } from 'react';
import type React from 'react';
import { LoginForm } from '../components/organisms/LoginFrom';
import { RegisterForm } from '../components/organisms/RegisterForm';

interface AuthPageProps {
  onAuthSuccess?: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen bg-gradient-retro flex items-center justify-center p-4">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />

      <div className="relative w-full max-w-md">
        {/* Titre */}
        <div className="text-center mb-6">
          <h1 className="font-pixel text-accent-cyan text-xs tracking-widest drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
            DATABASE QUEER
          </h1>
          <div className="h-px bg-gradient-neon opacity-30 mt-3" />
        </div>

        {/* Tabs */}
        <div className="flex mb-0 border border-retro-purple rounded-t-pixel overflow-hidden">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 font-pixel text-xs tracking-widest transition-colors duration-200 ${
              activeTab === 'login'
                ? 'bg-retro-purple text-accent-neon drop-shadow-[0_0_6px_rgba(0,255,136,0.6)]'
                : 'bg-retro-darker text-content-muted hover:text-accent-neon'
            }`}
          >
            CONNEXION
          </button>
          <div className="w-px bg-retro-purple" />
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-3 font-pixel text-xs tracking-widest transition-colors duration-200 ${
              activeTab === 'register'
                ? 'bg-retro-purple text-accent-pink drop-shadow-[0_0_6px_rgba(255,0,110,0.6)]'
                : 'bg-retro-darker text-content-muted hover:text-accent-pink'
            }`}
          >
            INSCRIPTION
          </button>
        </div>

        {/* Form — sans le wrapper bg/border qui est déjà dans chaque form */}
        {activeTab === 'login' ? (
          <LoginForm onSuccess={onAuthSuccess} />
        ) : (
          <RegisterForm onSuccess={onAuthSuccess} />
        )}
      </div>
    </div>
  );
};