
$("#addNewTouristPlaceButton").click(function(){
    getCities();
});




function getCities() {

    $.ajax({
        url: "http://localhost:9000/api/register/city/get/all/cities",
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            var cities = JSON.parse(JSON.stringify(data));
            console.log(cities)
            showCitiesForTouristPlace(cities)
           
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        }
    });

}

var isExecuted=false;
function showCitiesForTouristPlace(cities){
    var touristCitiesList = document.getElementById("newTouristPlaceCity");

    if(isExecuted == false){
        for( i in cities){
            var city = cities[i];
     
            var cityname=city.name;
     
            var cityNameText = document.createTextNode(cityname);
     
            var option = document.createElement("option");
            option.value=cityNameText.data
            option.appendChild(cityNameText);
            
     
            touristCitiesList.appendChild(option);
            
         }
    }
   
    isExecuted=true;
}

