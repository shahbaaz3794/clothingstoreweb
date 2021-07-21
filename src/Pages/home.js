import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TopAppBar from "../components/appBar";
import HomeCarousel from "../components/homeCarousel";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <TopAppBar />
        <HomeCarousel/>
      </div>
    </>
  );
};
export default Home;
