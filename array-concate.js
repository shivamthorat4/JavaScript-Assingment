//Method 1
let arr1 = [3,4,5];
let arr2 = [6,7,8];

console.log("Array after Concatination : "+ arr1.concat(arr2));

//Method 2

const arr3 = [10, 11, 12];
const arr4 = [13,14,15];
let run = 0, first = 0, second = 0;
const newArr = [];
while(run < arr3.length + arr4.length){
   if(first > second){
      newArr[run] = arr4[second];
      second++;
   }else{
      newArr[run] = arr3[first];
      first++;
   }
   run++;
};
console.log("------------------------------------------")
console.log("Array after concatination : "+ newArr);
