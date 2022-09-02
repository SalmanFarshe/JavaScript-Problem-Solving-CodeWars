// Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
    var result, sum = 1;
    for (i = 0; i < x.length; i++  ){
        result = x[i];
        sum = sum * result;
    }
    return sum;
}
var x = [1, 2, 3, 4, 5, 10]
console.log(grow(x));