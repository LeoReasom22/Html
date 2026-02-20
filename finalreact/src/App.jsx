import React from "react";
import Card from "./components/cards.jsx";
import Api from "./services/api.jsx";
import Detail from "./components/detailpage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Api />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
