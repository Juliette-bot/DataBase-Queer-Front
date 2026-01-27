import { useState, useEffect } from 'react';
import type React from 'react';
import { FormField } from '../molecules/FromField';
import { SelectField } from '../molecules/SelectField';
import { RadioFieldList } from '../molecules/RadioFieldList';
import { ReadMetadataFields } from '../molecules/ReadMetadataFields';
import { ListenMetadataFields } from '../molecules/ListenMetadataFields';
import { WatchMetadataFields } from '../molecules/WatchMetadataFields';
import { Button } from '../atoms/Button';
import type { SelectOption } from '../../types/FormTypes';
import { AddResourceService, GetMediaService, GetCategoryService } from '../../services/Api';
import type { CategoryData, MediaData, ResourceFormData, ResourceFormErrors, ResourcePayload } from '../../types/ResourceTypes';
import { PlayMetadataFields } from '../molecules/PlayMetadataFields';

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
        playMetadata: {
             creator: '',
            gameGenre: '',
            playerNumber: '',
        }
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
    

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        } else if (metadataType === 'playMetadata') {
            setFormData(prev => ({
                ...prev,
                playMetadata: {
                    ...prev.playMetadata,
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


const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        categoryId: '' 
    }));
    
    if (value) {
        loadCategoriesForMedia(value);
    } else {
        setCategoryOptions([]);
    }
    
    setTimeout(() => scrollToSection('section-category'), 300);
};

const handleNextToMetadata = () => {
    scrollToSection('section-metadata');
};

const loadCategoriesForMedia = async (mediaId: string) => {
    try {
        const data = await GetCategoryService.getByMediaId(mediaId);
        const options = data.map((category: CategoryData) => ({
            value: category.id.toString(),
            label: category.name
        }));
        setCategoryOptions(options);
        
        const selectedMedia = mediaOptions.find(m => m.value === mediaId);
        const mediaLabel = selectedMedia?.label.toLowerCase() || '';
        
        
        const mediaTypeMap: { [key: string]: string } = {
            'lire': 'read',
            'écouter': 'listen',
            'regarder': 'watch',
            'jouer': 'play'
        };
        
        setSelectedMediaType(mediaTypeMap[mediaLabel] || mediaLabel);
        console.log('Type de média sélectionné:', mediaTypeMap[mediaLabel] || mediaLabel);
    } catch (error) {
        console.error('Erreur chargement catégories:', error);
    }
};

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const handleSelectChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log('avant le if')
    if (name.includes('.')) {
        const [metadataType, field] = name.split('.');
        
        if (metadataType === 'readMetadata') {
            console.log('Updating readMetadata field:', field, 'with value:', value);
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
        }  else if (metadataType === 'playMetadata') {
            setFormData(prev => ({
                ...prev,
                playMetadata: {
                    ...prev.playMetadata,
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
            const options = data.map((category: CategoryData) => ({
                value: category.id.toString(),
                label: category.name
            }));
            setCategoryOptions(options);
            
            const selectedMedia = mediaOptions.find(m => m.value === value);
            setSelectedMediaType(selectedMedia?.label.toLowerCase() || '');
            
            setFormData(prev => ({ ...prev, categoryId: '' }));
            
            setTimeout(() => scrollToSection('section-category'), 300);
        } catch (error) {
            console.error('Erreur chargement catégories:', error);
        }
    }
    
    if (name === 'categoryId' && value) {
        setTimeout(() => scrollToSection('section-details'), 300);
    };

    if (name === 'section-details' && value) {
        setTimeout(() => scrollToSection('section-metadata'), 300);
    };
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
            ...(selectedMediaType === 'play' ? formData.playMetadata : null),
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

        {/* Section 1 : Choix du type de média */}
        <div id="section-media" className="min-h-screen flex flex-col justify-center scroll-mt-8">
            <RadioFieldList 
                label='Cette ressource peut se :'
                nameId='mediaId'
                types={mediaOptions}
                onChange={handleRadioChange}
            />
        </div>

        {/* Section 2 : Choix de la catégorie */}
        {formData.mediaId && (
            <div id="section-category" className="min-h-screen flex flex-col justify-center scroll-mt-8">
                <SelectField
                    label='On pourrait la ranger dans la catégorie :'
                    name='categoryId'
                    value={formData.categoryId}
                    onChange={handleSelectChange}
                    options={categoryOptions}
                    error={errors.categoryId}
                    required
                />
            </div>
        )}

        {/* Section 3 : Détails de la ressource */}
        {formData.categoryId && (
            <div id="section-details" className="min-h-screen flex flex-col justify-center scroll-mt-8 space-y-6">
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

                   <Button
                    type="button"
                    variant="action"
                    className="w-full mt-6"
                    disabled={isLoading}
                    onClick={handleNextToMetadata}
                >
                    Suivant
                </Button>
            </div>

        )}

        {formData.title && formData.description && formData.url && (
            <div id="section-metadata" className="min-h-screen flex flex-col justify-center scroll-mt-8">
                {selectedMediaType === 'read' && (
                    <div className="p-6 border border-surface-gray rounded-card bg-surface-light shadow-card">
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
                    <div className="p-6 border border-surface-gray rounded-card bg-surface-light shadow-card">
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
                    <div className="p-6 border border-surface-gray rounded-card bg-surface-light shadow-card">
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

                {selectedMediaType === 'play' && (
                    <div className="p-6 border border-surface-gray rounded-card bg-surface-light shadow-card">
                        <h3 className="text-xl font-semibold text-content-primary mb-4">
                            Informations spécifiques (Jeu)
                        </h3>
                        <PlayMetadataFields
                            values={formData.playMetadata}
                            onChange={handleSelectChange}
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
            </div>
        )}
    </form>
);
};