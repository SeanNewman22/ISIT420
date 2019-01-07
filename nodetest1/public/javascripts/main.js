//stores access for the 2 buttons on HTML page
var createButton = document.getElementById("createButton");
var submitButton = document.getElementById("submitButton");

//stores access for the 5 value fields on HTML page
var storeNumberDOM = document.getElementById("storeNumber");
var salesPersonIDDOM = document.getElementById("salesPersonID");
var itemNumberDOM = document.getElementById("itemNumber");
var timePurchDOM = document.getElementById("timePurch");
var pricePaidDOM = document.getElementById("pricePaid");

//declaring our 5 values that will be displayed
var storeNumber = "";
var salesPersonID = "";
var itemNumber = "";
var timePurch = "";
var pricePaid = 0;

//arrays to hold possible values for each field
var storeNumberArr = ["98053", "98007", "98077", "98055", "98011", "98046"];
var salesPersonIDArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
var itemNumberArr = ["123456", "123654", "321456", "321654", "654123", "654321", "543216", "354126", "621453", "623451"];
var pricePaidArr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//this event will create new values and update the DOM with them when this event is triggered
createButton.addEventListener('click',function(){
    PopulateValues();
    UpdateValues();
});

//this event is supposed to make an ajax call to our server .post route passing our 5 values populated by the above event
/* submitButton.addEventListener('click',function(){
    var formData = {
        'storeNumber': storeNumber,
        'salesPersonID': salesPersonID,
        'itemNumber': itemNumber,
        'timePurch': timePurch,
        'pricePaid': pricePaid
    };

    $.ajax({
        url: '/',
        data: formData,
        dataType:'JSON',
        type:'POST',
    });

    event.preventDefault();

}); */

$("#simpleform").on("submit", function(event) {
    var formData = {
        'storeNumber': storeNumber,
        'salesPersonID': salesPersonID,
        'itemNumber': itemNumber,
        'timePurch': timePurch,
        'pricePaid': pricePaid
    };

    $.ajax({
        url: '/',
        data: formData,
        dataType:'JSON',
        type:'POST',
    });

    event.preventDefault();
});

//this function creates new values for all 5 variables
function PopulateValues (){

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

//this function updates the DOM with our 5 generated values
function UpdateValues (){
    storeNumberDOM.innerHTML = "storeNumber: " + storeNumber;
    salesPersonIDDOM.innerHTML = "salesPersonID: " + salesPersonID;
    itemNumberDOM.innerHTML = "itemNumber: " + itemNumber;
    timePurchDOM.innerHTML = "timePurch: " + timePurch;
    pricePaidDOM.innerHTML = "pricePaid: " + pricePaid;
}