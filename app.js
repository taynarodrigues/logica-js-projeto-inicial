
alert('Boas -vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
prompt("Escolha um número entre 1 e 10");
let chute = prompt('Esolha um número entre 1 e 10');

//se chute for igual ao número secreto
if(chute == numeroSecreto){
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else{
    alert('Você errou : (');
}




