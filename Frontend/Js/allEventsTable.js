$("#eventButton").click(function (event) {
    getEvents();
});

function getEvents() {
    $.ajax({
        url: "http://localhost:8000/api/event/get/all/events",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            var events = JSON.parse(JSON.stringify(data));

            showEvents(events);
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        },
    });
}

var eventsExecuted = false;

function showEvents(events) {
    if (eventsExecuted == false) {
        //var table = document.getElementById("table");
        var tableBody = document.getElementById("eventsTableBody");

        for (i in events) {
            var tableRow = document.createElement("tr");
            var event = events[i];

            for (j in event) {
                var tableData = document.createElement("td");
                var text = document.createTextNode(event[j]);
                tableData.appendChild(text);
                tableRow.appendChild(tableData);
            }

            tableBody.appendChild(tableRow);
        }
        eventsExecuted = true;
    }
}
