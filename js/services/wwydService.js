/**
 * Created by jaybisa on 3/28/15.
 *
 * Angular service which retrieves data from backend data source in JSON
 */

angular.module('wwydApp')
 .service('WWYDService', function() {

        var videos = [
	{
	    title: "Touch the Sky",
	    link: "https://www.youtube.com/embed/YkwQbuAGLj4?autoplay=1;modestbranding=1;showinfo=0"
	},
	{
	    title: "Only One",
	    link: "https://www.youtube.com/embed/WibQR0tQ0P8?autoplay=1;modestbranding=1;showinfo=0"
	},
	{
	    title: "Homecoming",
	    link: "https://www.youtube.com/embed/LQ488QrqGE4?autoplay=1;modestbranding=1;showinfo=0"
	},
	{
	    title: "Good Life",
	    link: "https://www.youtube.com/embed/FEKEjpTzB0Q?autoplay=1;modestbranding=1;showinfo=0"
	},
	{
	    title: "Can't Tell Me Nothing",
	    link: "https://www.youtube.com/embed/E58qLXBfLrs?autoplay=1;modestbranding=1;showinfo=0"
	}
        ];

        this.getVideos = function() {
            return videos;
        }

    });
