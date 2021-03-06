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

    //make navbar smoothly scroll as you do
    var nav=$(".navbar");
    $(window).scroll(function(){
      if($(this).scrollTop() > 991){
        nav.addClass("navbar-scrolled")
      }
      else{
        nav.removeClass("navbar-scrolled")
      }
    });

    var expCarousel=$('#experience-carousel');
    var explCarousel=$('#explain-carousel');

    expCarousel.carousel("pause");
    explCarousel.carousel("pause");

    $('#google-circle').click(function(){
      expCarousel.carousel(0);
      explCarousel.carousel(0);
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    });

    $('#game-of-life-circle').click(function(){
      expCarousel.carousel(1);
      explCarousel.carousel(1);
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    });

    $('#email-circle').click(function(){
      expCarousel.carousel(2);
      explCarousel.carousel(2);
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    });

    $('#buzzword-circle').click(function(){
      expCarousel.carousel(3);
      explCarousel.carousel(3);
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    });

    //change the experience description carousel as i change the main experience carrousel
    $('.left').click(function(){
      explCarousel.carousel("prev");
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    });
    $('.right').click(function(){
      explCarousel.carousel("next");
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    });

    $('.exp-indicator0').click(function(){
      explCarousel.carousel(0);
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    })
    $('.exp-indicator1').click(function(){
      explCarousel.carousel(1);
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    })
    $('.exp-indicator2').click(function(){
      explCarousel.carousel(2);
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    })
    $('.exp-indicator3').click(function(){
      explCarousel.carousel(3);
      expCarousel.carousel("pause");
      explCarousel.carousel("pause");
    })
});
