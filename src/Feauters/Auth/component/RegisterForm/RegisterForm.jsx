import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import PasswordField from "../../../../components/form-controls/PasswordField";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your fullname ")
      .test("Please enter at least two words", (value) => {
        return value.split(" ").length >= 2;
      }),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least six"),
    retypePassword: yup
      .string()
      .required("Please retype your password")
      .oneOf([yup.ref("password")], "Password not match"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log(values);
    onsubmit(values);
    form.reset();
  };
  return (
    <Box
      sx={{
        marginTop: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </Box>

      <form
        component="form"
        noValidate
        onSubmit={form.handleSubmit(handleSubmit)}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField name="fullName" label="Full Name" form={form} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name="email" label="Email" form={form} />
          </Grid>
          <Grid item xs={12}>
            <PasswordField name="password" label="Password" form={form} />
          </Grid>
          <Grid item xs={12}>
            <PasswordField
              name="retypePassword"
              label="Retype Password"
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
    // <form onSubmit={form.handleSubmit(handleSubmit)}>
    //   <InputField name="fullName" label="" form={form} />
    // </form>
  );
}

export default RegisterForm;
