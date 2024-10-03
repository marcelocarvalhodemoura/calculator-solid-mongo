export class Calculator {
  private result: number = 0;

  /**
   * Add two numbers and return the result
   * @param a The first number
   * @param b The second number
   * @returns The sum of the two numbers
   */
  public add(a: number, b: number): number {
    this.result = a + b;
    return this.result;
  }

  /**
   * Subtract two numbers and return the result
   * @param a The first number
   * @param b The second number
   * @returns The difference of the two numbers
   */
  public subtract(a: number, b: number): number {
    this.result = a - b;
    return this.result;
  }

  /**
   * Multiply two numbers and return the result
   * @param a The first number
   * @param b The second number
   * @returns The product of the two numbers
   */
  public multiply(a: number, b: number): number {
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
  public divide(a: number, b: number): number {
    if (b === 0) throw new Error("Cannot divide by 0");
    this.result = a / b;
    return this.result;
  }
}
