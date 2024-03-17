// Helper function: Calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
  }
  
  // Helper function: Check if a number is prime
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Helper function: Convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Example usage of helper functions
  console.log("Area of a rectangle with width 5 and height 3:", calculateRectangleArea(5, 3)); // Output: 15
  console.log("Is 7 a prime number?", isPrime(7)); // Output: true
  console.log("Is 10 a prime number?", isPrime(10)); // Output: false
  console.log("100 degrees Celsius in Fahrenheit:", celsiusToFahrenheit(100)); // Output: 212
  