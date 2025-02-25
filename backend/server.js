// MongoDB Connection
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
    .then(() => {
        const now = new Date().toLocaleString();
        console.log(`[${now}] ✅ MongoDB Connection Success!`);
    })
    .catch((err) => {
        const now = new Date().toLocaleString();
        console.error(`[${now}] ❌ MongoDB Connection Failed:`, err);
    });

app.listen(PORT, () => {
    const now = new Date().toLocaleString();
    console.log(`[${now}] 🚀 Server is up and running on port number: ${PORT}`);
});

//Product and cart page

