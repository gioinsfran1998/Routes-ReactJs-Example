import React from "react";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ padding: "10px", background: "#424242" }}>
      <ul>
        <li>
          <Link to="/details">Details</Link>
        </li>
        <li>
          <Link to="/lists">Lists</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
