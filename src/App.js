import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./code/home/Home";
import Croquis from "./code/croquis/Croquis";
import Keywords from "./code/keywords/Keywords";
import Pallete from "./code/pallete/Pallete";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/croquis" element={<Croquis />} />
            <Route path="/keywords" element={<Keywords />} />
            <Route path="/pallete" element={<Pallete />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;