import { isValid } from "./isbn13";

describe("isValid", () => {
    it("should validate correct ISBN-13", () => {
        expect(isValid("978-3-16-148410-0")).toBe(true);
        expect(isValid("9780306406157")).toBe(true);
    });

    it("should reject incorrect ISBN-13", () => {
        expect(isValid("978-3-16-148410-1")).toBe(false);
        expect(isValid("1234567890123")).toBe(false);
    });

    it("should handle ISBN-13 without hyphens", () => {
        expect(isValid("9783161484100")).toBe(true);
    });
});