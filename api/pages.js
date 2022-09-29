import { BASE_PATH } from '../utils/constants';

export async function getPageProps(query) {
  try {
    const url = `${BASE_PATH}/pages?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getPageProps -->>', error);
    return null;
  }
}

