import { Router } from "express";
import { CalculatorController } from "../controller/CalculatorController";

const router = Router();
const calculatorController = new CalculatorController();

router.post("/calculate", (req, res) =>
  calculatorController.calculate(req, res)
);

router.get("/calculations", (req, res) =>
  calculatorController.getCalculations(req, res)
);

export default router;
