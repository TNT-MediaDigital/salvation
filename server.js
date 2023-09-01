const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Hello, TNT's!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}.`);
});