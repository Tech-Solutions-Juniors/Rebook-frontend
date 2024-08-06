import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./shared/styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
