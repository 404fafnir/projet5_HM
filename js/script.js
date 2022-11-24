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

/*Easter Egg Saddy + Happy*/

var typedword = '';
var theword = 'saddy';
var thesecondword = 'happy';

window.addEventListener('keypress',
    function (e) {
       typedword += String.fromCharCode(e.which);
        if (typedword.length > theword.length){
            typedword = typedword.slice(1);
        }
        if (typedword == theword){
            $('body').toggleClass('filter', true);
            $('#rain').show()
        }
        if (typedword == thesecondword){
            $('body').toggleClass('filter', false);
            $('#rain').hide()
        }
    }
);


/*Easter Egg Loutre*/

var typedword2 = '';
var loutre = 'fish';

window.addEventListener('keypress',
    function (e) {
       typedword2 += String.fromCharCode(e.which);
        if (typedword2.length > loutre.length){
            typedword2 = typedword2.slice(1);
        }
        if (typedword2 == loutre){
            $('#animal').show();
            $('#animal').animate({
                right: '100%'
            }, 5000);
        }
    }
);

/* Easter Egg Hover Image */
function changeimage1(x,image){
    if(x==1){
        image.src = "img/MaxenceFunny.jpg";
    }
    if(x==2){
        image.src = "img/Maxence.png";
    }
}

function changeimage2(x,image){
    if(x==1){
        image.src = "img/HeikoFunny.jpg";
    }
    if(x==2){
        image.src = "img/Heiko.jpg";
    }
}

/* Easter Egg*/

document.getElementById("mh").addEventListener('click', function(e){
    e.preventDefault();
    alert('On peut avoir un point en plus ?');
    return false;
});