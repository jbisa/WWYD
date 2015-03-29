/**
 * Created by jaybisa on 3/28/15.
 *
 * Angular service which retrieves data from backend data source in JSON
 */

angular.module('wwydApp')
 .service('WWYDService', function() {

        var videos = [];

        this.getVideos = function() {
            return videos;
        }

    });
