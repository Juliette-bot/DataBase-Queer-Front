// src/types/resource.ts
// ===== TYPES POUR LE FORMULAIRE =====
export interface ResourceFormData {
    title: string;
    description: string;
    url: string;
    tags: string[];
    language: string;
    mediaId: string;
    categoryId: string;
    readMetadata: {
        author: string;
        publicationDate: string;
        pageCount: string;
        format: string;
    };
    listenMetadata: {
        creator: string;
        duration: string;
        platform: string;
        episodeNumber: string;
    };
    watchMetadata: {
        creator: string;
        duration: string;
        platform: string;
        videoType: string;
    };
}

// ===== TYPE POUR L'API RESPONSE (avec objets complets) =====
// Dans ResourceTypes.ts
export interface ResourceData {
    id: number;
    title: string;
    description: string;
    url: string;
    tags: string[];
    language: string;
    createdAt?: string;
    updatedAt?: string;
    mediaId: number;  // 👈 L'ID du média
    categoryId: number;  // 👈 L'ID de la catégorie
    userId: number;
    mediaType: string;  // 👈 Le type en string (read/listen/watch)
    categoryName: string;  // 👈 Le nom en string
    // Métadonnées
    readMetadata?: ReadMetadataData;
    listenMetadata?: ListenMetadataData;
    watchMetadata?: WatchMetadataData;
}

// ===== TYPE POUR LE PAYLOAD (ce qu'on envoie à l'API) =====
export interface ResourcePayload {
    title: string;
    description: string;
    url: string;
    tags: string[];
    language: string;
    mediaId: number;
    categoryId: number;
    author?: string;
    publicationDate?: string;
    pageCount?: string;
    format?: string;
    creator?: string;
    duration?: string;
    platform?: string;
    episodeNumber?: string;
    videoType?: string;
}

export interface ReadMetadataData {
    author: string;
    publicationDate: string;
    pageCount: string;
    format: string;
}

export interface ListenMetadataData {
    creator: string;
    duration: string;
    platform: string;
    episodeNumber: string;
}

export interface WatchMetadataData {
    creator: string;
    duration: string;
    platform: string;
    videoType: string;
}

export interface MediaData {
    id: number;
    type: string;
}

export interface CategoryData {
    id: number;
    name: string;
}

export interface ResourceFormErrors {
    title?: string;
    description?: string;
    url?: string;
    language?: string;
    mediaId?: string;
    categoryId?: string;
    readMetadata?: Partial<Record<keyof ReadMetadataData, string>>;
    listenMetadata?: Partial<Record<keyof ListenMetadataData, string>>;
    watchMetadata?: Partial<Record<keyof WatchMetadataData, string>>;
}
