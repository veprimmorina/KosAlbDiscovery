$(document).ready(function () {
  getTBNumbers();
});

function getTBNumbers() {
  $.ajax({
    url: "http://localhost:8080/api/register/user/get/users/numbers",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var numbers = JSON.parse(JSON.stringify(data));

      // console.log(numbers)
      showChart(numbers[0], numbers[1]);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

function showChart(tN, bN) {
  var ctx = $("#mycanvas").get(0).getContext("2d");

  //pie chart data
  //sum of values = 360
  var data = [
    {
      value: tN,
      color: "#FF69B4",
      highlight: "#800080",
      label: "Tourists",
    },
    {
      value: bN,
      color: "#00BFFF",
      highlight: "#000080",
      label: "Businesses",
    },
  ];

  //draw
  var piechart = new Chart(ctx).Pie(data);
}
