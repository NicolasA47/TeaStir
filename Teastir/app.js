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
// let surveyResults = new surveyData({
//     caffeineLevels: [
//         {name: "none", rating: 1},{name: "low", rating: 1}, {name: "medium", rating: 3}, {name: "high", rating: 4}
//     ],
//     categories: [
//         {name: "herbal", rating: 3},{name: "green", rating: 3},{name: "black", rating: 3},
//         {name: "white", rating: 3},{name: "rooibus", rating: 3},{name: "oolong", rating: 3},
//         {name: "pu'erh", rating: 3},{name: "maté", rating: 3}
//     ],
//     flavours:[
//         {name: "chai", rating: 4},{name: "pumkin", rating: 2},{name: "earl-grey", rating: 1},
//         {name: "coffee", rating: 0},{name: "chocolate", rating: 3},{name: "berries", rating: 3},
//         {name: "mint", rating: 4},{name: "vanilla", rating: 2},{name: "natural", rating: 1},
//         {name: "unflavoured", rating: 0},{name: "stevie-free", rating: 0},{name: "citrus", rating: 2},
//         {name: "ginger", rating: 4},{name: "hibiscus", rating: 3},{name: "jasmine", rating: 1},
//     ],
// });


mongoose.connect( url, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    app.listen (port, () => {
        console.log (`Server is running on http://localhost:${port}`);
    });
})
.catch((err) => console.log(err));


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render('homepage');                 //render the homepage
});

app.post("/start-survey", (req, res) => {
    res.render('type', {
    options : teaTypesArray,
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

    res.render('type', {
        options : teaFlavoursArray,
        name : "Flavour"
    });
});

app.post("/Flavour", (req, res) => {  /// post from category data
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
    res.render('type', {
        options : teaCaffeineArray,
        name : "CaffeineLevel"
    });
});

app.post("/CaffeineLevel", (req, res) => {  /// post from category data
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
        .then((result) =>{     
            
            let scores = calcScores(result, survey);                //if teas are found the return the teas to the response  
            console.log(scores);
            res.render('homepage');   
        })
        .catch((err)=>{                         //if error is caught then console log the error
            console.log(err);
        });
        
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
});
  


function calcScores(teaList, surveyData){
    // console.log(teaList);
    // console.log(surveyData);
    let caffeineLevels = surveyData.caffeineLevels;
    let flavours = surveyData.flavours;
    let categories = surveyData.categories;
    let scoreArray = [];
    console.log(teaList);
    teaList.forEach(tea => {
        console.log(caffeineLevels);
        console.log(tea.caffeineLevel);
        let cafScore = caffeineLevels.find(level => (level.option === tea.caffeineLevel));  
        let flavScore = flavours.find(flavour => (flavour.option === tea.flavour));
        let catScore = categories.find(category => (category.option === tea.category));
        let simScore = (flavScore.rating * 10)+(cafScore.rating * 7.5)+(catScore.rating * 7.5);
        let scoreObj = {
            teaName: tea.name,
            similarityScore: simScore,
            caffieneScore: cafScore,
            flavourScore: flavScore
        }
        scoreArray.push(scoreObj);
        return scoreArray;
    });
   
}