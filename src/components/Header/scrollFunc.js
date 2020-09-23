import $ from 'jquery'

$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('.headerConnected').css({
      "display" : "none"
    });
  }
});
