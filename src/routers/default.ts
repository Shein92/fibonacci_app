import { Router, Request, Response } from "express";
import mongoose from "mongoose";
import FibonacciNumber from "../models/Fibonacci.model";
import fibonacci from "../util/fibonacci";

const router = Router();

router.post("/input", async (req: Request, res: Response) => {
  try {
    const { number } = req.body;
    const fibonacciNum = fibonacci(+number);

    const ticketNum = Math.round(Math.random() * 10000);

    const instance = new FibonacciNumber({
      ticketNumber: ticketNum,
      fibonacciNumber: fibonacciNum,
    });

    await instance.save();

    return res.send({
      ticket: ticketNum,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/output", async (req: Request, res: Response) => {
  const { ticket } = req.query;

  const requestedNumber = await FibonacciNumber.findOne({
    ticketNumber: ticket,
  });

  if (!requestedNumber) {
    return res.status(404).send({
      message: "not found",
    });
  }

  return res.send({
    Fibonacci: requestedNumber.fibonacciNumber
  })
});

export default router;
