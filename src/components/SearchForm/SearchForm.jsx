import { useFormik } from 'formik';
import React from 'react';

const SearchForm = ({ title, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      title: title,
    },
    onSubmit: (values, { resetForm }) => {
      submitForm(values.title);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="title"
        type="text"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
