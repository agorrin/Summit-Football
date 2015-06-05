app.service('rosterService', function($firebaseArray, fb) {
	var = playerData {
		'players': [
			{
				'number': '12',
				'name': 'Justin Miller',
				'position': 'QB'
			},
			{
				'number': '99',
				'name': 'John Doe',
				'position': 'DT'
			},
			{
				'number': '31',
				'name': 'Abe Lincoln',
				'position': 'RB'
			},
			{
				'number': '1',
				'name': 'Bob Lee',
				'position': 'WR'
			},

		]
	};

	this.getRoster = function(){
		var ref = ne Firebase(fb.url + '/roster')
		return $firebaseArray(ref);
	}
});