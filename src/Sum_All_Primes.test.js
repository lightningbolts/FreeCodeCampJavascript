import { sumPrimes } from "./Sum_All_Primes"
describe('Sum_All_Primes', function () {
  it('Adding', function () {
    expect(sumPrimes(11)).toStrictEqual(28);
  })
})