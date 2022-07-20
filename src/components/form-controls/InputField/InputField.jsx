import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

InputField.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { errors, formState } = form;
  const hasError = formState.errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      fullWidth
      label={label}
      disabled={disable}
      error={!!hasError}
      helperText={errors[name]?.message}
    />
  );
}

export default InputField;
