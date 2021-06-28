import { truthCheck } from "./Everthing_Be_True.js"
describe('Everything Be True', function () {
  it('Checking if truthy values are passed', function () {
    expect(truthCheck([{ "single": "" }, { "single": "double" }], "single")).toStrictEqual(false);
  })
})