const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const userRoute = require('./routes/user.routes');

// require('dotenv').config();


const app = express();
const port = 2323;

app.use(express.json());

// handing CROS policy
app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//route
// app.use('/product', productRoute)
app.use('/user', userRoute)

// connect to MongoDB database
mongoose.connect('mongodb+srv://tiendatyenbai2001:123456abc@cluster0.effb6vr.mongodb.net/dsuit')
    .then(() => {
        console.log("Connected to MongoDB successfully.")
        app.listen(port, () => {
            console.log(`Listening on port ${port}!`);
        });
    })
    .catch(err => console.error(err));