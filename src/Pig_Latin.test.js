import { translatePigLatin } from "./Pig_Latin.js"
describe('Pig', function () {
  it('Translation', function () {
    expect(translatePigLatin("lan")).toStrictEqual("");
  })
})