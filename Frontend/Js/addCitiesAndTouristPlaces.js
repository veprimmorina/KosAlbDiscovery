var cityName = document.getElementById("newCityName");
var cityZipCode = document.getElementById("newCityZip");

$("#citySaveChangesButton").click(function () {
  if (cityName.value == "" || cityZipCode.value == "") {
    alert("Please fill all the fields");
  } else {
    var cName = cityName.value;
    var czip = cityZipCode.value;
    city = {
      name: cName,
      zipCode: czip,
    };

    createCity(city);

    cityName.value = "";
    cityZipCode.value = "";
  }
});

function createCity(city) {
  $.ajax({
    url: "http://localhost:9000/api/register/city/create",
    type: "post",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(city),
    success: function (res) {
      console.log(city);
    },
    error: function (request, error, status) {
      console.log(error);
      console.log(status);
    },
  });
}

city = {
  name: "",
  zipCode: "",
};

// add new tourist place

var toursitPlaceName = document.getElementById("newTouristPlaceName");
var toursitPlaceCity = document.getElementById("newTouristPlaceCity");

$("#touristPlaceSaveChangesButton").click(function () {
  if (toursitPlaceCity.value == "" || toursitPlaceName.value == "") {
    alert("Please fill all required fields.");
  } else {
    var tPName = toursitPlaceName.value;
    var tPCity = toursitPlaceCity.value;

    touristPlace = {
      name: tPName,
      city: tPCity,
    };
    createTouristPlace(touristPlace);
    console.log(touristPlace);
  }
});

function createTouristPlace(touristPlace) {
  $.ajax({
    url: "http://localhost:9000/api/register/touristPlace/create/touristPlace",
    type: "post",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(touristPlace),
    success: function (res) {
      console.log(touristPlace);
      console.log(cityName);
    },
    error: function (request, error, status) {
      console.log(error);
      console.log(status);
    },
  });
}

touristPlace = {
  name: "",
  city: "",
};
