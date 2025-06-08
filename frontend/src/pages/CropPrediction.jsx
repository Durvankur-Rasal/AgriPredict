import React, { useState } from 'react';
import { predictCrop } from '../services/api';

const CropPrediction = () => {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    pH: '',
    rainfall: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Clear error on input change
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '' && !isNaN(value));
  };

  const handlePredict = () => {
    setLoading(true);
    setError(null);
    predictCrop(formData)
      .then(res => setPrediction(res.data.crop))
      .catch(() => setError('Failed to predict crop. Please check your inputs and try again.'))
      .finally(() => setLoading(false));
  };

  const fieldLabels = {
    N: 'Nitrogen (N)',
    P: 'Phosphorus (P)',
    K: 'Potassium (K)',
    temperature: 'Temperature (°C)',
    humidity: 'Humidity (%)',
    pH: 'pH',
    rainfall: 'Rainfall (mm)',
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Crop Prediction
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
          {Object.keys(formData).map(field => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {fieldLabels[field]}
              </label>
              <input
                type="number"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                placeholder={`Enter ${fieldLabels[field]}`}
                required
                step={field === 'pH' || field === 'temperature' ? '0.01' : '0.1'}
                min="0"
              />
            </div>
          ))}
          <button
            onClick={handlePredict}
            className={`w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center ${
              !isFormValid() || loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isFormValid() || loading}
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
                Predicting...
              </>
            ) : (
              'Predict Crop'
            )}
          </button>
        </div>
        {prediction && (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recommended Crop
            </h2>
            <p className="text-lg text-green-600 font-medium capitalize">
              {prediction}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropPrediction;