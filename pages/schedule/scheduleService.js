app.service('scheduleService', function($firebaseArray, fb){
	var = scheduleData	{
		'opponents': [
			{
				'name': 'Emery Spartans',
				'location': 'Summit Academy High School',
				'time': '7:00'
			}
			{
				'name': 'South Summit Wildcats',
				'location': 'South Summit High School',
				'time': '7:00'
			}
		]
	}
	this.getRoster = function(){
		var ref = ne Firebase(fb.url + '/schedule')
		return $firebaseArray(ref);
	}
})