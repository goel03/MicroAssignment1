const dotenv = require("dotenv");  //for env file
dotenv.config(); 

const initializeDatabase = require("./config/db");
const express = require("express");

const admin = require("./routes/admin");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeDatabase();

app.get("/api/health", (req, res) => {
    res.send({
        time: new Date(),
        server: "Shuffle Backend",
        status: "Active",
    });
});


app.use("/api/admin", admin);
app.use("/api/discover", discover);

//middleware

app.use((req, res, next) =>
    res.status(404).send("You are looking for something that we not have!")
);


const PORT = process.env.PORT || 3000;
const HOST = process.env.host || "localhost";

app.listen(PORT, () => {
    console.log(` Shuffle app listening at http://${HOST}:${PORT}`);
});