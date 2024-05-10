const express = require("express");
const cors = require("cors");
const db = require("./db/config");
const empRouter = require("./routes/empRoutes");
const morgan = require("morgan");


const app = express();
const port = 8877;

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/emp", empRouter);

app.listen(8877, () => {
    db.connect((err) => {
        if (err) {
            throw err;
        }
        console.log("connected.")
    })
    console.log(`running on port ${port}`);
})