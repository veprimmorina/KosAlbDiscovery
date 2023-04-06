var statsDiv = document.getElementById("bodyContentMain");
var allBusinessesDiv = document.getElementById("allBusinessesTable");


var allTouristsDiv = document.getElementById("allTouristsTable")
var blockedUsersDiv = document.getElementById("blockedUsersTable");
var allCitiesDiv= document.getElementById("allCitiesTable");
var allPlacesDiv= document.getElementById("allPlacesTable");
var allAdminsDiv= document.getElementById("allAdminsTable");
var allEventsDiv= document.getElementById("allEventsTable");
var allEventsParticiantsDiv= document.getElementById("allEventsParticipantsTable");


// show Businesses
$("#businessesButton").click( function(event){
    if(allBusinessesDiv.classList == "hide"){
        showAllBusinessesDiv()
    }else{
        showStatsDiv()
    }
});

///////un
$("#citiesButton").click( function(event){
    if(allCitiesDiv.classList == "hide"){
        showAllCitiesDiv()
    }else{
        showStatsDiv()
    }
});

////////////une
$("#placesButton").click( function(event){
    if(allPlacesDiv.classList == "hide"){
        showAllPlacesDiv()
    }else{
        showStatsDiv()
    }
});

///show Admins

$("#adminsButton").click( function(event){
    if(allAdminsDiv.classList == "hide"){
        showAllAdminsDiv()
    }else{
        showStatsDiv()
    }
});

//show Events
$("#eventButton").click( function(event){
    if(allEventsDiv.classList == "hide"){
        showAllEventsDiv()
    }else{
        showStatsDiv()
    }
});

//show EventsParticipants

$("#eventParticipantsButton").click( function(event){
    if(allEventsParticiantsDiv.classList == "hide"){
        showAllEventsParticipantsDiv()
    }else{
        showStatsDiv()
    }
});
//show Tourists
$("#touristsButton").click( function(event){
    if(allTouristsDiv.classList == "hide"){

        showAllTouristsDiv()
    }else{
        showStatsDiv()
    }
});


//show admins
$("#adminButton").click( function(event){
    if(allAdminsDiv.classList == "hide"){

        showAllAdminsDiv()
    }else{
        showStatsDiv()
    }
});


// show blocked users
$("#blockedUsersButton").click( function(event){
    if(blockedUsersDiv.classList == "hide"){

        showBlockedUsersDiv()
    }else{
        showStatsDiv()
    }


});


function showStatsDiv(){
    statsDiv.classList.remove("hide");

    hideAllBusinessesDiv()
    hideAllTouristsDiv()
    hideAllAdmins()
    hideBlockedUsersDiv()
    hideAllCitiesDiv()
    hideAllPlacesDiv()
    hideAllEventsDiv()
    hideAllEventsParticipantDiv()
}

function showAllBusinessesDiv(){
    allBusinessesDiv.classList.remove("hide");

    hideStats()
    hideAllTouristsDiv()
    hideAllAdmins()
    hideBlockedUsersDiv()
    hideAllCitiesDiv()
    hideAllPlacesDiv()
    hideAllEventsDiv()
    hideAllEventsParticipantDiv()
}

function showAllTouristsDiv(){
    allTouristsDiv.classList.remove("hide");

    hideStats()
    hideAllAdmins()
    hideAllBusinessesDiv()
    hideBlockedUsersDiv()
    hideAllCitiesDiv()
    hideAllPlacesDiv()
    hideAllEventsDiv()
    hideAllEventsParticipantDiv()
}

function showAllAdminsDiv(){
    allAdminsDiv.classList.remove("hide");

    hideStats()
    hideAllTouristsDiv()
    hideAllBusinessesDiv()
    hideBlockedUsersDiv()
    hideAllCitiesDiv()
    hideAllPlacesDiv()
    hideAllEventsDiv()
    hideAllEventsParticipantDiv()
}

function showBlockedUsersDiv(){
    blockedUsersDiv.classList.remove("hide");

    hideStats()
    hideAllTouristsDiv()
    hideAllBusinessesDiv()
    hideAllAdmins()
    hideAllCitiesDiv()
    hideAllPlacesDiv()
    hideAllEventsDiv()
    hideAllEventsParticipantDiv()
}
////une
function showAllCitiesDiv(){

    allCitiesDiv.classList.remove("hide");

    hideStats()
    hideAllTouristsDiv()
    hideAllBusinessesDiv()
    hideAllAdmins()
    hideAllBusinessesDiv()
    hideAllPlacesDiv()
    hideAllEventsDiv()
    hideAllEventsParticipantDiv()

}

/////une
function showAllPlacesDiv(){
    allPlacesDiv.classList.remove("hide");

    hideStats()
    hideAllTouristsDiv()
    hideAllBusinessesDiv()
    hideAllAdmins()
    hideAllBusinessesDiv()
    hideAllCitiesDiv()
    hideAllEventsDiv()
    hideAllEventsParticipantDiv()

}

///
function showAllEventsDiv(){
    allEventsDiv.classList.remove("hide");

    hideStats()
    hideAllTouristsDiv()
    hideAllBusinessesDiv()
    hideAllAdmins()
    hideAllBusinessesDiv()
    hideAllPlacesDiv()
    hideAllCitiesDiv()
    hideAllEventsParticipantDiv()

}

function showAllEventsParticipantsDiv(){
    allEventsParticiantsDiv.classList.remove("hide");

    hideStats()
    hideAllTouristsDiv()
    hideAllBusinessesDiv()
    hideAllAdmins()
    hideAllBusinessesDiv()
    hideAllPlacesDiv()
    hideAllCitiesDiv()
    hideAllEventsDiv()
}

function hideStats(){
    statsDiv.classList.add("hide");
}

function hideAllBusinessesDiv(){
    allBusinessesDiv.classList.add("hide");
}
function hideAllAdmins(){
    allAdminsDiv.classList.add("hide");
}
function hideBlockedUsersDiv(){
    blockedUsersDiv.classList.add("hide");
}

function hideAllTouristsDiv(){
    allTouristsDiv.classList.add("hide");
}
function hideAllCitiesDiv(){
    allCitiesDiv.classList.add("hide");
}
function hideAllPlacesDiv(){
    allPlacesDiv.classList.add("hide");
}
function hideAllEventsDiv(){
    allEventsDiv.classList.add("hide");
}

function hideAllEventsParticipantDiv(){
    allEventsParticiantsDiv.classList.add("hide");
}