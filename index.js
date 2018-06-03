// Code your solutions in this file
function printBadges(employees) {
  for (let count = 0; count < employees.length; count++) {
    console.log(`Welcome ${employees[count]}! You are employee #${count + 1}.`);
  }
  return employees;
}

function tailsNeverFails() {
  count = 0
  while (Math.random() >= 0.5) {
    count++;
  }
  return `You got ${count} tails in a row!`;
}
