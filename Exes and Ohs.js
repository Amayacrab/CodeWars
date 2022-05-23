//Exes and Ohs
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
  //transform the string into a array to count later
  const X = str.match(/x/gi);
  const O = str.match(/o/gi);

  //checks if have a null value because you can't use .lengh when is null
  if (X === null || O === null) {
    if (X === O) {
      return true
    } else {
      return false
    }
    // return the true or false
  } else {
    return X.length === O.length
  }
}

//test
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));

/*
expected

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/