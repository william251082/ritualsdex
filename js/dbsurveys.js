/*
// Populate Survey table
db.transaction('rw', db.surveys, function () {

    db.surveys.add({
        questionlist_id: "Zlatan",
        name: "ibra",
        type: "Normal",
        location_id: "Stockholm"
    });
    //Sample Query
    db.surveys.where("type").startsWith("Normal")
        .or("location_id").anyOf (["Malmö", "Stockholm", "Barcelona"])
        .each(function (survey) {
            console.log("Found user: " + survey.name);
        });

}).catch (function (e) {
    console.error(e.stack);
});
*/

/* Drop */
db.surveys
    .where("type").anyOf("Normal", "discarded")
    //.or("date").below("2014-02-01")
    .delete()
    .then(function (survey) {
        console.log ("Successfully deleted items");
});

/* Truncate */
db.surveys
    .clear()
    .then(function (survey) {
        console.log ("Truncated");
});

/* Count */
db.surveys
    .count()
    .then(function (survey) {
        console.log ("Counted");
});

/* getAll */
db.surveys
    //.each(callbackFn)
    .toArray()
    .then(function (survey) {
        console.log ("Got all columns");
});


/* getActive */
db.surveys
    .where('status')
    .equals('active')
    .toArray()
    .then(function (survey) {
        console.log ("Got from active status");
});

/* getById */
db.surveys
    //.each(callbackFn)
    .where('confirmation')
    .equals(1)
    .toArray()
    .then(function (survey) {
        console.log ("Got from id");
});
















  
