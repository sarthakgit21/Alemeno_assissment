import { Router } from "express";
import { connection } from "../utils/dbmain.js";

export const handelRegister = (req, res) => {
  // console.log(req.body);
  const { first_name, last_name, age, monthly_income, phone_number } = req.body;

  if (!first_name || !last_name || !age || !monthly_income || !phone_number) {
    return res.status(400).json({ error: "Fill all details" });
  }

  // Insert the new user into the database
  var approved_limit = 36 * monthly_income;
  approved_limit = Math.floor(approved_limit / 100000);
  const cutomer_id = Math.floor(1000 + Math.random() * 9000);
  console.log(approved_limit, cutomer_id);
  connection.query(
    "insert into customer_data values (?,?,?,?,?,?,?,?)",
    [
      cutomer_id,
      first_name,
      last_name,
      age,
      phone_number,
      monthly_income,
      approved_limit,
      0,
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting user into the database: " + error.stack);
        return res.status(500).json({ error: "Failed to insert data" }); //or We can( throw new Error())
      }

      // Send a success response
      res.status(200).json({
        cutomer_id,
        first_name,
        last_name,
        age,
        phone_number,
        monthly_income,
        approved_limit,
        message: "User inserted successfully",
      });
    }
  );
};
