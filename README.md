🌾 AgriPredict
AgriPredict is a web application built to help farmers and agriculture enthusiasts by providing tools for:

📈 Commodity Price Prediction

📊 Historical Price Trend Analysis

🌱 Crop Recommendation based on soil and environmental parameters

The app combines a Python (FastAPI) backend with a React + Vite frontend styled using Tailwind CSS.

🚀 Features
Price Prediction: Forecast future prices for selected commodities in chosen districts and markets.

Historical Data: Analyze trends using real market data.

Crop Recommendation: Suggests the best crop to grow based on N, P, K, temperature, humidity, pH, and rainfall.

🛠 Tech Stack
Backend: Python, FastAPI/Flask, scikit-learn, pandas, statsmodels

Frontend: React, Vite, Tailwind CSS

## 📦 Project Structure

```text
backend/
├── main.py              # API server
├── crop_predictor.py    # Crop ML model logic
├── predictor.py         # ARIMA model for price prediction
├── *.csv                # Datasets
├── *.pkl                # Trained ML models

frontend/
└── src/
    ├── Home.jsx
    ├── PricePrediction.jsx
    ├── HistoricalData.jsx
    ├── CropPrediction.jsx
    └── services/
        └── api.js       # API integration
```

⚙️ Getting Started
🔙 Backend Setup

```
# Clone the repository
git clone <repository-url>
cd <repository-name>/backend

# Create and activate virtual environment
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the backend server
uvicorn main:app --reload

```
Backend runs at: http://localhost:5000

💻 Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend runs at: http://localhost:5173
