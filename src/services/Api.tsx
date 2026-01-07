import { fetchWithAuth } from "./AuthApi";
import type { ResourceData } from '../types/Resource';


export const AddResourceService = {
    addResource: async (resourceData: ResourceData) => {
        const response = await fetchWithAuth('/api/resource/add', {
            method: 'POST',
            body: JSON.stringify(resourceData),
        });

        return await response.json();
    }}