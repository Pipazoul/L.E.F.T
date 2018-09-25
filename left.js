$(document).ready(function () {

    date = new Date();

    console.log(date);

    //Define death expectancy
    var gender = "male";
    var country = "France";

    //YYYY-MM-DD
    var dateOfBirth = "1995-06-23";

    //API Call
    var url = "http://api.population.io:80/1.0/life-expectancy/total/"+gender+"/"+country+"/"+dateOfBirth+"/";


    // Define dates
    var age = 23;
    var averageDeath = 80;
    var years = averageDeath - age;
    var months = 12;
    
    // DIVS
    var divMonth = $("#months");
    var divYears = $("#years");
    var divDays = $("#days");


    // Dates maths
    var monthsLeft = months - date.getMonth();
    var days = getDaysInMonth(date.getMonth()+1, date.getFullYear());
    var daysLeft = days - date.getDate();

    console.log("current month :" + date.getMonth());
    console.log("days in month :" + days);
    console.log("Resting days in month : "+ daysLeft);



    $.getJSON(url, function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          console.log(val);
        });
    });

    // Lasting days in a month
    for (i = 0; i < days; i++) {
        console.log('days');
        if (i <= daysLeft) {
            divDays.append('<div class = "day"></div>');
        }
        else {
            divDays.append('<div class = "day active"></div>');
        }
    }

    // Lasting months in a year
    for (i = 0; i < months; i++) {
        console.log('days');
        if (i <= monthsLeft) {
            divMonth.append('<div class = "month"></div>');
        }
        else {
            divMonth.append('<div class = "month active"></div>');
        }
    }

    // Lasting years based on average death
    for (i = 0; i < averageDeath; i++) {
        if (i <= years) {
            divYears.append('<div class = "year"></div>');
        }
        else {
            divYears.append('<div class = "year active"></div>');
        }
        console.log('years');

    }

});



var getDaysInMonth = function (month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
    // return new Date(year, month+1, 0).getDate();
};
