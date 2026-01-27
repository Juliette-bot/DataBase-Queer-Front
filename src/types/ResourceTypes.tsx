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
    playMetadata: {
        creator: string;
        gameGenre: string;
        playerNumber: string;
    };
}

export interface ResourceData {
    id: number;
    title: string;
    description: string;
    url: string;
    tags: string[];
    language: string;
    createdAt?: string;
    updatedAt?: string;
    mediaId: number;  
    categoryId: number;  
    userId: number;
    mediaType: string; 
    categoryName: string;  
    readMetadata?: ReadMetadataData;
    listenMetadata?: ListenMetadataData;
    watchMetadata?: WatchMetadataData;
    playMetadata?: PlayMetadataData
}

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
    gameGenre?: string;
    playerNumber?: string;

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


export interface PlayMetadataData {
    creator: string;
    gameGenre: string;
    playerNumber: string;
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
