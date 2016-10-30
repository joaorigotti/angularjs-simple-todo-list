'use strict';

var app = angular.module('todo', []);

app.run(['$rootScope', function($rootScope) {
  $rootScope.STORAGE_ID = '__angulartodolist__';
}]);

app.controller('TodoController', ['$scope', function($scope) {

  $scope.tasks = {
    new: '',
    list: getStorageData()
  };

  $scope.addTask = function() {
    var newTask = $scope.tasks.new;

    $scope.tasks.list.push({
      description: newTask,
      done: false
    });

    setStorageData($scope.tasks.list);
    $scope.tasks.new = '';
  };

  $scope.taskDone = function(index) {
    $scope.tasks.list[index].done = true;
    setStorageData($scope.tasks.list);
  }

  $scope.removeTask = function(index) {
    $scope.tasks.list = $scope.tasks.list.filter((el, i) => i !== index);
    setStorageData($scope.tasks.list);
  };

  $scope.clearTasks = function() {
    $scope.tasks.list = [];
    setStorageData(null);
  };

  function setStorageData(task) {
    return localStorage.setItem($scope.STORAGE_ID, JSON.stringify(task));
  }

  function getStorageData() {
    return JSON.parse(localStorage.getItem($scope.STORAGE_ID)) || [];
  }

}]);

app.directive('todoItem', function() {
  return {
    restrict: 'E',
    templateUrl: 'todoItem.html'
  }
});
