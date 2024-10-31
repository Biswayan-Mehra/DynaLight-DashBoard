import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MapPage from "./MapPage";
import StockChart from './StockChart';
import 'typeface-roboto';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/stockchart" element={<StockChart />} />
      </Routes>
    </Router>
  );
}
