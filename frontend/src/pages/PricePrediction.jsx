import React, { useState, useEffect } from 'react';
import { getCommodities, getDistricts, getMarkets, predictPrices } from '../services/api';

const PricePrediction = () => {
  const [commodities, setCommodities] = useState([]);
  const [selectedCommodity, setSelectedCommodity] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [markets, setMarkets] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCommodities()
      .then(res => setCommodities(res.data.commodities))
      .catch(() => setError('Failed to fetch commodities'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selectedCommodity) {
      setLoading(true);
      setDistricts([]);
      setSelectedDistrict('');
      setMarkets([]);
      setSelectedMarket('');
      getDistricts(selectedCommodity)
        .then(res => setDistricts(res.data.districts))
        .catch(() => setError('Failed to fetch districts'))
        .finally(() => setLoading(false));
    }
  }, [selectedCommodity]);

  useEffect(() => {
    if (selectedCommodity && selectedDistrict) {
      setLoading(true);
      setMarkets([]);
      setSelectedMarket('');
      getMarkets(selectedCommodity, selectedDistrict)
        .then(res => setMarkets(res.data.markets))
        .catch(() => setError('Failed to fetch markets'))
        .finally(() => setLoading(false));
    }
  }, [selectedCommodity, selectedDistrict]);

  const handlePredict = () => {
    setLoading(true);
    setError(null);
    const data = { commodity: selectedCommodity, district: selectedDistrict, market: selectedMarket };
    predictPrices(data)
      .then(res => setPrediction(res.data))
      .catch(() => setError('Failed to predict prices. Please try again.'))
      .finally(() => setLoading(false));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Price Prediction</h1>
        
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <p>{error}</p>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Commodity</label>
            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={selectedCommodity}
              onChange={e => setSelectedCommodity(e.target.value)}
            >
              <option value="">Select Commodity</option>
              {commodities.map(comm => (
                <option key={comm} value={comm}>{comm}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={selectedDistrict}
              onChange={e => setSelectedDistrict(e.target.value)}
              disabled={!selectedCommodity}
            >
              <option value="">Select District</option>
              {districts.map(dist => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Market</label>
            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={selectedMarket}
              onChange={e => setSelectedMarket(e.target.value)}
              disabled={!selectedDistrict}
            >
              <option value="">Select Market</option>
              {markets.map(market => (
                <option key={market} value={market}>{market}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handlePredict}
            className={`w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center ${
              (!selectedMarket || loading) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!selectedMarket || loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Predicting...
              </>
            ) : (
              'Predict Price'
            )}
          </button>

          {prediction && (
            <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Prediction Results</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Minimum Price:</span>
                  <span className="text-green-600 font-semibold">{formatPrice(prediction.min_price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Maximum Price:</span>
                  <span className="text-green-600 font-semibold">{formatPrice(prediction.max_price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Modal Price:</span>
                  <span className="text-green-600 font-semibold">{formatPrice(prediction.modal_price)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricePrediction;