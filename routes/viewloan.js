import { Router } from "express";
import { handleVIewLoan } from "../controllers/handleVIewLoan.js";
const viewrouter = Router();

viewrouter.get("/:loan_id", handleVIewLoan);

export default viewrouter;
