const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

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

require("./app/routes/test.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}.`);
});