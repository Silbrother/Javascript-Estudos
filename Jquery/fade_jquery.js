$(function(){
    $('#azul').click(function(){  // ao clicar no botao
        $('p').css("color", "blue"); 
        $('p').fadeOut();
        $('p').fadeIn('fast');
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('border', '1px solid red');
        $('#mensagem').css("color", "green");
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut('fast');

    });
});

$(function(){
    $('#vermelho').click(function(){  // ao clicar no botao
        $('p').css("background-color", "red");
        $('#mensagem')
        .text("Cor alterada com sucesso")
        .css({color: 'red' , border: '1px solid', backgroundColor: '#F08080'})
        .delay(3000)
        .fadeOut('fast');
    });
});