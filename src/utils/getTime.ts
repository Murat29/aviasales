export function getTime(duration: number): string {
  if (duration < 60) return duration + 'м';
  if (duration < 1440) {
    return Math.floor(duration / 60) + 'ч ' + (duration % 60) + 'м';
  }
  return (
    Math.floor(duration / 1440) +
    'д ' +
    Math.floor((duration % 1440) / 60) +
    'ч ' +
    (duration % 60) +
    'м'
  );
}
