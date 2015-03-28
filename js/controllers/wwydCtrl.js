/**
 * Created by jaybisa on 3/28/15.
 *
 * Angular controller which talks to the model and updates the view
 */

var myApp = angular.module('wwydApp', [])

myApp.controller('WWYDCtrl', ['$scope', '$sce', 'WWYDService', function($scope, $sce, WWYDService) {

    $scope.init = function() {
        $scope.videos = WWYDService.getVideos();
        var id = Math.floor(Math.random() * $scope.videos.length) + 1;
        $scope.title = $scope.videos[id].title;
        $scope.link = $sce.trustAsResourceUrl($scope.videos[id].link);
    }


    $scope.somethingElse = function() {
        var id = Math.floor(Math.random() * $scope.videos.length);

        $scope.title = $scope.videos[id].title;
        $scope.link = $sce.trustAsResourceUrl($scope.videos[id].link);
    }

}]);