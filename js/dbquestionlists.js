/* Drop */
db.questionlists
    .where("version").anyOf("Normal", "discarded")
    //.or("date").below("2014-02-01")
    .delete()
    .then(function (questionlist) {
        console.log ("Successfully deleted questionlists items");
});

/* Truncate */
db.questionlists
    .clear()
    .then(function (questionlist) {
        console.log ("Questionlists Truncated");
});

/* Count */
db.questionlists
    .count()
    .then(function (questionlist) {
        console.log ("Questionlists Counted");
});

/* getAll */
db.questionlists
    //.each(callbackFn)
    .toArray()
    .then(function (questionlist) {
        console.log ("Got all questionlists columns");
});

/* getById */
db.questionlists
    //.each(callbackFn)
    .where('language')
    .equals(1)
    .toArray()
    .then(function (questionlist) {
        console.log ("Got questionlists by id");
});

    // Populate Survey table
db.transaction('rw', db.questionlists, function () {
    db.questionlists
    .add({
        questionlist_id: "questionlist_id",
        name: "name",
        version: "version",
        language: "language",
        roles: "roles",
        type: "type",
        created: "moment().format('YYYY-MM-DD HH:mm:ss')",
        questions: "questions"
    });
}).catch (function (e) {
    console.error(e.stack);
});