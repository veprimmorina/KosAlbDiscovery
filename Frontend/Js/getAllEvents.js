$("#allEventsButton").click(function () {
  getAllBusinesses();
});
window.onload = (event) => {
  getAllBusinesses();
};

function getAllBusinesses() {
  $.ajax({
    url: "http://localhost:9000/api/event/get/all/events",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    //data: JSON.stringify(user),
    success: function (data) {
      var events = JSON.parse(JSON.stringify(data));

      console.log(events);
      showEvents(events);
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
    },
  });
}
var isexecuted = false;
function showEvents(events) {
  if (isexecuted == false) {
    var allEventsDiv = document.getElementById("allEventsDiv");

    for (i in events) {
      var event = events[i];

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

      //  descriptionDiv.appendChild(descriptionH4)
      descriptionDiv.appendChild(descriptionP);

      ////
      eventDiv.appendChild(imgDiv);
      eventDiv.appendChild(nameDateDiv);
      eventDiv.appendChild(descriptionDiv);

      allEventsDiv.appendChild(eventDiv);
    }
    isexecuted = true;
  }
}
