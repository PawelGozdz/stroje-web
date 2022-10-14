import { BASE_PATH } from '../utils/constants';

export async function getModelsApi(query) {
  try {
    const url = `${BASE_PATH}/models?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getModelsApi -->>', error);
    return null;
  }
}

export async function getModelsByCustomProps(query) {
  try {
    const url = `${BASE_PATH}/models?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getModelByCustomProps -->>', error);
    return null;
  }
}

export async function getModelsByCustomPropsCount(query) {
  try {
    const url = `${BASE_PATH}/models/count?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getModelByCustomPropsCount -->>', error);
    return null;
  }
}

