/* Drop */
db.images
    .where("thumb").anyOf("Normal", "discarded")
    .or("created").below("2014-02-01")
    .delete()
    .then(function (image) {
        console.log ("Successfully deleted items");
});

/* Truncate */
db.images
    .clear()
    .then(function (image) {
        console.log ("Truncated");
});
