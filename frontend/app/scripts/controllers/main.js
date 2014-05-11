'use strict';

angular.module('frontendApp')
.controller('MainCtrl', ['$scope', '$log', '$firebase', function($scope, $log, $firebase) {
  
  $scope.$log = $log;

  var ref = new Firebase('https://blistering-fire-5309.firebaseio.com');

  var userRef = ref.child('/users');
  $scope.users = $firebase(userRef);
  $scope.username = '';

  var daysRef = ref.child('/days');
  $scope.days = $firebase(daysRef);

  var typesRef = ref.child('/types');
  $scope.types = $firebase(typesRef);

  var slotsRef = ref.child('/slots');
  $scope.slots = $firebase(slotsRef);

  var weeksRef = ref.child('/weeks');
  $scope.weeks = $firebase(weeksRef);

  $scope.weeks.$bind($scope, 'remoteWeeks');
  $scope.week = new Date().getWeekNumber();

  $scope.updateWeek = function(week, day, slot, index, type) {
    $scope.remoteWeeks[week][day][slot][index].type = type;
  };

  $scope.deleteWeek = function(week, day, slot, obj) {
    var data = $scope.remoteWeeks[week][day][slot];
    data.splice(data.indexOf(obj),1);
  };

  $scope.newWeek = function(week, day, slot, user, type) {
    if($scope.remoteWeeks[week] === undefined){
      $scope.remoteWeeks[week] = [];
    }
    if($scope.remoteWeeks[week][day] === undefined){
      $scope.remoteWeeks[week][day] = [];
    }
    if($scope.remoteWeeks[week][day][slot] === undefined){
      $scope.remoteWeeks[week][day][slot] = [];
    }
    $scope.remoteWeeks[week][day][slot].push({name: user, type: type});
  };

  $scope.range = function(min, max, step){
    step = (step === undefined) ? 1 : step;
    var input = [];
    for (var i = min; i <= max; i += step){
      input.push(i);
    }
    return input;
  };
}]);
