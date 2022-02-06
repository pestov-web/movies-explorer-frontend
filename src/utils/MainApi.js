class MainApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  // возвращаем ошибку в случае ошибки =)
  _handleResponse(res) {
    console.log(res);
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`ошибка ! : ${res.status}`);
  }

  // регистрируем пользователя
  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
      credentials: this._credentials,
    }).then(this._handleResponse);
  }
  // авторизация пользователя
  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  // получаем информацию о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  // обновляем информацию о пользователе
  patchUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  // проверяем токен
  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  logOut() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.pestov-web.ru',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  credentials: 'include',
});

export default mainApi;
