import React, {useEffect,useState} from "react";
import { useLocation, Route, Switch, Redirect} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import NavbarDropdown from "components/Dropdowns/NavbarDropdown.js";
import Clusters from "views/admin/clusters";
import Addcluster from "views/admin/Addcluster";
import Dns from "@material-ui/icons/Dns";
import Add from "@material-ui/icons/Add";



var routes = [
  {
    path: "/cluster",
    name: "Clusters",
    icon: Dns,
    iconColor: "Error",
    component: Clusters,
    layout: "/dashboard",
  },
  {
    path: "/addcluster",
    name: "Add Cluster",
    icon: Add,
    iconColor: "Error",
    component: Addcluster,
    layout: "/dashboard",
  },
  {
    divider: true,
  },
  {
    title: "Add another sections",
  },
];

const componentStyles = (theme) => ({
  mainContent: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "250px",
      background:
      "transparent",
    },
  },
  bgDefault: {
    backgroundColor: theme.palette.dark.main,
  },
});


const useStyles = makeStyles(componentStyles);


const Admin = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const [redirect,setRedirect] = useState(false)
  const [email,setEmail] = useState('')

  
  useEffect((e) => {
    document.body.classList.add(classes.bgDefault);
    (
      
       
     async() => {
       
       const response = await fetch('http://localhost:8000/api/user', {
           headers: {'Content-Type': 'application/json'},
           credentials: 'include',

       });
         const content = await response.json();
         console.log(content.detail)
         if (content.detail === "Unauthenticated!"){
          setRedirect(true) 
          
         }
         else{
         setEmail(content.email)
          setRedirect(false)
         
         }
         
       
     }

       )();
  
 }  );


 if(redirect){
  return <Redirect to="/login" />;

 }

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
            path={prop.layout+prop.path}
            component={prop.component}
            key={key}
            name = {props.name}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      console.log(location.pathname)
      if (location.pathname.indexOf(routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
  };

  return (
<>
        <Sidebar
          routes={routes}
          dropdown={<NavbarDropdown name={email} />}
          name={email}
        />
        <Box position="relative" className={classes.mainContent}>
          <AdminNavbar brandText={getBrandText(location.pathname)} name={email} />
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/dashboard/cluster" />
          </Switch>
        </Box>
      </>
  );
};

export default Admin;
