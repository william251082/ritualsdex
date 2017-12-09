//Make a database connection 

var db = new Dexie('rituals_database');


db.version(1).stores({
    surveys: 'questionlist_id,name,type,status,location_id,edited,progress,questions,confirmation,email_cc',
    questionlists: 'questionlist_id,name,version,language,roles,type,created,questions',
    images: 'survey_id,question_id,created,base64,thumb' // ex. signatures
});

// Open the database
	db.open().catch(function(error) {
		alert('Uh oh : ' + error);
	});