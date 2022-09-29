import { BASE_PATH } from '../utils/constants';

export async function getDodatkiApi(query) {
  try {
    const url = `${BASE_PATH}/dodatkis?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getDodatkisApi -->>', error);
    return null;
  }
}

export async function getDodatkiByCustomProps(query) {
  try {
    const url = `${BASE_PATH}/dodatkis?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getDodatkiByCustomProps -->>', error);
    return null;
  }
}

export async function getDodatkiByCustomPropsCount(query) {
  try {
    const url = `${BASE_PATH}/dodatkis/count?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getDodatkiByCustomPropsCount -->>', error);
    return null;
  }
}

