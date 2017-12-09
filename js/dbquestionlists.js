/* Drop */
db.questionlists
    .where("version").anyOf("Normal", "discarded")
    //.or("date").below("2014-02-01")
    .delete()
    .then(function (questionlist) {
        console.log ("Successfully deleted items");
});

/* Truncate */
db.questionlists
    .clear()
    .then(function (questionlist) {
        console.log ("Truncated");
});
