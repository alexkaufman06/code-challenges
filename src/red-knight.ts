type verticlePositionOfRedKnight = 0 | 1; // 0 = top & 1 = bottom
type horizonalPositionOfTwoPawns = number;
type capturedPawn = [
    'Black' | 'White',
    number
];

export function redKnight(vertical: verticlePositionOfRedKnight, horizontal: horizonalPositionOfTwoPawns ): capturedPawn {
    return [(vertical + horizontal) % 2 ? 'Black' : 'White', 2 * horizontal];
}
