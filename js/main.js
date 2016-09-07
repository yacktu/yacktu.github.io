/* attatch nav bar to screen after you scroll beyond a certain point, in this case: header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});
*/


$(document).ready(function(){

$('div[href^="#"]').click(function(e){

  var target = $(this).attr('href');
  var strip = target.slice(1);
  var anchor = $("section[name='"+strip+"']");

  e.preventDefault();

  $('html, body').animate({
    scrollTop:anchor.offset().top
  }, 1000);
});

$('a[href^="#"]').click(function(e){

  var target = $(this).attr('href');
  var strip = target.slice(1);
  var anchor = $("section[name='"+strip+"']");

  e.preventDefault();

  $('html, body').animate({
    scrollTop:anchor.offset().top
  }, 1000);
});

});
