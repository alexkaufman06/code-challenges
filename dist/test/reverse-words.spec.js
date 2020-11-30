import { reverseWords } from '../src/reverse-words';
describe('Event Broker Service Tests', function () {
    it('Should return each word reversed', function () {
        expect(reverseWords('a b c d')).toEqual('a b c d');
        expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toEqual('ehT kciuq nworb xof spmuj revo eht yzal .god');
        expect(reverseWords('apple')).toEqual('elppa');
        expect(reverseWords('double  spaced  words')).toEqual('elbuod  decaps  sdrow');
    });
});
//# sourceMappingURL=reverse-words.spec.js.map