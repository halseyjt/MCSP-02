// Consider an array of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).

// For example,

//     [true, true, true, false,
//         true, true, true, true,
//         true, false, true, false,
//         true, false, false, true,
//         true, true, true, true,
//         false, false, true, true]
// The correct answer would be 17.

// I: array consisting of sheep present and sheep missing  
// O: number of sheep present
// C: 
// E: 


// iterate through the array
// compare each array element to see if the element is present or missing
// 

   var arrOfSheep = [
     true, true, true,
     false, true, true,
     true, true, true,
     false, true, false,
     true, false, false,
     true, true, true,
     true, true, false,
     false, true, true
   ];

   function countSheep(arrOfSheep) {
     return arrOfSheep.filter(x => x === true).length;
   }

   console.log(countSheep(arrOfSheep));

