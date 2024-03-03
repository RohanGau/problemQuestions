const string = "a,b$c!#f";

function reverse(str) {
  const temp = new Array(str.length);
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      temp[x] = str[i];
      x++;
    }
  }
  console.log("temp :", temp);
  let sortedString = "";
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i]) {
      sortedString += temp[i];
    }
  }
  console.log("sortedString :", sortedString);
  x = 0;
  let reverseString = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      reverseString += sortedString[x];
      x++;
    } else {
      reverseString += str[i];
    }
  }
  return reverseString;
}
console.log("before :", string);
console.log("after :", reverse(string));
