const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const school = [

    {
        'name': "Bhola Nath Nagar-SBV (Babu Ram) ",
        'rating' : "3.5/5.0"
    },
    {
        name: "Vivek Vihar-SBV",
        rating: "3.5/5.0"
    },
    {
        name: "Kanti Nagar-SBV",
        rating: "3.5/5.0"
    },
    {
        name: "Surajmal Vihar-SBV",
        rating: "3.5/5.0"
    },
    {
        name: "SBV No.1, Bhola Nath Nagar",
        rating: "3.5/5.0"
    },
    {
        name: "Anand Vihar-SKV",
        rating: "3.5/5.0"
    },
    {
        name: "Vivek Vihar-GBSS",
        rating: "3.5/5.0"
    },
    {
        name: "Bhola Nath Nagar, No.1-SKV",
        rating: "3.5/5.0"
    },
    {
        name: "Vivek Vihar- SKV",
        rating: "3.5/5.0"
    },
    {
        name: "Bhola Nath Nagar, No.3-GGSSS",
        rating: "3.5/5.0"
    },
    {
        name: "Kanti Nagar-GGSSS",
        rating: "3.5/5.0"
    },
    {
        name: "	Vivek Vihar,Phase-II-GGSSS",
        rating: "3.5/5.0"
    },
    {
        name: "Surajmal Vihar-SKV",
        rating: "3.5/5.0"
    },
    {
        name: "Surajmal Vihar-RPVV",
        rating: "3.5/5.0"
    },
    {
        name: "Jhilmil Colony-SBV",
        rating: "3.5/5.0"
    },
    {
        name: "Kiran Vihar-SKV",
        rating: "3.5/5.0"
    },
    {
        name: "Kiran Vihar-SBV",
        rating: "3.5/5.0"
    },
    {
        name: "Rajgarh Colony-SBV",
        rating: "3.5/5.0"
    },
    {
        name: "Jhilmil Colony-GGSSS",
        rating: "3.5/5.0"
    },
    {
        name: "Shahdara, Teliwara-G(Co-ed)SS",
        rating: "3.5/5.0"
    },
];



app.get('', (req, res) => {
    res.send(school);
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});