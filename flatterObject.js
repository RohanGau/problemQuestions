const test = {
  a: "jack",
  b: {
    c: "sparrow",
    d: {
      e: "hahaha",
    },
  },
};

function traverseAndFlatter(currentNode, target, flatterkey) {
  for (var key in currentNode) {
    if (currentNode.hasOwnProperty(key)) {
      var newKey = "";
      if (flatterkey === undefined) {
        newKey = key;
      } else {
        newKey = flatterkey + "." + key;
      }
      var value = currentNode[key];
      if (typeof value === "object") {
        traverseAndFlatter(value, target, newKey);
      } else {
        target[newKey] = value;
      }
    }
  }
}

function flatObject(obj) {
  let result = {};
  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      const temp = flatObject(obj[i]);
      for (let j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
}

function flatter(obj) {
  const flatterObject = {};
  traverseAndFlatter(obj, flatterObject);
  return flatterObject;
}

console.log("flatter :", flatter(test));
console.log("flatObject :", flatObject(test));
