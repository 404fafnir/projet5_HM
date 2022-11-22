$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.modal').modal();
});

/*
setInterval(function(){
    next();
},3000);
*/

new WOW().init();