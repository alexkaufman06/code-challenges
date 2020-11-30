export function reverseWords(str: string): string {
    return str.split(' ').map(
        (word) => word.split('').reverse().join('')
    ).join(' ');
}
