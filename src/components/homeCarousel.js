import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "infinite-react-carousel";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const HomeCarousel = () => {
  const classes = useStyles();

  return (
    <>
      <Slider dots>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </>
  );
};

export default HomeCarousel;
