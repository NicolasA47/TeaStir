const mongoose = require( "mongoose" );
const teaFlavour = require("./ProjectCode/models/teaFlavour");

mongoose.connect( "mongodb://localhost:27017/teaStir", //connection established with database
                { useNewUrlParser: true, 
                  useUnifiedTopology: true});

//Function to add teas into the db
function AddTea(teaName,teaCateg,teaFlv,teaCaff,teaImg, teaLink,teaPrice,teaTastes){  //function to insert data into database

  flavour = new teaFlavour({
    name: teaName,
    category: teaCateg,
    flavour: teaFlv,
    caffeineLevel: teaCaff,
    imagePath: "../Images/teas/"+teaImg,
    link: "https://www.davidstea.com/ca_en/"+teaLink,
    price: "$"+teaPrice,
    tastes: teaTastes
  });
  
  flavour.save();

}
// ***************note to project team********

//  category:                           flav:


//  black                    chai, vanilla, earl grey
//  white                    natural, pumpkin, jasmine
//  herbal                   chai, vanilla, mint, chocolate
//  green                     stevia free, organic, mint, chocolate
//  matcha drink mix         chai, mint, earl grey
//  oolong                   chai, natural
//  rooibos                  chai, vanilla, earl grey, mint, chocolate


// a tea oject


//  name: chocolate chilli chai,
//  category: black,
//  flavour: chai,
//  caffeineLevel: high,
//  imagePath:  ../Images/teas/chocolate-chili-chai.jpg
//  link: https://www.davidstea.com/ca_en/tea/tea-by-flavour/chai/chocolate-chili-chai/10248DT01VAR004087.html?cgid=chai-tea#prefn1=teaBlend&prefv1=1&start=1
//  price: $9.98
//  tastes: A perfectly balanced blend of rich black tea and chocolate with a hint of chili pepper


// ******************************** */

// Adding the following teas to db 
// chai - high caff
AddTea("chocolate chili chai","Black","Chai","High-Caffeination", "chocolate-chili-chai.jpg","tea/tea-by-flavour/chai/chocolate-chili-chai/10248DT01VAR004087.html?cgid=chai-tea#prefn1=teaBlend&prefv1=1&start=1","9.98","A perfectly balanced blend of rich black tea and chocolate with a hint of chili pepper.");

AddTea("vanilla chai organic","Black","Chai","High-Caffeination", "vanilla-chai-organic.jpg","tea/tea-by-flavour/chai/organic-vanilla-chai/10463DT01VAR0022849.html?cgid=chai-tea","8.98","Deliciously rich, spicy and sweet with a hint of creaminess");

//chai- caf medium
AddTea("pumpkin chai","Black","Chai","Medium-Caffeination", "pumpkin-chai.jpg", "tea/pumpkin-chai/10776DT01VAR0074207.html#q=pumpkin%2Bchai&lang=en_CA&start=1", "8.98","Rich, spice-filled and comforting, with a hint of caramel – like a slice of pumpkin pie!");

AddTea("mocha chai","Black","Chai","Medium-Caffeination", "mocha-chai.jpg", "tea/tea-by-flavour/chai/mocha-chai/10921DT01VAR0092098.html?cgid=chai-tea", "9.98","A unique chocolate-forward flavour with a chai twist");

AddTea("saigon chai organic","Black","Chai","Medium-Caffeination", "saigon-chai-organic.jpg", "tea/tea-by-flavour/chai/organic-saigon-chai/10219DT01VAR004058.html?cgid=chai-tea", "8.98","A spicy cinnamon-rich chai, but allows the tea to shine through");


//chai - caff low
AddTea("jingle bell chai","Black","Chai","Low-Caffeination", "jingle-bell-chai.jpg", "tea/tea-by-flavour/chai/jingle-bell-chai/10876DT01VAR0099328.html?cgid=chai-tea", "9.98","Sink into the warmth of the holidays with a mug of bold black tea, decadent white chocolate curls & soul-warming spices");


AddTea("david's chai organic","Black","Chai","Low-Caffeination", "david's-chai-organic.jpg", "tea/tea-by-flavour/chai/organic-david’s-chai/10769DT01VAR0073512.html?cgid=chai-tea", "8.98","Bold, classic chai flavours with a spicy warmth and a sweet anise twist");

