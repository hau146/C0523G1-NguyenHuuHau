let numbers = [1, 2, 3, 4, 5, 6, 34, 23, 12, 11, 99, 101];

const checkPrimeNumber = (arr) => {
    let result = [];
    let filter = arr.filter(arr => arr % 2 === 0)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            result.push(arr[i])
        }
        if (!filter.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}

let resultNumber = checkPrimeNumber(numbers);
console.log(resultNumber);