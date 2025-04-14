import { play } from "./rock-paper-scissors";

describe("play", () => {
    it("should return 0 for a tie", () => {
        expect(play("rock", "rock")).toBe(0);
        expect(play("paper", "paper")).toBe(0);
        expect(play("scissors", "scissors")).toBe(0);
    });

    it("should return 1 if player 1 wins", () => {
        expect(play("rock", "scissors")).toBe(1);
        expect(play("paper", "rock")).toBe(1);
        expect(play("scissors", "paper")).toBe(1);
    });

    it("should return 2 if player 2 wins", () => {
        expect(play("scissors", "rock")).toBe(2);
        expect(play("rock", "paper")).toBe(2);
        expect(play("paper", "scissors")).toBe(2);
    });

    it("should ignore case and whitespace", () => {
        expect(play("  Rock  ", "sCiSsOrS")).toBe(1);
    });

    it("should throw an error for invalid moves", () => {
        expect(() => play("invalid", "rock")).toThrow("Invalid move");
    });
});