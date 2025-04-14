export function play(player1: string, player2: string): number {
  const moves = ["rock", "paper", "scissors"];
  const p1 = player1.trim().toLowerCase();
  const p2 = player2.trim().toLowerCase();

  if (!moves.includes(p1)) throw new Error("Invalid move for player 1");
  if (!moves.includes(p2)) throw new Error("Invalid move for player 2");

  if (p1 === p2) return 0;

  if (
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "paper" && p2 === "rock") ||
      (p1 === "scissors" && p2 === "paper")
  ) {
    return 1;
  } else {
    return 2;
  }
}