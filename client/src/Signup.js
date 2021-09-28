import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
<<<<<<< HEAD
    <Grid container justify="center">
      <Box>
        <Grid container item>
          <Typography>Need to log in?</Typography>
          <Button onClick={() => history.push("/login")}>Login</Button>
        </Grid>
        <form onSubmit={handleRegister}>
          <Grid>
            <Grid>
              <FormControl>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Button type="submit" variant="contained" size="large">
=======
    <Grid container justifyContent="center" alignItems="center" spacing={0} className={authClasses.root}>
      <Hidden mdDown>
        <Grid container item={true} md={12} lg={5} justifyContent="center" className={authClasses.side}>
          <SideView />
        </Grid>
      </Hidden>
      <Grid container item={true} md={12} lg={7} justifyContent="center" className={authClasses.mainContent}>
        <HeaderContent
          contentText="Already have an account?"
          buttonText="Login"
          onButtonClick={() => history.push('/login')}
          className={authClasses.HeaderContent} />
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={authClasses.formWrapper}>
          <Typography className={authClasses.formHeader} align="left" variant="h4">
            Welcome back!
            </Typography>
          <form onSubmit={handleRegister} className={authClasses.inputForm}>
            <FormControl margin="normal" required className={authClasses.input}>
              <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
                required
              />
            </FormControl>
            <FormControl margin="normal" required className={authClasses.input}>
              <TextField
                label="E-mail address"
                aria-label="e-mail address"
                type="email"
                name="email"
                required
              />
            </FormControl>
            <FormControl margin="normal" required error={!!formErrorMessage.confirmPassword} className={authClasses.input}>
              <TextField
                aria-label="password"
                label="Password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="password"
                required
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal" required error={!!formErrorMessage.confirmPassword} className={authClasses.input}>
              <TextField
                label="Confirm Password"
                aria-label="confirm password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="confirmPassword"
                required
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
            <Button type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={authClasses.submitButton}>
>>>>>>> develop
              Create
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
