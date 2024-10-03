import express from "express";
import { connectDB } from "./config/database";
import calculatorRoutes from "./routes/CalculatorRoutes";

const app = express();

app.use(express.json());

app.use("/calculator", calculatorRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(5001, () => {
      console.log("Server started on port 5001");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
