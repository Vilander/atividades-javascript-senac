let numero1 = prompt("Informe o primeiro número","Digite aqui"); 
let numero2 = prompt("Informe o segundo número","Digite aqui"); 
let operacao = prompt("Informe o operador: \nAdição (+) \nSubtração (-) \nMultiplicação (*) \nDivisão(\\)","Digite aqui"); 
let resultado;

switch(operacao){
    case "+": 
        resultado = parseFloat(numero1) + parseFloat(numero2); 
        break; 
    case "-": 
        resultado = parseFloat(numero1) - parseFloat(numero2); 
        break; 
    case "*": 
        resultado = parseFloat(numero1) * parseFloat(numero2); 
        break; 
    case "/": 
        resultado = parseFloat(numero1) / parseFloat(numero2); 
        break; 
    default: 
        alert("Operação inválida"); 
        break;
}

console.log("O resultado é " + resultado);