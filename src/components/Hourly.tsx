import { useContext, useMemo } from 'react';
import WeatherContext from '../context/weather-context';

import styles from './Hourly.module.css';
import { toShortTime } from '../utils/date-utils';
import Skeleton from './UI/Skeleton';

import sunSvg from '../assets/sun.svg';
import partialCloudySvg from '../assets/partial.svg';
import overcastSvg from '../assets/overcast.svg';
import rainSvg from '../assets/rain.svg';

type HourlyItemProps = {
  time?: string;
  type?: number;
  temperature?: string;
};

function HourlyItem({ time, type, temperature }: HourlyItemProps) {
  let svg = overcastSvg;
  if (type === 0) {
    svg = sunSvg;
  } else if (type === 1 || type === 2) {
    svg = partialCloudySvg;
  } else if (type! >= 51) {
    svg = rainSvg;
  }

  return (
    <div className="text-center font-semibold">
      <p>{time}</p>
      <p>
        <img src={svg} className="size-6 mx-auto my-1" />
      </p>
      <p>{temperature}&deg;</p>
    </div>
  );
}

export default function Hourly() {
  const { hourly: hourlyState, current, loading } = useContext(WeatherContext);

  const hourly = useMemo(() => {
    const nowId = hourlyState?.findIndex((h) => {
      const currTime = current?.time ?? new Date();
      return h.time?.getHours() === new Date(currTime).getHours();
    });

    if (nowId === undefined || nowId === -1) {
      return;
    }

    return hourlyState?.slice(nowId, nowId + 24).map((h, i) => ({
      id: h.time?.toLocaleString(),
      time: i === 0 ? 'Now' : toShortTime(h.time!),
      temperature: h.temperature,
      apparent: h.apparent,
      weatherCode: h.weather_code,
    }));
  }, [hourlyState, current]);

  return (
    <section
      id={styles.hourlySection}
      className="bg-sky-400 bg-opacity-15 px-3 py-2 rounded-2xl md:max-w-[44rem] mx-8 md:m-auto mb-2"
    >
      {loading && (
        <>
          <Skeleton className="w-32 mb-1 bg-opacity-30" />
          <div className="flex gap-4">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-[4.9rem] bg-opacity-30" />
            ))}
          </div>
        </>
      )}
      {!loading && (
        <>
          <h2 className="text-stone-100 text-opacity-50 uppercase text-sm tracking-wide leading-none mb-1">
            Hourly forecast
          </h2>
          <div className="flex gap-4 overflow-x-auto">
            {hourly?.map((h) => (
              <HourlyItem
                key={h.id}
                time={h.time}
                type={h.weatherCode}
                temperature={h.temperature?.toFixed(0)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
