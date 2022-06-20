import { useState } from "react";

export const useSimpleForm = (initialValues = {}) => {
  const [formData, setFormData] = useState({
    values: initialValues,
    errors: {},
  });

  const setFormField = (name, value) => {
    setFormData(({ values, errors: { [name]: _, ...errors } }) => ({
      values: { ...values, [name]: value },
      errors,
    }));
    return formData;
  };

  // Set error
  const setFormError = (name, value, error) => {
    setFormData(({ values, errors }) => ({
      values: { ...values, [name]: value },
      errors: { ...errors, [name]: error },
    }));
    return formData;
  };

  return [formData, setFormField, setFormData, setFormError];
};
