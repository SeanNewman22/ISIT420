var createButton = document.getElementById("createButton");
var submitButton = document.getElementById("submitButton");

var storeNumberDOM = document.getElementById("storeNumber");
var salesPersonIDDOM = document.getElementById("salesPersonID");
var itemNumberDOM = document.getElementById("itemNumber");
var timePurchDOM = document.getElementById("timePurch");
var pricePaidDOM = document.getElementById("pricePaid");

var storeNumber = "";
var salesPersonID = "";
var itemNumber = "";
var timePurch = "";
var pricePaid = 0;

var storeNumberArr = ["98053", "98007", "98077", "98055", "98011", "98046"];
var salesPersonIDArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
var itemNumberArr = ["123456", "123654", "321456", "321654", "654123", "654321", "543216", "354126", "621453", "623451"];
var pricePaidArr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

createButton.addEventListener('click',function(){
    PopulateValues();
    UpdateValues();
});

submitButton.addEventListener('click',function(){
    alert("hello");
});

function PopulateValues (){
    var tempSalesPersonID;

    storeNumber = storeNumberArr[Math.floor((Math.random() * 5) )];

    if(storeNumber === "98053"){
        salesPersonID = salesPersonIDArr[Math.floor((Math.random() * 3) )];
    }else if(storeNumber === "98007"){
        salesPersonID = salesPersonIDArr[Math.floor(Math.random() * (7 - 4 + 1) ) + 4];
    }else if(storeNumber === "98077"){
        salesPersonID = salesPersonIDArr[Math.floor(Math.random() * (11 - 8 + 1) ) + 8];
    }else if(storeNumber === "98055"){
        salesPersonID = salesPersonIDArr[Math.floor(Math.random() * (15 - 12 + 1) ) + 12];
    }else if(storeNumber === "98011"){
        salesPersonID = salesPersonIDArr[Math.floor(Math.random() * (19 - 16 + 1) ) + 16];
    }else if(storeNumber === "98046"){
        salesPersonID = salesPersonIDArr[Math.floor(Math.random() * (23 - 20 + 1) ) + 20];
    }

    itemNumber = itemNumberArr[Math.floor((Math.random() * 9) )];

    timePurch = Date();

    pricePaid = pricePaidArr[Math.floor((Math.random() * 10) )];
}

function UpdateValues (){
    storeNumberDOM.innerHTML = "storeNumber: " + storeNumber;
    salesPersonIDDOM.innerHTML = "salesPersonID: " + salesPersonID;
    itemNumberDOM.innerHTML = "itemNumber: " + itemNumber;
    timePurchDOM.innerHTML = "timePurch: " + timePurch;
    pricePaidDOM.innerHTML = "pricePaid: " + pricePaid;
}