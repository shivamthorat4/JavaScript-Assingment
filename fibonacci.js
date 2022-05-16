let a = 1, b = 1, c;

console.log('Fibonacci Series :');

for (let i = 1; i <= 100; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}
