window.onload = function WindowLoad(event) {
  getBusinessNumber();
  getTouristsNumber();
  getAllUsersNumber();
  getEventsNumber();
  getReservationsNumber();
};

//show businesses number
var businessesNumberP = document.getElementById("businessesNumberP");

function showBusinessesNum(num) {
  var businessesNumber = document.createTextNode(num);
  businessesNumberP.appendChild(businessesNumber);
}

function getBusinessNumber() {
  $.ajax({
    url: "http://localhost:9000/api/register/business/get/businesses/number",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var businessesNumber = JSON.parse(JSON.stringify(data));

      showBusinessesNum(businessesNumber);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

//show tourists number

var touristsNumberP = document.getElementById("touristsNumberP");

function showTouristsNum(num) {
  var touristsNumber = document.createTextNode(num);
  touristsNumberP.appendChild(touristsNumber);
}

function getTouristsNumber() {
  $.ajax({
    url: "http://localhost:9000/api/register/tourist/get/tourists/number",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var touristsNumber = JSON.parse(JSON.stringify(data));

      showTouristsNum(touristsNumber);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}
var usersNumber;

//get all users number
var totalUsersNumberP = document.getElementById("totalUsersNumberP");

function showAllUsersNumber(num) {
  var totalUsersNum = document.createTextNode(num);
  totalUsersNumberP.appendChild(totalUsersNum);
}

function getAllUsersNumber() {
  $.ajax({
    url: "http://localhost:9000/api/register/user/get/users/number",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var usersNumber = JSON.parse(JSON.stringify(data));

      showAllUsersNumber(usersNumber);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

//show event number

var eventNumberP = document.getElementById("eventsNumberP");

function showEventsNum(num) {
  var eventsNumber = document.createTextNode(num);
  eventNumberP.appendChild(eventsNumber);
}

function getEventsNumber() {
  $.ajax({
    url: "http://localhost:9000/api/event/get/events/number",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var eventsNumber = JSON.parse(JSON.stringify(data));

      showEventsNum(eventsNumber);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

//show reservations number

var reservationNumberP = document.getElementById("reservationsNumberP");

function showReservationsNum(num) {
  var reservationsNumber = document.createTextNode(num);
  reservationNumberP.appendChild(reservationsNumber);
}

function getReservationsNumber() {
  $.ajax({
    url: "http://localhost:9000/api/reservation/get/reservations/number",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var reservationsNumber = JSON.parse(JSON.stringify(data));

      showReservationsNum(reservationsNumber);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}
