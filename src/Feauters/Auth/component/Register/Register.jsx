import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm/RegisterForm";

Register.propTypes = {};

function Register(props) {
  const handleSubmit = () => {};
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
