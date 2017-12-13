    // Populate Survey table
db.transaction('rw', db.surveys, function* () {
    var surveysAdd = yield db.surveys
    .add({
        questionlist_id: "questionlist_id",
        name: "name",
        type: "type",
        status: "status",
        location_id: "location_id",
        progress: "progress",
        edited: "moment().format('YYYY-MM-DD HH:mm:ss')",
        questions:"questions",
        confirmation: "confirmation",
        email_cc: "email_cc"
    });

// DB Queries

// Drop 
var drop = yield db.surveys
    .where("type")
    .anyOf("Normal", "discarded")
    //.or("date").below("2014-02-01")
    .delete()
    .then(function (survey) {
        console.log ("Successfully deleted surveys items");
});

// Truncate 
var truncate = yield db.surveys
    .clear()
    .then(function (survey) {
        console.log ("Surveys Truncated");
});

// Count 
var count = yield db.surveys
    .count()
    .then(function (survey) {
        console.log ("Surveys Counted");
});

// Count 
var counted = yield db.surveys
    .count()
    .then(function (survey) {
        console.log ("Surveys Counted");
});

// getAll 
var getAll = yield db.surveys
    //.each(callbackFn)
    .toArray()
    .then(function (survey) {
        console.log ("Got all surveys columns");
});

// getActive 
var getActive = yield db.surveys
    .where('status')
    .equals('active')
    .toArray()
    .then(function (survey) {
        console.log ("Got from active status");
});

// Update 
var update = yield db.surveys
    .update(8, {name: "closed"}).then(function (updated) {
        if (updated)
    console.log ("Survey number 2 was renamed closed");
        else
    console.log ("Nothing was updated - there were no survey with primary key: closed");
});

/* Update option2
db.surveys
    .update()
    .where('status')
    .equals('active')
    .toArray()
    .then(function (survey) {
        console.log ("Closed active status");
});
*/

// getById 
var getById = yield db.surveys
    //.each(callbackFn)
    .where('confirmation')
    .equals(1)
    .toArray()
    .then(function (survey) {
        console.log ("Got surveys by id");
});

// update options = {status,location_id,progress,questions} 
var updateoptions = yield db.surveys
    .update(8, {name: "closed"}).then(function (updated) {
        if (updated)
    console.log ("Survey number 2 was renamed closed");
        else
    console.log ("Nothing was updated - there were no survey with primary key: closed");
});

}).catch (function (e) {
    console.error(e.stack);
});

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













  
