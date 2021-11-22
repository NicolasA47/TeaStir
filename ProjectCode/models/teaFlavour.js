const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const teaFlavourSchema = new Schema ({      
    name: String,
    category: String,
    flavour: String,
    caffeineLevel: String,
    imagePath: String,
    link: String,
    price: String,
    tastes: String
});
        
const teaFlavour = mongoose.model ( "teaFlavour", teaFlavourSchema);

module.exports = teaFlavour;