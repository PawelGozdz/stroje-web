import { BASE_PATH } from '../utils/constants';

export async function getDModelsApi(query) {
  try {
    const url = `${BASE_PATH}/d-models?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getDModelsApi -->>', error);
    return null;
  }
}

export async function getDModelsByCustomProps(query) {
  try {
    const url = `${BASE_PATH}/d-models?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getDModelsByCustomProps -->>', error);
    return null;
  }
}

export async function getDModelsByCustomPropsCount(query) {
  try {
    const url = `${BASE_PATH}/d-models/count?${query}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getDModelsByCustomPropsCount -->>', error);
    return null;
  }
}

