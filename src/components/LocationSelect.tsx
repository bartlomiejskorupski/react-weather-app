import { ChangeEvent } from 'react';

type AvailableLocation = 'gdansk' | 'warsaw' | 'berlin' | 'london' | 'prague';

type LocationType = {
  value: AvailableLocation;
  name: string;
};

export default function LocationSelect() {
  const locations: LocationType[] = [
    { value: 'gdansk', name: 'Gdańsk' },
    { value: 'warsaw', name: 'Warsaw' },
    { value: 'berlin', name: 'Berlin' },
    { value: 'london', name: 'London' },
    { value: 'prague', name: 'Prague' },
  ];

  function handleLocationChange(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
  }

  return (
    <select
      className="outline-none font text-black rounded-sm"
      onChange={handleLocationChange}
    >
      {locations.map((loc) => (
        <option key={loc.value} value={loc.value}>
          {loc.name}
        </option>
      ))}
    </select>
  );
}
