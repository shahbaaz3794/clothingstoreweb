import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TopAppBar from "../components/appBar";
import HomeCarousel from "../components/homeCarousel";
import Card from '@material-ui/core/Card';
import HomeContent from "../components/homeContent";
import HomeCategories from "../components/homeCategories";
import Footer from "../components/footer";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <TopAppBar />
        <HomeCategories />
        <Card style={{marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 15}}>
          <HomeCarousel />
        </Card>
        <HomeContent />
        <Footer />
      </div>
    </>
  );
};
export default Home;
