import { useState, useEffect } from 'react';
import type React from 'react';
import { FormField } from '../molecules/FromField';
import { SelectField } from '../molecules/SelectField';
import { ReadMetadataFields } from '../molecules/ReadMetadataFields';
import { ListenMetadataFields } from '../molecules/ListenMetadataFields';
import { WatchMetadataFields } from '../molecules/WatchMetadataFields';
import { Button } from '../atoms/Button';
import type { SelectOption } from '../../types/FormTypes';
import { AddResourceService, GetMediaService, GetCategoryService } from '../../services/Api';
import type { CategoryData, MediaData, ResourceFormData, ResourceFormErrors, ResourcePayload } from '../../types/ResourceTypes';

export const AddResourceForm: React.FC = () => {
    const [formData, setFormData] = useState<ResourceFormData>({
        title: '',
        description: '',
        url: '',
        tags: [],
        language: 'fr',
        mediaId: '',
        categoryId: '',
        readMetadata: {
            author: '',
            publicationDate: '',
            pageCount: '',
            format: '',
        },
        listenMetadata: {
            creator: '',
            duration: '',
            platform: '',
            episodeNumber: '',
        },
        watchMetadata: {
            creator: '',
            duration: '',
            platform: '',
            videoType: '',
        },
    });

    const [selectedMediaType, setSelectedMediaType] = useState<string>('');
    const [errors, setErrors] = useState<ResourceFormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [mediaOptions, setMediaOptions] = useState<SelectOption[]>([]);
    const [categoryOptions, setCategoryOptions] = useState<SelectOption[]>([]);

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
    
    if (name.includes('.')) {
        const [metadataType, field] = name.split('.');
        
        if (metadataType === 'readMetadata') {
            setFormData(prev => ({
                ...prev,
                readMetadata: {
                    ...prev.readMetadata,
                    [field]: value
                }
            }));
        } else if (metadataType === 'listenMetadata') {
            setFormData(prev => ({
                ...prev,
                listenMetadata: {
                    ...prev.listenMetadata,
                    [field]: value
                }
            }));
        } else if (metadataType === 'watchMetadata') {
            setFormData(prev => ({
                ...prev,
                watchMetadata: {
                    ...prev.watchMetadata,
                    [field]: value
                }
            }));
        }
        
        setErrors(prev => ({
            ...prev,
            [metadataType]: undefined
        }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({
            ...prev,
            [name as keyof ResourceFormErrors]: undefined
        }));
    }
};

const handleSelectChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {  // 👈 Ajoute les 3 types
    const { name, value } = e.target;
    
    // Gestion des champs metadata nested pour les selects
    if (name.includes('.')) {
        const [metadataType, field] = name.split('.');
        
        if (metadataType === 'readMetadata') {
            setFormData(prev => ({
                ...prev,
                readMetadata: {
                    ...prev.readMetadata,
                    [field]: value
                }
            }));
        } else if (metadataType === 'listenMetadata') {
            setFormData(prev => ({
                ...prev,
                listenMetadata: {
                    ...prev.listenMetadata,
                    [field]: value
                }
            }));
        } else if (metadataType === 'watchMetadata') {
            setFormData(prev => ({
                ...prev,
                watchMetadata: {
                    ...prev.watchMetadata,
                    [field]: value
                }
            }));
        }
        
        setErrors(prev => ({
            ...prev,
            [metadataType]: undefined
        }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({
            ...prev,
            [name as keyof ResourceFormErrors]: undefined
        }));
    }

    if (name === 'mediaId' && value) {
        try {
            const data = await GetCategoryService.getByMediaId(value);
            console.log('Catégories pour media', value, ':', data);
            const options = data.map((category: CategoryData) => ({
                value: category.id.toString(),
                label: category.name
            }));
            setCategoryOptions(options);
            
            const selectedMedia = mediaOptions.find(m => m.value === value);
            setSelectedMediaType(selectedMedia?.label.toLowerCase() || '');
            
            setFormData(prev => ({ ...prev, categoryId: '' }));
        } catch (error) {
            console.error('Erreur chargement catégories:', error);
        }
    }
};
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: ResourceFormErrors = {};

    if (!formData.title.trim()) {
        newErrors.title = "Le titre est requis";
    }
    if (!formData.description.trim()) {
        newErrors.description = "La description est requise";
    }
    if (!formData.url.trim()) {
        newErrors.url = "L'URL est requise";
    }
    if (!formData.mediaId) {
        newErrors.mediaId = "Le type de média est requis";
    }
    if (!formData.categoryId) {
        newErrors.categoryId = "La catégorie est requise";
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    setIsLoading(true);
    try {
        const payload: ResourcePayload = {  
            title: formData.title,
            description: formData.description,
            url: formData.url,
            tags: formData.tags,
            language: formData.language,
            mediaId: Number(formData.mediaId),  
            categoryId: Number(formData.categoryId), 
            ...(selectedMediaType === 'read' ? formData.readMetadata: null),  
            ...(selectedMediaType === 'listen' ? formData.listenMetadata : null), 
            ...(selectedMediaType === 'watch' ? formData.watchMetadata : null),
        };

        await AddResourceService.addResource(payload);

        alert('Ressource ajoutée avec succès !');

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
                name='mediaId'
                value={formData.mediaId}
                onChange={handleSelectChange}
                options={mediaOptions}
                error={errors.mediaId}
                required
            />

            <SelectField
                label='On pourrait la ranger dans la catégorie :'
                name='categoryId'
                value={formData.categoryId}
                onChange={handleSelectChange}
                options={categoryOptions}
                disabled={!formData.mediaId}
                error={errors.categoryId}
                required
            />

            <FormField
                label="Titre de la ressource"
                name="title"
                type='text'
                value={formData.title}
                onChange={handleChange}
                error={errors.title}
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
                required
            />

            <FormField
                label="Langue"
                name="language"
                type='text'
                value={formData.language}
                onChange={handleChange}
            />

            {selectedMediaType === 'read' && (
    <div className="mt-6 p-6 border border-surface-gray rounded-card bg-surface-light shadow-card">
        <h3 className="text-xl font-semibold text-content-primary mb-4">
            Informations spécifiques (Lecture)
        </h3>
        <ReadMetadataFields
            values={formData.readMetadata}
            onChange={handleSelectChange}
            errors={errors.readMetadata}
        />
    </div>
)}

{selectedMediaType === 'listen' && (
    <div className="mt-6 p-6 border border-surface-gray rounded-card bg-surface-light shadow-card">
        <h3 className="text-xl font-semibold text-content-primary mb-4">
            Informations spécifiques (Audio)
        </h3>
        <ListenMetadataFields
            values={formData.listenMetadata}
            onChange={handleSelectChange}
            errors={errors.listenMetadata}
        />
    </div>
)}

{selectedMediaType === 'watch' && (
    <div className="mt-6 p-6 border border-surface-gray rounded-card bg-surface-light shadow-card">
        <h3 className="text-xl font-semibold text-content-primary mb-4">
            Informations spécifiques (Vidéo)
        </h3>
        <WatchMetadataFields
            values={formData.watchMetadata}
            onChange={handleSelectChange}
            errors={errors.watchMetadata}
        />
    </div>
)}

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