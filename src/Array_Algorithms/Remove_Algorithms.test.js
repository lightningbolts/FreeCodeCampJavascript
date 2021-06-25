import { doesSomethingToItem } from "./Remove_Algorithm"

describe("Does Something", function () {
  it('I', function () {
    expect(doesSomethingToItem(Array.from(Array(10).keys()), 9, "seek")).toEqual(9)
    expect(doesSomethingToItem([1, 2, 2, 3, 4, 5], 2, "remove")).toEqual([1, 3, 4, 5])
  });
})