import React, { useState } from 'react';
import { getCommodities, getDistricts, getMarketComparison } from '../services/api';
import MarketComparisonChart from '../components/MarketComparisonChart';

const MarketComparison = () => {
  const [commodities, setCommodities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCommodity, setSelectedCommodity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [comparisonData, setComparisonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    getCommodities()
      .then(res => setCommodities(res.data.commodities))
      .catch(() => setError('Failed to fetch commodities'));
  }, []);

  React.useEffect(() => {
    if (selectedCommodity) {
      getDistricts(selectedCommodity)
        .then(res => setDistricts(res.data.districts))
        .catch(() => setError('Failed to fetch districts'));
    } else {
      setDistricts([]);
    }
    setSelectedDistrict('');
    setComparisonData([]);
  }, [selectedCommodity]);

  const handleCompare = () => {
    setLoading(true);
    setError('');
    getMarketComparison(selectedCommodity, selectedDistrict)
      .then(res => setComparisonData(res.data))
      .catch(() => setError('Failed to fetch comparison data'))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Market Comparison Tool</h1>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">Commodity</label>
            <select
              className="w-full border p-2 rounded"
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
            <label className="block mb-1 font-medium">District</label>
            <select
              className="w-full border p-2 rounded"
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
        </div>
        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition mb-6"
          onClick={handleCompare}
          disabled={!selectedCommodity || !selectedDistrict || loading}
        >
          {loading ? 'Comparing...' : 'Compare Markets'}
        </button>
        {comparisonData.length > 0 && (
          <MarketComparisonChart data={comparisonData} />
        )}
      </div>
    </div>
  );
};

export default MarketComparison;