$("#createEventButton").click(function () {
  getCities();
  getTouristPlaces();
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
      //  console.log(cities)
      showCitiesForEvent(cities);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

var isExecuted = false;
function showCitiesForEvent(cities) {
  var touristCitiesList = document.getElementById("crEventCity");

  if (isExecuted == false) {
    for (i in cities) {
      var city = cities[i];

      var cityname = city.name;

      var cityNameText = document.createTextNode(cityname);

      var option = document.createElement("option");
      option.value = cityNameText.data;
      option.appendChild(cityNameText);

      touristCitiesList.appendChild(option);
    }
  }

  isExecuted = true;
}

function getTouristPlaces() {
  $.ajax({
    url: "http://localhost:9000/api/register/touristPlace/get/all",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var touristPlaces = JSON.parse(JSON.stringify(data));
      console.log(touristPlaces);
      showTouristPlacesForEvent(touristPlaces);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}
var touristCitiesList = document.getElementById("crEventCity").value;
var executed = false;

function showTouristPlacesForEvent(touristPlaces) {
  var touristCitiesList = document.getElementById("crEventTouristPlace");
  var option = "";

  if (executed == false) {
    for (i in touristPlaces) {
      var touristplace = touristPlaces[i];

      var touristplaceName = touristplace.name;

      var touristplaceNameText = document.createTextNode(touristplaceName);

      option = document.createElement("option");
      option.value = touristplaceNameText.data;
      option.appendChild(touristplaceNameText);

      touristCitiesList.appendChild(option);
    }

    executed = true;
  }
}

function updateDiv() {
  $("#crEventCity").load(window.location.href + " #tpdiv");
}
