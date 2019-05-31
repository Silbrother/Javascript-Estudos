
/*
<form>
<input type = "text" name="nome" id="nome" placeholder="Insira seu nome aqui">
<input type="text" name ="Endereço" id="endereco" placeholder="Insira seu endereço"> 

<input type="submit" onclick="valida()"> 
</form>

*/

function valida3(){
    var nome = document.getElementById('nome');
    alert(nome.value);
    alert(endereco.value);
}

function valida2(){
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