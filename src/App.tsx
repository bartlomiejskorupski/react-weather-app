import './App.css';
import Header from './components/Header';
import Hourly from './components/Hourly';
import { WeatherContextProvider } from './context/weather-context';

function App() {
  return (
    <WeatherContextProvider>
      <Header />
      <Hourly />
    </WeatherContextProvider>
  );
}

export default App;
