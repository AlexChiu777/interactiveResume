'use strict';
angular
    .module('app')
    .controller('HeaderController', function ($scope, $location, $timeout) 
{ 
	
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
    $scope.clock = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
})