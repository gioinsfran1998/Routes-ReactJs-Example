import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Categories from "../Pages/Categories/Categories";
import PrivateRoute from "./PrivateRoute";

export default function CategoriesRouter() {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <div style={{ padding: "10px", background: "#535353" }}>
      <ul>
        <li>
          <Link to={`${url}`}> All</Link>
        </li>

        <li>
          <Link to={`${url}/terror`}>Terror</Link>
        </li>

        <li>
          <Link to={`${url}/action`}>Action</Link>
        </li>

        <li>
          <Link to={`${url}/anime`}>Anime</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/categories" component={Categories} />
        <PrivateRoute path="/categories/terror" component={TerrorRouter} />
        <Route
          exact
          path="/categories/action"
          component={() => <h1>Action</h1>}
        />
        <Route
          exact
          path="/categories/anime"
          component={() => <h1>Anime</h1>}
        />

        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );

  function TerrorRouter() {
    const { url } = useRouteMatch();
    console.log(url);

    return (
      <div>
        <ul>
          <li>
            <Link to="/categories/terror">All</Link>
          </li>

          <li>
            <Link to="/categories/terror/terror1">Terror 1</Link>
          </li>

          <li>
            <Link to="/categories/terror/terror2">Terror 2</Link>
          </li>

          <li>
            <Link to="/categories/terror/terror3">Terror 3</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={`${url}`}>
            <h1>Category Terror</h1>
          </Route>
          <Route path={`${url}/terror1`}>
            <h1>Terror1</h1>
          </Route>
          <Route ppath={`${url}/terror2`}>
            <h1>Terror2</h1>
          </Route>
          <Route path={`${url}/terror3`}>
            <h1>Terror3</h1>
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    );
  }
}
