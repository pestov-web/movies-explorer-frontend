import { HEADERS, MOVIES_API_URL } from './constants';

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // возвращаем ошибку в случае ошибки =)
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`ошибка ! : ${res.status}`);
  }

  // получаем фильмы с сервера
  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_API_URL,
  headers: HEADERS,
  credentials: 'include',
});

export default moviesApi;
