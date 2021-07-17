import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import logo from "../assests/logo.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loginCard: {
    height: 500,
    width: 500,
    background: "#fff"
  },
  loginForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
  },
  passwordForm: {
    width: "100%",
  },
  emailField: {
    marginBottom: 20,
  },
  formDiv: {
    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 25,
  },
  socialLoginBtn: {
    paddingRight: 40,
    paddingLeft: 40,
    display: "flex",
    flexDirection: "column",
    // alignItems:"center",
    marginTop: 40,
  },
  loginBtn: {
    marginTop: 20,
    width: 200,
    textTransform: "none",
  },
  imageDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 20
  },
  googleBtn:{
    marginTop: 15,
    // width: 200,
    textTransform: "none",
  },
  facebookBtn : {
    // width: 200,
    textTransform: "none",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.loginCard} variant="outlined">
          <div className={classes.imageDiv}>
            <img style={{ height: 120 }} src={logo} alt="logo" />
          </div>
          <div className={classes.formDiv}>
            <form className={classes.loginForm}>
              <TextField
                className={classes.emailField}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                required
                fullWidth
              />
              <FormControl className={classes.passwordForm} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  // value={values.password}
                  required
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={40}
                />
              </FormControl>
              <Button className={classes.loginBtn} variant="contained">
                Login
              </Button>
            </form>
          </div>
          <div className={classes.socialLoginBtn}>
            <Button className={classes.facebookBtn} variant="contained">Login with Facebook</Button>
            <Button className={classes.googleBtn} variant="contained">Login with Google</Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default SignIn;
