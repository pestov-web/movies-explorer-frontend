import { AUTH_ERROR_MSG, BAD_REQ_MSG, SERVER_ERROR_MSG } from './constants';

export const ErrorHandler = (error) => {
  console.log(`Ошибка : ${error}`);
  if (error === 401) {
    return AUTH_ERROR_MSG;
  }
  if (error === 400) {
    return BAD_REQ_MSG;
  }
  if (error == 'TypeError: Failed to fetch') {
    return SERVER_ERROR_MSG;
  }
};
