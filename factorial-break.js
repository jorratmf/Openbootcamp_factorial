// Factorial con while, if y break
let factorial = 1;
let j = 1;
while (j <= 10) {
    factorial *= j;
    if (j === 10) {
        break;
    }
    j++;
}
console.log(factorial);