import './App.css';
import Attribution from './components/Attribution';
import Header from './components/Header';
import Hourly from './components/Hourly';
import { WeatherContextProvider } from './context/weather-context';

function App() {
  return (
    <WeatherContextProvider>
      <div className="absolute inset-0 flex flex-col">
        <Header />
        <main className="flex-1">
          <Hourly />
        </main>
        <footer className="flex-grow-0">
          <Attribution />
        </footer>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
