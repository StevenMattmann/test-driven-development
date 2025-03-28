import { play } from './rock-paper-scissors';

describe('Rock Paper Scissors', () => {
    const cases: [string, string, number][] = [
        ['rock', 'scissors', 1],
        ['scissors', 'paper', 1],
        ['paper', 'rock', 1],
        ['scissors', 'rock', 2],
        ['paper', 'scissors', 2],
        ['rock', 'paper', 2],
        ['rock', 'rock', 0],
        ['paper', 'paper', 0],
        ['scissors', 'scissors', 0],
        // Tests mit Whitespace und Groß-/Kleinschreibung
        [' Rock ', 'SCISSORS', 1],
        ['PAPER', ' paper ', 0],
    ];

    it.each(cases)('player1=%s vs player2=%s => %d', (p1, p2, expected) => {
        expect(play(p1, p2)).toBe(expected);
    });

    it('throws error on invalid moves', () => {
        expect(() => play('banana', 'rock')).toThrow('Invalid move');
        expect(() => play('rock', 'fire')).toThrow('Invalid move');
        expect(() => play('', 'paper')).toThrow('Invalid move');
    });
});
