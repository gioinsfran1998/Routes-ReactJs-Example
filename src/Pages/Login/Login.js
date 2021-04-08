import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../Auth/useAuth";

const Login = () => {
  const history = useHistory();
  const auth = useAuth();
  const handleLogin = () => {
    auth.login();
    history.push("/dashboard");
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Signin</button>
    </div>
  );
};

export default Login;
