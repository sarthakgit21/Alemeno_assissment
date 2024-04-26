import { Router } from "express";
import { handleCheckRouter } from "../controllers/handleCheck.js";
const checkrouter = Router();

checkrouter.post("/", handleCheckRouter);

export default checkrouter;
