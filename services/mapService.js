app.service("mapService", function ($http) {
//empty variable for saving 
var _currentItem = null;

//set current location gives the pulls the location that is selected
this.setCurrentItem = function(item) {
  _currentItem = item;
}

//returns the current location
this.returnCurrentItem = function()  {
  return _currentItem;
}


 })