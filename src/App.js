import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar.component";
import Unspoken from "./components/Unspoken.component";
import Submit from "./components/Submit.component";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Unspoken />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
