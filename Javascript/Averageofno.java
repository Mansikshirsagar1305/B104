let n = 4;
let sum = 0;

let numbers = [10, 20, 30, 40];

for (let i = 0; i < n; i++) {
    sum = sum + numbers[i];
}

let average = sum / n;

console.log("Sum:", sum);
console.log("Average:", average);
