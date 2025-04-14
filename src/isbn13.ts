export function isValid(isbn: string): boolean {
  const cleaned = isbn.replace(/-/g, "");
  if (!/^\d{13}$/.test(cleaned)) return false;

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(cleaned[i], 10);
    sum += digit * (i % 2 === 0 ? 1 : 3);
  }

  const checksum = (10 - (sum % 10)) % 10;
  return checksum === parseInt(cleaned[12], 10);
}