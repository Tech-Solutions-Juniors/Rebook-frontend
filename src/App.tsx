import "./shared/styles/global.css";
import "react-phone-number-input/style.css";

import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./shared/layout/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { main } from "./shared/themes/main";
import Register from "./pages/register";
import Footer from "./shared/layout/footer/footer";

function App() {
  return (
    <ThemeProvider theme={main}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
