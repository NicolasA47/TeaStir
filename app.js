const express = require("express");
const app = express();
const fs = require('fs');
const port = 3000;

app.set("view engine", "ejs");
app.engine('ejs', require('ejs').renderFile);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/homepage.html");
});

//after the user hit "Take Our Survey" button, render the first survey page for them based on their user informations
app.post("/", (req, res) => {
    res.render("type", {
        //username: req.body[""]
    })
});

//render the first survey page for the user 
app.get("/type", function (req, res) {
    //res.render("type", { username: " " }) 
    console.log("rendering the type page")
});

//  after the user finishs the survey, take them to the second page
app.post("/type", (req, res) => {
    res.render("flavour", {
        //username: req.body[""]
    })
});

//render the second survey page... 
app.get("/flavour", function (req, res) {
    //res.render("type", { username: " " }) 
    console.log("rendering the flavour page")
});

//  after the user finishs the second survey, take them to the third
app.post("/flavour", (req, res) => {
    res.render("caffeine", {
        //username: req.body[""]
    })
});

//render the second survey page... 
app.get("/caffeine", function (req, res) {
    //res.render("type", { username: " " }) 
    console.log("rendering the caffeine page")
});

//after the user finishs the last survey...
app.post("/caffeine", (req, res) => {
    //something will happen, I will work on this later...
});