//flav= vanilla 
//caff low
AddTea("candy cane crush","Black","Vanilla","Low-Caffeination", "candy-cane-crush.jpg", "tea/tea-by-flavour/vanilla/candy-cane-crush/10585DT01VAR0099349.html?cgid=vanilla-flavors", "8.98","Rich and mega creamy, with a sweet white chocolate flavour and an icy-cool peppermint finish");

AddTea("vanilla cappuccino","Black","Vanilla","Low-Caffeination", "vanilla-cappuccino.jpg", "tea/tea-by-flavour/vanilla/vanilla-cappuccino/10760DT01VAR0072916.html?cgid=vanilla-flavors", "9.98","Sweet and creamy, with a light coffee flavour – like a decadent French vanilla iced capp");
//med
AddTea("brown sugar bourbon","Black","Vanilla","Medium-Caffeination", "brown-sugar-bourbon.jpg", "tea/tea-by-flavour/vanilla/brown-sugar-bourbon/10857DT01VAR0085943.html?cgid=vanilla-flavors", "8.98","A vanilla bourbon spike to this creamy caramel blend.");

AddTea("christmas morning tea blend","Black","Vanilla","Medium-Caffeination", "christmas-morning-tea-blend.jpg", "tea/tea-by-flavour/vanilla/christmas-morning-tea-blend/10950DT01VAR0094826.html?cgid=vanilla-flavors","9.98","Comforting vanilla on a black tea base.");
//high

AddTea("cream of earl grey organic","Black","EarlGrey","High-Caffeination", "cream-of-earl-grey-organic.jpg", "tea/tea-by-flavour/vanilla/organic-cream-of-earl-grey/10076DT01VAR0099353.html?cgid=vanilla-flavors", "8.98","Rich black tea with creamy-sweet vanilla and a citrusy hint of bergamot");

AddTea("vanilla chai organic","Black","Vanilla","High-Caffeination", "vanilla-chai-organic.jpg", "tea/tea-by-flavour/vanilla/organic-vanilla-chai/10463DT01VAR0022849.html?cgid=vanilla-flavors", "8.98","Deliciously rich, spicy and sweet with a hint of creaminess");

//earl grey
AddTea("earl grey organic","Black","EarlGrey","High-Caffeination", "earl-grey-organic.jpg", "tea/tea-by-flavour/earl-grey/organic-earl-grey/10043DT01VAR0099355.html?cgid=earl-grey-flavors", "6.95","Medium-bodied black tea with floral and citrus bergamot notes – rich, yet refreshing");

//white type 
AddTea("white pumpkin","White","Pumpkin","Low-Caffeination", "white-pumpkin.jpg", "tea/tea-by-flavour/white-pumpkin/10960DT01VAR0095948.html?cgid=by-flavors", "10.98","Delicate pumpkin with notes of cream, coconut and a whisper of spice");

AddTea("merry mistletoe","White","Natural","Low-Caffeination", "merry mistletoe.jpg", "tea/tea-by-flavour/merry-mistletoe/10868DT01VAR0099330.html?cgid=by-flavors", "10.98","Tart cranberry with notes of baked apple and hints of warming clove & cinnamon.");

AddTea("zen pearls organic","White","Jasmine","High-Caffeination", "zen-pearls-organic.jpg", "tea/tea-by-flavour/jasmine/organic-zen-pearls/10691DT01VAR0059833.html?cgid=jasmine-flavors", "19.98","A sweet jasmine flavour that’s delicate, floral and crisp");

//herbal-choco
AddTea("fireside mocha","Herbal","Chocolate","Low-Caffeination", "fireside-mocha.jpg", "tea/tea-by-flavour/fireside-mocha/10692DT01VAR0060428.html?cgid=by-flavors", "8.98","Sweet, creamy and chocolaty, with light coffee notes – like a rich mochaccino");

AddTea("peanut butter cup","Herbal","Chocolate","Low-Caffeination", "peanut-butter-cup.jpg", "tea/tea-by-flavour/chocolate/peanut-butter-cup/10846DT01VAR0084839.html?cgid=chocolate-flavors", "8.98","Just like the name says! This blend perfectly captures the taste of a peanut butter cup");

//herbal-mint
AddTea("snow day","Herbal","Mint","Low-Caffeination", "snow-day.jpg", "tea/tea-by-flavour/chocolate/snow-day/10786DT01VAR0099337.html?cgid=chocolate-flavors", "9.98","Like creamy mint chocolate");

