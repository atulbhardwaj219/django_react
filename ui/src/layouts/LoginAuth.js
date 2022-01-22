import React from "react";
import { useLocation} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Login from "views/auth/Login"


const componentStyles = (theme) => ({
  bgDefault: {
    backgroundColor: theme.palette.dark.main,
  },
});


const useStyles = makeStyles(componentStyles);

const Auth = () => {
  const classes = useStyles();
  const mainContent = React.useRef(null);
  const location = useLocation();
  

  React.useEffect(() => {
    document.body.classList.add(classes.bgDefault);
    return () => {
      document.body.classList.remove(classes.bgDefault);
    };
  });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);


  return (
    <>
      <div className="main-content" ref={mainContent}>
        {/* Page content */}
        <Container
          component={Box}
          maxWidth="xl"
          marginTop="4rem"
          paddingBottom="3rem"
          position="relative"
          zIndex="101"
        >
          <Box component={Grid} container justifyContent="center">
          <Login />
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Auth;
