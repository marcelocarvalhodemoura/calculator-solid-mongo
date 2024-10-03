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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorRepository = exports.CalculatorModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CalculatorSchema = new mongoose_1.default.Schema({
    operation: { type: String, required: true },
    a: { type: Number, required: true },
    b: { type: Number, required: true },
    result: { type: Number, required: true },
});
exports.CalculatorModel = mongoose_1.default.model("Calculation", CalculatorSchema);
class CalculatorRepository {
    saveCalculation(operation, a, b, result) {
        return __awaiter(this, void 0, void 0, function* () {
            const calculation = new exports.CalculatorModel({ operation, a, b, result });
            return yield calculation.save();
        });
    }
    getCalculations() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield exports.CalculatorModel.find();
        });
    }
}
exports.CalculatorRepository = CalculatorRepository;
