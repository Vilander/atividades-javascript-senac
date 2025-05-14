//desafio 3

var vendedor, jan, fev, mar, media;

vendedor = prompt("Informe o nome do vendedor","Digite aqui");
jan = prompt("Informe o valor total das vendas de Janeiro","Digite aqui");
fev = prompt("Informe o valor total das vendas de Fevereiro","Digite aqui");
mar = prompt("Informe o valor total das vendas de Março","Digite aqui");

media = (parseFloat(jan)+parseFloat(fev)+parseFloat(mar))/3


console.log("A média de vendas do "+vendedor+" no 1º trimestre foi: "+media)
alert("A média de vendas do "+vendedor+" no 1º trimestre foi: "+media)
