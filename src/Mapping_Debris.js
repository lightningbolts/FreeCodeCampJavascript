export function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(x => {
    let orbitalSemiMajorAxis = earthRadius + x.avgAlt
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt((orbitalSemiMajorAxis ** 3) / GM))
    return { name: x.name, orbitalPeriod: orbitalPeriod }
  })
}