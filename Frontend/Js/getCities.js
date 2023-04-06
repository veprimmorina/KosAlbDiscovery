$("#citiesButton").click(function (event) {
    getCities();
});

function getCities() {
    $.ajax({
        url: "http://localhost:9000/api/register/city/get/all/cities",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            var cities = JSON.parse(JSON.stringify(data));

            showCities(cities);
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        },
    });
}

var citiesExecuted = false;

function showCities(cities) {
    if (citiesExecuted == false) {
        //var table = document.getElementById("table");
        var tableBody = document.getElementById("citiesTableBody");

        for (i in cities) {
            var tableRow = document.createElement("tr");
            var city = cities[i];

            for (j in city) {
                var tableData = document.createElement("td");
                var text = document.createTextNode(city[j]);
                tableData.appendChild(text);
                tableRow.appendChild(tableData);
            }

            tableBody.appendChild(tableRow);
        }
        citiesExecuted = true;
    }
}