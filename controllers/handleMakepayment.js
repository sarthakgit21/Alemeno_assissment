import { Router } from "express";
import { connection } from "../utils/dbmain.js";
import { checkApproval } from "../controllers/bussinesslogic.js";

export const handleMakePayment = (req, res) => {
  const { customer_id, loan_id } = req.params;
  console.log(customer_id, loan_id);
  if (!customer_id || !loan_id) {
    return res.status(500).json({ error: "Failed to find data" });
  }
  connection.query(
    "SELECT * FROM datastore.loan_data where `Loan ID` = (?)",
    [loan_id],
    async (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Failed to find Loan data" }); //or We can( throw new Error())
      }
      const maindata = results[0];
      connection.query(
        "SELECT * FROM datastore.customer_data where `Customer ID` =(?)",
        [customer_id],
        (error, Userdetails) => {
          if (error) {
            return res.status(500).json({ error: "Failed to find User" }); //or We can( throw new Error())
          }
          /// WE CAN CALCULATE EMI HERE
          res.status(200).json({
            message: "User inserted successfully",
          });
        }
      );
    }
  );
};
