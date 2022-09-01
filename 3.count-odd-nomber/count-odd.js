// it passed the all test without difficulties
function oddCount(n) {
  var oddNumber = [];
  if (n > 0) {
    for (i = 0; i < n; i++) {
      if (i % 2 == 1) {
        oddNumber.push(i);
      }
    }
  }
  return oddNumber.length;
}
console.log(oddCount(15023));

// it passed the 2000 difficulties
function oddCount2(n) {
  var result = Math.floor(n / 2);
  return result;
}
console.log(oddCount2(15023));