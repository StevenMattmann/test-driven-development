import { formatDuration } from './duration';

describe('formatDuration', () => {
    it('formats seconds only', () => {
        expect(formatDuration(33)).toBe('33s');
    });

    it('formats minutes and seconds', () => {
        expect(formatDuration(123)).toBe('2m3s');
        expect(formatDuration(500)).toBe('8m20s');
    });

    it('formats hours only', () => {
        expect(formatDuration(3600)).toBe('1h');
    });

    it('formats hours, minutes and seconds', () => {
        expect(formatDuration(3999)).toBe('1h6m39s'); // Rundung beachten!
    });

    it('formats 0 seconds', () => {
        expect(formatDuration(0)).toBe('0s');
    });

    it('throws error on negative input', () => {
        expect(() => formatDuration(-50)).toThrow('Time cannot be negative');
    });

    it('rounds fractional seconds', () => {
        expect(formatDuration(5.7)).toBe('6s');
        expect(formatDuration(3599.5)).toBe('1h');
    });
});
