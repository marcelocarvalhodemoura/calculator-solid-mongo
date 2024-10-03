import mongoose from "mongoose";

const CalculatorSchema = new mongoose.Schema({
  operation: { type: String, required: true },
  a: { type: Number, required: true },
  b: { type: Number, required: true },
  result: { type: Number, required: true },
});

export const CalculatorModel = mongoose.model("Calculation", CalculatorSchema);

export class CalculatorRepository {
  async saveCalculation(
    operation: string,
    a: number,
    b: number,
    result: number
  ) {
    const calculation = new CalculatorModel({ operation, a, b, result });
    return await calculation.save();
  }

  async getCalculations() {
    return await CalculatorModel.find();
  }
}
