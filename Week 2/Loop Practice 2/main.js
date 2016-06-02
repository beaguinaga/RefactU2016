// Requirements
// For each problem below, write a loop that prints the given output. Assume a global array called animals is defined as follows:
//
// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// For example:
// Problem:
//
// rat
// cat
// butterfly
// marmot
// ocelot
// Solution:
//
// for(var i=0; i<animals.length; i++) {
//  console.log(animals[i]);
// }
// Problem:
//   rat cat butterfly marmot
//
//   rat butterfly ocelot
//
//   ocelot marmot butterfly cat rat
//
//   rat cat cat butterfly butterfly marmot marmot ocelot

// // EXAMPLE:
// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']
//
// for(var i=0; i<animals.length; i++) {
//  console.log(animals[i]);
//  }
// //rat, cat, butterfly, mamot, ocelot.

// //       #1)
// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']
//
// for(var i=0; i<animals.length -1; i++) {
//  console.log(animals[i]);
//  }
//  //   rat cat butterfly marmot

// //     #2 )
//  var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']
//
//  for(var i=0; i<animals.length; i += 2) {
//   console.log(animals[i]);
//   }
// //   rat butterfly ocelot

//    #3 )
 // var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']
 //
 // for (var i = animals.length -1; i >= 0; i--) {
 //  console.log(animals[i]);
 //  }
//  // ocelot marmot butterfly cat rat

//    #4)
// var animals= ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']
//
// for (var i = 0; i < animals.length; i++) {
//   for (var j = 0; j <= 0; j++) {
//     if (!(i == 0 || i == animals.length - 1)) {
//       console.log(animals[i]);
//     }
//     console.log(animals[i]);
//   }
// }
// //  rat cat cat butterfly butterfly marmot marmot ocelot
