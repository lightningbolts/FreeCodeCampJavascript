import { caesarCipher } from "./Caesar_Cipher.js"
describe('Cipher', function () {
  it('Translation (13 shift)', function () {
    expect(caesarCipher("SERR PBQR PNZC", 13)).toStrictEqual("FREE CODE CAMP");
    expect(caesarCipher("TFSS DWNNO!", 12)).toStrictEqual("FREE PIZZA!");
    expect(caesarCipher("SERR YBIR?", 13)).toStrictEqual("FREE LOVE?");
    expect(caesarCipher("Y", 13)).toStrictEqual("L");
    expect(caesarCipher("B", -29)).toStrictEqual("Y");
    expect(caesarCipher("B2", -29)).toStrictEqual("Y2");
    expect(caesarCipher("B2", -29)).toStrictEqual(caesarCipher("B2", 23));
    expect(caesarCipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13)).toStrictEqual("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  })
})