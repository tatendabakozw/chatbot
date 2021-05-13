var express = require('express');
var app = express();
require('dotenv').config();
var port = process.env.PORT || 5500;
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server up on port " + port);
    }
});
