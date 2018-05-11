var timerStart = 'You have left ';
var timerEnd = ' to order a lending page with 10% discount.';
var target_date = new Date('Jan, 31, 2019').getTime();
var days, hours, minutes, seconds;

var captcha = {a: Math.floor((Math.random() * 100) + 1),
            b: Math.floor((Math.random() * 100) + 1)};

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //Activate ekko-lightbox
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  //captcha
  $('#captchaOperation').html('Please answer: ' + captcha.a + ' + ' + captcha.b);
  $('#submitOrder').prop('disabled', true);

  //timer
  setInterval(function () {
   
      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;
      days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;
       
      hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;
       
      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);

      $('#timer').html(timerStart + tv(days, 'Days') + tv(hours, 'Hours') + tv(minutes, 'Minutes') + tv(seconds, 'Seconds') + timerEnd);
  }, 1000);

})(jQuery); // End of use strict

function tv(t, p ){
  return '<span> <b>' + t + '</b> <i>' + p + '</i> </span>';
}

function checkCaptcha(){
  if(captcha.a+captcha.b == $('#captcha').val())
    $('#submitOrder').prop('disabled', false);
  else
    $('#submitOrder').prop('disabled', true);
}