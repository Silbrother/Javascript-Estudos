function valida01(){
    var nome = document.getElementById('nome');
    alert("Nome: "+nome.value);
    alert("Endereço: "+endereco.value);
}

function valida(){
    var nome = document.getElementById('nome');

    if (nome.value == ""){
        alert("Os campos não pode estar em branco.");
    }else{
        alert("Enviado com sucesso!!.");
    }

}