import React, { useState, useEffect } from 'react';
import { getCommodities, getDistricts, getMarkets, getHistoricalData } from '../services/api';

const HistoricalData = () => {
  const [commodities, setCommodities] = useState([]);
  const [selectedCommodity, setSelectedCommodity] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [markets, setMarkets] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState('');
  const [history, setHistory] = useState(null);
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
      setHistory(null);
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
      setHistory(null);
      getMarkets(selectedCommodity, selectedDistrict)
        .then(res => setMarkets(res.data.markets))
        .catch(() => setError('Failed to fetch markets'))
        .finally(() => setLoading(false));
    }
  }, [selectedCommodity, selectedDistrict]);

  const handleFetch = () => {
    setLoading(true);
    setError(null);
    getHistoricalData(selectedCommodity, selectedDistrict, selectedMarket)
      .then(res => setHistory(res.data))
      .catch(() => setError('Failed to fetch historical data'))
      .finally(() => setLoading(false));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Historical Price Data
        </h1>
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </div>
        )}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Commodity
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={selectedCommodity}
              onChange={e => setSelectedCommodity(e.target.value)}
            >
              <option value="">Select Commodity</option>
              {commodities.map(comm => (
                <option key={comm} value={comm}>
                  {comm}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={selectedDistrict}
              onChange={e => setSelectedDistrict(e.target.value)}
              disabled={!selectedCommodity}
            >
              <option value="">Select District</option>
              {districts.map(dist => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Market
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={selectedMarket}
              onChange={e => setSelectedMarket(e.target.value)}
              disabled={!selectedDistrict}
            >
              <option value="">Select Market</option>
              {markets.map(market => (
                <option key={market} value={market}>
                  {market}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleFetch}
            className={`w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center ${
              !selectedMarket || loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!selectedMarket || loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Fetching...
              </>
            ) : (
              'Fetch Historical Data'
            )}
          </button>
        </div>
        {history && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Historical Data
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Min Price</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Max Price</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Modal Price</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((entry, index) => (
                    <tr
                      key={entry['Price Date']}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-4 py-3 text-sm text-gray-600">{formatDate(entry['Price Date'])}</td>
                      <td className="px-4 py-3 text-sm text-right text-green-600">{formatPrice(entry['Min Price (Rs./Quintal)'])}</td>
                      <td className="px-4 py-3 text-sm text-right text-green-600">{formatPrice(entry['Max Price (Rs./Quintal)'])}</td>
                      <td className="px-4 py-3 text-sm text-right text-green-600">{formatPrice(entry['Modal Price (Rs./Quintal)'])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoricalData;