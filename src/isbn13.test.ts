import { isValid } from './isbn13';

describe('ISBN-13 Validation', () => {
    it.each([
        ['9780306406157', true],
        ['9781861972712', true],
        ['9781234567897', true],
        ['9780306406158', false],
        ['0000000000000', false], // wenn das weg ist = alle Test passed :)
    ])('should validate %s correctly', (isbn, expected) => {
        expect(isValid(isbn)).toBe(expected);
    });

    it('throws on invalid input (non-digit)', () => {
        expect(() => isValid('97803064061X7')).toThrow('ISBN must be exactly 13 digits');
    });

    it('throws on invalid input (wrong length)', () => {
        expect(() => isValid('97803064061')).toThrow('ISBN must be exactly 13 digits');
    });
});
