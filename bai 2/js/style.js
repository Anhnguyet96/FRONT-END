$(document).ready(function(){
    $('.mostList').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                dotsEach: 4,
                items:1,
                nav:true
            },
            576:{
                dotsEach: 2,
                items:2,
                nav:true
            },
            992:{
                dotsEach:1,
                items:3,
                nav:true
            },
            1200:{
                dotsEach: 1,
                items:4,
                nav: true,
                loop:true
            }
        }
    });
    $('.listPromotion').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                dotsEach: 2,
                items:1,
                nav:true
            },
            992:{
                dotsEach: 1,
                items:2,
                nav: true,
            }
        }
    });
});