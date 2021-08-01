import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1300,
    margin: "auto",
  },
  heading: {
    fontSize: 25,
    color: "#05679E",
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 30
  },
}));

const HomeContent = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.heading}>Top Brands</Typography>
        <Grid container>
          <Grid item xs={12} sm={6} lg={3} style={{display:'flex',justifyContent:"center"}}>
            <img style={{width:300, cursor:'pointer'}} src="https://i.ibb.co/1bLWR5g/brand1.webp" alt="pic" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} style={{display:'flex',justifyContent:"center"}}>
            <img style={{width:300, cursor:'pointer'}} src="https://i.ibb.co/TtmMGbQ/brand4.webp" alt="pic" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} style={{display:'flex',justifyContent:"center"}}>
            <img style={{width:300, cursor:'pointer'}} src="https://i.ibb.co/yShWt7r/brand2.webp" alt="pic" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} style={{display:'flex',justifyContent:"center"}}>
            <img style={{width:300, cursor:'pointer'}} src="https://i.ibb.co/dLcNVt8/brand3.jpg" alt="pic" />
          </Grid>

          <Grid item xs={12} sm={6} lg={3} style={{display:'flex',justifyContent:"center"}}>
            <img style={{width:300, cursor:'pointer'}} src="https://i.ibb.co/PQ7Spx7/brand5.webp" alt="pic" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} style={{display:'flex',justifyContent:"center"}}>
            <img style={{width:300, cursor:'pointer'}} src="https://i.ibb.co/4jymHP8/brand8.webp" alt="pic" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} style={{display:'flex',justifyContent:"center"}}>
            <img style={{width:300, cursor:'pointer'}} src="https://i.ibb.co/7J8Zsb2/brand6.webp" alt="pic" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} style={{display:'flex',justifyContent:"center"}}>
            <img style={{width:300, cursor:'pointer'}} src="https://i.ibb.co/nsWYZhD/brand7.jpg" alt="pic" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomeContent;
