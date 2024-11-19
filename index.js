// Initialize the array with a set of numbers
let numbers = [5, 3, 8, 1, 2];

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
    return array;
}

// Function to remove the first occurrence of a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

// Function to sort the numbers in ascending order
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum of the numbers in the array
function calculateSum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

// Function to calculate the average of the numbers in the array
function calculateAverage(array) {
    return calculateSum(array) / array.length;
}

// Main Program
console.log("Initial array:", numbers);

// Demonstrate adding a number
console.log("After adding 4:", addNumber(numbers, 4));

// Demonstrate removing a number
console.log("After removing 3:", removeNumber(numbers, 3));

// Demonstrate sorting the array
console.log("Sorted array:", sortNumbers(numbers));

// Calculate and print the sum of the numbers
console.log("Sum of numbers:", calculateSum(numbers));

// Calculate and print the average of the numbers
console.log("Average of numbers:", calculateAverage(numbers));
