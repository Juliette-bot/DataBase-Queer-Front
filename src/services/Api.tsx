import type { ResourceData } from "../types/ResourceTypes";
import { fetchWithAuth } from "./AuthApi";

const API_BASE_URL = 'http://localhost:8080';



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
        return await response.json();
    }
}

export const GetSubCategoryService = {
    getAll: async () => {
        const response = await fetchWithAuth('/api/subCategory');
        return await response.json();
    },
    getByCategoryId: async (categoryId: string) => {
        const response = await fetchWithAuth(`/api/category/${categoryId}/subCategory`); 
        return await response.json();
    }
}
export const GetResourceService = {
    getAll: async () => {
        const response = await fetch (`${API_BASE_URL}/api/resource`)
        return await response.json();
    },



}