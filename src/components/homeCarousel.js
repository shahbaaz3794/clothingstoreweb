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
        prevArrow={<GrPrevious size={30} color="#FFF" />}
        nextArrow={<GrNext size={30} color="#FFF" />}
      >
        <div className={classes.imageDiv}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/Jx7xqf4/pexels-august-de-richelieu-4427816.jpg"
            alt="pic"
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/GV08J9f/pexels-pixabay-267202.jpg"
            alt="pic"
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/sK92ZhC/pexels-karolina-grabowska-4210860.jpg"
            alt="pic"
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/FDwNR9d/img1.jpg"
            alt="pic"
          />
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/7G5qqGY/1.jpg"
            alt="pic"
          />
        </div>
      </Slider>
    </>
  );
};

export default HomeCarousel;
