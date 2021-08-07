export function getTransplantsString(number: number): string {
  if (number === 0) {
    return '0 пересадок';
  } else if (number === 1) {
    return '1 пересадка';
  } else if (number < 5) {
    return number + ' пересадки';
  }
  return number + ' пересадок';
}
