"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorController = void 0;
const CalculatorService_1 = require("../services/CalculatorService");
const CalculatorRepository_1 = require("../repositories/CalculatorRepository");
class CalculatorController {
    constructor() {
        this.calculatorService = new CalculatorService_1.CalculatorService();
        this.calculatorRepository = new CalculatorRepository_1.CalculatorRepository();
    }
    calculate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { operation, a, b } = req.body;
            let result;
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
                yield this.calculatorRepository.saveCalculation(operation, Number(a), Number(b), result);
                res.json({ result });
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getCalculations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const calculations = yield this.calculatorRepository.getCalculations();
            res.json({ calculations });
        });
    }
}
exports.CalculatorController = CalculatorController;
