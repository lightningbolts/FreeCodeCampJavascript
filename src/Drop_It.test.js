import { addFive, dropElements, sumOfArray } from "./Drop_It"
describe('Test', function () {
  it('Drop It', function () {
    expect(dropElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x < 3)).toStrictEqual([1, 2])
  })
  it('Add Five', function () {
    expect(addFive([1, 2, 3])).toStrictEqual([6, 7, 8])
    expect(addFive([])).toStrictEqual([])
  })
  it('Sum of Array', function () {
    expect(sumOfArray([1, 2, 3, 4])).toStrictEqual(1)
  })
})