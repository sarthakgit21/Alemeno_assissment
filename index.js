import express from "express";
import dotenv from "dotenv/config";
import { dbconnect } from "./db/dbconnect.js";
import registerrouter from "./routes/register.js";
import checkrouter from "./routes/checkrouter.js";
import createrouter from "./routes/createlaon.js";
import viewrouter from "./routes/viewloan.js";
import paymentrouter from "./routes/makepayment.js";
import viewstatementtrouter from "./routes/viewstatementtrouter.js";

//************************************************************************ */
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 8000;

//************************************************************************** */

dbconnect();
app.use("/register", registerrouter);
app.use("/check-eligibility", checkrouter);
app.use("/create-loan", createrouter);
app.use("/view-loan", viewrouter);
app.use("/make-payment", paymentrouter);
app.use("/view-statement", viewstatementtrouter);

app.get("/",(req,res)=>res.send("hi"));

app.listen(PORT, () => {
  console.log("Server running at PORT", PORT);
});
