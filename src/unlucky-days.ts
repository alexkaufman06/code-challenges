export function unluckyDays(year: number): number {
    let count = 0;
    for (let x = 0; x < 12; x++) {
        count += new Date(year, x, 13).getDay() == 5 ? 1 : 0;
    }
    return count;
}
