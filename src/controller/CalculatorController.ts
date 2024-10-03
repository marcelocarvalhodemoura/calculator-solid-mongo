import { Request, Response } from "express";
import { CalculatorService } from "../services/CalculatorService";
import { CalculatorRepository } from "../repositories/CalculatorRepository";

export class CalculatorController {
  private calculatorService: CalculatorService;
  private calculatorRepository: CalculatorRepository;
  constructor() {
    this.calculatorService = new CalculatorService();
    this.calculatorRepository = new CalculatorRepository();
  }

  async calculate(req: Request, res: Response) {
    const { operation, a, b } = req.body;
    let result: number;

    try {
      switch (operation) {
        case "add":
          result = this.calculatorService.add(Number(a), Number(b));
          break;
        case "subtract":
          result = this.calculatorService.subtract(Number(a), Number(b));
          break;
        case "multiply":
          result = this.calculatorService.multiply(Number(a), Number(b));
          break;
        case "divide":
          result = this.calculatorService.divide(Number(a), Number(b));
          break;
        default:
          throw new Error("Invalid operation");
      }
      await this.calculatorRepository.saveCalculation(
        operation,
        Number(a),
        Number(b),
        result
      );
      res.json({ result });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCalculations(req: Request, res: Response) {
    const calculations = await this.calculatorRepository.getCalculations();
    res.json({ calculations });
  }
}
