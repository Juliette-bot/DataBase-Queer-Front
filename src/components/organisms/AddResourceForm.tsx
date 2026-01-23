import { useState, useEffect } from 'react';
import type React from 'react';
import { FormField } from '../molecules/FromField';
import { SelectField } from '../molecules/SelectField';
import { Button } from '../atoms/Button';
import type { CategoryData, MediaData, ResourceData, subCategoryData } from '../../types/ResourceTypes';
import type { SelectOption } from '../../types/FormTypes';
import { AddResourceService, GetMediaService, GetCategoryService, GetSubCategoryService } from '../../services/Api';

export const AddResourceForm: React.FC = () => {
    const [formData, setFormData] = useState<ResourceData>({
        media: '',
        category: '',
        subCategory: '',
        name: '',
        description: '',
        url: '',
        image_url: '',
        creator: '',
        release_year: '',
        duration_minutes: '',
        platform: '',
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ResourceData, string>>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [mediaOptions, setMediaOptions] = useState<SelectOption[]>([]);
    const [categoryOptions, setCategoryOptions] = useState<SelectOption[]>([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState<SelectOption[]>([]);

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const data = await GetMediaService.getAll();
                console.log('Données médias reçues:', data);
                const options = data.map((media: MediaData) => ({
                    value: media.id.toString(),
                    label: media.type
                }));
                setMediaOptions(options);
            } catch (error) {
                console.error('Erreur chargement médias:', error);
            }
        };
        fetchMedia();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof ResourceData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof ResourceData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }

        if (name === 'media' && value) {
            try {
                const data = await GetCategoryService.getByMediaId(value);
                console.log('Catégories pour media', value, ':', data);
                const options = data.map((category: CategoryData) => ({
                    value: category.id.toString(),
                    label: category.name
                }));
                setCategoryOptions(options);
                
                setFormData(prev => ({ ...prev, category: '', subCategory: '' }));
                setSubCategoryOptions([]);
            } catch (error) {
                console.error('Erreur chargement catégories:', error);
            }
        }

        if (name === 'category' && value) {
            try {
                // Charger les sous-catégories de cette catégorie
                const data = await GetSubCategoryService.getByCategoryId(value);
                console.log('Sous-catégories pour category', value, ':', data);
                const options = data.map((subCategory: subCategoryData) => ({
                    value: subCategory.id.toString(),
                    label: subCategory.name
                }));
                setSubCategoryOptions(options);
                
                // Reset le choix suivant
                setFormData(prev => ({ ...prev, subCategory: '' }));
            } catch (error) {
                console.error('Erreur chargement sous-catégories:', error);
            }
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
            await AddResourceService.addResource(formData);

            alert('Ressource ajoutée avec succès !');

            setFormData({
                media: '',
                category: '',
                subCategory: '',
                name: '',
                description: '',
                url: '',
                image_url: '',
                creator: '',
                release_year: '',
                duration_minutes: '',
                platform: '',
            });
            setCategoryOptions([]);
            setSubCategoryOptions([]);
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

            <SelectField
                label='Cette ressource peut se :'
                name='media'
                value={formData.media}
                onChange={handleSelectChange}
                options={mediaOptions}
            />

            <SelectField
                label='On pourrait la ranger dans la catégorie :'
                name='category'
                value={formData.category}
                onChange={handleSelectChange}
                options={categoryOptions}
                disabled={!formData.media} 
            />

            <SelectField
                label='On pourrait la ranger dans la sous-catégorie :'
                name='subCategory'
                value={formData.subCategory}
                onChange={handleSelectChange}
                options={subCategoryOptions}
                disabled={!formData.category} 
            />

            <FormField
                label="Nom de la ressource"
                name="name"
                type='text'
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
                isTextarea={true}
                rows={5}
            />

            <FormField
                label="URL"
                name="url"
                type="url"
                value={formData.url}
                onChange={handleChange}
                error={errors.url}
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
                label="Créateur.ice"
                name="creator"
                type='text'
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
                type='text'
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