"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor() {
        this.result = 0;
    }
    /**
     * Add two numbers and return the result
     * @param a The first number
     * @param b The second number
     * @returns The sum of the two numbers
     */
    add(a, b) {
        this.result = a + b;
        return this.result;
    }
    /**
     * Subtract two numbers and return the result
     * @param a The first number
     * @param b The second number
     * @returns The difference of the two numbers
     */
    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }
    /**
     * Multiply two numbers and return the result
     * @param a The first number
     * @param b The second number
     * @returns The product of the two numbers
     */
    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }
    /**
     * Divide two numbers and return the result
     * @param a The dividend
     * @param b The divisor
     * @returns The quotient of the two numbers
     * @throws {Error} If the divisor is 0
     */
    divide(a, b) {
        if (b === 0)
            throw new Error("Cannot divide by 0");
        this.result = a / b;
        return this.result;
    }
}
exports.Calculator = Calculator;
