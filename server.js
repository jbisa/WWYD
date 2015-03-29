/**
 * Created by jaybisa on 3/28/15.
 *
 * Node application
 */

var express             = require('express'),
    app                 = express(),
    mongoose            = require('mongoose'),
    videosController    = require('./server/controllers/videosController.js');

mongoose.connect('mongodb://localhost:27017/wwyd')

app.get('/', function(req, res) {
    res.sendFile('/Users/jaybisa/WebstormProjects/WWYD/index.html');
});

// Send the js and css files needed to the server using express
app.use('/js', express.static('/Users/jaybisa/WebstormProjects/WWYD/js'));
app.use('/css', express.static('/Users/jaybisa/WebstormProjects/WWYD/css'));

// REST API
app.get('/rest/videos', videosController.list);

app.listen(3000, function() {
    console.log("I'm listening...");
});