$("#placesButton").click(function (event) {
    getPlaces();
});

function getPlaces() {
    $.ajax({
        url: "http://localhost:9000/api/register/touristPlace/get/all",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            var places = JSON.parse(JSON.stringify(data));

            showPlaces(places);
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        },
    });
}

var placesExecuted = false;

function showPlaces(places) {
    if (placesExecuted == false) {
        //var table = document.getElementById("table");
        var tableBody = document.getElementById("placesTableBody");

        for (i in places) {
            var tableRow = document.createElement("tr");
            var place = places[i];

            for (j in place) {
                var tableData = document.createElement("td");
                var text = document.createTextNode(place[j]);
                tableData.appendChild(text);
                tableRow.appendChild(tableData);
            }

            tableBody.appendChild(tableRow);
        }
        placesExecuted = true;
    }
}