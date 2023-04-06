var createEventDiv = document.getElementById("createEventDiv");
var allEventsDiv = document.getElementById("allEventsDiv");
var happeningEvents = document.getElementById("happeningEventsDiv");
var finishedEvents=document.getElementById("finishedEventsDiv");
var futureEvents=document.getElementById("futureEventsDiv");

$("#allEventsButton").click(function (event) {
  if (allEventsDiv.classList == "hide") {
    showAllEventsDiv();
  } else {
    allEventsDiv.classList.add("hide");
  }
});

$("#createEventButton").click(function (event) {
  showCreateEventDiv();
});
$("#happeningEventsButton").click(function (event) {
  if (happeningEvents.classList == "hide") {

    createEventDiv.classList.add("hide");
    allEventsDiv.classList.add("hide");
    finishedEvents.classList.add("hide");
    futureEvents.classList.add("hide");
    happeningEvents.classList.remove("hide");
  } else {
    happeningEvents.classList.add("hide");
  }
});

$("#finishedEventsButton").click(function (event) {
  if (finishedEvents.classList == "hide") {


    createEventDiv.classList.add("hide");
    allEventsDiv.classList.add("hide");
    happeningEvents.classList.add("hide")
    futureEvents.classList.add("hide");
    finishedEvents.classList.remove("hide");
  } else {
    finishedEvents.classList.add("hide");
  }
});

$("#futureEventsButton").click(function (event) {
  if (futureEvents.classList == "hide") {

    createEventDiv.classList.add("hide");
    allEventsDiv.classList.add("hide");
    happeningEvents.classList.add("hide");
    finishedEvents.classList.add("hide");
    futureEvents.classList.remove("hide");


  } else {
    futureEvents.classList.add("hide");
  }
});

function showCreateEventDiv() {
  createEventDiv.classList.remove("hide");
  happeningEvents.classList.add("hide");
  allEventsDiv.classList.add("hide");
}

function showAllEventsDiv() {
  allEventsDiv.classList.remove("hide");
  happeningEvents.classList.add("hide");
  futureEvents.classList.add("hide");
  finishedEvents.classList.add("hide");
  createEventDiv.classList.add("hide");
}

function showHappeningEvents() {
  happeningEvents.classList.remove("hide");
  createEventDiv.classList.add("hide");
  allEventsDiv.classList.add("hide");
}
