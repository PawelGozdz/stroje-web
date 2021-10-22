import { BASE_PATH } from '../utils/constants';

export async function getGendersApi() {
  try {
    const url = `${BASE_PATH}/genders`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getGendersApi -->>', error);
    return null;
  }
}
