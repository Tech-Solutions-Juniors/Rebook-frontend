import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./shared/layout/header";
import "./shared/styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { main } from "./shared/themes/main";

function App() {
  return (
    <ThemeProvider theme={main}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
