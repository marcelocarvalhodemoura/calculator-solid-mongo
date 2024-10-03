"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CalculatorController_1 = require("../controller/CalculatorController");
const router = (0, express_1.Router)();
const calculatorController = new CalculatorController_1.CalculatorController();
router.post("/calculate", (req, res) => calculatorController.calculate(req, res));
router.get("/calculations", (req, res) => calculatorController.getCalculations(req, res));
exports.default = router;
