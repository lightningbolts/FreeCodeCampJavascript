import { chunkArrayInGroups } from "./Chunky_Monkey"
describe('Test', function () {
  it('Chunky Monkey', function () {
    expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toStrictEqual([["a", "b"], ["c", "d"]])
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toStrictEqual([[0, 1, 2, 3], [4, 5]])
    expect(chunkArrayInGroups([], 1)).toStrictEqual([])
  })
  it('Chunky Monkey', function () {
    expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toStrictEqual([["a", "b"], ["c", "d"]])
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toStrictEqual([[0, 1, 2, 3], [4, 5]])
    expect(chunkArrayInGroups([], 1)).toStrictEqual([])
  })
})