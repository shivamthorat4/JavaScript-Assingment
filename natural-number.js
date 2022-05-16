var num = ParseInt(prompt('Enter a positive integer: '));

let sum = 0;
for (let i = 1; i <= num; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
