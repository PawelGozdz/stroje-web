import { BASE_PATH } from '../utils/constants';

export async function getGlobalProps() {
    try {
        const url = `${BASE_PATH}/global-settings`;

        const response = await fetch(url);
        const result = await response.json();

        return result;
    } catch (error) {
        console.log('getGlobalProps -->>', error);
        return null;
    }
}

