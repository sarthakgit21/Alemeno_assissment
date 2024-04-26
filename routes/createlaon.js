import { Router } from "express";
import { handleCreateloan } from "../controllers/handleCreateloan.js";
const createrouter = Router();

createrouter.post("/", handleCreateloan);

export default createrouter;
