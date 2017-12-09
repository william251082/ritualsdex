/*
// Find some old friends
	db.friends
		.where('age')
		.above(75)
		.each (function (friend) {
			console.log (friend.name);
		});

	// or make a new one
	db.friends.add({
		name: 'Camilla',
		age: 25
	});
	*/