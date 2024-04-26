import { Router } from "express";
import { handleMakePayment } from "../controllers/handleMakepayment.js";
const paymentrouter = Router();

paymentrouter.get("/:customer_id/:loan_id", handleMakePayment);

export default paymentrouter;
