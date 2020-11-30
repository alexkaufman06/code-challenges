export function reverseWords(str) {
    return str.split(' ').map(function (word) { return word.split('').reverse().join(''); }).join(' ');
}
//# sourceMappingURL=reverse-words.js.map