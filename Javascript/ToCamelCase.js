// TO RUN: Node Javascript/ToCamelCase.js

function toCamelCase(str) {
  out = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "-" || str[i] == "_") {
      out += str[i + 1].toUpperCase();
      i++;
    } else {
      out += str[i];
    }
  }
  return out;
}

console.log(toCamelCase("test_this-string"))
