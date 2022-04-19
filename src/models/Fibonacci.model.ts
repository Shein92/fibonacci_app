import mongoose from "mongoose";

interface IFibonacciNumber {
  ticketNumber: string,
  fibonacciNumber: number
}

const fibonacciNumberSchema = new mongoose.Schema<IFibonacciNumber>({
  ticketNumber: {
    type: String
  },
  fibonacciNumber: {
    type: Number
  }
});

const FibonacciNumber = mongoose.model('FibonacciNumber', fibonacciNumberSchema);

export default FibonacciNumber;