
// Imports the mysql2 package installed previously into the node_modules
const mysql = require('mysql2');

// Imports Express
const express = require('express');

// Adds the PORT designation and the app expression
const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Creates a GET test route - get() is the chosed route method and res.json is the response method to send the response message 'Hellow World!' back to the client
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   });
// });

// Connect application to the MySQL database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Silas_8491!4544',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

// Default response for any other request (Not Found) - [handles user requests that aren't supported by the app]
// This route will override all others placed below it, so it needs to be listed as the last one.
app.use((req, res) => {
  res.status(404).end();
});

// Queries the database to test the connection -> Should return all the data in the 'candidate' table
// The [db] object is using the [query()] method, which runs the SQL query and executes the call back with all the resulting rows that matche the query
// Once this method executes the SQL command, the callback function captures the responses from the query in two variables: the [err], which is the error response, and [rows], which is the database query response
//  If there are no errors in the SQL query, the [err] value is [null]. This method is the key component that allows SQL commands to be written in a Node.js application.
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// GET or return a signle candidate from the 'candidates' table based on their id
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// Delete a candidate
// The DELETE statement has a question mark (?) that denotes a placeholder, making this a prepared statement. A prepared statement can execute the same SQL statements repeatedly using different values in place of the placeholder.
// //An additional param argument following the prepared statement provides values to use in place of the prepared statement's placeholders. Here, we're hardcoding 1 temporarily to demonstrate how prepared statements work. So this would be the same as saying DELETE FROM candidates WHERE id = 1
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Create a candidate
// Use the INSERT INTO command for the candidates table to add the values that are assigned to params. The four placeholders must match the four values in params, so we must use an array.
// Because the candidates table includes four columns—id, first_name, last_name, and industry_connected—we need four placeholders (?) for those four values. The values in the params array must match the order of those placeholders.
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Add the function that will start the Express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});