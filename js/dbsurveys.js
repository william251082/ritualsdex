// Find data on surveys table
	db.surveys
		.where('age')
		.above(75)
		.each (function (survey) {
			console.log (survey.name);
		});

	// or make a new one
	db.surveys.add({
		name: 'Camilla',
		type: 25
	});