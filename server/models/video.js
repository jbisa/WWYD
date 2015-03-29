/**
 * Created by jaybisa on 3/28/15.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Video', {
    title: String,
    link: String
});