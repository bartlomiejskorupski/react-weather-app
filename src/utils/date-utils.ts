export function toShortTime(dateObj: Date | string) {
  const date = new Date(dateObj);
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}
