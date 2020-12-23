type verticlePositionOfRedKnight = 0 | 1; // 0 = top & 1 = bottom
type horizonalPositionOfTwoPawns = number;
type capturedPawn = [
    'Black' | 'White',
    number
];

export function redKnight(vertical: verticlePositionOfRedKnight, horizontal: horizonalPositionOfTwoPawns ): capturedPawn {
    let knightPosition = [0, vertical];
    let pawnsHorizontalPosition = horizontal; 
    while (knightPosition[0] !== pawnsHorizontalPosition) {
        pawnsHorizontalPosition++;
        knightPosition = [
            knightPosition[0] + 2,
            knightPosition[1] === 0 ? 1 : 0
        ]
    }
    return [
        knightPosition[1] === 1 ? 'Black' : 'White',
        pawnsHorizontalPosition
    ];
}