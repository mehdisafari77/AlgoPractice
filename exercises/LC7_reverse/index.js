// Given a 32-bit signed integer, reverse digits of an integer.
// For an int overflow, your code should just return 0.
// -------------------------
// reverse(123) --> 321
// reverse(120) --> 21
// reverse(-123) --> -321
// reverse(2147483649) --> 0
// reverse(-2147483649) --> 0

function reverse(x) {

    const limit = Math.pow(2, 31)
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    
    return n > limit ? 0 : n * Math.sign(x)
}

// solution without turning number into String

function reverseNum(x) {

    let reverse = 0;

    while(x > 0) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x/10)
    }
    
    return x
}

module.exports = reverse;
