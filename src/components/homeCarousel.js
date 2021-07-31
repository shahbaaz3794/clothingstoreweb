import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "infinite-react-carousel";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const useStyles = makeStyles((theme) => ({
  imageDiv: {
    width: "100%",
    height: 430,
  },
}));

const HomeCarousel = () => {
  const classes = useStyles();

  return (
    <>
      <Slider
        autoplay={true}
        autoplaySpeed={3000}
        dots={false}
        prevArrow={<GrPrevious size={30} />}
        nextArrow={<GrNext size={30} />}
      >
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/fGJXrqf/c1.webp"
            alt="pic"
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/F7hvfwv/c2.webp"
            alt="pic"
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/j8Ss8fw/c3.webp"
            alt="pic"
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/9t2pkZW/c4.webp"
            alt="pic"
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/tqGPK2g/c5.webp"
            alt="pic"
          />
        </div>
      </Slider>
    </>
  );
};

export default HomeCarousel;
