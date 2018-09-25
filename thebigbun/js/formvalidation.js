//Validates inputs on contact form
function validateForm () {
    //Load the input values
    var name = document.forms["contact"]["customer_name"].value;
    var email = document.forms["contact"]["customer_email"].value;
    var phone = document.forms["contact"]["customer_telephone"].value;
    var additional_info = document.forms["contact"]["additional_information"].value;
    var days = document.getElementsByName("days");

    //Conditions to be met
    if(name == "") {
       alert("Please enter your name.");
        return false;
       }
    if(email == "") {
        alert("Please enter your email.");
        return false;
    }
    if(phone == "") {
        alert("Please enter your phone number");
        return false;
    }
    if(additional_info == "") {
        alert("Please give additional information.");
        return false;
    }
    //Number of days checked in the input field
    var day_counter =0;

    //Loops through the checkboxes and counts if checked
    for(var i = 0; i < 5; i++) {
        if(days[i].checked === true) {
            //console.log(day_counter);
            day_counter++;   
        }
    }
    console.log(day_counter);
    //Alerts user to select one day at least
    if(day_counter < 1) {
        alert("Please select at least one day to contact you.");
        return false;
    }else {
        alert("Thank you. All information is valid");
        return false;
    }
}