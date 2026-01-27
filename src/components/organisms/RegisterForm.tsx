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
        
        // Validation
        const newErrors: typeof errors = {};
        
        if (!formData.firstName) {
            newErrors.firstName = "Le prénom est requis";
        } else if (formData.firstName.length < 2) {
            newErrors.firstName = "Le prénom doit contenir au moins 2 caractères";
        }
        
        if (!formData.lastName) {
            newErrors.lastName = "Le nom est requis";
        } else if (formData.lastName.length < 2) {
            newErrors.lastName = "Le nom doit contenir au moins 2 caractères";
        }
        
        if (!formData.email) {
            newErrors.email = "L'email est requis";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "L'email n'est pas valide";
        }
        
        if (!formData.password) {
            newErrors.password = "Le mot de passe est requis";
        } else if (formData.password.length < 8) {
            newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";
        }
        
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Veuillez confirmer votre mot de passe";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);
        try {
            const data = await authService.register(
                formData.firstName,
                formData.lastName,
                formData.email,
                formData.password
            );
            console.log('Inscription réussie !', data);
            
            // Appelle le callback de succès
            onSuccess?.();
            
            // Redirige vers l'accueil
            navigate('/');
        } catch (error) {
            console.error('Erreur:', error);
            setErrors({ 
                email: "Une erreur est survenue lors de l'inscription" 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-surface-light rounded-card shadow-card">
            <h2 className="text-2xl font-bold mb-6 text-center text-content-primary">
                Inscription
            </h2>
            
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
            
            <Button 
                type="submit"
                variant="action"
                className="w-full mt-4"
                disabled={isLoading}
            >
                {isLoading ? 'Inscription...' : "S'inscrire"}
            </Button>
        </form>
    );
};