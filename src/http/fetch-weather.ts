import { fetchWeatherApi } from 'openmeteo';

interface WeatherInfo {
  current: number;
  hourly: {
    time: Date[];
    temperature2m: number[];
  };
}

export default async function fetchWeather(
  latitude: number,
  longitude: number
): Promise<WeatherInfo> {
  const res = await fetchWeatherApi('https://api.open-meteo.com/v1/forecast', {
    latitude,
    longitude,
    hourly: 'temperature_2m',
    current: 'temperature_2m',
    timezone: 'auto',
  });
  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = res[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const hourly = response.hourly()!;
  const current = response.current()!.variables(0)?.value();

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: current!,
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: Array.from(hourly.variables(0)!.valuesArray()!),
    },
  };

  return weatherData;
}
