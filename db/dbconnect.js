import mysql from "mysql2";
import { connection } from "../utils/dbmain.js";

export const dbconnect = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database: " + err.stack);
      return;
    }
    console.log("Connected to the database as ID " + connection.threadId);
  });
};
