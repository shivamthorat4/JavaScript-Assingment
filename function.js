//FOURTH FUNCTION ASSIGNMENT QUESTION FOURTH
var number = [2,5,7,8,9];
var newArray=[];
var SquareAllArray=function(numbers){
    for(var i=0; i<numbers.length; i++){
        newArray.push(Math.pow(numbers[i],2));
    }
    console.log(newArray);
}
//1st
function square(x) { return x * x; }
function double(x) { return x * 2; }
let composedValue(square,double,5);
console.log(composedValue(square,double,5));

