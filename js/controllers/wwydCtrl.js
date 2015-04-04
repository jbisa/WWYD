/**
 * Created by jaybisa on 3/28/15.
 *
 * Angular controller which talks to the model and updates the view
 */

var myApp = angular.module('wwydApp', ['ngResource'])

myApp.controller('WWYDCtrl', ['$scope', '$sce', '$resource', function($scope, $sce, $resource) {

    $scope.count = 0;
    $scope.videos = [];
    $scope.indices = [];
    $scope.randomIndices = [];

    $scope.init = function() {
        // Eventually make this an angular service
        var Video = $resource('/rest/videos');
        Video.query(function (videos) {
            $scope.videos = videos;

            var videosLength = $scope.videos.length;
            var randomNumber = 0;

            for (i = 0; i < videosLength; i++) {
                $scope.indices.push(i);
            }

            while(videosLength--) {
                randomNumber = Math.floor(Math.random() * (videosLength+1));
                $scope.randomIndices.push($scope.indices[randomNumber]);
                $scope.indices.splice(randomNumber, 1);
            }

            $scope.title = $scope.videos[$scope.randomIndices[$scope.count]].title;

            var videoPlayer = document.getElementById('video-player');
            var iframe = document.createElement('iframe');
            iframe.class = "embed-responsive-item";
            iframe.src = $sce.trustAsResourceUrl($scope.videos[$scope.randomIndices[$scope.count++]].link);
            videoPlayer.appendChild(iframe);
        })
    };

    $scope.somethingElse = function() {
        if ($scope.count == $scope.videos.length) {
            // re-shuffle the videos
            alert("reshuffling!");
            $scope.count = 0;
            var videosLength = $scope.videos.length;
            var randomNumber = 0;
            $scope.indices = [];
            $scope.randomIndices = [];

            for (i = 0; i < videosLength; i++) {
                $scope.indices.push(i);
            }

            while(videosLength--) {
                randomNumber = Math.floor(Math.random() * (videosLength+1));
                $scope.randomIndices.push($scope.indices[randomNumber]);
                $scope.indices.splice(randomNumber, 1);
            }
        }

        $scope.title = $scope.videos[$scope.randomIndices[$scope.count]].title;

        var videoPlayer = document.getElementById('video-player');
        videoPlayer.removeChild(videoPlayer.childNodes[0]);
        var iframe = document.createElement('iframe');
        iframe.class = "embed-responsive-item";
        iframe.src = $sce.trustAsResourceUrl($scope.videos[$scope.randomIndices[$scope.count++]].link);
        videoPlayer.appendChild(iframe);
    };

}]);