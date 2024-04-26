import { Router } from "express";
import { connection } from "../utils/dbmain.js";
import { checkApproval } from "../controllers/bussinesslogic.js";
export const handleViewStatement = (req, res) => {
  const { customer_id, loan_id } = req.params;
  if (!customer_id || !loan_id) {
    return res.status(500).json({ error: "Failed to find data" }); //or We can( throw new Error())
  }
  connection.query(
    "SELECT * FROM datastore.loan_data where `Loan ID` = (?)",
    [loan_id],
    async (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Failed to find data" }); //or We can( throw new Error())
      }
      const maindata = results;
      connection.query(
        "SELECT * FROM datastore.customer_data where `Customer ID` =(?)",
        [customer_id],
        (error, Userdetails) => {
          if (error) {
            return res.status(500).json({ error: "Failed to find User" }); //or We can( throw new Error())
          }
          // WE CAN CALCULATE FIND THE DETAILE HERE AND RETURN REQUIRED LOAN DETAILS
          res.status(200).json({
            Userdetails,
            maindata,
            message: "User inserted successfully",
          });
        }
      );
    }
  );
};
