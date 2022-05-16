let sum = 0;
for (let i = 1; i <= 17; i++) {
    if(i%3==0 || i%5==0)
    sum += i;
}

console.log('The sum of natural numbers (multiples of 3 or 5):', sum);
