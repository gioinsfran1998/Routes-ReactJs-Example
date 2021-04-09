import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Auth/useAuth";

const AppNavbar = () => {
  const auth = useAuth();
  return (
    <div style={{ padding: "50px", background: "#f9f8" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Categories</Link>
        </li>
        {!auth.isLogged() && (
          <>
        <li>
              <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        </>
          )}

        {auth.isLogged() && (
          <>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>

        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
        </>
        )}
      </ul>
    </div>
  );
};

export default AppNavbar;
