$("#registerButton").click(function (event) {
  var nameT = document.getElementById("name").value;
  var ageT = document.getElementById("age").value;
  var genderT = document.getElementById("genderInput").value;
  var emailT = document.getElementById("email").value;
  var passwordT = document.getElementById("password").value;
  var usernameT = document.getElementById("username").value;
  var rolee = "tourist";
  var statuus = "active";

  if (
    nameT == "" ||
    ageT == "" ||
    genderT == "" ||
    emailT == "" ||
    genderT == "" ||
    passwordT == "" ||
    usernameT == ""
  ) {
    alert("Please fill all required fields.");
  } else {
    tourist = {
      fullname: nameT,
      age: ageT,
      gender: genderT,
      email: emailT,
      password: passwordT,
      username: usernameT,
      role: rolee,
      status: statuus,
    };

    console.log(tourist);

    registerTourist(tourist);
  }
});

function registerTourist(tourist) {
  $.ajax({
    url: "http://localhost:9000/api/register/tourist/create/tourist",
    type: "post",
    contentType: "application/json; charset=utf-8",
    // dataType: "json",
    data: JSON.stringify(tourist),
    success: function (res) {
      // localStorage.setItem('kuizi', JSON.stringify(res))

      console.log(tourist);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

var tourist = {
  fullname: "",
  age: "",
  gender: "",
  email: "",
  password: "",
  username: "",
  role: "",
  status: "",
};
