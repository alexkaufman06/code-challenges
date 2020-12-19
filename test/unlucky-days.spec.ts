import { unluckyDays } from "../src/unlucky-days";

describe('Unlucky Days', () => {
    it('Should return the number of Black Fridays for that year', function () {
        expect(unluckyDays(2015)).toEqual(3);
        expect(unluckyDays(1986)).toEqual(1);
    });
});