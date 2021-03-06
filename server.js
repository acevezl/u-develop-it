const express = require('express');

const PORT = process.env.PORT||3001;
const app = express();

// These two lines are needed for Express.js middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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
