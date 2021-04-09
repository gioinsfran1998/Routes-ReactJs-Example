import React from "react";
import Home from "../Pages/Home/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "../Pages/Users/Users";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import Categories from "../Pages/Categories/Categories";
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
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/payment" component={Payment} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default routes;
