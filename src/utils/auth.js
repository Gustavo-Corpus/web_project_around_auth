export const BASE_URL = 'https://se-register-api.en.tripleten-services.com/v1';

// Función para verificar si la respuesta de la API es válida
const checkResponse = (response) => {  
  return response.json()  
    .then((data) => {  
      if (response.ok) {  
        return data;  
      }  
      // Asegurarse de que el error se propague correctamente  
      return Promise.reject(data || `Error: ${response.status}`);  
    });  
};

// Función para registrar un nuevo usuario
export const register = async (email, password) => {  
  const response = await fetch(`${BASE_URL}/signup`, {  
    method: 'POST',  
    headers: {  
      'Accept': 'application/json',  
      'Content-Type': 'application/json'  
    },  
    body: JSON.stringify({ email, password })  
  });  
  return checkResponse(response);  
};

// Función para autorizar/iniciar sesión
export const authorize = async (email, password) => {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  return checkResponse(response);
};

// Función para verificar el token
export const checkToken = async (token) => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return checkResponse(response);
};