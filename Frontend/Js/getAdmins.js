$("#adminsButton").click(function (event) {
    getAdmins();
});

function getAdmins() {
    $.ajax({
        url: "http://localhost:9000/api/register/admin/get/all/admins",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            var admins = JSON.parse(JSON.stringify(data));

            showAdmins(admins);
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        },
    });
}

var adminsExecuted = false;

function showAdmins(admins) {
    if (adminsExecuted == false) {
        //var table = document.getElementById("table");
        var tableBody = document.getElementById("adminsTableBody");

        for (i in admins) {
            var tableRow = document.createElement("tr");
            var admin = admins[i];

            for (j in admin) {
                var tableData = document.createElement("td");
                var text = document.createTextNode(admin[j]);
                tableData.appendChild(text);
                tableRow.appendChild(tableData);
            }

            tableBody.appendChild(tableRow);
        }
        adminsExecuted = true;
    }
}
