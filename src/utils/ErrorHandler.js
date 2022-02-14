const AUTH_ERROR_MSG = 'Ошибка авторизации';

export const ErrorHandler = (error) => {
  console.log(`Ошибка : ${error}`);
  if (error == 401) {
    console.log(AUTH_ERROR_MSG);
  }
};
