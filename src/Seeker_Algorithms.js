export function findItemIndex(arr, num) {
    return helper(arr, num, 0, arr.length - 1)
    function helper(arr, num, start, end) {
        const midIndex = Math.ceil((start + end) / 2)
        if (num === arr[midIndex]) {
            if (num === arr[midIndex - 1]) {
                return helper(arr, num, start, midIndex - 1)
            } else {
                return midIndex
            }
        } else if (start === end) {
            return -1
        } else if (num < arr[midIndex]) {
            return helper(arr, num, start, midIndex - 1)
        } else if (num > arr[midIndex]) {
            return helper(arr, num, midIndex, end)
        } else {
            return -1;
        }
    }
}

export function findItemIndexLinear(arr, num) {
    for (let index in arr) {
        const item = arr[index]
        if (num === item) {
            return parseInt(index);
        }
    }
    return -1;
}

function results(arr_size) {
    if (arr_size > 10000000) {
        return "All done!"
    }
    let arr = Array.from(Array(arr_size).keys())
    //var t0 = performance.now()
    findItemIndexLinear(arr, arr_size / 2 + 2)
    //var t1 = performance.now()
    console.log("Call to findItemIndex took " + (t1 - t0) + " milliseconds. The arr_size is", arr_size + ".")
    results(arr_size * 10)
}

//results(1)

//console.log("The item index is", findItemIndex([], 2) + ".")
//console.log("The item index is", findItemIndex(Array.from(Array(10).keys()), 1) + ".")
//console.log("The item index is", findItemIndexLinear(Array.from(Array(10).keys()), 1) + ".")
