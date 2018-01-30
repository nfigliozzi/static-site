//Main Navbar Toogle js:
$("#toggle").on("click",function(){
  $("#responsive-menu").toggleClass("open");
})
//smoth scroll to anchor
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});