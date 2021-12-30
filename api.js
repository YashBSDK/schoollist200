const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const school = [
    {School:"Bhola Nath Nagar-SBV (Babu Ram)",ID:1001001},
];



app.get('', (req, res) => {
    res.send(school);
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});