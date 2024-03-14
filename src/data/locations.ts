type AvailableLocation = 'gdansk' | 'warsaw' | 'berlin' | 'london' | 'prague';

type LocationType = {
  value: AvailableLocation;
  name: string;
  latitude: number;
  longitude: number;
};

const locations: LocationType[] = [
  {
    value: 'gdansk',
    name: 'Gdańsk',
    latitude: 54.372158,
    longitude: 18.638306,
  },
  {
    value: 'warsaw',
    name: 'Warsaw',
    latitude: 52.237049,
    longitude: 21.017532,
  },
  {
    value: 'berlin',
    name: 'Berlin',
    latitude: 52.520008,
    longitude: 13.404954,
  },
  { value: 'london', name: 'London', latitude: 51.509865, longitude: 0.118092 },
  { value: 'prague', name: 'Prague', latitude: 50.073658, longitude: 14.41854 },
];

export default locations;
