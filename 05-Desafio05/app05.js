/*
dataCompleta.getDay(); // dia da semana em número 
dataCompleta.getDate(); // dia do mês 
dataCompleta.getMonth(); 
dataCompleta.getFullYear(); 
dataCompleta.getHours(); 
dataCompleta.getMinutes(); 
dataCompleta.getSeconds();*/

let dataCompleta;
let horaAtual;

dataCompleta = new Date;
horaAtual = dataCompleta.getHours();

if(horaAtual <12){
    alert("Bom Dia!");
}else if(horaAtual<18){
    alert("Boa Tarde");
}else{
    alert("Boa Noite!");
}