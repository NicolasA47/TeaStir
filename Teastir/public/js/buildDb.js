const mongoose = require( "mongoose" );

mongoose.connect( "mongodb://localhost:27017/teaStir", 
                { useNewUrlParser: true, 
                  useUnifiedTopology: true});
const teaFlavourSchema = new mongoose.Schema ({      
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

//Function to add teas into the db
function AddTea(teaName,teaCateg,teaFlv,teaCaff,teaImg, teaLink,teaPrice,teaTastes){

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

//Adding the following teas to db 
//high
AddTea("chocolate chili chai","black","chai","high", "chocolate-chili-chai.jpg","tea/tea-by-flavour/chai/chocolate-chili-chai/10248DT01VAR004087.html?cgid=chai-tea#prefn1=teaBlend&prefv1=1&start=1","9.98");

AddTea("vanilla chai organie","black","chai","high", "vanilla-chai-organie.jpg","tea/tea-by-flavour/chai/organic-vanilla-chai/10463DT01VAR0022849.html?cgid=chai-tea","8.98");

AddTea("organie vanilla chai iconie tin","black","chai","high", "organie-vanilla-chai-iconie-tin.jpg","tea/tea-by-flavour/chai/chocolate-chili-chai/10248DT01VAR004087.html?cgid=chai-tea#prefn1=teaBlend&prefv1=1&start=1","19");

//medium
AddTea("pumpkin chai","black","chai","medium", "pumpkin-chai.jpg", "tea/tea-by-flavour/chai/organic-vanilla-chai-iconic-tin/961622DT01.html?cgid=chai-tea", "8.98");

AddTea("mocha chai","black","chai","medium", "mocha-chai.jpg", "tea/tea-by-flavour/chai/mocha-chai/10921DT01VAR0092098.html?cgid=chai-tea", "9.98");

AddTea("saigon chai organie","black","chai","medium", "saigon-chai-organie.jpg", "tea/tea-by-flavour/chai/organic-saigon-chai/10219DT01VAR004058.html?cgid=chai-tea", "8.98");


//low
AddTea("jingle bell chai","black","chai","low", "jingle-bell-chai.jpg", "tea/tea-by-flavour/chai/jingle-bell-chai/10876DT01VAR0099328.html?cgid=chai-tea", "9.98");


AddTea("david's chai organie","black","chai","low", "david's-chai-organie.jpg", "tea/tea-by-flavour/chai/organic-david’s-chai/10769DT01VAR0073512.html?cgid=chai-tea", "8.98");

//flav= vanilla 
//caff low
AddTea("candy cane crush","black","vanilla","low", "candy-cane-crush.jpg", "tea/tea-by-flavour/vanilla/candy-cane-crush/10585DT01VAR0099349.html?cgid=vanilla-flavors", "8.98");

AddTea("vanilla cappuccino","black","vanilla","low", "vanilla-cappuccino.jpg", "tea/tea-by-flavour/vanilla/vanilla-cappuccino/10760DT01VAR0072916.html?cgid=vanilla-flavors", "9.98");
//med
AddTea("brown sugar bourbon","black","vanilla","medium", "brown-sugar-bourbon.jpg", "tea/tea-by-flavour/vanilla/brown-sugar-bourbon/10857DT01VAR0085943.html?cgid=vanilla-flavors", "8.98");

AddTea("christmas morning tea blend","black","vanilla","medium", "christmas-morning-tea-blend.jpg", "tea/tea-by-flavour/vanilla/christmas-morning-tea-blend/10950DT01VAR0094826.html?cgid=vanilla-flavors","9.98");
//high

AddTea("cream of earl grey organie","black","vanilla,earl grey","high", "cream-of-earl-grey-organie.jpg", "tea/tea-by-flavour/vanilla/organic-cream-of-earl-grey/10076DT01VAR0099353.html?cgid=vanilla-flavors", "8.98");

AddTea("vanilla chai organie","black","vanilla","high", "vanilla-chai-organie.jpg", "tea/tea-by-flavour/vanilla/organic-vanilla-chai/10463DT01VAR0022849.html?cgid=vanilla-flavors", "8.98");

//earl grey
AddTea("earl grey organie","black","earl grey","high", "earl-grey-organie.jpg", "tea/tea-by-flavour/earl-grey/organic-earl-grey/10043DT01VAR0099355.html?cgid=earl-grey-flavors", "6.95");


//white type 
AddTea("white pumpkin","white","natural,pumpkin","low", "white-pumpkin.jpg", "tea/tea-by-flavour/white-pumpkin/10960DT01VAR0095948.html?cgid=by-flavors", "10.98");

AddTea("merry mistletoe","white","natural","low", "merry mistletoe.jpg", "tea/tea-by-flavour/merry-mistletoe/10868DT01VAR0099330.html?cgid=by-flavors", "10.98");

AddTea("merry mistletoe","white","natural","low", "merry mistletoe.jpg", "tea/tea-by-flavour/merry-mistletoe/10868DT01VAR0099330.html?cgid=by-flavors", "10.98");


AddTea("zen pearls organic","white","jasmine","high", "zen-pearls-organic.jpg", "tea/tea-by-flavour/jasmine/organic-zen-pearls/10691DT01VAR0059833.html?cgid=jasmine-flavors", "19.98");

//herbal-choc
AddTea("fireside mocha","herbal","chocolate","low", "fireside-mocha.jpg", "tea/tea-by-flavour/fireside-mocha/10692DT01VAR0060428.html?cgid=by-flavors", "8.98");

AddTea("peanut butter cup","herbal","chocolate","low", "peanut-butter-cup.jpg", "tea/tea-by-flavour/chocolate/peanut-butter-cup/10846DT01VAR0084839.html?cgid=chocolate-flavors", "8.98");
//herbal-mint
AddTea("snow day","herbal","mint","low", "snow-day.jpg", "tea/tea-by-flavour/chocolate/snow-day/10786DT01VAR0099337.html?cgid=chocolate-flavors", "9.98");
//herbal--vanilla

AddTea("blueberry vanilla","herbal","vanilla","caffeine-free", "blueberry-vanilla.jpg", "tea/tea-by-flavour/vanilla/blueberry-vanilla/10895DT01VAR0089532.html?cgid=vanilla-flavors", "9.98");

AddTea("gingerbread blondie","herbal","vanilla","caffeine-free", "gingerbread-blondie.jpg", "tea/tea-by-flavour/vanilla/gingerbread-blondie/10785DT01VAR0075275.html?cgid=vanilla-flavors", "9.98");
//herbal--chai
AddTea("backed apple chai","herbal","chai","caffeine-free", "backed-apple-chai.jpg", "tea/tea-by-flavour/chai/baked-apple-chai/10782DT01VAR0074672.html?cgid=chai-tea", "8.98");

AddTea("honeycomb chai","herbal","chai","caffeine-free", "honeycomb-chai.jpg", "tea/tea-by-flavour/chai/honeycomb-chai/10931DT01VAR0092986.html?cgid=chai-tea", "9.98","A sweet and warming chai with gooey honey, light ginger and notes of cinnamon");
//green
//green-choc

AddTea("let it snow","green","choclate","low", "let-it-snow.jpg", "tea/tea-by-flavour/chocolate/let-it-snow/10646DT01VAR0099343.html?cgid=chocolate-flavors", "8.98","Sweet, creamy custard with warming notes of cinnamon and clove: just like a rich and lightly spiced eggnog");

//green-mint
AddTea("north african mint organic","green","mint","low", "north-african-mint-organic.jpg", "tea/tea-by-flavour/mint/organic-north-african-mint/10006DT01VAR003924.html?cgid=mint-flavors", "9.98","Complex, sweet and minty – with a spicy finish from the ginger and cardamom");

AddTea("japanese sencha organic","green","stevia free","high,medium", "japanese-sencha-organic.jpg", "tea/tea-by-flavour/organic-japanese-sencha/10057DT01VAR003948.html?cgid=by-flavors", "9.98","Fresh vegetal flavour with a subtle hint of seaweed");
//green--organic

AddTea("jasmine ginger twist","green","organic","medium", "jasmine-ginger-twist.jpg", "tea/tea-by-flavour/jasmine-ginger-twist/10894DT01VAR0089435.html?cgid=by-flavors", "8.98","Light-bodied blend of sweet & floral jasmine");
// matcha drink mix

AddTea("vanilla chai matcha","matcha drink mix","chai, vanilla","medium", "canilla-chai-matcha.jpg", "tea/tea-by-flavour/chai/vanilla-chai-matcha/10936DT01VAR0093611.html?cgid=chai-tea", "10.98","Notes of creamy vanilla and warm spices on a smooth matcha base");

AddTea("chai matcha","matcha drink mix","chai","medium", "chai-matcha.jpg", "tea/tea-by-flavour/chai/chai-matcha/10717DT01VAR0064036.html?cgid=chai-tea", "10.98","Reminiscent of a sweet chai latte with notes of cinnamon, nutmeg & cardamom on a Matcha Matsu base");

AddTea("blueberry matcha","matcha drink mix","chai","medium", "blueberry-matcha.jpg", "tea/tea-by-flavour/blueberry-matcha/10531DT01VAR0029665.html?cgid=by-flavors#prefn1=caffeineLevel&prefv1=3&prefn2=teaBlend&prefv2=13&start=1", "10.98","Sweet and fresh, with a ripe blueberry flavour and a light grassy note from the matcha");


AddTea("candy cane matcha","matcha drink mix","mint","low,medium", "candy-cane-matcha.jpg", "tea/tea-by-flavour/mint/candy-cane-matcha/10710DT01VAR0099314.html?cgid=mint-flavors", "10.98","Creamy and not overly sweet, with a strong cooling note from the peppermint");

//earl grey
AddTea("cream of earl grey matcha","matcha drink mix","earl grey","low,medium", "cream-of-earl-grey-matcha.jpg", "tea/tea-by-flavour/earl-grey/cream-of-earl-grey-matcha/10896DT01VAR0089603.html?cgid=earl-grey-flavors", "9.98","Rich & creamy with a hint of aromatic complexity from the bergamot.");

 
