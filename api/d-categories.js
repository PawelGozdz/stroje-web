import { BASE_PATH } from '../utils/constants';

export async function getDCategoriesApi() {
  try {
    const url = `${BASE_PATH}/d-categories`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getDCategoriesApi -->>', error);
    return null;
  }
}
