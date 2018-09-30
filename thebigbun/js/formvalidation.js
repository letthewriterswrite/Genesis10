//Validates inputs on contact form
function validateForm () {
    //Load the input values
    var name = document.forms["contact"]["customer_name"];
    var email = document.forms["contact"]["customer_email"];
    var phone = document.forms["contact"]["customer_telephone"];
    var additional_info = document.forms["contact"]["additional_information"];
    var days = document.getElementsByName("days");

    //Conditions to be met
    if(name.value == "") {
       alert("Please enter your name.");
        name.focus();
        name.parentElement.classList.add("text-danger");
        name.classList.add("is-invalid");
        return false;
       }else {
           name.parentElement.classList.remove("text-danger");
           name.classList.remove("is-invalid");
       }
    
    if(email.value == "") {
        alert("Please enter your email.");
        email.focus();
        email.parentElement.classList.add("text-danger");
        email.classList.add("is-invalid");
        return false;
    }else {
        email.parentElement.classList.remove("text-danger");
        email.classList.remove("is-invalid");
    }
    
    if(phone.value == "") {
        alert("Please enter your phone number");
        phone.focus();
        phone.parentElement.classList.add("text-danger");
        phone.classList.add("is-invalid");
        return false;
    }else{
        phone.parentElement.classList.remove("text-danger");
        phone.classList.remove("is-invalid");
    }
    
    if(additional_info.value == "") {
        alert("Please give additional information.");
        additional_info.focus();
        additional_info.parentElement.classList.add("text-danger");
        additional_info.classList.add("is-invalid");
        return false;
    }else{
        additional_info.parentElement.classList.remove("text-danger");
        additional_info.classList.remove("is-invalid");
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
        document.getElementById("daysLabel").classList.add("text-danger");
        return false;
    }else {
        document.getElementById("daysLabel").classList.remove("text-danger");
        alert("Thank you. All information is valid");
        return false;
    }
}