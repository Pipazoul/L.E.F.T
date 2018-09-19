// Define dates
var age = 23;
var month = 30;
var years = 80;
// DIVS
var divMonth = $("#months");
var divYears = $("#years");


$( document ).ready(function() {
    for (i = 0; i <= month; i++){
        console.log('days');
        divMonth.append('<div class = "day">DAY</div>');
    }

    for (a = 0; a <= years; a++){
        console.log('years');
        divYears.append('<div class = "years">DAY</div>');
    }

});
