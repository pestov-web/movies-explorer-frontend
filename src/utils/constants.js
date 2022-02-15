export const MAIN_API_URL = 'https://api.pestov-web.ru';
export const MOVIES_API_URL = 'https://api.nomoreparties.co';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// messages
export const AUTH_ERROR_MSG = 'Ошибка авторизации';
export const SERVER_ERROR_MSG = 'Сервер недоступен, попробуйте позже';
export const BAD_REQ_MSG = 'Cервер не смог обработать запрос';
export const NO_RESULT_MSG = 'Поиск не дал результатов';
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
  email:
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
  password: '^[A-Za-z0-9]{8,}$',
  search: '/^[A-Za-zА-Яа-я0-9s]+$/',
};

export const SCREEN_SIZE = {
  L: 1024,
  M: 640,
  S: 320,
};

export const CARDS_NUMBER = {
  L: 16,
  M: 8,
  S: 5,
};

export const MORE_CARDS = {
  L: 4,
  M: 2,
  S: 1,
};
