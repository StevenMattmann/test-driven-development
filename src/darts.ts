export function calcPoints(input: string): number {
  if (!input.trim()) return 0;

  const parts = input.trim().split(' ');

  if (parts.length % 2 !== 0) {
    throw new Error('Invalid input format');
  }

  let total = 0;

  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parseInt(parts[i]);
    const sector = parseInt(parts[i + 1]);

    if (isNaN(multiplier) || ![0, 1, 2, 3].includes(multiplier)) {
      throw new Error('Invalid ring multiplier');
    }

    if (isNaN(sector) || ![0, 25, ...Array.from({ length: 20 }, (_, k) => k + 1)].includes(sector)) {
      throw new Error('Invalid sector number');
    }

    // Daneben
    if (multiplier === 0 || sector === 0) continue;

    // Bullseye
    if (sector === 25) {
      if (multiplier === 3) {
        throw new Error('Bullseye cannot be tripled');
      }
      total += multiplier * 25;
    } else {
      total += multiplier * sector;
    }
  }

  return total;
}
