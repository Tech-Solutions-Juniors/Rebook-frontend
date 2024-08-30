import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./shared/context/authContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
);
