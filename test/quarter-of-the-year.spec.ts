import { quarterOf } from "../src/quarter-of-the-year";

describe('Returns the quarter that the month belongs to', () => {
    it('Returns the quarter', function () {
        expect(quarterOf(1)).toEqual(1);
        expect(quarterOf(3)).toEqual(1);
        expect(quarterOf(4)).toEqual(2);
        expect(quarterOf(8)).toEqual(3);
        expect(quarterOf(11)).toEqual(4);
    });
});

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
// and month 11 (November), is part of the fourth quarter.
