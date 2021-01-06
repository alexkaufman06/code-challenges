export function vowelCounter(str: string): number {
    return str.replace(/[^aeiou]/gi, '').length
}
