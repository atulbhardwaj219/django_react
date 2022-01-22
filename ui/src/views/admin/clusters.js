import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// core components

const componentStyles = (theme) => ({
  cardRoot: {
  },
  cardHeader: {
  },
  cardActionsRoot: {
    paddingBottom: "1.5rem!important",
    paddingTop: "1.5rem!important",
    borderTop: "0!important",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "479px",
    },
  },
  tableRoot: {
    marginBottom: "0!important",
  },
  tableCellRoot: {
    verticalAlign: "middle",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    borderTop: "0",
  },
  tableCellRootHead: {
    backgroundColor: theme.palette.gray[100],
    color: theme.palette.gray[600],
  },
  tableCellRootBodyHead: {
    textTransform: "unset!important",
    fontSize: ".8125rem",
  },
  linearProgressRoot: {
    height: "3px!important",
    width: "120px!important",
    margin: "0!important",
  },
  verticalAlignMiddle: {
    verticalAlign: "middle",
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

const Clusters = (props) => {
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
        classes={{ root: classes.containerRoot }}
      >
         <Container
          maxWidth={false}
          component={Box}

        >
          <div>
            <Grid container>
              <Grid item xl={3} lg={6} xs={12}>
              <FormGroup>
              <FormLabel>Select Clusters</FormLabel>
             <FormControl variant="outlined" fullWidth>
             <Select>
            <MenuItem value={1}>Chick FilA</MenuItem>
            <MenuItem value={2}>Mondselez</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>

              </Grid>
            
            </Grid>
          </div>
        </Container>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Servers"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
          ></CardHeader>
          <TableContainer>
            <Box
              component={Table}
              alignItems="center"
              marginBottom="0!important"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    {props.name}
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >Connect</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          192.168.3.54
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Box display="flex" alignItems="flex-start">
                        <Button color="primary" variant="contained">
                             Connect
                         </Button>
                      </Box>
                    </Box>
                  </TableCell>

                 

                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          192.168.3.54
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Box display="flex" alignItems="flex-start">
                        <Button color="primary" variant="contained">
                             Connect
                         </Button>
                      </Box>
                    </Box>
                  </TableCell>

                 

                </TableRow>
                
                <TableRow>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          193.344.35.34
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Box display="flex" alignItems="flex-start">
                        <Button color="primary" variant="contained">
                             Connect
                         </Button>
                      </Box>
                    </Box>
                  </TableCell>

                </TableRow>
              </TableBody>
            </Box>
          </TableContainer>
        </Card>
      </Container>
    </>
  );
};

export default Clusters;
