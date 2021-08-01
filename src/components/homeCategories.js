import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: "#fff",
    boxShadow: "0 10px 10px rgba(0,0,0,0.05)",
  },
  categoryDiv: {
    cursor: "pointer",
    height: 64,
    display: "flex",
    flexDirection: "column",
  },
  text: {
    color: "#05679E",
    marginLeft: 15,
    marginRight: 15,
    textTransform: "uppercase",
  },
  categoryTextDiv: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  selectedCategory: {
    height: 5,
    width: "100%",
  },
}));

const HomeCategories = () => {
  const classes = useStyles();
  const history = useHistory();

  const changeBackground = (color, id) => {
    document.getElementById(`${id}`).style.backgroundColor = color;
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.header} elevation={1}>
          <Toolbar>
            <div
              className={classes.categoryDiv}
              onMouseOver={() => changeBackground("#05679E","men")}
              onMouseOut={() => changeBackground("#fff","men")}
              onClick={()=>history.push('/men')}
            >
              <div className={classes.categoryTextDiv}>
                <Typography className={classes.text}>Men</Typography>
              </div>
              <div id={"men"} className={classes.selectedCategory}></div>
            </div>
            <div
              className={classes.categoryDiv}
              onMouseOver={() => changeBackground("#05679E","women")}
              onMouseOut={() => changeBackground("#fff","women")}
              onClick={()=>history.push('/women')}
            >
              <div className={classes.categoryTextDiv}>
                <Typography className={classes.text}>Women</Typography>
              </div>
              <div id={"women"} className={classes.selectedCategory}></div>
            </div>
            <div
              className={classes.categoryDiv}
              onMouseOver={() => changeBackground("#05679E","kids")}
              onMouseOut={() => changeBackground("#fff","kids")}
              onClick={()=>history.push('/kids')}
            >
              <div className={classes.categoryTextDiv}>
                <Typography className={classes.text}>Kids</Typography>
              </div>
              <div id={"kids"} className={classes.selectedCategory}></div>
            </div>
            <div
              className={classes.categoryDiv}
              onMouseOver={() => changeBackground("#05679E","trending")}
              onMouseOut={() => changeBackground("#fff","trending")}
              onClick={()=>history.push('/trending')}
            >
              <div className={classes.categoryTextDiv}>
                <Typography className={classes.text}>Trending</Typography>
              </div>
              <div id={"trending"} className={classes.selectedCategory}></div>
            </div>
            <div
              className={classes.categoryDiv}
              onMouseOver={() => changeBackground("#05679E","discounts")}
              onMouseOut={() => changeBackground("#fff","discounts")}
              onClick={()=>history.push('/discounts')}
            >
              <div className={classes.categoryTextDiv}>
                <Typography className={classes.text}>Discounts</Typography>
              </div>
              <div id={"discounts"} className={classes.selectedCategory}></div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default HomeCategories;
