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
    id: number;
    type: string;
}


export interface CategoryData {
    id: number;
    name: string;
}

export interface subCategoryData {
    id: number;
    name: string;
}