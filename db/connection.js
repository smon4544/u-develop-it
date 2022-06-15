// Imports the mysql2 package installed previously into the node_modules
const mysql = require('mysql2');

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

module.exports = db;