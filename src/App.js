import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome.js";
import HomePage from "./components/HomePage.js";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="app">
      <Container fluid="md">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
