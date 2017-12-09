/* Truncate */
db.images
    .clear()
    .then(function (image) {
        console.log ("Truncated Images");
});

/* Count */
db.images
    .count()
    .then(function (image) {
        console.log ("Images Counted");
});

/* getById */
db.images
    //.each(callbackFn)
    .where('base64')
    .equals(1)
    .toArray()
    .then(function (image) {
        console.log ("Got images by id");
});

/* Delete image by id */
db.images
    .where("thumb").anyOf("Normal", "discarded")
    .or("created").below("2014-02-01")
    .delete()
    .then(function (image) {
        console.log ("Successfully deleted images items");
});

/* Delete image by surveyId */
db.images
    .where("survey_id").anyOf("Normal", "discarded")
    .or("created").below("2014-02-01")
    .delete()
    .then(function (image) {
        console.log ("Successfully deleted images by survey id");
});

/* Delete image by surveyId */
db.images
    .where("survey_id").anyOf("Normal", "discarded")
    .or("created").below("2014-02-01")
    .delete()
    .then(function (image) {
        console.log ("Successfully deleted images by survey id");
});

/* Delete image by surveyId 
Db.Images.getImages = function (survey_id, question_id){
	  where = [];
	  params = [];
	  if (survey_id !== undefined){
	      where.push('survey_id = ?');
	      params.push(survey_id);
	  }
	  if (question_id !== undefined){
	      where.push('question_id = ?');
	      params.push(question_id);
	  }
	  sql = (where.length > 0) ?  "SELECT * FROM images WHERE " + where.join(" AND ") : "SELECT * FROM images";

	  var deferred = new $.Deferred();
	  persistence.transaction(
        function(tx){
            tx.executeSql(
                sql,
                params,
                function(result){
                	deferred.resolve(result);
                }
            );
        }
    );
	  return deferred.promise();
};
*/

    // Populate Images table
db.transaction('rw', db.images, function (id,survey_id,question_id,base64,thumb) {
    db.images
    .add({
    	id:"id", 
    	survey_id:"survey_id", 
    	question_id:"question_id", 
    	created:"moment().format('YYYY-MM-DD HH:mm:ss')", 
    	base64:"base64", 
    	thumb:"thumb"
    });
}).catch (function (e) {
    console.error(e.stack);
});
