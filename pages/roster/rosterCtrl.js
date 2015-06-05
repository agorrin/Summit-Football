app.controller('rosterCtrl', function($scope, $location, rosterService) {

	$scope.newPlayerNumber = '';
	$scope.newPlayerName = '';
	$scope.newPlayerPosition = '';

	$scope.addPlayer = function()	{
		if(!$scope.newPlayerNumber //add other two scopes) {
			return false;
		}

		var newPlayer = {
			number: $scope.newPlayerNumber,
			name: $scope.newPlayerName,
			position: $scope.newPlayerPosition
		}

		$scope.roster.$add(newPlayer);

		$scope.newPlayerNumber = '';
		$scope.newPlayerName = '';
		$scope.newPlayerPosition = '';
	}

});