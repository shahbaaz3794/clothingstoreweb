import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { FaShopify } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: "#fff",
    boxShadow: "0 10px 10px rgba(0,0,0,0.05)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#05679E",
    marginLeft: 20,
    fontWeight: "bold",
  },
  search: {
    marginRight: 20,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#05679E", 0.15),
    '&:hover': {
      backgroundColor: alpha("#05679E", 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#05679E"
  },
  inputRoot: {
    color: "#05679E",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    cursor: "pointer",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '0.1ch',
      '&:focus': {
        width: '20ch',
        cursor: "auto",
      },
    },
  },
}));

const TopAppBar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.header} elevation={1}>
          <Toolbar>
            <FaShopify size={40} color="#05679E" />
            <Typography variant="h6" className={classes.title}>
              Clothing Store
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                // placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <CgProfile size={30} color="#05679E" />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default TopAppBar;
