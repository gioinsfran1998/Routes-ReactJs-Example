import { Redirect, Route, useLocation } from "react-router-dom";
import useAuth from "../Auth/useAuth";

// Configurar en las props condicional si no existe component o si existe children renderizar uno o el otro
export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  const location = useLocation();

  return (
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
}
