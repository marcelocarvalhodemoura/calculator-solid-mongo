import { ICalculator } from "../intefaces/ICalculator";
import { Calculator } from "../entities/Calculator";

export class CalculatorService implements ICalculator {
  private calculator: Calculator;

  /**
   * Constructs a new CalculatorService instance.
   *
   * The constructor initializes an instance of the Calculator class,
   * which is used to perform arithmetic operations.
   */
  constructor() {
    this.calculator = new Calculator();
  }

  /**
   * Add two numbers and return the result
   * @param a The first number
   * @param b The second number
   * @returns The sum of the two numbers
   */
  public add(a: number, b: number): number {
    return this.calculator.add(a, b);
  }

  /**
   * Subtract two numbers and return the result
   * @param a The first number
   * @param b The second number
   * @returns The difference of the two numbers
   */
  public subtract(a: number, b: number): number {
    return this.calculator.subtract(a, b);
  }

  /**
   * Multiply two numbers and return the result
   * @param a The first number
   * @param b The second number
   * @returns The product of the two numbers
   */
  public multiply(a: number, b: number): number {
    return this.calculator.multiply(a, b);
  }

  /**
   * Divide two numbers and return the result
   * @param a The dividend
   * @param b The divisor
   * @returns The quotient of the two numbers
   * @throws {Error} If the divisor is 0
   */
  public divide(a: number, b: number): number {
    return this.calculator.divide(a, b);
  }
}
