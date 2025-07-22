import axios from 'axios';
const baseURL = `${import.meta.env.VITE_PROJECTS_API}/api`;

// only doing it for the requests on this file
const setAuthorizationHeaders = () => {
  axios.interceptors.request.use(config => {
    // retrieve the token from localStorage
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  });
};

setAuthorizationHeaders();

export const getAllEntries = () => {
  return axios.get(`${baseURL}/entries`);
};

export const addEntry = entry => {
  return axios.post(`${baseURL}/entries`, entry);
};

export const deleteEntry = id => {
  return axios.delete(`${baseURL}/entries/${id}`);
};
