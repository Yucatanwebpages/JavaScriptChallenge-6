// Functions


const calcTip = function (bill) {

    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

}
// Function test
console.log(calcTip(100));

// Array bills

bills = [125, 555, 44];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
totalBill = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

console.log(bills, tips, totalBill)

