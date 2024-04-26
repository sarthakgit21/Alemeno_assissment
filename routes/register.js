import { Router } from "express";
import { handelRegister } from "../controllers/handleRegister.js";
const registerrouter = Router();

registerrouter.post("/", handelRegister);

export default registerrouter;
