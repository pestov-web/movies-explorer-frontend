import { useState, useCallback } from 'react';
import { userValidationMessage } from '../utils/constants';

export const useFormValidation = (inputValues, setErrorMessage) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const input = e.target;
    const { name, value } = input;
    const form = input.closest('form');

    setErrorMessage('');

    setValues({
      ...values,
      [name]: value,
    });

    setIsValid(form.checkValidity());

    if (name === 'name') {
      input.setCustomValidity('');

      if (!input.validity.valid) {
        input.setCustomValidity(userValidationMessage.name);
      }
    }
    if (name === 'email') {
      input.setCustomValidity('');

      if (!input.validity.valid) {
        input.setCustomValidity(userValidationMessage.email);
      }
    }
    if (name === 'password') {
      input.setCustomValidity('');

      if (!input.validity.valid) {
        input.setCustomValidity(userValidationMessage.password);
      }
    }
    if (name === 'search') {
      input.setCustomValidity('');

      if (!input.validity.valid) {
        input.setCustomValidity(userValidationMessage.search);
      }
    }
    errors[name] = input.validationMessage;
    setErrors(errors);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setIsValid,
  };
};
