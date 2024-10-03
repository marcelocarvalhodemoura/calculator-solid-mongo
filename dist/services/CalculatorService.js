"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorService = void 0;
const Calculator_1 = require("../entities/Calculator");
class CalculatorService {
    /**
     * Constructs a new CalculatorService instance.
     *
     * The constructor initializes an instance of the Calculator class,
     * which is used to perform arithmetic operations.
     */
    constructor() {
        this.calculator = new Calculator_1.Calculator();
    }
    /**
     * Add two numbers and return the result
     * @param a The first number
     * @param b The second number
     * @returns The sum of the two numbers
     */
    add(a, b) {
        return this.calculator.add(a, b);
    }
    /**
     * Subtract two numbers and return the result
     * @param a The first number
     * @param b The second number
     * @returns The difference of the two numbers
     */
    subtract(a, b) {
        return this.calculator.subtract(a, b);
    }
    /**
     * Multiply two numbers and return the result
     * @param a The first number
     * @param b The second number
     * @returns The product of the two numbers
     */
    multiply(a, b) {
        return this.calculator.multiply(a, b);
    }
    /**
     * Divide two numbers and return the result
     * @param a The dividend
     * @param b The divisor
     * @returns The quotient of the two numbers
     * @throws {Error} If the divisor is 0
     */
    divide(a, b) {
        return this.calculator.divide(a, b);
    }
}
exports.CalculatorService = CalculatorService;
