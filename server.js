
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
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Add the function that will start the Express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});