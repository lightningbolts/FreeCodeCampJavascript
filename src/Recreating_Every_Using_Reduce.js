export function every(arr, func) {
  return arr.reduce((accumulator, currentValue) => accumulator && func(currentValue), true)
}

export function some(arr, func) {
  return arr.reduce((accumulator, currentValue) => accumulator || func(currentValue), false)
}

export function sum(arr, func) {
  return arr.reduce((accumulator, currentValue) => accumulator + func(currentValue), 0)
}

export function product(arr, func) {
  return arr.reduce((accumulator, currentValue) => accumulator * func(currentValue), 1)
}