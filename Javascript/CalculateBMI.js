
let weight = 70; 
let height = 1.75; 


let bmi = weight / (height * height);

console.log("Weight (kg): " + weight);
console.log("Height (m): " + height);
console.log("BMI: " + bmi.toFixed(2));


if (bmi < 18.5) {
    console.log("Category: Underweight");
}
else if (bmi < 25) {
    console.log("Category: Normal weight");
}
else if (bmi < 30) {
    console.log("Category: Overweight");
}
else {
    console.log("Category: Obesity");
}
