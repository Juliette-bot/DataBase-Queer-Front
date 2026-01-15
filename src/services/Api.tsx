import type { ResourceData } from "../types/ResourceTypes";
import { fetchWithAuth } from "./AuthApi";


export const AddResourceService = {
    addResource: async (resourceData: ResourceData) => {
        const response = await fetchWithAuth('/api/resource/add', {
            method: 'POST',
            body: JSON.stringify(resourceData),
        });

        return await response.json();
    }
}

export const GetMediaService = {
    getAll: async () => {
        const response = await fetchWithAuth('/api/media');
        return await response.json();
    }
}

export const GetCategoryService = {
    getAll: async () => {
        const response = await fetchWithAuth('/api/category');
        return await response.json();
    },

    getByMediaId: async (mediaId: string) => {
        const response = await fetchWithAuth(`/api/media/${mediaId}/category`);
        //                                    
        return await response.json();
    }
}

export const GetSubCategoryService = {
    getAll: async () => {
        const response = await fetchWithAuth('/api/subCategory');
        //                                                   
        return await response.json();
    },

    getByCategoryId: async (categoryId: string) => {
        const response = await fetchWithAuth(`/api/category/${categoryId}/subCategory`);
        //                                    
        return await response.json();
    }
}