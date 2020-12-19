export function unluckyDays(year: number): number {
    let count = 0;
    for (let x = 0; x < 12; x++) {
        if (new Date(year, x, 13).getDay() == 5) {
            count ++
        }
    }
    return count;
}
