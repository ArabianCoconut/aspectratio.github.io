/**
 * Function to convert a fraction to a ratio
 * @param {number} numerator - The numerator of the fraction.
 * @param {number} denominator - The denominator of the fraction.
 * @returns {string} - The ratio in the form 'a : b'.
 */
function fractionToRatio(numerator, denominator) {
    // Helper function to calculate the greatest common divisor (GCD) using Euclidean algorithm
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    
    // Handle edge case for zero denominator
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }

    // Calculate the GCD of numerator and denominator
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));

    // Simplify the fraction
    const simplifiedNumerator = numerator / divisor;
    const simplifiedDenominator = denominator / divisor;

    // Format and return as a ratio
    return `${simplifiedNumerator} : ${simplifiedDenominator}`;
}

// Example usage:
const ratio = fractionToRatio(1280 , 720);
console.log(ratio);  // Output: "16: 9"
