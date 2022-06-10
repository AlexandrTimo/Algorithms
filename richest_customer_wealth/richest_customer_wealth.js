// -- Richest Customer Wealth --

// Regular solution
var maximumWealth = function (accounts) {
  let wealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let customerSum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerSum += accounts[i][j];
    }
    wealth = Math.max(wealth, customerSum);
  }
  return wealth;
};

// Solution with methods
var maximumWealth2 = function (accounts) {
  return accounts.reduce((customer, bank) =>
    Math.max(customer, 
        bank.reduce((sum, account) => sum + account, 0)
    ), 0
  );
};

// Example 1
console.log(maximumWealth2([[1, 2, 3],[3, 2, 1],]));

// Example 2
console.log(maximumWealth([[1, 5],[7, 3],[3, 5],]));

// Example 3
console.log(maximumWealth([[2, 8, 7],[7, 1, 3],[1, 9, 5],]));


