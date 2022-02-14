const AUTH_ERROR_MSG = 'Ошибка авторизации';
const SERVER_ERROR_MSG = 'Сервер недоступен, попробуйте позже';
export const ErrorHandler = (error) => {
  console.log(`Ошибка : ${error}`);
  if (error == 401) {
    console.log(AUTH_ERROR_MSG);
  }
  if (error == 'TypeError: Failed to fetch') {
    console.log(SERVER_ERROR_MSG);
  }
};
