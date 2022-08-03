import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VxTelCalculateCall from "./pages/vxTelCalculateCall";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<VxTelCalculateCall />} />
      </Routes>
    </Router>
  );
}

export default App;
