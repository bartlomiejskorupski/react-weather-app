function HourlyItem() {
  return (
    <div className="text-center font-semibold">
      <p>Now</p>
      <p>*</p>
      <p>30&deg;</p>
    </div>
  );
}

export default function Hourly() {
  return (
    <section className="bg-sky-400 bg-opacity-15 py-3 px-4 rounded-2xl md:max-w-[44rem] mx-8 md:m-auto flex gap-8">
      <HourlyItem />
      <HourlyItem />
      <HourlyItem />
    </section>
  );
}
