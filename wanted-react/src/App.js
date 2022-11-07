import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainFirst from "../src/components/Page/MainFirst";
import WantedDevelop from "../src/components/Page/WantedDevelop";
import DevelopeSearch from "../src/components/Page/DevelopeSearch";
import HuntingDetail from "../src/components/Page/HuntingDetail";
import { Fragment } from "react";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainFirst />} />
          <Route path="/1" element={<WantedDevelop />} />
          <Route path="/2" element={<HuntingDetail />} />
          <Route path="/3/:username" element={<DevelopeSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
