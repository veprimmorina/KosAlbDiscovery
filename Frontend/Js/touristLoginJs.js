$("#loginButton").click(function (event) {

    var username = document.getElementById("touristUsername").value;
    var password = document.getElementById("touristPassword")
    var rolee = "tourist";

    tourist = {
        usernamee: username,
        password1: password,
        role: rolee
    }

    console.log(tourist)

    touristLogin(tourist);

});


function touristLogin(tourist) {


    $.ajax({
        url: "http://localhost:9000/api/register/tourist/create/tourist",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        // dataType: "json",
        data: JSON.stringify(tourist),
        success: function (res) {
            // localStorage.setItem('kuizi', JSON.stringify(res))

            console.log(tourist)


        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
}


var tourist = {
    usernamee: "",
    password1: "",
    role: ""
}