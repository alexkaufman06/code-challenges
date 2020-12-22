export function letterCounter(string: string): string {
    let lowercaseString = string.toLowerCase().replace(/ /g, '');
    let obj: any = {};
    let str = '';

    for (let letter of lowercaseString) {
        if (!(letter in obj)) {
            obj[letter] = '*';
        } else {
            obj[letter] += '*';
        }
    }

    for (let key in obj) {
        str += key + ':' + obj[key] + ',';
    }

    return str.substring(0, str.length - 1);
};
