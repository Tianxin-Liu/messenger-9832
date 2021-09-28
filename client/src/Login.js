import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
<<<<<<< HEAD
    <Grid container justify="center">
      <Box>
        <Grid container item>
          <Typography>Need to register?</Typography>
          <Button onClick={() => history.push("/register")}>Register</Button>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
=======
    <Grid container justifyContent="center" alignItems="center" spacing={0} className={authClasses.root}>
      <Hidden mdDown>
        <Grid container item={true} md={12} lg={5} justifyContent="center" className={authClasses.side}>
          <SideView />
        </Grid>
      </Hidden>
      <Grid container item={true} md={12} lg={7} justifyContent="center" className={authClasses.mainContent}>
        <HeaderContent
          contentText="Don’t have an account?"
          buttonText="Create Account"
          onButtonClick={() => history.push('/register')}
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
          <form onSubmit={handleLogin} className={authClasses.inputForm}>
            <FormControl margin="normal" required className={authClasses.input}>
              <TextField
                aria-label="E-mail address"
                label="E-mail address"
                name="username"
                type="text"
              />
            </FormControl>
            <FormControl margin="normal" required className={authClasses.input}>
>>>>>>> develop
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Button type="submit" variant="contained" size="large">
                Login
              </Button>
            </Grid>
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
