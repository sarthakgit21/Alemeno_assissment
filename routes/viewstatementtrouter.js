import { Router } from "express";
import { handleViewStatement } from "../controllers/handleViewStatement.js";
const viewstatementtrouter = Router();
viewstatementtrouter.get("/:customer_id/:loan_id", handleViewStatement);

export default viewstatementtrouter;
