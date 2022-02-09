import * as yup from 'yup';

const nameRegex = /^[A-Za-z]+$/;

export const validateSignUp = yup.object({
  name: yup
    .string('Введите ваше имя')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .required('Необходимо ввести имя'),
  email: yup
    .string('Введите email')
    .email('Введите правильный email')
    .required('Необходимо ввести email'),
  password: yup
    .string('Введите пароль')
    .min(8, 'Пароль должен содеражать не менее 8 символов')
    .required('Необходимо ввести пароль'),
});

export const validateSignIn = yup.object({
  email: yup
    .string('Введите email')
    .email('Введите правильный email')
    .required('Необходимо ввести email'),
  password: yup
    .string('Введите пароль')
    .min(8, 'Пароль должен содеражать не менее 8 символов')
    .required('Необходимо ввести пароль'),
});

export const validateUserUpdate = yup.object({
  name: yup
    .string('Введите ваше имя')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .required('Необходимо ввести имя'),
  email: yup
    .string('Введите email')
    .email('Введите правильный email')
    .required('Необходимо ввести email'),
});

export const validateFilmSearch = yup.object({
  film: yup
    .string('Введите название фильма')
    .matches(nameRegex, 'Используйте Русский или Английский язык')
    .min(2, 'Название фильма не может содержать меньше 2х символов')
    .required('Необходимо ввести название фильма'),
});
