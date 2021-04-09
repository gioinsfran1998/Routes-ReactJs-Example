import { Redirect, Route, useLocation } from "react-router-dom";
import useAuth from "../Auth/useAuth";

// const user = null;
// const user = { id: 1, username: "gio777" };

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
const location = useLocation();

  return (
    <Route {...rest}>
      {auth.isLogged() ? <Component /> : <Redirect to={{pathname: "/login", state: {from: location} }}/>}
    </Route>
  );
}
