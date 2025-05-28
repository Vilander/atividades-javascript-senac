/*let numero =7

if(numero >=10){
    alert("Este númeor é maior ou igual à 10");
}else{
    alert("este número é menor que 10");
}

*/
/*let continuar = "sim"

if (continuar == "sim"){
    console.log("Mais uma vez");
}else{
    console.log("Agora acabou");
}*/

let nome = prompr("Informe o nome do candidato","Digite aqui");
let idade = prompt("Informe a idade do candidat", "Digite aqui");

if(parseInt(idade)>=18){
    alert("O candidato " + nome + " está apto a iniciar o precesso.");
}else{
    alert("O candidato " + nome + " não está apto a iniciar o precesso.");
}
