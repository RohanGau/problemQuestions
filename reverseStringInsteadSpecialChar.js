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


function isAlphabet(char) {
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

function swap(str, a, b) {
  var c = "";
  for (let i = 0; i < str.length; i++) {
    if (i === a) {
      c = c + str[b];
    } else if (i === b) {
      c = c + str[a];
    } else {
      c = c + str[i];
    }
  }
  return c;
}

function reverse(str) {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (!isAlphabet(str[l])) {
      l++;
    } else if (!isAlphabet(str[r])) {
      r--;
    } else {
      str = swap(str, l, r);
      l++;
      r--;
    }
  }
  console.log("str  :", str);
  return str;
}
console.log("before :", string);
console.log("after :", reverse(string));
