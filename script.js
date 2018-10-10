/* make all the nav-items inactive */
function reset(){
    $('.topnav a').removeClass('active');
}

/* navbar update on click */
$('body').ready(function(){
    $('.topnav a').click(function(){
        reset();
        $(this).toggleClass('active');
        if(this.hash.slice(1) != ''){
            var name = '[name=' + this.hash.slice(1) + ']';
            $('html, body').animate({scrollTop: $(name).offset().top}, 400);
        }
    });
});



/* navbar updater auto */

/* get an array of offsets of sections */
var markers = document.getElementsByClassName('marker');


$(window).scroll(function(){

    /* nav-item select on scroll-into-view */
    var item = document.getElementsByClassName('nav-item');
    for(var i = 0; i < markers.length; i++){
        if(window.pageYOffset >= $(markers[i]).offset().top - 100){
            reset();
            $(item[i]).addClass('active');
        }
    }

    /* background */
    if(window.pageYOffset > 100){
        $('.topnav').css('background-color', 'rgb(30,30,30)');
    }else{
        $('.topnav').css('background-color', '');
    }

});