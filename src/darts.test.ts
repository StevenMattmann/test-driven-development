import {calcPoints} from "./darts";

describe('calcPoints Bonus', () => {
    it('counts miss as 0', () => {
        expect(calcPoints('0 0 3 20 0 0')).toBe(60); // nur Triple 20 zählt
    });

    it('counts Bullseye correctly', () => {
        expect(calcPoints('2 25')).toBe(50); // Bullseye
        expect(calcPoints('1 25')).toBe(25); // Äußeres Bull
    });

    it('throws if trying to triple Bullseye', () => {
        expect(() => calcPoints('3 25')).toThrow('Bullseye cannot be tripled');
    });
});
