import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Hidden,
  InputAdornment,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import SideView from "./components/AuthPages/SideView";
import HeaderContent from "./components/AuthPages/HeaderContent";
import { useAuthStyles } from './components/AuthPages/styles';

const useStyles = makeStyles((theme) => ({
  forgot: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSizeSmall,
    fontWeight: theme.typography.fontWeightBold,
    cursor: "pointer"
  }
}));

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const authClasses = useAuthStyles();
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
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <span className={classes.forgot}>Forgot?</span>
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
            <Button type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={authClasses.submitButton}>
              Login
              </Button>
          </form>
        </Grid>
      </Grid>
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
