app.controller("mapController", function ($scope, $state, $stateParams, mapService, searchService) {

  //returns location details and throws them into 
$scope.currentItem = null;
$scope.locations = searchService.returnLocDetails();

for(var i = 0; i < $scope.locations.length; i++ ) {
  if ( $scope.locations[i].id == $stateParams.id) {
    $scope.currentItem = $scope.locations[i];
    mapService.setCurrentItem($scope.currentItem)
  }
}




$scope.updateLoc = function()
{
  $state.go("search")
}
  // continuation of delete function
  $scope.deleteLoc = function () {
    searchService.deleteLoc($stateParams.id)
    console.log($scope.locations)
  }
  //shooting the stateParams into service to match the current Lat and Lng
  searchService.setCurrentLatLng($stateParams.id);

  //latalonga is temp variable to store lattitude and longitude
  var latalonga = null

  //setting the current Latitude and longitude to latalonga
  latalonga = searchService.returnCurrentLatLng();

  //checking if returned lat and long are okay!
  console.log(latalonga);


  //google maps function to show and mark map.

  $scope.initMap = function () {
    //var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: latalonga
    });
    var marker = new google.maps.Marker({
      position: latalonga,
      map: map
    });
  }
  //calls the google map function (shout out to ryan for the help)
  $scope.initMap()

})