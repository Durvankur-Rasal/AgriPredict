import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PricePrediction from './pages/PricePrediction';
import HistoricalData from './pages/HistoricalData';
import CropPrediction from './pages/CropPrediction';
import Weather from './pages/Weather';
import MarketComparison from './pages/MarketComparison';
import CropCalendar from './pages/CropCalendar';
import Login from './pages/Login';
import Register from './pages/Register';


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
          <Route path="/weather" element={<Weather />} />
          <Route path="/market-comparison" element={<MarketComparison />} />
          <Route path="/crop-calendar" element={<CropCalendar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;