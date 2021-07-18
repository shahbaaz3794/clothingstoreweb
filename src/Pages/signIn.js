import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
import facebookLogo from "../assests/facebookLogo.png";
import googleLogo from "../assests/googleLogo.png";
import { useAppDispatch } from "../redux/store";
import { userLogin } from "../redux/slices/loginSlice";
import * as yup from "yup";
import { useFormik } from "formik";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";

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
    background: "#fff",
  },
  loginForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 20,
  },
  googleBtn: {
    marginTop: 15,
    textTransform: "none",
  },
  facebookBtn: {
    textTransform: "none",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const loginUser = useSelector((state) => state.user);

  // console.log(loginUser, "lllll");

  useEffect(() => {
    if (loginUser.isAuthenticating) {
      setLoader(true);
    }
    if (loginUser.isAuthenticationFailed && loginUser.errorMsg) {
      enqueueSnackbar(loginUser.errorMsg, {
        variant: "error",
      });
      setLoader(false);
    }
    if (loginUser.isAuthenticationSuccess) {
      setLoader(false);
      history.push("/home");
    }
  }, [
    loginUser.isAuthenticating,
    loginUser.isAuthenticationFailed,
    loginUser.isAuthenticationSuccess,
  ]);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: () => {
      handleSubmit();
    },
  });

  const handleSubmit = async () => {
    const payload = {
      email: formik.values.email,
      password: formik.values.password,
    };
    if (payload) {
      dispatch(userLogin(payload));
      // .then(unwrapResult)
      // .then((response) => {
      //   console.log(response,"response")
      // })
    }
  };

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
            <form className={classes.loginForm} onSubmit={formik.handleSubmit}>
              <TextField
                className={classes.emailField}
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                required
                fullWidth
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />
              <FormControl className={classes.passwordForm} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  required
                  fullWidth
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.touched.email && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
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
              <Button
                type="submit"
                className={classes.loginBtn}
                variant="contained"
              >
                {loader ? <CircularProgress size={22} /> : "login"}
              </Button>
            </form>
          </div>
          <div className={classes.socialLoginBtn}>
            <Button className={classes.facebookBtn} variant="contained">
              <img
                style={{ height: 20, width: 20, marginRight: 10 }}
                src={facebookLogo}
                alt="facebook logo"
              />
              Login with Facebook
            </Button>
            <Button className={classes.googleBtn} variant="contained">
              <img
                style={{ height: 20, width: 20, marginRight: 10 }}
                src={googleLogo}
                alt="google logo"
              />
              Login with Google
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default SignIn;
