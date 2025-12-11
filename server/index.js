import express from "express";

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
    res.send("Welcome to Website API !")
});

app.listen(port, () => {
    console.log("Server is ON !")
})