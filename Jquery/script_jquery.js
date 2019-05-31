//  $(seletor).açãp();

$(function(){
    $('#esconder').click(function(){  // ao clicar no botao
        $('h1').hide(); // o (.hide) esconde um seletor
    });
});


$(function(){
    $('button').click(function(){  // ao clicar no botao
        $('h1').css("color", "blue"); // o (.hide) esconde um seletor
    });
});

$(function(){
    $('button').click(function(){  // ao clicar no botao
        $('#unico').css("color", "red"); // o (.hide) esconde um seletor
    }); //os id's sempre começam com #
});

$(function(){
    $('#azul').click(function(){  // ao clicar no botao
        $('p').css("color", "blue"); 
    });
});

$(function(){
    $('#vermelho').click(function(){  // ao clicar no botao
        $('p').css("background-color", "red");
    });
});