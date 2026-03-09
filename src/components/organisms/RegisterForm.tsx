import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type React from 'react';
import { FormField } from '../molecules/FromField';
import { Button } from '../atoms/Button';
import { authService } from '../../services/AuthApi';

interface RegisterFormProps {
  onSuccess?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

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

    if (!formData.firstName) newErrors.firstName = "Le prénom est requis";
    else if (formData.firstName.length < 2) newErrors.firstName = "Le prénom doit contenir au moins 2 caractères";

    if (!formData.lastName) newErrors.lastName = "Le nom est requis";
    else if (formData.lastName.length < 2) newErrors.lastName = "Le nom doit contenir au moins 2 caractères";

    if (!formData.email) newErrors.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "L'email n'est pas valide";

    if (!formData.password) newErrors.password = "Le mot de passe est requis";
    else if (formData.password.length < 8) newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Veuillez confirmer votre mot de passe";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Les mots de passe ne correspondent pas";

    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setIsLoading(true);
    try {
      const data = await authService.register(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );
      console.log('Inscription réussie !', data);
      onSuccess?.();
      navigate('/');
    } catch (error) {
      console.error('Erreur:', error);
      setErrors({ email: "Une erreur est survenue lors de l'inscription" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-retro flex items-center justify-center p-4">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />

      <div className="relative w-full max-w-md">
        {/* Pixel corner decorations */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent-pink" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent-pink" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent-pink" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent-pink" />

        <form
          onSubmit={handleSubmit}
          className="bg-retro-darker border border-retro-purple shadow-pixel-violet rounded-pixel p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-pixel text-accent-pink text-sm tracking-widest mb-2 drop-shadow-[0_0_8px_rgba(255,0,110,0.8)]">
              INSCRIPTION
            </h2>
            <div className="h-px bg-gradient-neon opacity-40 mt-3" />
          </div>

          {/* Prénom + Nom côte à côte */}
          <div className="grid grid-cols-2 gap-3 mb-1">
            <FormField
              label="Prénom"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              required
            />
            <FormField
              label="Nom"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              required
            />
          </div>

          <div className="space-y-4 mt-2">
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
            <FormField
              label="Confirmer le mot de passe"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />
          </div>

          <Button
            type="submit"
            variant="action"
            className="w-full mt-8 font-pixel text-xs tracking-widest shadow-pixel hover:shadow-pixel-neon transition-shadow duration-200"
            disabled={isLoading}
          >
            {isLoading ? '...' : "CRÉER MON COMPTE"}
          </Button>
        </form>
      </div>
    </div>
  );
};