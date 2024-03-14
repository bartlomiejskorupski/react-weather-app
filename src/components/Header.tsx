import { useContext } from 'react';
import WeatherContext from '../context/weather-context';
import LoadingSpinner from './UI/LoadingSpinner';
import LocationSelect from './LocationSelect';

export default function Header() {
  const { location, current, loading } = useContext(WeatherContext);

  return (
    <header className="text-white text-center pt-16 mb-16">
      <LocationSelect />
      <h1 className="font-semibold drop-shadow-md">{location}</h1>
      {loading && <LoadingSpinner className="size-32 rotate-90" />}
      {!loading && (
        <p className="text-9xl font-light drop-shadow-md pl-12">
          {current?.temperature_2m?.toFixed(0)}&deg;
        </p>
      )}
    </header>
  );
}
