import { useContext } from 'react';
import WeatherContext from '../context/weather-context';

type HourlyItemProps = {
  time?: string;
  type?: string;
  temperature?: string;
};

function HourlyItem({ time, type, temperature }: HourlyItemProps) {
  return (
    <div className="text-center font-semibold">
      <p>{time}</p>
      <p>{type}</p>
      <p>{temperature}&deg;</p>
    </div>
  );
}

export default function Hourly() {
  const { hourly } = useContext(WeatherContext);

  return (
    <section className="bg-sky-400 bg-opacity-15 py-3 px-4 rounded-2xl md:max-w-[44rem] mx-8 md:m-auto flex gap-8 overflow-x-auto">
      {hourly.map((h) => (
        <HourlyItem
          key={h.time?.toString()}
          time={h.time?.toLocaleTimeString()}
          type="..."
          temperature={h.temperature?.toFixed(0)}
        />
      ))}
    </section>
  );
}
