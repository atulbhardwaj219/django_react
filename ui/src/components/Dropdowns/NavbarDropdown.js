import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import Person from "@material-ui/icons/Person";

const componentStyles = (theme) => ({
  buttonRoot: {
    padding: ".25rem 0 .25rem 1rem!important",
    border: "0!important",
    boxShadow: "none!important",
    [theme.breakpoints.down("md")]: {
      padding: "0!important",
      minWidth: "unset!important",
      borderRadius: "50%",
    },
  },
  buttonLabel: {
    fontSize: ".875rem",
    fontWeight: "600",
    color: theme.palette.buttonLightLabel.main,
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0!important",
    },
  },
  avatarRoot: {
    width: "36px",
    height: "36px",
    marginRight: "0.5rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
    },
  },
  dividerRoot: {
    height: "0",
    margin: ".5rem 0",
    overflow: "hidden",
    borderTop: "1px solid " + theme.palette.gray[200],
  },
  menuTitle: {
    margin: "0!important",
    textTransform: "uppercase",
    display: "block",
    padding: ".5rem 1rem",
    whiteSpace: "nowrap",
  },
});

const useStyles = makeStyles(componentStyles);





export default function NavbarDropdown(props) {
  console.log("dsfsdfs",props.name)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const submit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:8000/api/logout', {
         method: 'POST',
         credentials: 'include',
         headers: {'Content-Type': 'application/json'},
   
        });
        const content = await response.json();
        console.log(content)
      
  
  
  }

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Person}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span ><Button color="primary" >
                My Profile
              </Button></span>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={DirectionsRun}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
          onClick={submit}
        />
        <span ><Button color="primary" onClick={submit}>
                Logout
              </Button></span>
      </Box>
    </Menu>
  );

  return (
    <>
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
      >
        <Avatar
          alt="..."
          src={require("assets/img/theme/test.JPG").default}
          classes={{
            root: classes.avatarRoot,
          }}
        />
        <Hidden smDown>{props.name}</Hidden>
      </Button>
      {renderMenu}
    </>
  );
}
