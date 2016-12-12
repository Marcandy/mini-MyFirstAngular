angular.module('ang1')
    .controller('mainCtrl', function($scope) {

    $scope.test = 'working';

    $scope.guests = [
      {
        name: 'Marc',
        favcolor: 'blue'
      },
      {
        name: 'scott',
        favcolor: 'blue'
      }
    ]

    $scope.addGuest = function () {
      var newGuest = {
        name: $scope.newGuest,
        color: $scope.color
      }

      $scope.guests.push(newGuest);

      $scope.newGuest = '';
      $scope.color = '';
    }
})
