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

// app.get('/', (req, res) => {
//     res.json({
//         message: `It's alive!`
//     });
// });

// Default response for not found
app.use((req,res)=> {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
