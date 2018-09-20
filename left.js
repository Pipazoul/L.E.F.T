date = new Date();

console.log(date);

// Define dates
var age = 23;
var averageDeath = 80;
var years = averageDeath - age;
var months = 12;
// DIVS
var divMonth = $("#months");
var divYears = $("#years");

var monthsLeft =  months - date.getMonth();

console.log(monthsLeft);

$( document ).ready(function() {
    for (i = 0; i <= months; i++){
        console.log('days');
        if(i <= monthsLeft){
            divMonth.append('<div class = "month active"></div>');
        }
        else{
            divMonth.append('<div class = "month"></div>');
        }
    }

    for (i = 0; i <= averageDeath; i++){
        if(i <= years){
            divYears.append('<div class = "year active"></div>');
        }
        else {
            divYears.append('<div class = "year"></div>');
        }
        console.log('years');
        
    }

});
