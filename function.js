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

//composed value

function composedValue(x){
    var doubleresult=double(x);
    var squareresult=square(doubleresult);
    console.log(squareresult);
}
function square(x){
    return x*x;
}
function double(x){
    return x*2;
}

composedValue(3);

//even

function isEven(num){return (num%2==0);}

function find(arr,isEven){
    for(i=0;i<arr.length;i++){
        if(isEven(arr[i])){
            console.log(arr[i]);
            break;
        }
    }
}

const arr=[1,3,5,4,2];
console.log(isEven(3));//-->false
console.log(isEven(4));//-->true
find(arr,isEven);//-->4

//map

function square(x){return x*x;}
function map(arr,square){
    let outp=[];
    for(i=0;i<arr.length;i++){
        outp.push(square(arr[i]));
    }
    console.log(outp)
}

const arr=[1,2,3,4,5];
map(arr,square);//-->[1,4,9,16,25]

function map1(arr,Math){
    let outp=[];
    for(i=0;i<arr.length;i++){
        outp.push(Math.sqrt(arr[i]));
    }
    console.log(outp)
}
map1([1,4,9,16,25],Math);//-->[1,2,3,4,5]
