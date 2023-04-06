$("#loginButton").click(function (event) {
  var usern = document.getElementById("username").value;
  var passw = document.getElementById("password").value;

  user = {
    username: usern,
    password: passw,
  };
  loginUser(user);
});

// function printError(elemId, hintMsg) {
//   document.getElementById(elemId).innerHTML = hintMsg;
// }

// function validateForm() {
//   var username = document.myForm.username.value;
//   var password = document.myForm.password.value;

//   var usernameErr = (passwordErr = true);

//   if (username == "") {
//     printError("usernameErr", "Please enter your username");
//   } else {
//     var regex = /^[a-zA-Z\s]+$/;
//     if (regex.test(username) === false) {
//       printError("usernameErr", "Please enter a valid username");
//     } else {
//       printError("usernameErr", "");
//       usernameErr = false;
//     }
//   }

//   if (password == "") {
//     printError("passwordErr", "Please enter your password");
//   } else {
//     var regex = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
//     if (regex.test(password) === false) {
//       printError("passwordErr", "Please enter a valid password");
//     } else {
//       printError("passwordErr", "");
//       passwordErr = false;
//     }
//   }

//   if ((usernameErr || passwordErr) == true) {
//     return false;
//   } else {
//     var dataPreview =
//       "You've entered the following details: \n" +
//       "Username: " +
//       username +
//       "\n" +
//       "Password: " +
//       password +
//       "\n";
//     if (hobbies.length) {
//       dataPreview += "Hobbies: " + hobbies.join(", ");
//     }
//     alert(dataPreview);
//   }
// }

function loginUser(user) {
  $.ajax({
    url: "http://localhost:8080/api/register/authenticate/signIn",
    type: "post",
    contentType: "application/json; charset=utf-8",
    //dataType: "json",
    data: JSON.stringify(user),
    success: function (res) {
      // localStorage.setItem('kuizi', JSON.stringify(res))

      console.log(res);
      console.log(res.username);
      localStorage.setItem("username", res.username);
      if (res.username == "not found") {
        alert("Username or password is incorrect.");
      } else {
        location.href = "event.html";
      }
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

var user = {
  username: "",
  password: "",
};
