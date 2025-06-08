import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PricePrediction from './pages/PricePrediction';
import HistoricalData from './pages/HistoricalData';
import CropPrediction from './pages/CropPrediction';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price-prediction" element={<PricePrediction />} />
          <Route path="/historical-data" element={<HistoricalData />} />
          <Route path="/crop-prediction" element={<CropPrediction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;