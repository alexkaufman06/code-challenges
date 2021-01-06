import {vowelCounter} from "../src/vowel-counter";


describe('Vowel Counter', () => {
    it('Should return the number of vowels in a string', function () {
        expect(vowelCounter('abracadabra')).toEqual(5);
        expect(vowelCounter('pear tree')).toEqual(4);
        expect(vowelCounter('o a kak ushakov lil vo kashu kakao')).toEqual(13);
        expect(vowelCounter('my pyx')).toEqual(0);
    });
});
