import { Router } from "express";
import { connection } from "../utils/dbmain.js";
import { checkApproval } from "../controllers/bussinesslogic.js";

export const handleCreateloan = (req, res) => {
  const { cutomer_id, loan_amount, interest_rate, tenure } = req.body;

  if (!cutomer_id || !loan_amount || !interest_rate || !tenure) {
    return res.status(400).json({ error: "Fill all details" });
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
  const loan_id = Math.floor(1000 + Math.random() * 9000);
  var date_of_approval = new Date(Date.now());
  var days = loan_amount / monthly_installment;
  var date_of_end = new Date(Date.now() + 1000 * 60 * 60 * 24 * { days });
  connection.query(
    "insert into loan_data values (?,?,?,?,?,?,?,?,?)",
    [
      cutomer_id,
      loan_id,
      loan_amount,
      tenure,
      interest_rate,
      monthly_installment,
      0,
      date_of_approval,
      date_of_end,
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting user into the database: " + error.stack);
        return res.status(500).json({ error: "Failed to insert data" });
      }

      // Send a success response
      res.status(200).json({
        cutomer_id,
        loan_id,
        loan_amount,
        interest_rate,
        tenure,
        message: "User inserted successfully",
      });
    }
  );
};
