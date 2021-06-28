import { every, product, some, sum } from "./Recreating_Every_Using_Reduce"
describe('Mimicking the Every Function', function () {
  it('Checking the condition', function () {
    expect(every([-1, 3, 4, 5], x => x > 1)).toBeFalsy();
    expect(some([-1, 3, 4, 5], x => x > 1)).toBeTruthy();
    expect(sum([1, 2, 3, 4, 5], x => x)).toBe(15)
    expect(product([1, 2, 3, 4, 5], x => x)).toBe(120)
  })
})