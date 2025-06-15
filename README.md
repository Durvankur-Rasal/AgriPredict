<<<<<<< HEAD
AgriPredict
AgriPredict is a web application designed to assist farmers and agricultural enthusiasts by providing tools for price prediction, historical price data analysis, and crop prediction based on environmental factors. The app leverages machine learning models in the backend and a modern React-based frontend for a seamless user experience.
Features

Price Prediction: Forecast commodity prices based on market, district, and commodity selection.
Historical Data: View historical price trends for selected commodities in specific markets.
Crop Prediction: Recommend the best crop to grow based on soil and environmental factors like Nitrogen (N), Phosphorus (P), Potassium (K), temperature, humidity, pH, and rainfall.

Project Structure
The project is divided into two main parts: Backend (Python-based) and Frontend (React-based).
Backend
The backend handles data processing, machine learning predictions, and API services.
Crop_recommendation.csv  # Dataset for crop prediction
arima.ipynb             # Jupyter notebook for ARIMA model (price prediction)
crop_predictor.py       # Script for crop prediction model
historical_prices.csv   # Dataset for historical price data
main.ipynb              # Main notebook for experimentation
main.py                 # Main backend script for API
model.pkl               # Trained machine learning model (pickle file)
predictor.py            # Script for price prediction logic
requirements.txt        # Python dependencies

Frontend
The frontend is a React application built with Vite, using Tailwind CSS for styling.
public/                     # Static assets
src/                        # React source code
  Home.jsx                 # Home page component
  PricePrediction.jsx      # Price prediction component
  HistoricalData.jsx       # Historical data component
  CropPrediction.jsx       # Crop prediction component
  services/api.js          # API service for backend communication
.gitignore                 # Git ignore file
README.md                  # Project README (this file)
eslint.config.js           # ESLint configuration
index.html                 # Main HTML file
package-lock.json          # NPM lock file
package.json               # NPM dependencies
vite.config.js             # Vite configuration

Prerequisites

Python 3.8+ (for backend)
Node.js 16+ (for frontend)
npm or yarn (for frontend package management)

Setup Instructions
Backend Setup

Clone the Repository:
git clone <repository-url>
cd <repository-name>


Navigate to Backend Directory (if separate):
cd backend


Create a Virtual Environment:
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate


Install Dependencies:
pip install -r requirements.txt


Run the Backend Server:
python main.py

The backend API will typically run on http://localhost:5000 (adjust based on your main.py configuration).


Frontend Setup

Navigate to Frontend Directory (if separate):
cd frontend


Install Dependencies:
npm install


Run the Development Server:
npm run dev

The frontend will typically run on http://localhost:5173 (default Vite port).


Usage

Access the App:Open your browser and navigate to http://localhost:5173.

Home Page:

The home page provides links to three main features: Price Prediction, Historical Data, and Crop Prediction.


Price Prediction:

Select a commodity, district, and market to predict future prices.
View the predicted minimum, maximum, and modal prices in a formatted card.


Historical Data:

Choose a commodity, district, and market to view historical price trends.
Data is displayed in a table with formatted dates and prices.


Crop Prediction:

Input environmental factors (N, P, K, temperature, humidity, pH, rainfall).
Receive a recommended crop based on the inputs.



API Endpoints
The backend provides the following API endpoints (adjust based on your main.py implementation):

GET /commodities: Fetch available commodities.
GET /districts: Fetch districts for a selected commodity.
GET /markets: Fetch markets for a selected commodity and district.
POST /predict-price: Predict commodity prices.
GET /historical-data: Fetch historical price data.
POST /predict-crop: Predict the best crop based on environmental factors.

Dependencies
Backend
Listed in requirements.txt. Key dependencies include:

Flask (for API)
pandas (for data handling)
scikit-learn (for machine learning)
statsmodels (for ARIMA model)

Frontend
Listed in package.json. Key dependencies include:

React
React Router DOM
Tailwind CSS
Vite

Contributing

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m "Add feature").
Push to your branch (git push origin feature-branch).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details (if applicable).
Contact
For questions or suggestions, please reach out at [your-email@example.com].

Last updated: June 08, 2025
=======
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
>>>>>>> 67e07a8201ae6fabb83b6f4b854e5ca70964c97b
