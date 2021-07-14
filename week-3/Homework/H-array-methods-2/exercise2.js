/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let dividir;
  let unir;
  dividir = str.split('');
  dividir[0] = dividir[0].toUpperCase();
  unir = dividir.join('')
  return unir;
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/*
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
