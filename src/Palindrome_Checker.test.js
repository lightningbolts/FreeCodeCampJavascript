import { palindrome, palindromeOther } from "./Palindrome_Checker.js"
describe('Palindrome', function () {
  it('Checker', function () {
    expect(palindrome("SERR PBQR PNZC")).toStrictEqual(false);
    expect(palindromeOther("ssldkfjlljfkdlss_")).toStrictEqual(true)
  })
})