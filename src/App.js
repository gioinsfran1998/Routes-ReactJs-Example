import Routes from "../src/Routers/index";
import AuthProvider from "./Auth/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
