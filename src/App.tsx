import { useContext, useMemo } from 'react';
import './App.css';
import Attribution from './components/Attribution';
import Header from './components/Header';
import Hourly from './components/Hourly';
import WeatherContext from './context/weather-context';

function App() {
  const { current } = useContext(WeatherContext);

  const backgroundClass = useMemo(() => {
    let bgClass = 'background-day';
    if (current?.is_day === 0) {
      bgClass = 'background-night';
    }
    return bgClass;
  }, [current]);

  return (
    <div className={`${backgroundClass} absolute inset-0 flex flex-col`}>
      <Header />
      <main className="flex-1">
        <Hourly />
      </main>
      <footer className="flex-grow-0">
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
