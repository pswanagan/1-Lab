// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log("The numbers add up to 50: " + isSum50);
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log("Are at least two of the numbers odd: " + isTwoOdd);
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("No numbers are over 25: " + isOver25);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log("All numbers are unique: " + isUnique);
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
// Finally, log the results.
console.log("The numbers are valid: " + isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  /* Check if all numbers are divisible by 5. Cache the result in a variable.   */

  const is5Divisible = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
  console.log("All numbers are divisible by 5: " + is5Divisible);
  // Check if the first number is larger than the last.
 const isFirstLarger = n1 > n4;
 console.log("Is the first number larger than the last number: " + isFirstLarger);
  /* Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number. */

const endingAnswer = (n2 - n1) * n3 / n4;

console.log("The answer to the arithmetic chain is: " + endingAnswer);


/**
 * Part 2
 * 
 * You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.
 */

const miles55 = 1500 / 30;
console.log(`At 55 miles per hour it will take ${miles55} gallons of gas to complete the trip.`);

const fuel55 = (miles55 * 3) < 175.
console.log(`Will the fuel budget cover the trip: ${fuel55}.`); 

const time55 = 1500 / 55;
console.log(`It will take ${time55} hours to complete trip at 55mph.`)

const miles60 = 1500 / 28;
console.log(`At 55 miles per hour it will take ${miles60} gallons of gas to complete the trip.`);

const fuel60 = (miles60 * 3) < 175.
console.log(`Will the fuel budget cover the trip: ${fuel60}.`); 

const time60 = 1500 / 60;
console.log(`It will take ${time60} hours to complete trip at 55mph.`)

