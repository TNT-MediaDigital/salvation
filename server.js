require('dotenv').config()
const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
// Passport Configuration

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./app/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced database");
    })
    .catch((err) => {
        console.log("Failed to sync database " + err.message);
    });

app.get("/", (req, res) => {
    res.json({ message: "Hello, TNT's!" });
});

adminBoard = require("./app/controllers/user.controller")

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/test.routes')(app);


const PORT = process.env.PORT || '5000';
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
