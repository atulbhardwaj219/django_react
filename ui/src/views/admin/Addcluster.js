import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";

// core components
const componentStyles = (theme) => ({
  cardRoot: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  cardHeader: {
    backgroundColor: "initial",
  },
  cardActionsRoot: {
    paddingBottom: "1.5rem!important",
    paddingTop: "1.5rem!important",
    borderTop: "0!important",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "600px",
      paddingRight: "39px",
    },
  },
  avatarRoot: {
    width: "36px",
    height: "36px",
    fontSize: ".875rem",
  },
});

const upper= (theme) => ({
  header: {
    position: "relative",
    background:
      "transparent",
    paddingBottom: "8rem",
    paddingTop: "3rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem",
    },
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
});



const useStyles = makeStyles(componentStyles);
const header = makeStyles(upper);

const Addcluster = () => {
  const classes = useStyles();
  const UpperClasses = header();
  return (
    <>
      <div className={UpperClasses.header}>
        <Container
          maxWidth={false}
          component={Box}>
          <div>
          </div>
        </Container>
      </div>
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: UpperClasses.containerRoot }}
      >
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Add Cluster"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}>
        </CardHeader>

        <Grid item xs={12} lg={12} md={8}>
        <CardContent classes={{ root: classes.cardContent }}>
        <FormGroup>
        <FormLabel>Email address</FormLabel>
        <OutlinedInput fullWidth type="email" placeholder="Default input" />
      </FormGroup>
      <FormGroup>
        <FormLabel>Example select</FormLabel>
        <FormControl variant="outlined" fullWidth>
          <Select>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Example multiple select</FormLabel>
        <FormControl variant="outlined" fullWidth>
          <Select multiple defaultValue={[]}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Example textarea</FormLabel>
        <OutlinedInput fullWidth multiline rows="4" />
      </FormGroup>
      <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button color="primary" variant="contained">
                submit
              </Button>
            </Box>
      </CardContent>
       </Grid>
        </Card>
      </Container>
    </>
  );
};

export default Addcluster;
