import { Redirect, Route } from "react-router-dom";
import useAuth from "../Auth/useAuth";

// const user = null;
// const user = { id: 1, username: "gio777" };

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.isLogged() ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}
