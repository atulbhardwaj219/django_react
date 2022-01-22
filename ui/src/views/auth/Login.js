import React,{useState,useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";



const componentStyles = (theme) => ({
  cardRoot: {
    border: "0!important",
    backgroundColor: theme.palette.secondary.main,
  },
  cardHeader: {
    backgroundColor: "initial",
  },
  cardContent: {
    [theme.breakpoints.up("md")]: {
      padding: "3rem",
    },
  },
  buttonImg: {
    verticalAlign: "middle",
    borderStyle: "none",
  },
  buttonRoot: {
    backgroundColor: theme.palette.white.main,
    color: theme.palette.primary.main,
    borderColor: theme.palette.white.main + "!important",
    "&:hover": {
      color: theme.palette.gray[900],
      borderColor: theme.palette.white.main + "!important",
      backgroundColor: theme.palette.white.main,
    },
  },
  formControlLabelRoot: {
    position: "relative",
    display: "flex",
    minHeight: "1.5rem",
    WebkitPrintColorAdjust: "exact",
  },
  formControlLabelLabel: {
    cursor: "pointer",
    fontSize: ".875rem",
    position: "relative",
    verticalAlign: "top",
    display: "inline-block",
    color: theme.palette.gray[600],
  },
  footerLinks: {
    color: theme.palette.gray[400],
    textDecoration: "none",
  },
});

const useStyles = makeStyles(componentStyles);

function Login() {
  const classes = useStyles();
  const theme = useTheme();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect((e) => {
    (
       
     async() => {
       
       const response = await fetch('http://localhost:8000/api/user', {
           headers: {'Content-Type': 'application/json'},
           credentials: 'include',

       });
         const content = await response.json();
         console.log(content.detail)
         if (content.detail === "Unauthenticated!"){
           setRedirect(false)
          
         }
         else{
          setRedirect(true)
         }
         
       
     }

       )();
  
 }  );

  const submit = async (e) => {
      e.preventDefault()
      const response = await fetch('http://localhost:8000/api/login', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           credentials: 'include',
           body: JSON.stringify({
             email,
             password,
           })
     
          });
          const content = await response.json();
          setRedirect(true)
        
  

  }

  if (redirect) {
    return <Redirect to="/dashboard/cluster" />;
 }

  return (
    <>
      <Grid item xs={12} lg={5} md={7}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Box
              color={theme.palette.gray[600]}
              textAlign="center"
              marginBottom="1rem"
              marginTop=".5rem"
              fontSize="1rem"
            >
            </Box>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
                autoComplete="off"
                id ="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="password"
                id="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button color="primary" variant="contained" onClick={submit}>
                Sign in
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Grid container component={Box} marginTop="1rem">
          <Grid item xs={6} component={Box} textAlign="left">
            <Link
              to="/dashboard"
              className={classes.footerLinks}
            >
              Forgot password
            </Link>
          </Grid>
          <Grid item xs={6} component={Box} textAlign="right">
            <Link
              to="/register"
              className={classes.footerLinks}
            >
              Create new account
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

}
              


export default Login;
