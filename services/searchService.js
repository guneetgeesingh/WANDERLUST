app.service("searchService", function ($http, $state) {
  //location array to save all the locations in the controller
  var _locDetails = []

  //location ID
  var locID = 0

  //for loops through the controller locations array to save and push locations into service array
  this.saveLocations = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      //gives the locations an ID in this array
      arr[i].id = locID++
        console.log(arr[i]);
      _locDetails.push(arr[i]);
    }
    console.log(_locDetails);
    $state.go("shows")
  }

  //returns locations for show individual/ map controller
  this.returnLocDetails = function () {
    return _locDetails;
  }

  //update location for the current location 
  this.updateLoc = function (location) {
    console.log(location)
    console.log(_locDetails)
    for (var i = 0; i < _locDetails.length; i++) {
      if (location.id == _locDetails[i].id) {
        _locDetails.splice(i, 1, location)
      }
    }
    console.log(_locDetails)
  }
  //delete function for taking locations out of array
  this.deleteLoc = function (id) {
    for (var i = 0; i < _locDetails.length; i++) {
      if (_locDetails[i].id == id) {
        _locDetails.splice(i, 1)
        console.log(_locDetails);
        $state.go("shows")
      }
    }
  }

  //array for lattidute and longitude
  var lattylnggy = []

  //function that pushes lat and lng into array
  this.setLatLng = function (latlng) {
    lattylnggy.push(latlng);
    console.log(lattylnggy);
  }
  //variable for current latitude and longitude
  var currentLattyLnggy = null

  //grabs the current lattitude and longitude from array
  this.setCurrentLatLng = function (i) {
    currentLattyLnggy = lattylnggy[i]
    console.log(currentLattyLnggy);
  }

  //returns lat and lang for map controller
  this.returnCurrentLatLng = function () {
    return currentLattyLnggy;
  }

})