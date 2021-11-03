/* eslint-disable camelcase */
// import libs
import { create } from 'apisauce';

// eslint-disable-next-line no-undef
const API_URI = process.env.REACT_APP_API_URL;

export const ROUTES = {
  // Auths
  LOGIN: '/login'
};

export const API = create({
  baseURL: API_URI
});
