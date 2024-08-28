// 1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.75;

let johnMass = 85;
let johnHeight = 1.80;
// 2. Calculate both their BMIs using the formula
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
let markHigherBMI = markBMI > johnBMI;

// Output the results
console.log("Mark's BMI:", markBMI.toFixed(2));
console.log("John's BMI:", johnBMI.toFixed(2));
console.log("Does Mark have a higher BMI than John?", markHigherBMI)