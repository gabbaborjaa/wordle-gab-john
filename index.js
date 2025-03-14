const express = require("express");
const path = require('path');
const PORT = 8000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const answer = req.query.answer;
    const maxAttempts = req.query.maxAttempts;
    res.render("index", { answer, maxAttempts });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})