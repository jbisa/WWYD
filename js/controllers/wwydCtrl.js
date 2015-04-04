/**
 * Created by jaybisa on 3/28/15.
 *
 * Angular controller which talks to the model and updates the view
 */

var myApp = angular.module('wwydApp', ['ngResource'])

myApp.controller('WWYDCtrl', ['$scope', '$sce', '$resource', function($scope, $sce, $resource) {

    $scope.init = function() {
        // Eventually make this an angular service
        var Video = $resource('/rest/videos');
        Video.query(function (videos) {
            $scope.videos = videos;
            var id = Math.floor(Math.random() * $scope.videos.length);
            $scope.title = $scope.videos[id].title;

            var videoPlayer = document.getElementById('video-player');
            var iframe = document.createElement('iframe');
            iframe.class = "embed-responsive-item";
            iframe.src = $sce.trustAsResourceUrl($scope.videos[id].link);
            videoPlayer.appendChild(iframe);
        })

        /**
        $scope.indices = [];
        $scope.randomIndices = [];
        var videosLength = $scope.videos.length,
            randomNumber = 0;

        for (i = 0; i < videosLength; i++) {
            $scope.indices.push(i);
        }

        while(videosLength--) {
            randomNumber = Math.floor(Math.random() * (videosLength+1));
            $scope.randomIndices.push($scope.indices[randomNumber]);
            $scope.indices.splice(randomNumber, 1);
        }
         */


    }

    $scope.somethingElse = function() {
        var id = Math.floor(Math.random() * $scope.videos.length);
        $scope.title = $scope.videos[id].title;
        var videoPlayer = document.getElementById('video-player');
        videoPlayer.removeChild(videoPlayer.childNodes[0]);
        var iframe = document.createElement('iframe');
        iframe.class = "embed-responsive-item";
        iframe.src = $sce.trustAsResourceUrl($scope.videos[id].link);
        videoPlayer.appendChild(iframe);
    }

}]);