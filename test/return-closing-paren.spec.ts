import { returnClosingParen } from "../src/return-closing-paren";

describe('Return Closing Paren Tests', () => {
    it('Should return -1 if given a number below 0', function () {
        expect(returnClosingParen('((1)23(45))(aB)', -5)).toEqual(-1);
    });

    it('Should return -1 if no open paren at given index', function () {
        expect(returnClosingParen('((1)23(45))(aB)', 2)).toEqual(-1);
    });

    it('Should return the index of the closing paren', function () {
        expect(returnClosingParen('((1)23(45))(aB)', 0)).toEqual(10);
        expect(returnClosingParen('((1)23(45))(aB)', 1)).toEqual(3);
        expect(returnClosingParen('((1)23(45))(aB)', 6)).toEqual(9);
        expect(returnClosingParen('((1)23(45))(aB)', 11)).toEqual(14);
        expect(returnClosingParen('(g(At)IO(f)(tM(qk)YF(n)Nr(E)))', 11)).toEqual(28);
        expect(returnClosingParen('(g(At)IO(f)(tM(qk)YF(n)Nr(E)))', 0)).toEqual(29);
        expect(returnClosingParen('(>_(va)`?(h)C(as)(x(hD)P|(fg)))', 19)).toEqual(22);
    });
});