/**                                                                                                                                                                     
 * Created by jaybisa on 11/15/15.                                                           
 *
 */                    

angular.module('wwydApp')
.directive('ytPlayer', ['$window', function ($window) {

	    return {
		restrict: 'A',
		    link: function (scope, element) {
		    console.log(YT.loaded);

		    if (!YT) {
			console.log('playerNotLoaded');
			$window.onYouTubePlayerAPIReady = onPlayerRady;
		    } else if (YT.loaded) {
			onPlayerRady();
		    } else {
			YT.ready(onPlayerRady);
		    }

		    function onPlayerRady() {
			console.log('Creating player');
			var player = new YT.Player(element.attr('id'), {
				height: '390',
				width: '640',
				videoId: 'a1Y73sPHKxw',
				events: {
				    'onReady': onPlayerReady,
				    'onStateChange': onPlayerStateChange
				}
			    });
		    }

		    console.log(YT.loaded);
		    // autoplay video
		    function onPlayerReady(event) {
			console.log('autoplay');

			event.target.playVideo();
		    }

		    // when video ends
		    function onPlayerStateChange(event) {
			if (event.data === 0) {
			    console.log('finsihed');

			    alert('done');
			}
		    }

		}
	    }
	}]);
