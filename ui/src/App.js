import React from 'react'

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "assets/theme/theme.js";
import AuthLayout from "layouts/LoginAuth.js";
import RegisterAuth from "layouts/RegisterAuth.js"
import Admin from "layouts/Admin.js"
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

export default function app() {

    return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={(props) => <AuthLayout {...props} />} />
        <Route exact path="/register" render={(props) => <RegisterAuth {...props} />} />
        <Route path="/dashboard" render={(props) => <Admin {...props} name="abc" />}/>
        <Redirect from="*" to="/login" />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
    )
}
