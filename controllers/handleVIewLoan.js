import { Router } from "express";
import { connection } from "../utils/dbmain.js";
import { checkApproval } from "../controllers/bussinesslogic.js";

export const handleVIewLoan = (req, res) => {
  const { loan_id } = req.params;

  if (!loan_id) {
    return res.status(400).json({ error: "Cannot find ID" }); //or We can( throw new Error())
  }
  connection.query(
    "SELECT * FROM datastore.loan_data where `Loan ID` = (?)",
    [loan_id],
    async (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Failed to find Loan data" }); //or We can( throw new Error())
      }
      const loanData = results[0];
      const customer_id = loanData["Customer ID"];
      connection.query(
        "SELECT * FROM datastore.customer_data where `Customer ID` =(?)",
        [customer_id],
        (error, userDetails) => {
          if (error) {
            return res.status(500).json({ error: "Failed to find User" }); //or We can( throw new Error())
          }

          // We have user Details and Loan Details both we can now provide response according to our need

          res.status(200).json({
            userDetails,
            loanData,
            message: "User inserted successfully",
          });
        }
      );
    }
  );
};
