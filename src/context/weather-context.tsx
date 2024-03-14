import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import fetchWeather, {
  CurrentWeatherData,
  WeatherData,
} from '../http/fetch-weather';

interface WeatherContextValue {
  location: string | null;
  current: CurrentWeatherData | null;
  hourly: HourlyType[] | null;
  loading: boolean;
  changeLocation: (lat: number, lng: number, name: string) => void;
}

interface HourlyType {
  time?: Date;
  temperature?: number;
}

const WeatherContext = createContext<WeatherContextValue>({
  location: null,
  current: null,
  hourly: [],
  loading: true,
  changeLocation: () => {},
});

export function WeatherContextProvider({ children }: PropsWithChildren) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({
    name: 'Gdańsk',
    latitude: 54.3523,
    longitude: 18.6491,
  });

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetchWeather(location.latitude, location.longitude).then((data) => {
      if (ignore) {
        return;
      }

      setWeatherData(data);
      setLoading(false);
    });

    return () => {
      ignore = true;
      setLoading(false);
    };
  }, [location]);

  const hourly = useMemo(() => {
    const temps = weatherData?.hourly.temperature_2m;
    return weatherData?.hourly.time.map((e, i) => ({
      time: new Date(e),
      temperature: temps?.[i],
    }));
  }, [weatherData]);

  const handleLocationChange = useCallback(
    (latitude: number, longitude: number, name: string) => {
      setLocation({ name, latitude, longitude });
    },
    []
  );

  const contextValue: WeatherContextValue = {
    location: location.name,
    current: weatherData?.current ?? null,
    hourly: hourly ?? null,
    loading,
    changeLocation: handleLocationChange,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
