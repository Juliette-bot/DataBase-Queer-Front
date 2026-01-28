import { useState, useEffect } from 'react';
import type React from 'react';
import { FormField } from '../molecules/FromField';
import { SelectField } from '../molecules/SelectField';
import { RadioFieldList } from '../molecules/RadioFieldList';
import { ReadMetadataFields } from '../molecules/ReadMetadataFields';
import { ListenMetadataFields } from '../molecules/ListenMetadataFields';
import { WatchMetadataFields } from '../molecules/WatchMetadataFields';
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
    <div className="min-h-screen bg-gradient-retro relative overflow-hidden">
        {/* Pattern de fond pixel */}
        <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-10"></div>
        
        {/* Scanlines effet rétro */}
        <div className="absolute inset-0 pointer-events-none" 
             style={{
                 background: 'repeating-linear-gradient(0deg, rgba(0,0,0,.15) 0px, transparent 1px, transparent 2px, rgba(0,0,0,.15) 3px)',
                 opacity: 0.03
             }}>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 relative z-10">
            {/* Header pixel style */}
            <div className="text-center mb-12">
                <div className="inline-block mb-4 px-6 py-2 bg-accent-neon/20 border-2 border-accent-neon 
                              rounded-pixel shadow-pixel-neon">
                    <span className="text-accent-neon text-xs font-pixel tracking-wider">
                        ★ NEW RESOURCE ★
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 
                             drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]
                             [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">
                    Ajouter une ressource
                </h2>
                <p className="text-cyan-300 text-sm md:text-base">
                    ▸ Partagez vos découvertes avec la communauté
                </p>
            </div>

            {/* Section Media - OMBRES AUGMENTÉES */}
            <div id="section-media" className="min-h-screen flex flex-col justify-center scroll-mt-8">
                <div className="bg-retro-darker/90 backdrop-blur-sm p-8 
                              border-4 border-indigo-400 rounded-pixel shadow-pixel-blue
                              hover:shadow-[0_0_30px_rgba(99,102,241,0.8),10px_10px_0px_rgba(0,0,0,0.5)]
                              transition-all duration-300
                              relative overflow-hidden">
                    {/* Coin décoratif pixel */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-accent-neon"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 bg-retro-darker"></div>
                    
                    {/* Glow effect interne */}
                    <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none"></div>
                    
                    <RadioFieldList 
                        label='Cette ressource peut se :'
                        nameId='mediaId'
                        types={mediaOptions}
                        onChange={handleRadioChange}
                    />
                </div>
            </div>

            {/* Section Category - OMBRES AUGMENTÉES */}
            {formData.mediaId && (
                <div id="section-category" className="min-h-screen flex flex-col justify-center scroll-mt-8">
                    <div className="bg-retro-darker/90 backdrop-blur-sm p-8 
                                  border-4 border-cyan-400 rounded-pixel shadow-pixel-cyan
                                  hover:shadow-[0_0_30px_rgba(6,182,212,0.8),10px_10px_0px_rgba(0,0,0,0.5)]
                                  transition-all duration-300
                                  relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400"></div>
                        <div className="absolute top-0 left-0 w-6 h-6 bg-retro-darker"></div>
                        
                        {/* Glow effect interne */}
                        <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none"></div>
                        
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
                </div>
            )}

            {/* Section Details - OMBRES AUGMENTÉES */}
            {formData.categoryId && (
                <div id="section-details" className="min-h-screen flex flex-col justify-center scroll-mt-8">
                    <div className="bg-retro-darker/90 backdrop-blur-sm p-8 
                                  border-4 border-violet-400 rounded-pixel shadow-pixel-violet
                                  hover:shadow-[0_0_30px_rgba(139,92,246,0.8),10px_10px_0px_rgba(0,0,0,0.5)]
                                  transition-all duration-300
                                  relative overflow-hidden space-y-6">
                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-violet-400"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-retro-darker"></div>
                        
                        {/* Glow effect interne */}
                        <div className="absolute inset-0 bg-violet-500/5 pointer-events-none"></div>
                        
                        <div className="mb-6 flex items-center gap-3 relative z-10">
                            <div className="w-2 h-2 bg-accent-neon animate-pulse"></div>
                            <h3 className="text-2xl font-semibold text-white">
                                Détails de la ressource
                            </h3>
                            <div className="flex-1 h-1 bg-gradient-to-r from-violet-400 to-transparent"></div>
                        </div>

                        <div className="relative z-10">
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleNextToMetadata}
                            disabled={isLoading}
                            className="w-full mt-6 px-8 py-4 relative z-10
                                     bg-gradient-to-r from-indigo-500 to-violet-500
                                     border-4 border-white/30 rounded-pixel
                                     shadow-pixel-lg hover:shadow-[12px_12px_0px_rgba(0,0,0,0.6)]
                                     text-white font-bold text-lg
                                     transform transition-all duration-200
                                     hover:translate-x-1 hover:translate-y-1
                                     active:translate-x-2 active:translate-y-2
                                     active:shadow-pixel
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     relative overflow-hidden group">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                SUIVANT ▶
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-x-full 
                                          group-hover:translate-x-0 transition-transform duration-300"></div>
                        </button>
                    </div>
                </div>
            )}

            {/* Section Metadata - OMBRES AUGMENTÉES */}
            {formData.title && formData.description && formData.url && (
                <div id="section-metadata" className="min-h-screen flex flex-col justify-center scroll-mt-8">
                    {selectedMediaType === 'read' && (
                        <div className="bg-retro-darker/90 backdrop-blur-sm p-8 
                                      border-4 border-indigo-400 rounded-pixel shadow-pixel-blue
                                      hover:shadow-[0_0_30px_rgba(99,102,241,0.8),10px_10px_0px_rgba(0,0,0,0.5)]
                                      transition-all duration-300
                                      border-l-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none"></div>
                            
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-indigo-400 border-4 border-white/30 
                                              flex items-center justify-center text-3xl
                                              shadow-pixel">
                                    📖
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        INFORMATIONS LECTURE
                                    </h3>
                                    <div className="h-1 w-full bg-indigo-400 mt-1"></div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <ReadMetadataFields
                                    values={formData.readMetadata}
                                    onChange={handleSelectChange}
                                    errors={errors.readMetadata}
                                />
                            </div>
                        </div>
                    )}

                    {selectedMediaType === 'listen' && (
                        <div className="bg-retro-darker/90 backdrop-blur-sm p-8 
                                      border-4 border-cyan-400 rounded-pixel shadow-pixel-cyan
                                      hover:shadow-[0_0_30px_rgba(6,182,212,0.8),10px_10px_0px_rgba(0,0,0,0.5)]
                                      transition-all duration-300
                                      border-l-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none"></div>
                            
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-cyan-400 border-4 border-white/30 
                                              flex items-center justify-center text-3xl
                                              shadow-pixel">
                                    🎧
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        INFORMATIONS AUDIO
                                    </h3>
                                    <div className="h-1 w-full bg-cyan-400 mt-1"></div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <ListenMetadataFields
                                    values={formData.listenMetadata}
                                    onChange={handleSelectChange}
                                    errors={errors.listenMetadata}
                                />
                            </div>
                        </div>
                    )}

                    {selectedMediaType === 'watch' && (
                        <div className="bg-retro-darker/90 backdrop-blur-sm p-8 
                                      border-4 border-blue-400 rounded-pixel shadow-[0_0_20px_rgba(59,130,246,0.7),8px_8px_0px_rgba(0,0,0,0.4)]
                                      hover:shadow-[0_0_30px_rgba(59,130,246,0.8),10px_10px_0px_rgba(0,0,0,0.5)]
                                      transition-all duration-300
                                      border-l-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                            
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-blue-400 border-4 border-white/30 
                                              flex items-center justify-center text-3xl
                                              shadow-pixel">
                                    🎬
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        INFORMATIONS VIDÉO
                                    </h3>
                                    <div className="h-1 w-full bg-blue-400 mt-1"></div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <WatchMetadataFields
                                    values={formData.watchMetadata}
                                    onChange={handleSelectChange}
                                    errors={errors.watchMetadata}
                                />
                            </div>
                        </div>
                    )}

                    {selectedMediaType === 'play' && (
                        <div className="bg-retro-darker/90 backdrop-blur-sm p-8 
                                      border-4 border-violet-400 rounded-pixel shadow-pixel-violet
                                      hover:shadow-[0_0_30px_rgba(139,92,246,0.8),10px_10px_0px_rgba(0,0,0,0.5)]
                                      transition-all duration-300
                                      border-l-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-violet-500/5 pointer-events-none"></div>
                            
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-violet-400 border-4 border-white/30 
                                              flex items-center justify-center text-3xl
                                              shadow-pixel">
                                    🎮
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        INFORMATIONS JEU
                                    </h3>
                                    <div className="h-1 w-full bg-violet-400 mt-1"></div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <PlayMetadataFields
                                    values={formData.playMetadata}
                                    onChange={handleSelectChange}
                                />
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full mt-8 px-8 py-5
                                 bg-accent-neon text-retro-darker
                                 border-4 border-white/30 rounded-pixel
                                 shadow-pixel-neon hover:shadow-[0_0_30px_rgba(0,255,136,1),12px_12px_0px_rgba(0,0,0,0.5)]
                                 font-bold text-xl uppercase
                                 transform transition-all duration-200
                                 hover:translate-x-1 hover:translate-y-1
                                 active:translate-x-2 active:translate-y-2
                                 active:shadow-pixel
                                 disabled:opacity-50 disabled:cursor-not-allowed
                                 relative overflow-hidden group
                                 animate-pulse">
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-3">
                                <span className="inline-block w-4 h-4 border-2 border-retro-darker 
                                               border-t-transparent rounded-full animate-spin"></span>
                                CHARGEMENT...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-3">
                                ★ AJOUTER LA RESSOURCE ★
                            </span>
                        )}
                        <div className="absolute inset-0 bg-white/20 translate-y-full 
                                      group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            )}
        </form>
    </div>
);
};