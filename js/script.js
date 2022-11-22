$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.next').click(function(){
        $('.carousel').carousel('next');
    });
    $('.prev').click(function(){
        $('.carousel').carousel('prev');
    });
    $('.modal').modal();
});

/*
setInterval(function(){
    next();
},3000);
*/

new WOW().init();