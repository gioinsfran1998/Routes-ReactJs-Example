import React from "react";
import Home from "../Pages/Home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Users from "../Pages/Users/Users";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import CategoriesRouter from "./CategoriesRouter";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Payment from "../Pages/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const routes = () => {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />

        <Route exact path="/about/:params" component={About} />

        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />

        <Route path="/categories" component={CategoriesRouter} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/payment" component={Payment} />

        <Route path="/404" component={NotFound} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
};

export default routes;
