import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavbarDropdown from "components/Dropdowns/NavbarDropdown.js";



const componentStyles = (theme) => ({
  appBarRoot: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      marginLeft: "400px",
    },
  },
  brandTitle: {
    textTransform: "uppercase",
    margin: "0",
    color: theme.palette.white.main,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  searchBox: {
    borderColor: theme.palette.adminNavbarSearch.main,
    borderRadius: "2rem",
    border: "2px solid",
    backgroundColor: "initial",
    transition: "box-shadow .15s ease",
  },
  searchIcon: {
    color: theme.palette.adminNavbarSearch.main,
    marginRight: "0.5rem",
    marginLeft: "1rem",
  },
  searchInput: {
    color: theme.palette.adminNavbarSearch.main,
    width: "270px",
    backgroundColor: "initial",
    border: 0,
    boxShadow: "none",
    padding: "0",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
});

const useStyles = makeStyles(componentStyles);

export default function AdminNavbar({ brandText, name }) {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        classes={{ root: classes.appBarRoot }}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop="0.5rem"
            >
              <div>
                <Typography
                  className={classes.brandTitle}
                  variant="h4"
                  component="a"
                >
                  {brandText}
                </Typography>
              </div>
              <Box display="flex" alignItems="center" width="auto">
                <NavbarDropdown name={name}/>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
