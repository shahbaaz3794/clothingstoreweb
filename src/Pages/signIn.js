import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const SignIn=()=> {
  const classes = useStyles();
  
  return (
    <>
      <Card className={classes.root} variant="outlined"></Card>
    </>
  )
}

export default SignIn;
