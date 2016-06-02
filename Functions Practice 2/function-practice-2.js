// // 1: Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// //getName({ name: 'Luisa', age: 25 }) should return 'Luisa'
// var getName = function(obj) {
//   return obj.name;
// }
//
// // Create test object
// var luisa = {
//   name: "Luisa",
//   age: 25
// }
//
// // Test log
// console.log(getName(luisa));

// // 2: Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// //totalLetters(['javascript', 'is', 'awesome']) should return 19
// //totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24
// var totalLetters = function(arr) {
//   var total = 0;
//   for (string of arr) {
//     total = total + string.length;
//   }
//   return total;
// }
//
// // Create test array
// var testArr = ["javascript","is","awesome"];
//
// //Test log
// console.log(totalLetters(testArr));
//
// // 3: Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// //keyValue('city', 'Denver') should return Object {city: "Denver"}
// var keyValue = function(item1,item2) {
//   var newObj = {
//   }
//   newObj[item1] = item2;
//   return newObj;
// }
//
// // Test log
// // console.log(keyValue("city", "Denver"));
//
// // 4: Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// //negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// //negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'
// var negativeIndex = function(arr,num) {
//   num = num * -1;
//   arr.reverse();
//   return arr[num-1];
// }
//
// //Test log
// // console.log(negativeIndex(["a","b","c","d","e"], -2));
//
// // 5: Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// //removeM('family') should return 'faily'
// //removeM('memory') should return 'eory'
// var removeM = function(str) {
//   var index = str.indexOf("m");
//   strLoc = str.slice(0,index) + str.slice(index + 1, str.length);
//   if (strLoc.indexOf("m") != -1) {
//      return removeM(strLoc)
//   } else { return strLoc }
// }
//
// //Test log
// console.log(removeM("memory"));
//
// // 6: Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// //printObject({ a: 10, b: 20, c: 30 }) should print: md a is 10 b is 20 c is 30
// //printObject({ firstName: 'pork', lastName: 'chops' }) should print: md firstName is pork lastName is chops
// var printObject = function(obj) {
//   // var num = Object.keys(obj).length;
//   // for (var i )
//   for (key in obj) {
//     console.log(key + " is " + obj[key]);
//   }
// }
//
// //Test log
// // printObject({a: 10, b: 20, c: 30});
//
// // 7: Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// // vowels('alabama') should return ['a', 'a', 'a', 'a']
// // vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']
// var vowels = function(str) {
//   var arr = [];
//   for (letter of str) {
//     switch (letter) {
//       case "a":
//         arr.push("a");
//         break;
//       case "e":
//         arr.push("e");
//         break;
//       case "i":
//         arr.push("i");
//         break;
//       case "o":
//         arr.push("o");
//         break;
//       case "u":
//         arr.push("u");
//         break;
//     }
//   }
//   return arr;
// }
//
// //Test log
// // console.log(vowels("alabama"));
//
// // 8: Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// // twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// // twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// // twins(['a', 'a', 'b', 'z']) should return false
// // twins(['a', 'a', undefined]) should return false
// var twins = function(arr) {
//   for (var i = 0; i < arr.length; i+=2) {
//     if (arr[i] != arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// //Test logs
// // console.log(twins(["a","a","b","b","c","c"]));
// // console.log(twins(["a","a","b","c","d","d"]));
//
// // 9: Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// // or([false, false, true, false]) should return true
// // or([false, false, false]) should return false
// // or([]) should return false
// var or = function(arr) {
//   for (item of arr) {
//     if(item == true) {
//       return true;
//     } else if (arr.length == 0) {
//       return false;
//     }
//   }
//   return false;
// }
//
// //Test logs
// console.log(or([false, false, true, false]));
// console.log(or([false, false, false]));
// console.log(or([]));
//
// // 10: Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// // unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// // unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']
// var unique = function(arr) {
//     var newArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (newArray.indexOf(arr[i]) === -1) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// };
// //
// // // Test logs
// console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
// console.log(unique(['todd', 'avery', 'maria', 'avery']));
