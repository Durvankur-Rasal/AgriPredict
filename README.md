# 🌾 AgriPredict

AgriPredict is a full-stack web application designed to empower farmers and agriculture professionals with data-driven tools for smarter decision-making.

## 🚀 Features

- **User Authentication:** Register, login, and logout with secure credential storage.
- **Price Prediction:** Forecast future prices for selected commodities in chosen districts and markets using machine learning models.
- **Historical Data:** Analyze real market data trends with interactive charts.
- **Crop Recommendation:** Suggests the best crop to grow based on soil nutrients (N, P, K), temperature, humidity, pH, and rainfall.
- **Weather Forecast:** Get real-time weather updates for any location using OpenWeatherMap API.
- **Market Comparison:** Compare modal prices for a commodity across different markets in a district, visualized with charts.
- **Crop Calendar & Reminders:** View sowing/harvesting times for crops and set personal reminders for agricultural activities.

## 🛠 Tech Stack

- **Backend:** Python, FastAPI, SQLAlchemy, SQLite, scikit-learn, pandas, statsmodels
- **Frontend:** React, Vite, Tailwind CSS, Chart.js (react-chartjs-2), Axios
- **APIs:** OpenWeatherMap for weather data

## 📦 Project Structure

```text
backend/
├── main.py              # API server entrypoint
├── auth.py              # User authentication endpoints
├── db.py                # Database models and session
├── crop_predictor.py    # Crop ML model logic
├── predictor.py         # ARIMA model for price prediction
├── calendar_api.py      # Crop calendar & reminders endpoints
├── *.csv                # Datasets
├── *.pkl                # Trained ML models

frontend/
└── src/
    ├── pages/
    │   ├── Home.jsx
    │   ├── PricePrediction.jsx
    │   ├── HistoricalData.jsx
    │   ├── CropPrediction.jsx
    │   ├── MarketComparison.jsx
    │   ├── CropCalendar.jsx
    │   ├── Login.jsx
    │   └── Register.jsx
    ├── components/
    │   ├── MarketComparisonChart.jsx
    │   ├── CalendarView.jsx
    │   └── ReminderForm.jsx
    └── services/
        ├── api.js       # API integration
        ├── auth.js      # Auth API integration
        └── calendar.js  # Calendar/reminder API integration
```

## ⚙️ Getting Started

### 🔙 Backend Setup

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

### 💻 Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend runs at: http://localhost:5173
