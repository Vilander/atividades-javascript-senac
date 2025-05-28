/*let numero = prompt("Digite um número entre 1 e 3","Digite aqui"); 
if(numero == 1){ console.log("Número 1"); 
}else if(numero == 2){ console.log("Número 2"); 
}else if(numero == 3){ console.log("Número 3"); 
}else{ console.log("Opção inválida"); } 

let numero = prompt("Digite um número entre 1 e 3","Digite aqui");

switch (numero) { 
    case "1": 
        console.log("Número 1"); 
        break; 
    case "2": 
        console.log("Número 2"); 
        break; 
    case "3": 
        console.log("Número 3"); 
        break; 
    default: 
        console.log("Opção inválida"); 
        break; 
}*/ 

let data = new Date(); 
let diaDaSemana = data.getDay(); 
let diaDaSemanaExtenso;

switch(diaDaSemana){ 
    case 1: 
        diaDaSemanaExtenso = "segunda-feira"; 
        break; 
    case 2: 
        diaDaSemanaExtenso = "terça-feira"; 
        break; 
    case 3: 
        diaDaSemanaExtenso = "quarta-feira"; 
        break; 
    case 4: 
        diaDaSemanaExtenso = "quinta-feira"; 
        break; 
    case 5: 
        diaDaSemanaExtenso = "sexta-feira"; 
        break;
    case 6:
        diaDaSemanaExtenso = "sábado"; 
        break; 
    default: 
        diaDaSemanaExtenso = "domingo"; 
        break; 
}

console.log("Hoje é " + diaDaSemanaExtenso + ".");