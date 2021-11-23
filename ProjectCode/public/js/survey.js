const nextBtn = document.getElementById("next-btn");
const teaTypesArray = ["Herbal", "Green", "Black", "White", "Matcha", "Oolong", "Rooibos"];
const teaFlavoursArray = ["Chai", "Vanilla", "EarlGrey", "Natural", "Pumpkin", "Jasmine", "Mint", "Chocolate", "Stevia-Free", "Organic"];
const teaCaffeineArray = ["Non-Caffeinated", "Low-Caffeination", "Medium-Caffeination", "High-Caffeination"];

nextBtn.addEventListener("click", submitData);

const optionType = document.getElementById("optionType").name;
let teaOptionArray = [];
console.log(optionType);

switch (optionType){            //depending on the page use different array vals
    case "Category":
        teaOptionArray = teaTypesArray;
        break;
    
    case "CaffeineLevel":
        teaOptionArray = teaCaffeineArray;
        break;

    case "Flavour":
        teaOptionArray = teaFlavoursArray;
        break;
}

console.log(teaOptionArray);


function submitData(){
    let typeData = [];
    teaOptionArray.forEach(option =>{
        let rating =  Number(document.querySelector(`input[name=${option}]:checked`).value);
        let teaRating = {option, rating};
        typeData.push(teaRating);
     });
     document.getElementById("hiddenData").value = JSON.stringify(typeData);        //put into json to be brought into node
                                                                                    //through hidden form input
    document.getElementById("formData").submit();
}