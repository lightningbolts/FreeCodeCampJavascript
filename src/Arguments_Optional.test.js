import { addTogether } from "./Arguments_Optional"
describe('Adding Together', function () {
  it('Add la la la', function () {
    expect(addTogether(4, 3)).toStrictEqual(7);
    expect(addTogether(4)(4)).toStrictEqual(8);
    expect(addTogether([2], 3)).toStrictEqual(undefined)
  })
})