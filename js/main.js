/* attatch nav bar to screen after you scroll beyond a certain point, in this case: header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});
*/


$(document).ready(function() {

    //for smooth scrolling, get the section that im pointing to then move there.
    $('div[href^="~"]').click(function(e) {

        var target = $(this).attr('href');
        var strip = target.slice(1);
        var anchor = $("section[name='" + strip + "']");

        e.preventDefault();

        $('html, body').animate({
            scrollTop: anchor.offset().top
        }, 1000);
    });

    //same for when the item in quesion us ising an A tag
    $('a[href^="~"]').click(function(e) {

        var target = $(this).attr('href');
        var strip = target.slice(1);
        var anchor = $("section[name='" + strip + "']");

        e.preventDefault();

        $('html, body').animate({
            scrollTop: anchor.offset().top
        }, 1000);
    });

    var nav=$(".navbar");
    $(window).scroll(function(){
      if($(this).scrollTop() > 991){
        nav.addClass("navbar-scrolled")
      }
      else{
        nav.removeClass("navbar-scrolled")
      }
    });

});
