//1//////////
/*
function getFirstElements(arr, n) {
  if (n === undefined) {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
}
const myArray = [2, 3, 4, 5];
const firstElement = getFirstElements(myArray);
console.log(firstElement);
*/



//2//////////
/*
function func() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(a.join(" "));
}
*/



//3//////////
/*
function swap(str) {
  let newLetters = '';
  for (let i = 0; i < str.length; i++) {
          if (str[i] == str[i].toUpperCase()) {
              newLetters += str[i].toLowerCase();
          } else {
              newLetters += str[i].toUpperCase();
          }
      }
      return newLetters;
  }
console.log(swap('salam'));
*/



//4///////////
/*
function clearArray(arr) {
  return arr.filter(item => {
    return item !== false && item !== undefined && item !== '' && item !== 0 && item !== null;
  });
}
let originalArray = [false, undefined, '', 0, null, 'hello', 88, true];
let clearedArray = clearArray(originalArray);
console.log(clearedArray);
*/



//5///////////
/*
function clearDuplicate(arr) {
  return Array.from(new Set(arr));
}

console.log(clearDuplicate([1, 2, 2, 1, 3, 4, 5, ]));
*/



//6///////////
/*
function isEqual(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for (let i=0; i<arr1.lengthl; i++){
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(isEqual("salam", "salam"));
console.log(isEqual([1, 3, 5, 7, 9,] , [2, 4, 6, 8]))
*/