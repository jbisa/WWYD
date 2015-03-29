/**
 * Created by jaybisa on 3/28/15.
 */
var Video = require('../models/video');

module.exports.list = function (request, response) {
    Video.find({}, function (error, results) {
        response.json(results);
    });
}