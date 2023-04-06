var idB = document.getElementById("bid");
var namee = document.getElementById("bname");
var email = document.getElementById("bemail");
var password = document.getElementById("bpassword");
var username = document.getElementById("busername");
var phoneNumber = document.getElementById("bphoneNum");
var ownerId = document.getElementById("bownerId");
var fiscalNumber = document.getElementById("bfiscalNum");
var businessNumber = document.getElementById("bnumber");
var businessActivity = document.getElementById("bactivity");

$("#editBusinessButton").click(function () {
    var idField = document.getElementById("idField").value;
    idB.value = idField;
    getBusiness(idB.value)
});


function fillFields(business) {
    var idField = document.getElementById("idField").value;

    if (idField == "") {
        alert("Please fill id field");
    } else {


        namee.value = business.name;
        email.value = business.email;
        password.value = business.password;
        username.value = business.username;
        phoneNumber.value = business.tel_Number;
        ownerId.value = business.owner_ID;
        fiscalNumber.value = business.fiscal_Number;
        businessNumber.value = business.business_Number;
        businessActivity.value = business.business_Activity;


        console.log(business)
    }
}


function getBusiness(id) {

    $.ajax({
        url: "http://localhost:9000/api/register/business/get/business/" + id,
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            business = JSON.parse(JSON.stringify(data));

            fillFields(business)

        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        }
    });

}


var editedBusinessData = {
    idB: "",
    name: "",
    email: "",
    password: "",
    username: "",
    tel_Number: "",
    owner_ID: "",
    fiscal_Number: "",
    business_Number: "",
    business_Activity: "",
    status: "",
    role: ""
}


$("#saveChangesButton").click(function (event) {
    editedBusinessData = {
        id: idB.value,
        name: namee.value,
        email: email.value,
        password: password.value,
        username: username.value,
        tel_Number: phoneNumber.value,
        owner_ID: ownerId.value,
        fiscal_Number: fiscalNumber.value,
        business_Number: businessNumber.value,
        business_Activity: businessActivity.value,
        status: "activ",
        role: "business"
    }


    editBusiness(editedBusinessData);
});


function editBusiness(business) {
    console.log(business)
    $.ajax({
        url: "http://localhost:9000/api/register/business/edit/business",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        // dataType: "json",
        data: JSON.stringify(business),
        success: function (res) {
            // localStorage.setItem('kuizi', JSON.stringify(res))
            location.reload();
            alert("Business was editet successfully.")
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
}