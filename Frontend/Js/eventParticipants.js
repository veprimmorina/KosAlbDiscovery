$("#eventParticipantsButton").click(function (event) {
    getEventsParticipants();
});

function getEventsParticipants() {
    $.ajax({
        url: "http://localhost:9000/api/event/get/all/events/participants",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            var eventsParticipants = JSON.parse(JSON.stringify(data));

            showEventsParticipants(eventsParticipants);
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        },
    });
}

var eventsParticipantsExecuted = false;

function showEventsParticipants(eventsParticipants) {
    if (eventsParticipantsExecuted == false) {
        //var table = document.getElementById("table");
        var tableBody = document.getElementById("eventsParticipantsTableBody");

        for (i in eventsParticipants) {
            var tableRow = document.createElement("tr");
            var eventParticipant = eventsParticipants[i];

            for (j in eventParticipant) {
                var tableData = document.createElement("td");
                var text = document.createTextNode(eventParticipant[j]);
                tableData.appendChild(text);
                tableRow.appendChild(tableData);
            }

            tableBody.appendChild(tableRow);
        }
        eventsParticipantsExecuted = true;
    }
}
