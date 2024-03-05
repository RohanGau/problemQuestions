function sum(x) {
  return function (y) {
    return x + y;
  };
}

let firstClassSum = function (a) {
  return function (b) {
    return a + b;
  };
};

let recursionSum = function (a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return recursionSum(a + b);
  };
};

// let recursionSum = (a) => b => b ? recursionSum(a+b) : b;

console.log("sum :", sum(3)(7));
console.log("firstClassSum :", firstClassSum(5)(4));
console.log("recursionSum :", recursionSum(5)(4)(7)());
