import { BASE_PATH } from '../utils/constants';

export async function getModelsApi({ limit = '', sort = '', page = '' }) {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = `_sort=${sort}`;
    const startItems = `_start=${page}`;
    const url = `${BASE_PATH}/models?${limitItems}&${sortItems}&${startItems}&_publicationState=live`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getModelsApi -->>', error);
    return null;
  }
}

export async function getModelByCustomProps(query) {
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

export async function getModelByCustomPropsCount(query) {
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

