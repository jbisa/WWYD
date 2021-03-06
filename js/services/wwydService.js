/**
 * Created by jaybisa on 3/28/15.
 *
 * Angular service which retrieves data from backend data source in JSON
 */

angular.module('wwydApp')
 .service('WWYDService', function() {

        var videos = [
	  { title: "Touch The Sky", link: "https://www.youtube.com/embed/YkwQbuAGLj4?autoplay=1;modestbranding=1;showinfo=0;enablejsapi=1" },
	  { title: "Only One", link: "https://www.youtube.com/embed/WibQR0tQ0P8?autoplay=1;modestbranding=1;showinfo=0;enablejsapi=1" },
	  { title: "Homecoming", link: "https://www.youtube.com/embed/LQ488QrqGE4?autoplay=1;modestbranding=1;showinfo=0;enablejsapi=1" },
	  { title: "Good Life", link: "https://www.youtube.com/embed/FEKEjpTzB0Q?autoplay=1;modestbranding=1;showinfo=0;enablejsapi=1" }
	  /*
	  { title: "Can't Tell Me Nothing", link: "https://www.youtube.com/embed/E58qLXBfLrs?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Otis", link: "https://www.youtube.com/embed/BoEKWtgJQAU?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Stronger", link: "https://www.youtube.com/embed/PsO6ZnUZI0g?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Heartless", link: "https://www.youtube.com/embed/Co0tTeuUVhU?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "All Of The Lights", link: "https://www.youtube.com/embed/HAfFfqiYLp0?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Gold Digger", link: "https://www.youtube.com/embed/6vwNcNOTVzY?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Power", link: "https://www.youtube.com/embed/L53gjP-TtGE?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Flashing Lights", link: "https://www.youtube.com/embed/ila-hAUXR5U?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Amazing", link: "https://www.youtube.com/embed/PH4JPgVD2SM?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Runaway", link: "https://www.youtube.com/embed/Bm5iA4Zupek?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Love Lockdown", link: "https://www.youtube.com/embed/HZwMX6T5Jhk?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Through The Wire", link: "https://www.youtube.com/embed/uvb-1wjAtk4?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Diamonds From Sierra Leone", link: "https://www.youtube.com/embed/92FCRmggNqQ?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Good Morning", link: "https://www.youtube.com/embed/6CHs4x2uqcQ?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Slow Jamz", link: "https://www.youtube.com/embed/hrMrqBcv6Mk?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Heard 'Em Say", link: "https://www.youtube.com/embed/elVF7oG0pQs?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Welcome To Heartbreak", link: "https://www.youtube.com/embed/wMH0e8kIZtE?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Jesus Walks", link: "https://www.youtube.com/embed/MYF7H_fpc-g?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Coldest Winter", link: "https://www.youtube.com/embed/n6rjQ9VVLDI?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "All Falls Down", link: "https://www.youtube.com/embed/8kyWDhB_QeI?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Paranoid", link: "https://www.youtube.com/embed/irBP5FnksKc?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Dark Fantasy", link: "https://www.youtube.com/embed/Jru3k78VXtc?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Ni**as In Paris", link: "https://www.youtube.com/embed/gG_dA32oH44?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Mercy", link: "https://www.youtube.com/embed/7Dqgr0wNyPo?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Blessings", link: "https://www.youtube.com/embed/M6t47RI4bns?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "No Church In The Wild", link: "https://www.youtube.com/embed/FJt7gNi3Nr4?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Bound 2", link: "https://www.youtube.com/embed/BBAtAM7vtgc?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "FourFiveSeconds", link: "https://www.youtube.com/embed/swRgOrKhP8M?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "All Day", link: "https://www.youtube.com/embed/_ABk7TmjnVk?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Knock You Down", link: "https://www.youtube.com/embed/p_RqWocthcc?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "American Boy", link: "https://www.youtube.com/embed/Ic5vxw3eijY?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Put On", link: "https://www.youtube.com/embed/1aEImx74gLA?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Cold", link: "https://www.youtube.com/embed/ar-sduhNbi4?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "White Dress", link: "https://www.youtube.com/embed/INuOO8wWsSM?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Make Her Say", link: "https://www.youtube.com/embed/AmSV2cim0Qg?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Hey Mama", link: "https://www.youtube.com/embed/KqHxOC_kCP0?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "New Slaves/Blood On The Leaves", link: "https://www.youtube.com/embed/A6l-D-GEfRI?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Blame Game", link: "https://www.youtube.com/embed/0hdQmd0uug0?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Walkin' On The Moon", link: "https://www.youtube.com/embed/kqaTjzvMq18?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "H*A*M", link: "https://www.youtube.com/embed/UtoHI0JEfDg?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Forever", link: "https://www.youtube.com/embed/eDuRoPIOBjE?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "I Won", link: "https://www.youtube.com/embed/i2VrxrGcWl8?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Birthday Song", link: "https://www.youtube.com/embed/Y34jC4I1m70?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Wouldn't Get Far", link: "https://www.youtube.com/embed/MlzrC-B6n-M?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "This Way", link: "https://www.youtube.com/embed/Rbo9QlcLcX8?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Erase Me", link: "https://www.youtube.com/embed/ICaTsTkBPV8?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Ego", link: "https://www.youtube.com/embed/iW5EzxFR4SM?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Lost In The World", link: "https://www.youtube.com/embed/ofaRvNOV4SI?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "The New Workout Plan", link: "https://www.youtube.com/embed/X79oNWQ_tS4?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Whatever U Want", link: "https://www.youtube.com/embed/KwmOsuovV54?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Number One", link: "https://www.youtube.com/embed/mCAYStI0_EY?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Kinda Like A Big Deal", link: "https://www.youtube.com/embed/3LD98c-9fGY?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Supernova", link: "https://www.youtube.com/embed/UkZt7tZl2AE?autoplay=1;modestbranding=1;controls=0;showinfo=0" },
	  { title: "Anyone But Him", link: "https://www.youtube.com/embed/qqDe_nAMr6U?autoplay=1;modestbranding=1;controls=0;showinfo=0" }*/





















        ];

        this.getVideos = function() {
            return videos;
        }

    });
