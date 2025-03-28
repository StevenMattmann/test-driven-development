export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) {
    throw new Error('ISBN must be exactly 13 digits');
  }

  const digits = isbn.split('').map(Number);
  const checksum = digits
      .slice(0, 12)
      .reduce((sum, digit, index) => sum + digit * (index % 2 === 0 ? 1 : 3), 0);

  const calculatedCheckDigit = (10 - (checksum % 10)) % 10;

  return calculatedCheckDigit === digits[12];
}
