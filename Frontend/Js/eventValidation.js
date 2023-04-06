function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let startDate = document.forms["myForm"]["startDate"].value;
    let startTime = document.forms["myForm"]["startTime"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if(startDate == ""){
        alert("startDate must be filled out")
        return false;
    }
    if(startTime == ""){
        alert("startTime must be filled out")
        return false;
    }

}