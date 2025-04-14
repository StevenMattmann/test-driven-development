export function calcPoints(hits: string): number {
  const parts = hits.split(" ");
  let sum = 0;

  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parseInt(parts[i], 10);
    const sector = parseInt(parts[i + 1], 10);
    sum += multiplier * sector;
  }

  return sum;
}

export function possibleCheckout(currentPoints: number): string | null {
  const remaining = 501 - currentPoints;
  if (remaining <= 0 || remaining % 2 !== 0 || remaining / 2 > 20) {
    return null;
  }
  return `Double ${remaining / 2}`;
}