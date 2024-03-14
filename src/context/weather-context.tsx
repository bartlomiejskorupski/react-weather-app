import {
  PropsWithChildren,
  createContext,
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
});

export function WeatherContextProvider({ children }: PropsWithChildren) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetchWeather(54.3523, 18.6491).then((data) => {
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
  }, []);

  const hourly = useMemo(() => {
    const temps = weatherData?.hourly.temperature_2m;
    return weatherData?.hourly.time.map((e, i) => ({
      time: new Date(e),
      temperature: temps?.[i],
    }));
  }, [weatherData]);

  const contextValue: WeatherContextValue = {
    location: 'Gdańsk',
    current: weatherData?.current ?? null,
    hourly: hourly ?? null,
    loading: true,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
