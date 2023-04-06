$("#touristsButton").click(function (event) {
  getTourists();
});

function getTourists() {
  $.ajax({
    url: "http://localhost:9000/api/register/tourist/get/all/tourists",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var tourists = JSON.parse(JSON.stringify(data));

      showTourists(tourists);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

var touristsExecuted = false;

function showTourists(tourists) {
  if (touristsExecuted == false) {
    //var table = document.getElementById("table");
    var tableBody = document.getElementById("touristsTableBody");

    for (i in tourists) {
      var tableRow = document.createElement("tr");
      var tourist = tourists[i];

      for (j in tourist) {
        var tableData = document.createElement("td");
        var text = document.createTextNode(tourist[j]);
        tableData.appendChild(text);
        tableRow.appendChild(tableData);
      }

      tableBody.appendChild(tableRow);
    }
    touristsExecuted = true;
  }
}
