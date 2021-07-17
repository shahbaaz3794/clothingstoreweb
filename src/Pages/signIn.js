import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

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
  },
  loginForm: {
    padding: 40,
  },
});

const SignIn = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.loginCard} variant="outlined">
          <form className={classes.loginForm}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="Password"
              fullWidth
              // endAdornment={
              //   <InputAdornment position="end">
              //     <IconButton
              //       aria-label="toggle password visibility"
              //       onClick={handleClickShowPassword}
              //       onMouseDown={handleMouseDownPassword}
              //       edge="end"
              //     >
              //       {values.showPassword ? <Visibility /> : <VisibilityOff />}
              //     </IconButton>
              //   </InputAdornment>
              // }
            />
          </form>
        </Paper>
      </div>
    </>
  );
};

export default SignIn;