//herbal--vanilla

AddTea("blueberry vanilla","Herbal","Vanilla","Non-Caffeinated", "blueberry-vanilla.jpg", "tea/tea-by-flavour/vanilla/blueberry-vanilla/10895DT01VAR0089532.html?cgid=vanilla-flavors", "9.98","Lively and rich vanilla infused with berries that pack a punch");

AddTea("gingerbread blondie","Herbal","Vanilla","Non-Caffeinated", "gingerbread-blondie.jpg", "tea/tea-by-flavour/vanilla/gingerbread-blondie/10785DT01VAR0075275.html?cgid=vanilla-flavors", "9.98","Rich & decadent vanilla cream flavour that’s evenly balanced by a light zing of candied ginger");
//herbal--chai
AddTea("baked apple chai","Herbal","Chai","Non-Caffeinated", "baked-apple-chai.jpg", "tea/tea-by-flavour/chai/baked-apple-chai/10782DT01VAR0074672.html?cgid=chai-tea", "8.98","Cooked apple flavours with sweet, warming spices");

AddTea("honeycomb chai","Herbal","Chai","Non-Caffeinated", "honeycomb-chai.jpg", "tea/tea-by-flavour/chai/honeycomb-chai/10931DT01VAR0092986.html?cgid=chai-tea", "9.98","A sweet and warming chai with gooey honey, light ginger and notes of cinnamon");
//green
//green-choco

AddTea("let it snow","Green","Chocolate","Low-Caffeination", "let-it-snow.jpg", "tea/tea-by-flavour/chocolate/let-it-snow/10646DT01VAR0099343.html?cgid=chocolate-flavors", "8.98","Sweet, creamy custard with warming notes of cinnamon and clove: just like a rich and lightly spiced eggnog");

//green-mint
AddTea("north african mint organic","Green","Mint","Low-Caffeination", "north-african-mint-organic.jpg", "tea/tea-by-flavour/mint/organic-north-african-mint/10006DT01VAR003924.html?cgid=mint-flavors", "9.98","Complex, sweet and minty – with a spicy finish from the ginger and cardamom");

AddTea("japanese sencha organic","Green","Stevia-Free","Medium-Caffeination", "japanese-sencha-organic.jpg", "tea/tea-by-flavour/organic-japanese-sencha/10057DT01VAR003948.html?cgid=by-flavors", "9.98","Fresh vegetal flavour with a subtle hint of seaweed");
//green--organic

AddTea("jasmine ginger twist","Green","Organic","Medium-Caffeination", "jasmine-ginger-twist.jpg", "tea/tea-by-flavour/jasmine-ginger-twist/10894DT01VAR0089435.html?cgid=by-flavors", "8.98","Light-bodied blend of sweet & floral jasmine");
// matcha drink mix

AddTea("vanilla chai matcha","Matcha","Chai","Medium-Caffeination", "canilla-chai-matcha.jpg", "tea/tea-by-flavour/chai/vanilla-chai-matcha/10936DT01VAR0093611.html?cgid=chai-tea", "10.98","Notes of creamy vanilla and warm spices on a smooth matcha base");

AddTea("chai matcha","Matcha","Chai","Medium-Caffeination", "chai-matcha.jpg", "tea/tea-by-flavour/chai/chai-matcha/10717DT01VAR0064036.html?cgid=chai-tea", "10.98","Reminiscent of a sweet chai latte with notes of cinnamon, nutmeg & cardamom on a Matcha Matsu base");

AddTea("blueberry matcha","Matcha","Chai","Medium-Caffeination", "blueberry-matcha.jpg", "tea/tea-by-flavour/blueberry-matcha/10531DT01VAR0029665.html?cgid=by-flavors#prefn1=caffeineLevel&prefv1=3&prefn2=teaBlend&prefv2=13&start=1", "10.98","Sweet and fresh, with a ripe blueberry flavour and a light grassy note from the matcha");


AddTea("candy cane matcha","Matcha","Mint","Low-Caffeination", "candy-cane-matcha.jpg", "tea/tea-by-flavour/mint/candy-cane-matcha/10710DT01VAR0099314.html?cgid=mint-flavors", "10.98","Creamy and not overly sweet, with a strong cooling note from the peppermint");

