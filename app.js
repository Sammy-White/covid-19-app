var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/images", express.static(__dirname + '/images'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'views/index.html'));
});



app.listen(process.env.PORT || 4000);