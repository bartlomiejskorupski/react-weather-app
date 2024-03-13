import { useContext } from 'react';
import WeatherContext from '../context/weather-context';

import styles from './Hourly.module.css';
import { toShortTime } from '../utils/date-utils';

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
  const { hourly: hourlyState } = useContext(WeatherContext);

  const hourly = hourlyState?.slice(0, 10);

  return (
    <section
      id={styles.hourlySection}
      className="bg-sky-400 bg-opacity-15 px-3 py-2 rounded-2xl md:max-w-[44rem] mx-8 md:m-auto"
    >
      <div className="flex gap-4 overflow-x-auto">
        {hourly?.map((h) => (
          <HourlyItem
            key={h.time?.toString()}
            time={toShortTime(h.time!)}
            type="..."
            temperature={h.temperature?.toFixed(0)}
          />
        ))}
      </div>
    </section>
  );
}
