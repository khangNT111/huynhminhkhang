// Function to calculate BMI
function calculateBMI(mass, height) {
    return mass / (height * height);
}

// Test Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Calculate BMIs for Test Data 1
let markBMI1 = calculateBMI(markMass1, markHeight1).toFixed(1); // Round to 1 decimal place
let johnBMI1 = calculateBMI(johnMass1, johnHeight1).toFixed(1);

// Print result using if/else statement
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else if (johnBMI1 > markBMI1) {
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI1})!`);
}

// Test Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Calculate BMIs for Test Data 2
let markBMI2 = calculateBMI(markMass2, markHeight2).toFixed(1); // Round to 1 decimal place
let johnBMI2 = calculateBMI(johnMass2, johnHeight2).toFixed(1);

// Print result using if/else statement
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else if (johnBMI2 > markBMI2) {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI2})!`);
}