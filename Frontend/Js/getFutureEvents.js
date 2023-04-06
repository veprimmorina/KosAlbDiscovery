$("#futureEventsButton").click(function () {
  getFutureBusinesses();
});

function getFutureBusinesses() {
  $.ajax({
    url: "http://localhost:9000/api/event/get/future/events",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var eventsF = JSON.parse(JSON.stringify(data));

      console.log(eventsF);
      showFutureEvents(eventsF);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}
var exec = false;
function showFutureEvents(eventsF) {
  if (exec == false) {
    var allEventsDiv = document.getElementById("futureEventsDiv");

    for (i in eventsF) {
      var event = eventsF[i];

      console.log(event.id);
      var eventDiv = document.createElement("div");
      eventDiv.classList.add("event");

      //img div
      var imgDiv = document.createElement("div"); //
      imgDiv.classList.add("eventImg");

      var img = document.createElement("img");
      img.src = event.photoPath;

      imgDiv.appendChild(img);
      //
      var nameDateDiv = document.createElement("div"); //
      nameDateDiv.classList.add("nameAndDate");

      var nameDiv = document.createElement("div");
      nameDiv.classList.add("eventName");

      var nameH3 = document.createElement("h4");
      var name = document.createTextNode(event.name);

      nameH3.appendChild(name);
      nameDiv.appendChild(nameH3);
      //date
      var dateDiv = document.createElement("div");
      dateDiv.classList.add("eventDate");

      var dateH3 = document.createElement("h4");
      var time = event.startDate;
      var startdate = new Date(time);
      var date = document.createTextNode(
        "Start: " +
          startdate.toDateString() +
          "." +
          "     Time: " +
          event.startTime
      );

      dateH3.appendChild(date);

      dateDiv.appendChild(dateH3);

      nameDateDiv.appendChild(nameDiv);
      nameDateDiv.appendChild(dateDiv);

      //description
      var descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("eventDescription");

      //  var descriptionH4 = document.createElement("h4");
      //  var descriptionTitle = document.createTextNode("Description");
      // descriptionH4.appendChild(descriptionTitle);

      var descriptionP = document.createElement("p");
      var description = document.createTextNode(event.description);
      descriptionP.appendChild(description);
      var butDiv = document.createElement("div");

      var but = document.createElement("button");
      var bd = document.createTextNode("Going");
      but.classList.add("eventButton" + event.id);
      but.classList.add("eventButton");
      but.id = event.id;
      but.appendChild(bd);
      //  descriptionDiv.appendChild(descriptionH4)
      descriptionDiv.appendChild(descriptionP);
      descriptionDiv.appendChild(but);
      ////
      eventDiv.appendChild(imgDiv);
      eventDiv.appendChild(nameDateDiv);
      eventDiv.appendChild(descriptionDiv);
      eventDiv.appendChild(butDiv);
      //button

      dateDiv.appendChild(but);

      allEventsDiv.appendChild(eventDiv);
      var usern = localStorage.getItem("username");

      eventParticipant = {
        username: usern,
        id: event.id,
      };

      var idOfEvent = event.id;
      console.log(idOfEvent);
      $("#" + idOfEvent).click(function () {
        createEventParticipant(eventParticipant);
      });
    }
  }
  exec = true;
}

function createEventParticipant(eventParticipant) {
  $.ajax({
    url: "http://localhost:9000/api/event/create/eventparticipant",
    type: "post",
    contentType: "application/json; charset=utf-8",
    // dataType: "json",
    data: JSON.stringify(eventParticipant),
    success: function (res) {
      // localStorage.setItem('kuizi', JSON.stringify(res))
      //console.log(username);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}

var eventParticipant = {
  username: "",
  id: "",
};
