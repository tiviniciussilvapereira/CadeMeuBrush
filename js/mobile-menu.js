//encontra minha UL que estava com display none e a mostra com a animação slideToggle() 
$(function(){
    $('.mobile-menu').click(function(){
        $('.mobile-menu').find('ul').slideToggle();
    })
});