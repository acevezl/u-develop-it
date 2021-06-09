const express = require('express');

const PORT = process.env.PORT||3001;
const app = express();

// These two lines are needed for Express.js middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ch00Ch00Tr@1n',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
        console.log(rows);
});

// Delete a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
});

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Virginia', 'Woolf', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
      console.log(err);
    }
    console.log(row);
});

// Default response for not found
app.use((req,res)=> {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
