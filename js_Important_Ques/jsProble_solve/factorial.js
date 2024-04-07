function factorial(num) {
    if (num < 1 || num > 18) {
        return "Input out of range. Please enter a number between 1 and 18.";
    }
    else{
        if (num == 1) {
            return 1;
        }
        else{
            return num *  factorial(num-1);
        }
    }
   
}
// Test cases
console.log(factorial(4)); // Output: 24
console.log(factorial(10)); // Output: 3628800
console.log(factorial(0)); // Output: Input out of range. Please enter a number between 1 and 18.
console.log(factorial(20)); // Output: Input out of range. Please enter a number between 1 and 18.


