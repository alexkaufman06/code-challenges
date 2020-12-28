type month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export function quarterOf(month: month): number {
    return Math.ceil(month / 3);
}
