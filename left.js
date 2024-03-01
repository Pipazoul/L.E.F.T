$(document).ready(function () {

    date = new Date();

    // Define dates
    //var age = 0;
    var months = 12;

    // DIVS
    var divMonth = $("#months");
    var divYears = $("#years");
    var divDays = $("#days");


    // Dates maths
    var monthsLeft = months - date.getMonth();
    var days = getDaysInMonth(date.getMonth() + 1, date.getFullYear());
    var daysLeft = days - date.getDate();


    // Settings panel
    $("#open-settings").click(function () {
        $(".overlay, #settings").fadeIn();
    });

    $("#settings .close").click(function () {
        $(".overlay, #settings").fadeOut();
    });

    $("#submit").click(function () {
        var gender = $("#gender").val();
        var birthdate = new Date($('#birthdate').val());
        var age = date.getFullYear() - birthdate.getFullYear();
        birthdate = birthdate.getFullYear() + "-" + birthdate.getMonth() + "-" + birthdate.getDate();
        //var birthdate = $("#birthdate").val();
        var country = $("#country").val();
        country = country.charAt(0).toUpperCase() + country.slice(1);
        constructTimeline(gender, country, birthdate, age);
    });


    constructTimeline();




    // Displays all the resting days
    function constructTimeline(gender = "male", country = "France", dateOfBirth = "1990-02-15", age = 0) {

        divDays.find('.day').not('p').remove();
        divYears.find('.year').not('p').remove();
        divMonth.find('.month').not('p').remove();

        var averageDeath = 0
        if (gender == "male") {
            averageDeath = 79;
        }
        if (gender == "female") {
            averageDeath = 85;
        }
        var years = averageDeath - age;


        // Lasting years based on average death
        for (i = 0; i < averageDeath; i++) {
            if (i <= years) {
                divYears.append('<div class = "year"></div>');
            }
            else {
                divYears.append('<div class = "year active"></div>');
            }

        }

        // Lasting days in a month
        for (i = 0; i < days; i++) {
            if (i <= daysLeft) {
                divDays.append('<div class = "day"></div>');
            }
            else {
                divDays.append('<div class = "day active"></div>');
            }
        }

        // Lasting months in a year
        for (i = 0; i < months; i++) {
            if (i <= monthsLeft) {
                divMonth.append('<div class = "month"></div>');
            }
            else {
                divMonth.append('<div class = "month active"></div>');
            }
        }

    }
});


var getDaysInMonth = function (month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
    // return new Date(year, month+1, 0).getDate();
};
