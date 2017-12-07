app.controller("showController", function ($scope, $state, $stateParams, showService, userService, searchService) {


  // $scope.firstName = searchService.firstName
  // $scope.lastName = searchService.lastName

  // function to take user to the search page and grab the first and last name of user
  $scope.submitUser = function () {
    console.log($scope.user)
    showService.setCurrentUser($scope.user);
    $state.go("search")
  }

  //new array for ng-repeat pn show view

  $scope.newLocDetails = []

  //setting array equal to all details
  $scope.newLocDetails = searchService.returnLocDetails();

  // checking if array went through
  console.log($scope.newLocDetails)



})