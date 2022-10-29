import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainFirst from "./components/MainFirst";
import WantedDevelop from "./components/WantedDevelop";
import HuntingDetail from "./components/HuntingDetail";
import { Fragment } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainFirst />} />
          <Route path="/1" element={<WantedDevelop />} />
          <Route path="/2" element={<HuntingDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
