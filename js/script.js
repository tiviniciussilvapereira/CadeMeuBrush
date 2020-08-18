
//Função do slider de imagens
$(function(){
    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;
    var delay = 5000; 

    initSlider();
    cliqueSlider();

    function initSlider(){
        for(var i = 0; i < indiceMaximo; i++){
            if(i == 0){
                $('.bullets-nav').append('<span style="background-color: #cf3928;"></span>')
            }else{
                $('.bullets-nav').append('<span></span>')
            }
        }
        
        $('.slider img').eq(0).fadeIn();  
        setInterval(function(){
            alternarSlider();
        },delay); 
    }

    function cliqueSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual = $(this).index();
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
            $('.bullets-nav span').css('background-color', '#ff6958');
            $(this).css('background-color', '#cf3928');
        });
    }

    function alternarSlider(){
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual+=1; 
        if(indiceAtual == indiceMaximo)
            indiceAtual = 0;
        $('.bullets-nav span').css('background-color', '#ff6958');
        $('.bullets-nav span').eq(indiceAtual).css('background-color', '#cf3928');
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
    }
});

