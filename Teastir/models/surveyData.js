const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const surveyDataSchema = new Schema ({      
    caffeineLevels: Array,
    categories: Array,
    flavours: Array,
});
        
const surveyData = mongoose.model ( "surveyData", surveyDataSchema);

module.exports = surveyData;