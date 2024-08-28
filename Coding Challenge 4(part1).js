function calculateTip(bill) {
    // Calculate tip using ternary operator
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

    // Calculate the total value (bill + tip)
    let totalValue = bill + tip;

    // Print the result
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
}

// Test data
calculateTip(275);
calculateTip(40);
calculateTip(430);