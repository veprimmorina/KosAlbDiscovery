$("#registerButton").click(function (event) {
  var businessName = document.getElementById("full_name").value;
  var businessEmail = document.getElementById("email").value;
  var businessPassword = document.getElementById("password").value;
  var businessUsername = document.getElementById("user_name").value;
  var businessPhoneNumber = document.getElementById("phonenumber").value;
  var businessOwnerId = document.getElementById("ownerid").value;
  var businessFiscalNumber = document.getElementById("fiscalnumber").value;
  var businessNum = document.getElementById("businessnumber").value;
  var businessActi = document.getElementById("businessactivity").value;
  var cityName = document.getElementById("cityName").value;
  var statuss = "activ";
  var rolee = "business";

  if (
    businessName == "" ||
    businessEmail == "" ||
    businessPassword == "" ||
    businessUsername == "" ||
    businessOwnerId == "" ||
    businessPhoneNumber == "" ||
    businessFiscalNumber == "" ||
    businessNum == "" ||
    businessActi == "" ||
    cityName == ""
  ) {
    alert("Please fill all required fields.");
  } else {
    business = {
      name: businessName,
      email: businessEmail,
      password: businessPassword,
      username: businessUsername,
      tel_Number: businessPhoneNumber,
      owner_ID: businessOwnerId,
      fiscal_Number: businessFiscalNumber,
      business_Number: businessNum,
      business_Activity: businessActi,
      cityName: cityName,
      status: statuss,
      role: rolee,
    };

    console.log(business);

    registerBusiness(business);
  }
});

function registerBusiness(business) {
  $.ajax({
    url: "http://localhost:8080/api/register/business/create/business",
    type: "post",
    contentType: "application/json; charset=utf-8",
    // dataType: "json",
    data: JSON.stringify(business),
    success: function (res) {
      // localStorage.setItem('kuizi', JSON.stringify(res))

      console.log(business);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

var business = {
  name: "",
  email: "",
  password: "",
  username: "",
  tel_Number: "",
  owner_ID: "",
  fiscal_Number: "",
  business_Number: "",
  business_Activity: "",
  cityName: "",
  status: "",
  role: "",
};
