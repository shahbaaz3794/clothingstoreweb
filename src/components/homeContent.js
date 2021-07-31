import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  leftImageDiv: {
    height: 400,
    width: (window.innerWidth/2),
  },
}));

const HomeContent = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.leftImageDiv}>
        <img
          style={{ height: "100%", width: "100%" }}
          src="https://i.ibb.co/Jx7xqf4/pexels-august-de-richelieu-4427816.jpg"
          alt="pic"
        />
      </div>
    </>
  );
};

export default HomeContent;
