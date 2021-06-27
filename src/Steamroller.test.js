import { steamrollArray } from "./Steamroller.js"
describe('Steamroller', function () {
  it('Expected array flattened', function () {
    expect(steamrollArray([[["a"]], [["b"]]])).toStrictEqual(["a", "b"]);
    expect(steamrollArray([1, [2], [3, [[4]]]])).toStrictEqual([1, 2, 3, 4]);
    expect(steamrollArray([1, [], [3, [[4]]]])).toStrictEqual([1, 3, 4])
    expect(steamrollArray([1, {}, [3, [[4]]]])).toStrictEqual([1, {}, 3, 4])
  })
})