export const MAIN_API_URL = 'https://api.pestov-web.ru';
export const MOVIES_API_URL = 'https://api.nomoreparties.co';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
export const AUTH_ERROR_MSG = 'Ошибка авторизации';
export const SERVER_ERROR_MSG = 'Сервер недоступен, попробуйте позже';
export const BAD_REQ_MSG = 'Cервер не смог обработать запрос';
export const NO_RESULT_MSG = 'Поиск не дел результатов';
export const EXISTS_MSG = 'Такой пользователь существует';

export const userValidationMessage = {
  name: 'Имя не может быть меньше двух символов',
  email: 'Введите правильный email',
  password:
    'Пароль должен содержать не менее восьми латинских символов или цифр',
  search: 'Введите правильные критерии поиска',
};

export const REGEXP = {
  name: '^[A-Za-zА-Яа-я0-9]{2,}$',
  email: '^([A-Za-z0-9_-.])+@([A-Za-z0-9_-.])+.([A-Za-z]{2,4})$',
  password: '^[A-Za-z0-9]{8,}$',
  search: '/^[A-Za-zА-Яа-я0-9s]+$/',
};

export const SCREEN_SIZE = {
  L: 1024,
  M: 640,
  S: 320,
};

export const CARDS_NUMBER = {
  L: 8,
  M: 6,
  S: 3,
};

export const MORE_CARDS = {
  L: 4,
  M: 3,
  S: 1,
};
