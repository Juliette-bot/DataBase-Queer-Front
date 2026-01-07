import { useState } from 'react';
import type React from 'react';
import { FormField } from '../molecules/FromField';
import { Button } from '../atoms/Button';
import { authService } from '../../services/AuthApi';

export const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
    }>({});

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validation
        const newErrors: typeof errors = {};
        if (!formData.email) newErrors.email = "L'email est requis";
        if (!formData.password) newErrors.password = "Le mot de passe est requis";
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Appel API
        setIsLoading(true);
        try {
            const data = await authService.login(formData.email, formData.password);
            console.log('Connecté avec succès !', data);
            // TODO: Stocker le token, rediriger l'utilisateur
        } catch (error) {
            console.error('Erreur:', error);
            setErrors({ 
                email: 'Email ou mot de passe incorrect' 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-surface-light rounded-card shadow-card">
            <h2 className="text-2xl font-bold mb-6 text-center text-content-primary">
                Connexion
            </h2>
            
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
            
            <Button 
                type="submit"
                variant="action"
                className="w-full mt-4"
                disabled={isLoading}
            >
                {isLoading ? 'Connexion...' : 'Se connecter'}
            </Button>
        </form>
    );
};