import { useState } from 'react';
import type React from 'react';
import { FormField } from '../molecules/FromField';
import { Button } from '../atoms/Button';
import type { ResourceData } from '../../types/Resource';  
import { AddResourceService } from '../../services/Api';  


export const AddResourceForm: React.FC = () => {
    const [formData, setFormData] = useState<ResourceData>({  // on met le type resource ici
        name: '',
        description: '',
        url: '',
        image_url: '',
        creator: '',
        release_year: '',
        duration_minutes: '',
        platform: '',
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ResourceData, string>>>({});  // ← Utilise ResourceData
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (errors[name as keyof ResourceData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Partial<Record<keyof ResourceData, string>> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Le nom est requis";
        }
        if (!formData.description.trim()) {
            newErrors.description = "La description est requise";
        }
        if (!formData.url.trim()) {
            newErrors.url = "L'URL est requise";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);
        try {
            // j'appel mon api addresource
            await AddResourceService.addResource(formData);
            
            alert('Ressource ajoutée avec succès !');
            
            setFormData({
                name: '',
                description: '',
                url: '',
                image_url: '',
                creator: '',
                release_year: '',
                duration_minutes: '',
                platform: '',
            });
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'ajout de la ressource');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-surface-light p-8 rounded-card shadow-card">
            <h2 className="text-3xl font-bold text-content-primary mb-6">
                Ajouter une ressource
            </h2>

            <FormField
                label="Nom de la ressource"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
            />

            <FormField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={errors.description}
                required
            />

            <FormField
                label="URL"
                name="url"
                type="url"
                value={formData.url}
                onChange={handleChange}
                error={errors.url}
                required
            />

            <FormField
                label="URL de l'image"
                name="image_url"
                type="url"
                value={formData.image_url}
                onChange={handleChange}
                error={errors.image_url}
            />

            <FormField
                label="Créateur/Créatrice"
                name="creator"
                value={formData.creator}
                onChange={handleChange}
                error={errors.creator}
            />

            <FormField
                label="Année de sortie"
                name="release_year"
                type="number"
                value={formData.release_year}
                onChange={handleChange}
                error={errors.release_year}
            />

            <FormField
                label="Durée (en minutes)"
                name="duration_minutes"
                type="number"
                value={formData.duration_minutes}
                onChange={handleChange}
                error={errors.duration_minutes}
            />

            <FormField
                label="Plateforme"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                error={errors.platform}
            />

            <Button 
                type="submit" 
                variant="action" 
                className="w-full mt-6"
                disabled={isLoading}
            >
                {isLoading ? 'Ajout en cours...' : 'Ajouter la ressource'}
            </Button>
        </form>
    );
};