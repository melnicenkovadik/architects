$(document).ready(function(){
    $('.menu-list').on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        bottom = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: bottom},1000);

    });
});
$(document).ready(function(){
    $('body').append('<img src=""><a href="#" id="go-top" title="Вверх"><img width="45px" src="img/up.png"></a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});

// document.querySelector('#d-none').onclick = function() {
//     document.querySelector('.Shape1copy').style.display = 'none';
// };

$( document ).ready(function(){
    $( "#d-none" ).click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
        $( ".Shape1copy" ).toggle(); //  скрываем, или отображаем все элементы <div>
    });
    $( ".Shape1copy" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
        $( ".Shape1copy" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
    });
});

