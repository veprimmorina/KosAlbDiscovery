function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let password = document.forms["myForm"]["password"].value;
  let username = document.forms["myForm"]["username"].value;
  let number = document.forms["myForm"]["number"].value;
  let id = document.forms["myForm"]["id"].value;
  let fiscal = document.forms["myForm"]["fiscal"].value;
  let business = document.forms["myForm"]["business"].value;
  let activity = document.forms["myForm"]["activity"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (password == "") {
    alert("Password must be filled out");
    return false;
  }
  if (username == "") {
    alert("Username must be filled out");
    return false;
  }
  if (number == "") {
    alert("startTime must be filled out");
    return false;
  }
  if (id == "") {
    alert("Owner ID must be filled out");
    return false;
  }
  if (fiscal == "") {
    alert("Number Fiscal must be filled out");
    return false;
  }
  if (business == "") {
    alert("Business Activity must be filled out");
    return false;
  }
  if (activity == "") {
    alert("Business Activity must be filled out");
    return false;
  }
}
function validateCity() {
  let name = document.forms["myForm"]["name"].value;
  let zip = document.forms["myForm"]["zip"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (zip == "") {
    alert("Zip Code must be filled out");
    return false;
  }
}
function validateTourist() {
  let name = document.forms["Tourist"]["name"].value;
  let city = document.forms["Tourist"]["newTouristPlaceCity"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (city == "") {
    alert("City must be filled out");
    return false;
  }
}
