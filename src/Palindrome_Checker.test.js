import { palindrome } from "./Palindrome_Checker.js"
describe('Palindrome', function () {
  it('Checker', function () {
    expect(palindrome("SERR PBQR PNZC")).toStrictEqual(false);
  })
})