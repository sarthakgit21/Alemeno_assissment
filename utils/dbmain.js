import mysql from "mysql2";
export const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_KEY,
  database: "datastore", // Use the name of the database you created
});
