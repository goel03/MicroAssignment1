// const dotenv = require("dotenv");  //for env file
// dotenv.config(); 


const express = require("express");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use((req, res, next) =>
    res.status(404).send("You are looking for something that we not have!")
);

app.use((err, req, res, next) => res.status(500).send("Something went wrong!"));

const PORT = process.env.PORT || 3000;
const HOST = process.env.host || "localhost";

app.listen(PORT, () => {
    console.log(` Shuffle app listening at http://${HOST}:${PORT}`);
});