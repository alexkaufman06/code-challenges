export function returnClosingParen(string: string, openParenIndex: number): number {
    if ( openParenIndex < 0 || string[openParenIndex] !== '(' ) { return -1 };
    let count = 0;
    for (let i = openParenIndex; i < string.length; i++) {
        if (string[i] === '(') { count++; }
        else if (string[i] === ')') { count--; }

        if (count === 0) { return i; };
    }
    return -1;
}
