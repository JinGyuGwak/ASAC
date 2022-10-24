import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";
import PageC from "./PageC";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="b" element={<PageB />} />
        <Route path="c" element={<PageC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
