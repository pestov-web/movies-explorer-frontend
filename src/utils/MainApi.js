import { HEADERS, MAIN_API_URL } from './constants';

class MainApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  // возвращаем ошибку в случае ошибки =)
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`ошибка ! : ${res.status}`);
  }

  // регистрируем пользователя
  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
      credentials: this._credentials,
    }).then(this._handleResponse);
  }
  // авторизация пользователя
  authorize({ email, password }) {
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
  patchUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
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

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  saveMovie(movie) {
    console.log(movie);
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie),
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  removeMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: HEADERS,
  credentials: 'include',
});

export default mainApi;
