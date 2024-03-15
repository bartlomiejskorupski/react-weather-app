import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { WeatherContextProvider } from './context/weather-context.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>
);
