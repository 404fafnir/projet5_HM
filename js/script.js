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

var typedword = '';
var theword = 'saddy';
var thesecondword = 'happy'

window.addEventListener('keypress',
    function (e) {
       typedword += String.fromCharCode(e.which);
        if (typedword.length > theword.length){
            typedword = typedword.slice(1);
        }
        if (typedword == theword){
            $('body').toggleClass('filter', true);
        }
        if (typedword == thesecondword){
            $('body').toggleClass('filter', false);
        }
    }
);


/*
setInterval(function(){
    next();
},3000);
*/

new WOW().init();