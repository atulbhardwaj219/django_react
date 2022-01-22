import React, {useState} from "react";
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
import School from "@material-ui/icons/School";
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

function Register() {
  const classes = useStyles();
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false)

  const submit = async (e) => {
     e.preventDefault();
     console.log(name) 

     const response = await fetch('http://localhost:8000/api/register', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({
             name,
             email,
             password,
           })
     
          });

          const content = await response.json();

          console.log(content);
          setRedirect(true)
    
  }

  if (redirect) {
     return <Redirect to="/login" />;
  }


  return (
    <>
      <Grid item xs={12} lg={6} md={8}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Box
              color={theme.palette.gray[600]}
              textAlign="center"
              marginBottom="1.5rem"
              marginTop=".5rem"
              fontSize="1rem"
            >
              <Box fontSize="80%" fontWeight="400" component="small">
                sign up with credentials
              </Box>
            </Box>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="text"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <School />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
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
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              fontStyle="italic"
              fontSize="1rem"
              color={theme.palette.gray[600]}
              marginBottom=".5rem"
            >
              <Box component="small" fontSize="80%">
                password strength:{" "}
                <Box
                  component="span"
                  fontWeight="700"
                  color={theme.palette.success.main}
                >
                  strong
                </Box>
              </Box>
            </Box>
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button color="primary" variant="contained" onClick={submit}>
                Create account
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Register;
