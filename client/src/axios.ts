import axios from "axios";

export const makeRequest = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL_PORT}/api/`,
  withCredentials: true,
});
