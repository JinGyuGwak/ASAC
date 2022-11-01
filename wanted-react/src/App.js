import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainFirst from "./components/MainFirst";
import WantedDevelop from "./components/WantedDevelop";
import HuntingDetail from "./components/HuntingDetail";
import { Fragment } from "react";
import ScrollToTop from "./ScrollToTop";
import SearchLightBox from "./components/Module/SearchModal/SearchLightBox";
function App() {
  return (
    <>
      <SearchLightBox />
      {/* <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainFirst />} />
          <Route path="/1" element={<WantedDevelop />} />
          <Route path="/2" element={<HuntingDetail />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
