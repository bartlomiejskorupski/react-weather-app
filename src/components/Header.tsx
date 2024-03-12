import { useContext } from 'react';
import WeatherContext from '../context/weather-context';

export default function Header() {
  const { location, temperature } = useContext(WeatherContext);

  return (
    <header className="text-white text-center pt-16 mb-16">
      <h1 className="font-semibold drop-shadow-md">{location}</h1>
      <p className="text-9xl font-light drop-shadow-md pl-12">
        {temperature?.toFixed(0)}&deg;
      </p>
    </header>
  );
}