//earl grey
AddTea("cream of earl grey matcha","Matcha","EarlGrey","Low-Caffeination", "cream-of-earl-grey-matcha.jpg", "tea/tea-by-flavour/earl-grey/cream-of-earl-grey-matcha/10896DT01VAR0089603.html?cgid=earl-grey-flavors", "9.98","Rich & creamy with a hint of aromatic complexity from the bergamot.");
//oolong

AddTea("banana bread chai","Oolong","Chai","Medium-Caffeination", "banana-bread-chai.jpg", "tea/tea-by-flavour/chai/banana-bread-chai/10922DT01VAR0092167.html?cgid=chai-tea", "9.98","Fresh from the oven banana bread with warming spices");

AddTea("strawberries and cream","Oolong","Natural","Medium-Caffeination", "strawberries&cream.jpg", "tea/tea-by-flavour/strawberries-and-cream/10899DT01VAR0089864.html?cgid=by-flavors", "9.98","Strawberry & light cream flavours with a rich and smooth texture.");

AddTea("blueberry fields forever","Oolong","Natural","Low-Caffeination", "blueberry-fields-forever.jpg", "tea/tea-by-flavour/natural/blueberry-fields-forever/10841DT01VAR0084421.html?cgid=natural-flavors", "10.98","Rich oolong base with tart blueberry & deep elderberry and a sweet floral finish that lingers.");

//Rooibos 
//chai
AddTea("butterscotch chai","Rooibos","Chai","Non-Caffeinated", "butterscotch-chai.jpg", "tea/tea-by-flavour/chai/butterscotch-chai/10842DT01VAR0084490.html?cgid=chai-tea", "9.98","Sweet caramel with a hint of creamy butter & spices topped off by a rich, nutty rooibos finish");


AddTea("coco chai rooibox","Rooibos","Chai","Non-Caffeinated", "coco-chai-rooibox.jpg", "tea/tea-by-flavour/chai/coco-chai-rooibos/10066DT01VAR003953.html?cgid=chai-tea", "7.98","A sweet spiced chai with a rich, creamy touch of coconut.");
//Rooibos --vanilla

AddTea("confetti cupcake","Rooibos","Vanilla","Low-Caffeination", "confetti-cupcake.jpg", "tea/tea-by-flavour/vanilla/confetti-cupcake/10925DT01VAR0092395.html?cgid=vanilla-flavors", "7.95","Creamy vanilla cake with lightly whipped frosting");

AddTea("tahitian vanilla","Rooibos","Vanilla","Non-Caffeinated", "tahitian-vanilla.jpg", "tea/tea-by-flavour/vanilla/tahitian-vanilla/10891DT01VAR0089228.html?cgid=vanilla-flavors", "8.95","Baked yellow sheet cake with vanilla frosting, topped with sesame.");

//Rooibos --earl grey

AddTea("earl grey rooibos organic","Rooibos","EarlGrey","Non-Caffeinated", "earl-grey-rooibos-organic.jpg", "tea/tea-by-flavour/earl-grey/organic-earl-grey-rooibos/10778DT01VAR0074345.html?cgid=earl-grey-flavors", "7.98","We came up with a light and fruity blend of red rooibos with oil of bergamot and mandarin, great on its own or with a splash of milk and sugar");


//Rooibos --mint

AddTea("headache halo","Rooibos","Mint","Non-Caffeinated", "headache-halo.jpg", "tea-by-flavour/mint/headache-halo/10764DT01VAR0073185.html?cgid=mint-flavors", "8.98","Smooth, creamy and cooling, with a light herbal note");



//Rooibos --choco

AddTea("toasted marchmallow","Rooibos","Chocolate","Low-Caffeination", "toasted-marchmallow.jpg", "tea/tea-by-flavour/chocolate/toasted-marshmallow/10937DT01VAR0093680.html?cgid=chocolate-flavors", "8.98","Nostalgic flavours of melted milk chocolate and gooey burnt sugar");

AddTea("witch's brew","Rooibos","Chocolate","Low-Caffeination", "witch's-brew.jpg", "tea/tea-by-flavour/chocolate/witchs-brew/10580DT01VAR0033715.html?cgid=chocolate-flavors#prefn1=teaBlend&prefv1=7&start=1", "7.98","Creamy and sweet, with notes of brown sugar and a hint of molasses.");
