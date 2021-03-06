import Sugar from 'sugar'

export function Random(x) {
    return Math.floor(Math.random() * x);
}

export function ArrayJoinToNumbersRundom(array, iteration) {
    let nums = [],
        arrLength = array.length,
        iter = arrLength < iteration ? arrLength : iteration

    for (let i = 0; i < iter; i++) {
        var random = array[Random(arrLength - 1)].join('');
        nums = nums.concat([parseInt(random)]);
        nums = nums.concat([-parseInt(random)]);
    }
    return Sugar.Array.unique(nums);
}

export function ArrayJoinToNumbers(array, iteration) {
    let nums = [],
        arrLength = array.length,
        iter = arrLength < iteration ? arrLength : iteration

    for (let i = 0; i < iter; i++) {
        var random = array[i].join('');
        nums = nums.concat([parseInt(random)]);
        nums = nums.concat([-parseInt(random)]);
    }
    return Sugar.Array.unique(nums);
}

export function ArrayNumbersSum(array) {
    return eval(ArrayToNumberNormalize(array).join(''))
}

export function ArrayToNumberNormalize(array) {
    return array.map((num, index) => {
        return index === 0 || num < 0 ? num : `+${num}`
    })
}
