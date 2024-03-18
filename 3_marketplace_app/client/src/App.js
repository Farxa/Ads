import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ads from "./components/Ads";
import Details from "./components/Details";

import "./App.css";
import { AdsProvider } from "./store/Store";

const App = () => {
  return (
    <AdsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ads />} />{" "}
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </AdsProvider>
  );
};

export default App;
