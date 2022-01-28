var calculo
var media
var N1
var N2
var N3
var N4

function calcula_media(i){
    var N1 = document.getElementById("nota1")[i].value;
    var N2 = document.getElementById("nota2")[i].value;
    var N3 = document.getElementById("nota3")[i].value;
    var N4 = document.getElementById("nota4")[i].value;
    var calculo = ( parseFloat(N1) + parseFloat(N2) + parseFloat(N3) + parseFloat(N4) )/4;
    var media = document.getElementById("media")[i];
    media.innerHTML = calculo;
    var calculo = document.getElementById("ap")[i];
    if(calculo >= 7)
    {
        media[i].innerHTML = "<div class='text-success'>" + calculo + "</div>";
        resultado[i].innerHTML = "<div class='text-success'>Aprovado</div>";
    }
    else
    {
        media[i].innerHTML = "<div class='text-danger'>" + calculo + "</div>";
        resultado[i].innerHTML = "<div class='text-danger'>Reprovado</div>";
    
    }
}
// function CPFcheck() {
//     let cpf = document.getElementById("CPF").value
//     let resultado
//     let digi = cpf.split('')
//     if (digi[12] == '8') {
//     resultado = 'sp'
//     }

//     document.getElementById("scpf").innerHTML = resultado
// }
