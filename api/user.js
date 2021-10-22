import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';

export async function registerApi(formData) {
  try {
    const url = `${BASE_PATH}/auth/register`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // credentials: 'include',
      },
      body: JSON.stringify(formData)
    };
    console.log('WYSYŁAM ', formData)
    const response = await fetch(url, params);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function loginApi(formData) {
  try {
    const url = `${BASE_PATH}/auth/login`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    const response = await fetch(url, params);
    const result = await response.json();

    return result;

  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function resetPasswordApi(email) {
  try {
    const url = `${BASE_PATH}/auth/forgot-password`;
    const params = {
      method: 'POST',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    }

    const response = await fetch(url, params);
    const result = await response.json();
    return result;

  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getMeApi(logout) {
  try {
    const url = `${BASE_PATH}/user/me`;
    // url, params, funkcja logout
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return error;
  }
}

export async function updateUserApi(id, data, logout) {
  try {
    const url = `${BASE_PATH}/user/${id}`;
    const params = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }

    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function updateEmailApi(idUser, data, logout) {
  try {
    const url = `${BASE_PATH}/user/${idUser}`;
    const params = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }

    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function updatePasswordApi(idUser, data, logout) {
  try {
    const url = `${BASE_PATH}/auth/update-password`;
    const params = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      // { password, confirmPassword, currentPassword }
      body: JSON.stringify(data),
    }

    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function updatePhoneApi(id, data, logout) {
  try {
    const url = `${BASE_PATH}/user/${id}`;
    const params = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }

    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return error;
  }
}
