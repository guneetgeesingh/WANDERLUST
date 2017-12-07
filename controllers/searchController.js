app.controller("searchController", function ($scope, $state, $stateParams, searchService, $http, userService, showService, mapService) {

  //spot is test varaiable for getting storing the longitude and lattitdue
  var spot = null;

  //Populalates Username on the serarch page
  $scope.userNow = showService.returnCurrentUser();

  //allows the search to be populated when clicking update
  $scope.loc = mapService.returnCurrentItem();

  // bootstrap ui function for search bar asynchrouns typing bar
  $scope.getLocation = function (val) {
    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      })
      .then(function (response) {
        //console.log(response.data)
        spot = response.data.results[0]
        return response.data.results.map(function (item) {
          return item.formatted_address;
        });
      })
  }

  //array for  locations that show by clicking add button 
  $scope.locData = []
  $scope.addLocation = function () {
    console.log($scope.loc);

    //pushes data into the loc data array for temporary veiwing in controller

    $scope.locData.push(angular.copy($scope.loc));
    console.log($scope.locData);
    console.log(spot.geometry.location)
    searchService.setLatLng(spot.geometry.location);
  }
  //function that shows t
  $scope.showAll = function () {
    searchService.saveLocations($scope.locData);
  }
  // function that saves the item 
  $scope.saveItem = function () {
    searchService.updateLoc($scope.loc);
  }

})