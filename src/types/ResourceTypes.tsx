// src/types/resource.ts
export interface ResourceData {
    media: string;
    category: string;
    subCategory: string
    name: string;
    description: string;
    url: string;
    image_url: string;
    creator: string;
    release_year: string;
    duration_minutes: string;
    platform: string;
    
}

export interface MediaData {
    type: string;
}


export interface Category {
    name: string;
}

export interface subCategory {
    name: string;
}