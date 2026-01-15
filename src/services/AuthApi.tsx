// src/services/api.ts
const API_BASE_URL = 'http://localhost:8080';

// token avec services 4
export const tokenService = {
  getToken: (): string | null => { //recup
    return localStorage.getItem('authToken');
  },

  setToken: (token: string): void => { //envoi
    localStorage.setItem('authToken', token);
  },

  removeToken: (): void => { //sup
    localStorage.removeItem('authToken');
  },

  isAuthenticated: (): boolean => { //verif si existe
    return !!localStorage.getItem('authToken');
  }
};

export const authService = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Erreur de connexion');
    }

    const data = await response.json();
    
    // Sauvegarde le token dans le localStorage
    if (data.token) {
      tokenService.setToken(data.token);
    }

    return data;
  },

  register: async (firstName: string, lastName: string, email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'inscription");
    }

    const data = await response.json();
    
    // Sauvegarde le token dans le localStorage
    if (data.token) {
      tokenService.setToken(data.token);
    }

    return data;
  },

  logout: (): void => {
    tokenService.removeToken();
  }
};


/*

Récupère le token du localStorage
Ajoute le header Authorization: Bearer {token}
Ajoute Content-Type: application/json
Gère l'erreur si ton token est expiré (te déconnecte automatiquement)

En résumé simple :
fetchWithAuth = un raccourci pour faire des requêtes en étant authentifié, sans avoir à gérer manuellement le token à chaque fois.
Tu l'utiliseras pour toutes les requêtes qui nécessitent d'être connecté :

Ajouter/modifier/supprimer des ressources
Accéder à ton profil
Liker des ressources
etc.

*/
// Helper pour les requêtes authentifiées
//de la bebon ca
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = tokenService.getToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Token invalide ou expiré, on déconnecte l'utilisateur
      tokenService.removeToken();
      throw new Error('Session expirée, veuillez vous reconnecter');
    }
    throw new Error(`Erreur HTTP: ${response.status}`);
  }

  return response;
};