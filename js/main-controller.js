angular.module('fwiends')
  .controller('mainCtrl', function ($scope) {

    $scope.myFwiends = ['Jordyn', 'Ryan', 'Chelsey'];

    $scope.addFriend = function (fwiend) {
      $scope.myFwiends.push( fwiend );
      $scope.newFwiend = '';
    }
  })
