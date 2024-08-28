import "./shared/styles/global.css";
import "react-phone-number-input/style.css";

import { ThemeProvider } from "styled-components";
import Header from "./shared/layout/header";
import { Routes, Route, Navigate } from "react-router-dom";
import { main } from "./shared/themes/main";
import publicRoutes from "@base/routes/public";
import privateRoutes from "@base/routes/private";
import { useAuthContext } from "./shared/hook/useAuthContext";
import { useControllLocation } from "./shared/hook/useControllLocation";
import { Optional } from "./shared/components/optional/Optional";

function App() {
  const { token } = useAuthContext();
  const { lastUserLocation } = useControllLocation({ privateRoutes });

  return (
    <ThemeProvider theme={main}>
      <Optional show={!!token} component={<Header />} />
      <Routes>
        {publicRoutes.map((e) => (
          <Route
            path={e.route}
            element={!token ? e.element : <Navigate to={lastUserLocation} />}
            key={e.route}
          />
        ))}
        {privateRoutes.map((e) => (
          <Route
            path={e.route}
            element={token ? e.element : <Navigate to="/signin" />}
            key={e.route}
          />
        ))}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
