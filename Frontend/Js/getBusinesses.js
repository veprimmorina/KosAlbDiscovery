$("#businessesButton").click(function (event) {
  getBusinesses();
});

function getBusinesses() {
  $.ajax({
    url: "http://localhost:9000/api/register/business/get/all/businesses",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var business = JSON.parse(JSON.stringify(data));

      showBusinesses(business);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

var executed = false;

function showBusinesses(businesses) {
  if (executed == false) {
    //var table = document.getElementById("table");
    var tableBody = document.getElementById("tableBody");

    for (i in businesses) {
      var tableRow = document.createElement("tr");
      var business = businesses[i];

      for (j in business) {
        var tableData = document.createElement("td");

        var text = document.createTextNode(business[j]);
        tableData.appendChild(text);
        tableRow.appendChild(tableData);
      }

      tableBody.appendChild(tableRow);
    }
    executed = true;
  }
}

$("#deleteBusinessButton").click(function (event) {
  var businessId = document.getElementById("idField").value;
  deleteBusiness(businessId);
});

function deleteBusiness(businessId) {
  $.ajax({
    url:
      "http://localhost:9000/api/register/business/delete/business/by/" +
      businessId,
    type: "post",
    contentType: "application/json; charset=utf-8",
    // dataType: "json",
    //data: JSON.stringify(business),
    success: function (res) {
      // localStorage.setItem('kuizi', JSON.stringify(res))

      //   console.log(business)
      alert("Business was deletet successfully.");
      location.reload();
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}
