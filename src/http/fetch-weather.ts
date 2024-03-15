export interface WeatherData {
  latitude: number;
  longitude: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentWeatherUnits;
  current: CurrentWeatherData;
  hourly_units: HourlyWeatherUnits;
  hourly: HourlyWeatherData;
}

export interface CurrentWeatherData {
  time: string;
  interval: number;
  temperature_2m: number;
  apparent_temperature: number;
  is_day: number;
  weather_code: number;
}

export interface CurrentWeatherUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  apparent_temperature: string;
  is_day: string;
  weather_code?: string;
}

export interface HourlyWeatherData {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  weather_code: number[];
}

export interface HourlyWeatherUnits {
  time: string;
  temperature_2m: string;
  apparent_temperature: string;
  weather_code: string;
}

export default async function fetchWeather(
  latitude: number,
  longitude: number
) {
  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.append('latitude', JSON.stringify(latitude));
  url.searchParams.append('longitude', JSON.stringify(longitude));
  url.searchParams.append(
    'current',
    'temperature_2m,apparent_temperature,is_day,weather_code'
  );
  url.searchParams.append(
    'hourly',
    'temperature_2m,apparent_temperature,weather_code'
  );
  url.searchParams.append('timezone', 'auto');

  const res = await fetch(url, {});
  const data: WeatherData = await res.json();

  return data;
}
