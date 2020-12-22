import { letterCounter } from "../src/letter-counter";

describe('Returns the number of each letter in the words order', () => {
    it('Returns the correct count for each letter', function () {
        expect(letterCounter('Chicago')).toEqual('c:**,h:*,i:*,a:*,g:*,o:*');
        expect(letterCounter('Bangkok')).toEqual('b:*,a:*,n:*,g:*,k:**,o:*');
        expect(letterCounter('Las Vegas')).toEqual('l:*,a:**,s:**,v:*,e:*,g:*');
    });
});