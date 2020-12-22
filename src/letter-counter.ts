export function letterCounter(input: string): string {
    let lowercaseString = input.toLowerCase().replace(/ /g, '');
    let obj: {[property: string]: string } = {};
    let answer = '';

    for (let letter of lowercaseString) {
        if (!(letter in obj)) {
            obj[letter] = '*';
        } else {
            obj[letter] += '*';
        }
    }

    for (let key in obj) {
        answer += key + ':' + obj[key] + ',';
    }

    return answer.substring(0, answer.length - 1);
};
