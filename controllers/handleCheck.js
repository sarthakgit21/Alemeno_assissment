import { Router } from "express";
import { connection } from "../utils/dbmain.js";
import { checkApproval } from "../controllers/bussinesslogic.js";
export const handleCheckRouter = (req, res) => {
  const { cutomer_id, loan_amount, interest_rate, tenure } = req.body;

  if (!cutomer_id || !loan_amount || !interest_rate || !tenure) {
    return res.status(400).json({ error: "Fill all details" }); //or We can( throw new Error())
  }

  const { values, corrected_interest_rate } = checkApproval(
    cutomer_id,
    loan_amount,
    interest_rate,
    tenure
  );
  var approval = values;
  var monthly_installment = loan_amount / tenure;
  const interest = monthly_installment * interest_rate;
  monthly_installment += interest;
  // Send a success response
  res.status(200).json({
    cutomer_id,
    approval,
    interest_rate,
    corrected_interest_rate,
    tenure,
    monthly_installment,
    message: "Loan data status updated",
  });
};
