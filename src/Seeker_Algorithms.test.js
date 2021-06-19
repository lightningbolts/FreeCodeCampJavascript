import { findItemIndex, findItemIndexLinear } from "./Seeker_Algorithms"

describe('I test', function () {
    it('I', function () {
        expect(findItemIndex([], 2)).toBe(-1);
        //expect(findItemIndexLinear(Array.from(Array(10).keys()), 9)).toBe(9);
        //expect(findItemIndexLinear(Array.from(Array(10).keys()), 9)).toBe(3);
    });
});