/**
 * Returns nCr
 * @param {Number} n 
 * @param {Number} r 
 */
function C(n = 1, r = 1) {
    return r == 0 ? n : (n / r) * C(n - 1, r - 1)
}

/**
 * Returns the array of puru's numbers for a given number
 * @param {Number} m  The power
 */
function numbers(m = 1) {
    // Let's define the array in which the numbers will be stored
    const nums = [];

    // If power is 0, return 1
    if (m == 0) return [1]

    // Total `m + 1` numbers will be there
    for (let n = 1; n <= m + 1; n++) {
        let num = 0

        for (let i = 0; i <= n - 1; i++) {
            num += C(n - i, i) * ((-1) ** i) * ((n - i) ** m)
            console.log(n, i, num)
        }

        nums.push(num)

    }
    return nums
}