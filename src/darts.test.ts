import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
    it("should calculate points correctly", () => {
        expect(calcPoints("3 20 1 17 2 4")).toBe(85);
        expect(calcPoints("2 15 1 18 3 19")).toBe(105);
        expect(calcPoints("3 20 1 5")).toBe(65);
    });
});

describe("possibleCheckout", () => {
    it("should suggest possible checkouts", () => {
        expect(possibleCheckout(477)).toBe("Double 12");
        expect(possibleCheckout(441)).toBeNull();
        expect(possibleCheckout(480)).toBeNull();
    });
});