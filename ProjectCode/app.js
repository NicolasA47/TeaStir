const express = require("express");
const mongoose = require("mongoose");
const teaFlavour = require('./models/teaFlavour');
const surveyData = require('./models/surveyData');
const fs = require("fs");
const { append } = require("express/lib/response");


const app = express();
const url = 'mongodb://localhost:27017/teaStir';
const port = 2000;

const teaTypesArray = ["Herbal", "Green", "Black", "White", "Matcha", "Oolong", "Rooibos"];
const teaFlavoursArray = ["Chai", "Vanilla", "EarlGrey", "Natural", "Pumpkin", "Jasmine", "Mint", "Chocolate", "Stevia-Free", "Organic"];
const teaCaffeineArray = ["Non-Caffeinated", "Low-Caffeination", "Medium-Caffeination", "High-Caffeination"];


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => console.log(err));


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render('homepage');                 //render the homepage
});

app.post("/start-survey", (req, res) => {
    res.render('survey-page', {
        options: teaTypesArray,
        name: "Category"
    });

});

app.post("/Category", (req, res) => {  /// post from category data
    let data = JSON.parse(req.body.surveyRatings);
    const survey = new surveyData(
        {
            caffeineLevels: [],
            categories: data,
            flavours: [],
        });

    try {//write data

        // convert JSON object to a string
        const newData = JSON.stringify(survey);

        // write file to disk
        fs.writeFileSync('./survey.json', newData, 'utf8');
        console.log(`File is written successfully!`);

    } catch (err) {
        console.log(`Error writing file: ${err}`);
    }

    res.render('survey-page', {
        options: teaFlavoursArray,
        name: "Flavour"
    });
});

app.post("/Flavour", (req, res) => {  /// post from flavour data
    let data = JSON.parse(req.body.surveyRatings);
    try { //read data

        const JSONdata = fs.readFileSync('./survey.json', 'utf8');
        const parsedJSONdata = JSON.parse(JSONdata);

        let appendedData = parsedJSONdata;
        appendedData.flavours = data;

        try {//write data
            const newData = JSON.stringify(appendedData);

            // write file to disk
            fs.writeFileSync('./survey.json', newData, 'utf8');
            console.log(`File is written successfully!`);

        } catch (err) {
            console.log(`Error writing file: ${err}`);
        }

    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
    res.render('survey-page', {
        options: teaCaffeineArray,
        name: "CaffeineLevel"
    });
});

app.post("/CaffeineLevel", (req, res) => {  /// post from caffeine data
    let data = JSON.parse(req.body.surveyRatings);
    try { //read data

        const JSONdata = fs.readFileSync('./survey.json', 'utf8');
        const parsedJSONdata = JSON.parse(JSONdata);

        let appendedData = parsedJSONdata;
        appendedData.caffeineLevels = data;
        const survey = new surveyData(
            {
                caffeineLevels: appendedData.caffeineLevels,
                categories: appendedData.categories,
                flavours: appendedData.flavours,
            });

        survey.save();
        teaFlavour.find()                       //search database for teas
            .then((result) => {

                calcScores(result, survey, function (scores) {
                    res.render('results', {
                        teaScores: scores,
                    });
                });
            })
            .catch((err) => {                         //if error is caught then console log the error
                console.log(err);
            });

    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
});



function calcScores(teaList, surveyData, callback) {
    let caffeineLevels = surveyData.caffeineLevels;
    let flavours = surveyData.flavours;
    let categories = surveyData.categories;
    let scoreArray = [];
    teaList.forEach(tea => {
        let cafScore = caffeineLevels.find(level => (level.option === tea.caffeineLevel)).rating;
        let flavScore = flavours.find(flavour => (flavour.option === tea.flavour)).rating;
        let catScore = categories.find(category => (category.option === tea.category)).rating;
        let simScore = (flavScore * 9) + (cafScore * 7) + (catScore * 9);
        let scoreObj = {
            tea: tea,
            similarityScore: simScore,
            caffieneScore: cafScore,
            flavourScore: flavScore,
            categoryScore: catScore
        }
        scoreArray.push(scoreObj);
    });

    let sortedArray = scoreArray.sort((a, b) => 
    (b.similarityScore > a.similarityScore) ? 1 : ((a.similarityScore > b.similarityScore) ? -1 : 0));  
    //sorts array from largest similarity score to smallest

    callback(sortedArray);
}

app.post("/getuser", (req, res) => {
    res.render('user', {

    });
});
