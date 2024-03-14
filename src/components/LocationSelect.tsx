import { ChangeEvent, useContext } from 'react';
import WeatherContext from '../context/weather-context';
import locations from '../data/locations';

export default function LocationSelect() {
  const { changeLocation } = useContext(WeatherContext);

  function handleLocationChange(e: ChangeEvent<HTMLSelectElement>) {
    const chosenLocation = locations[+e.target.value];

    changeLocation(
      chosenLocation.latitude,
      chosenLocation.longitude,
      chosenLocation.name
    );
  }

  return (
    <select
      className="block ml-2 p-1 outline-none font text-black rounded-md font-semibold"
      onChange={handleLocationChange}
    >
      {locations.map((loc, i) => (
        <option key={loc.value} value={i}>
          {loc.name}
        </option>
      ))}
    </select>
  );
}
