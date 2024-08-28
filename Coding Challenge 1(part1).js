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
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Check if Mark has a higher BMI than John
let markHigherBMI1 = markBMI1 > johnBMI1;

console.log(`Test Data 1 - Mark's BMI: ${markBMI1}, John's BMI: ${johnBMI1}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI1}`);

// Test Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Calculate BMIs for Test Data 2
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Check if Mark has a higher BMI than John
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`Test Data 2 - Mark's BMI: ${markBMI2}, John's BMI: ${johnBMI2}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);