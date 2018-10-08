function reset(){
    $('.topnav a').removeClass('active');
}

/* navbar update on click */
$('body').ready(function(){
    $('.topnav a').click(function(){
        reset();
        $(this).toggleClass('active');
        if(this.hash.slice(1) != ''){
            name = '[name=' + this.hash.slice(1) + ']'
            $('html, body').animate({scrollTop: $(name).offset().top}, 500);
        }else{
            $('html, body').animate({scrollTop: $('html').offset().top}, 500);
        }

    });
});

/* navbar updater auto */
$(window).scroll(function(){
    var i = document.getElementsByClassName('nav-item');
    var x = Math.round((window.pageYOffset/window.innerHeight/1.5));
    
    reset();
    $(i[x]).toggleClass('active');
});