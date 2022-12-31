import { Button } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
