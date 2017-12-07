app.service("showService", function ($http) {
  //stores current user in this variable in service
  var _currentUser = null

  //sets the user equal to the current user tmep
  this.setCurrentUser = function (user) {
    _currentUser = user
    //console.log( _currentUser)
  }
//sets the ret
  this.returnCurrentUser = function () {
    return _currentUser
  }
})