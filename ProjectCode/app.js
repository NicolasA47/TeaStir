const express = require("express");
const mongoose = require("mongoose");
const teaFlavour = require('./models/teaFlavour');
const surveyData = require('./models/surveyData');
const fs = require("fs");


const app = express();
const url = 'mongodb://localhost:27017/teaStir';    //database to be used
const port = 2000;   //port for server

const teaTypesArray = ["Herbal", "Green", "Black", "White", "Matcha", "Oolong", "Rooibos"];
const teaFlavoursArray = ["Chai", "Vanilla", "EarlGrey", "Natural", "Pumpkin", "Jasmine", "Mint", "Chocolate", "Stevia-Free", "Organic"];
const teaCaffeineArray = ["Non-Caffeinated", "Low-Caffeination", "Medium-Caffeination", "High-Caffeination"];
//array's used by ejs files for options on the survey questions 


mongoose.connect( url, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    app.listen (port, () => {
        console.log (`Server is running on http://localhost:${port}`);  //gives user link to webpage where server is running
    });
})
.catch((err) => console.log(err));      //if error is caught console log it


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render('homepage');                 //render the homepage on load
});

app.post("/start-survey", (req, res) => {      //start survey, render the first question with the ejs array data for the questions
    res.render('survey-page', {
    options : teaTypesArray,
    name: "Category"
    });

});


app.post("/Category", (req, res) => {  /// post from category and create a data object
    let data = JSON.parse(req.body.surveyRatings);  
    const survey = new surveyData(      
    {
        caffeineLevels: [],
        categories: data,
        flavours: [],
    });
    
    try {//write data to JSON File
        const newData = JSON.stringify(survey);
    
        fs.writeFileSync('./survey.json', newData, 'utf8');
        console.log(`File is written successfully!`);
    
    } catch (err) {
        console.log(`Error writing file: ${err}`);
    }

    res.render('survey-page', {
        options : teaFlavoursArray,
        name : "Flavour"
    });
});


app.post("/Flavour", (req, res) => {  
    let data = JSON.parse(req.body.surveyRatings);
    try { //read data from json file

        const JSONdata = fs.readFileSync('./survey.json', 'utf8');  
        const parsedJSONdata = JSON.parse(JSONdata);

        let appendedData = parsedJSONdata;
        appendedData.flavours = data;

        try {//write data to JSON File
            const newData = JSON.stringify(appendedData);

            fs.writeFileSync('./survey.json', newData, 'utf8');
            console.log(`File is written successfully!`);
        
        } catch (err) {
            console.log(`Error writing file: ${err}`);
        }
    
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
    res.render('survey-page', {
        options : teaCaffeineArray,     //render survey-page with new data.
        name : "CaffeineLevel"
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
                caffeineLevels: appendedData.caffeineLevels,    //create a new data object to store the data into mongoose
                categories: appendedData.categories,
                flavours: appendedData.flavours,
            });

        survey.save();      //save survey data to mongoose 
        teaFlavour.find()                       //search database for teas
        .then((result) =>{     
            
          calcScores(result, survey, function(scores){      //run calcscores to generate a list of the best teas for the user
              res.render('results', {
                  teaScores: scores,
              }); 
          });           
        })
        .catch((err)=>{                         //if error is caught then console log the error
            console.log(err);
        });
        
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
});
  


function calcScores(teaList, surveyData, callback){         //take in a list of all the teas and the users survey data
    let caffeineLevels = surveyData.caffeineLevels;
    let flavours = surveyData.flavours;
    let categories = surveyData.categories;
    let scoreArray = [];
    teaList.forEach(tea => {    
        let cafScore = caffeineLevels.find(level => (level.option === tea.caffeineLevel)).rating;  
        let flavScore = flavours.find(flavour => (flavour.option === tea.flavour)).rating;
        let catScore = categories.find(category => (category.option === tea.category)).rating;
        let simScore = (flavScore* 9)+(cafScore* 7)+(catScore* 9); //scpre os from (0-4) so each score is multiplied by an amount to determine its value out of 100
        let scoreObj = {
            tea: tea,
            similarityScore: simScore,
            caffieneScore: cafScore ,   
            flavourScore: flavScore,
            categoryScore: catScore
        }
        scoreArray.push(scoreObj);
    });
    let sortedArray = scoreArray.sort((a,b) => (b.similarityScore > a.similarityScore) ? 1 : ((a.similarityScore > b.similarityScore) ? -1 : 0));
    callback(sortedArray);      //callback the now sorted data for ejs
}