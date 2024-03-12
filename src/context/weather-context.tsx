import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import fetchWeather from '../http/fetch-weather';

interface WeatherContextValue {
  location: string | null;
  temperature: number | null;
  hourly: HourlyType[];
}

interface HourlyType {
  time?: Date;
  temperature?: number;
}

const WeatherContext = createContext<WeatherContextValue>({
  location: null,
  temperature: null,
  hourly: [],
});

export function WeatherContextProvider({ children }: PropsWithChildren) {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [hourly, setHourly] = useState<HourlyType[]>([]);

  useEffect(() => {
    let ignore = false;
    fetchWeather(54.3523, 18.6491).then((info) => {
      if (ignore) {
        return;
      }
      setTemperature(info.hourly.temperature2m[0]);

      const temps = info.hourly.temperature2m;
      const newHourly = info.hourly.time.map((e, i) => ({
        time: e,
        temperature: temps[i],
      }));
      setHourly(newHourly);
    });
    return () => {
      ignore = true;
    };
  }, []);

  const contextValue: WeatherContextValue = {
    location: 'Gdańsk',
    temperature,
    hourly,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
