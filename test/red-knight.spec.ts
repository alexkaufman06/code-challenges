import { redKnight } from "../src/red-knight";

describe('Returns the number of each letter in the words order', () => {
    it('Returns the correct count for each letter', function () {
        expect(redKnight(0, 8)).toEqual(['White', 16]);
        expect(redKnight(0, 7)).toEqual(['Black', 14]);
        expect(redKnight(1, 6)).toEqual(['Black', 12]);
        expect(redKnight(1, 5)).toEqual(['White', 10]);
    });
});

// Red Knight is chasing two pawns. Which pawn will be caught, and where?

// Input will be two integers:
// N vertical position of Red Knight (0 or 1).
// P horizontal position of two pawns (between 2 and 1000000).

// Output has to be a tuple (python, haskell, Rust, prolog, C#), an array (javascript), an object (java), or a structure (C) with:
// "Black" or "White" - which pawn was caught
// Where it was caught (horizontal position)
// Example
// Input = 0, 4
// Output = ("White", 8)

// Notes
// Red Knight will always start at horizontal position 0.
// The black pawn will always be at the bottom (vertical position 1).
// The white pawn will always be at the top (vertical position 0).
// The pawns move first, and they move simultaneously.
// Red Knight moves 2 squares forward and 1 up or down.
// Pawns always move 1 square forward.
// Both pawns will start at the same horizontal position.