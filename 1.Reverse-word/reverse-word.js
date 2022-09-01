// Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str) {
  var str_arr = str.split(" ");
  for (i = 0; i < str_arr.length / 2; i++) {
    temp = str_arr[i];
    str_arr[i] = str_arr[str_arr.length - i - 1];
    str_arr[str_arr.length - i - 1] = temp;
  }
  return str_arr.join(" ");
}