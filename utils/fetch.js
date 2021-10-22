import { getToken, hasExpiredToken } from '../api/token';
import { defaultDisplayCarts } from './constants';

export async function authFetch(url, params, logout) {
  const token = getToken();

  if (!token) {
    // usuario no logeador
    logout();
  } else {
    if (hasExpiredToken(token)) {
      // Token caducado
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`
        }
      };

      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        return error;
      }
    }
  }
}

export const limitPerPage = (query) => {
  const currentLimit = parseInt(query.limit) || 6;
  if (!query.limit || Math.abs(currentLimit) > 36) return defaultDisplayCarts;
  else return currentLimit;
};

export const getStartItem = (query) => {
  const currentPage = parseInt(query.page) || 0;
  const limit = limitPerPage(query);
  if (!query.page || currentPage === 1) return 0;
  else return currentPage * limit - limit;
};
