// Function to calculate average score
function averageScore(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// Function to determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    // Step 1: Calculate average scores
    const dolphinsAvg = averageScore(dolphinsScores);
    const koalasAvg = averageScore(koalasScores);

    // Step 2: Compare scores and apply the rules
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log(`Dolphins win with an average score of ${dolphinsAvg}`);
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log(`Koalas win with an average score of ${koalasAvg}`);
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log(`It's a draw with both teams having an average score of ${dolphinsAvg}`);
    } else {
        console.log("No team wins the trophy.");
    }
}

// Test Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];
console.log("Test Data 1:");
determineWinner(dolphinsScores1, koalasScores1);

// Test Data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];
console.log("\nTest Data Bonus 1:");
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);

// Test Data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];
console.log("\nTest Data Bonus 2:");
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);