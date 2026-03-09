import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type React from 'react';
import { FormField } from '../molecules/FromField';
import { Button } from '../atoms/Button';
import { authService } from '../../services/AuthApi';

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!formData.email) newErrors.email = "L'email est requis";
    if (!formData.password) newErrors.password = "Le mot de passe est requis";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setIsLoading(true);
    try {
      const data = await authService.login(formData.email, formData.password);
      console.log('Connecté avec succès !', data);
      onSuccess?.();
      navigate('/');
    } catch (error) {
      console.error('Erreur:', error);
      setErrors({ email: 'Email ou mot de passe incorrect' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-retro flex items-center justify-center p-4">
      {/* Decorative pixel grid background */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />

      <div className="relative w-full max-w-md">
        {/* Pixel corner decorations */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent-neon" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent-neon" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent-neon" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent-neon" />

        <form
          onSubmit={handleSubmit}
          className="bg-retro-darker border border-retro-purple shadow-pixel-violet rounded-pixel p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-pixel text-accent-neon text-sm tracking-widest mb-2 drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">
              CONNEXION
            </h2>
            <div className="h-px bg-gradient-neon opacity-40 mt-3" />
          </div>

          <div className="space-y-5">
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <FormField
              label="Mot de passe"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
          </div>

          <Button
            type="submit"
            variant="action"
            className="w-full mt-8 font-pixel text-xs tracking-widest shadow-pixel hover:shadow-pixel-neon transition-shadow duration-200"
            disabled={isLoading}
          >
            {isLoading ? '...' : 'ENTRER'}
          </Button>
        </form>
      </div>
    </div>
  );
};