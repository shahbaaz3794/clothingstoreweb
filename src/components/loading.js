import React from "react";
import ReactLoading from "react-loading";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingContainer}>
      <ReactLoading type="spinningBubbles" color="#1071BA" />
    </div>
  );
};
export default Loading;
