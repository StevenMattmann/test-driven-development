import { formatDuration } from "./duration";

describe("formatDuration", () => {
    it("should format seconds correctly", () => {
        expect(formatDuration(33)).toBe("33s");
        expect(formatDuration(123)).toBe("2m3s");
        expect(formatDuration(500)).toBe("8m20s");
        expect(formatDuration(3600)).toBe("1h");
        expect(formatDuration(3999)).toBe("1h6m39s");
    });

    it("should handle 0 seconds", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    it("should throw an error for negative numbers", () => {
        expect(() => formatDuration(-1)).toThrow("Duration must be non-negative");
    });

    it("should round fractional seconds", () => {
        expect(formatDuration(59.9)).toBe("1m0s");
    });
});