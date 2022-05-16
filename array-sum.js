//using for....
var numbers = [2,4,6,12,8,10];
var i;
var sum = 0;
for(i = 0;i< numbers.length;i++)
sum += numbers[i]; 
console.log(sum);   

//using while........
var numbers = [2,4,6,12,8,10];
var i = 0; 
var sum = 0;
while(i < numbers.length) {
    sum += numbers[i]; 
    i++;
}
console.log(sum);

//do...while
var numbers = [2,4,6,12,8,10];
var i = 0; 
var sum = 0;
do{
sum += numbers[i]; 
    i++;
}
while(i < numbers.length)

console.log(sum);
