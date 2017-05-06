import express from "express"


var app = express();

app.get("/", (req, res) => {
    res.json({hello: 'world'});
});


var port = process.env.PORT || 3000;

var server = app.listen(port, () => {
    console.log('Service started on port :' + port);
});