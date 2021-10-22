import { BASE_PATH } from '../utils/constants';

export async function getMenuApi() {
  try {
    const url = `${BASE_PATH}/menus`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getMenuApi -->>', error);
    return null;
  }
}
