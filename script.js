function reset(){
    $('.topnav a').removeClass('active');
}

$('body').ready(function(){
    $('.topnav a').click(function(){
        reset();
        $(this).toggleClass('active');
    });
});

$(window).scroll(function(){
    var i = document.getElementsByClassName('nav-item');
    var x = Math.round((window.pageYOffset/window.innerHeight));
    
    reset();
    $(i[x]).toggleClass('active');
});