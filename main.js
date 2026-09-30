Explain the differences between var, let, and const in JavaScript regarding variable scope, hoisting, and reassignment.
if (true) {
  var x = 10;
}
  if (true) {
  let y = 20;
  const z = 30;Explain the differences between var, let, and const in JavaScript regarding variable scope, hoisting, and reassignment.
  }

console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined

Write an if...else if...else statement that evaluates a variable representing a movie ticket buyer's age. The code should output different pricing tiers: children under 5 get in free, youth aged 5 to 17 get a child discount, adults aged 18 to 64 pay full price, and seniors 65 and older get a senior discount.

let age = 25; // Change this value to test different ages

if (age < 5) {
    console.log("Ticket Price: Free");
} else if (age <= 17) {
    console.log("Ticket Price: Child Discount");
} else if (age <= 64) {
    console.log("Ticket Price: Full Price (Adult)");
} else {
    console.log("Ticket Price: Senior Discount");
}


determine which block executes and justify your answer based on JavaScript's type conversion rules.
let str = "0";
let num = 0;

if (str && num) {
  console.log("Block A");
} else if (str || num) {
  console.log("Block B");
} else {
  console.log("Block C");
}

write a for loop that iterates through an array of numbers but skips every even number and stops entirely if it encounters a negative number
const numbers = [5, 11, 4, 13, 9, 22, 17, -3, 21, 8];

for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];

  // Stop the loop immediately if a negative number is found
  if (current < 0) {
    console.log(`Encountered negative number (${current}). Terminating loop.`);
    break;
  }

  // Skip even numbers using the modulo operator
  if (current % 2 === 0) {
    continue;
  }

  // Process odd numbers
  console.log(`Odd number: ${current}`);
}

Provide a code example where a do...while loop would behave differently than a standard while loop with the same condition.
const initialCount = 10;

// 1. Standard while loop
console.log("--- Standard while loop ---");
let countWhile = initialCount;

while (countWhile < 5) {
  console.log(`While loop ran. Count is: ${countWhile}`);
  countWhile++;
}
// Output: (Nothing is logged because 10 < 5 is false at the start)


// 2. do...while loop
console.log("--- do...while loop ---");
let countDoWhile = initialCount;

do {
  console.log(`do...while loop ran. Count is: ${countDoWhile}`);
  countDoWhile++;
} while (countDoWhile < 5);
// Output: "do...while loop ran. Count is: 10"