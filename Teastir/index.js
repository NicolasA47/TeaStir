const express = require ( "express" );
const app = express();
const fs = require('fs');
const port = 3000; 

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.listen (port, () => {
    console.log (`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/homepage.html");
});