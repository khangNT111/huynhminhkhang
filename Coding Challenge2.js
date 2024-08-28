// 1. Store Mark's and John's mass and height in variables
let markMass = 78; // kg
let markHeight = 1.75; // meters

let johnMass = 85; // kg
let johnHeight = 1.80; // meters

// 2. Calculate both their BMIs using the formula
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
let markHigherBMI = markBMI > johnBMI;

// 4. Print a nice output to the console using template literals
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}