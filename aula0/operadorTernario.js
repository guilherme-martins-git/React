// * Operação ternaria
let idade = Number(prompt("Digite sua idade"));
// * CONDIÇÃO SEM OPERADOR TERNÉRIO
// * DIGAMOS QUE DE ACORDO COM A IDADE, O VALOR DE "PODE DIRIGIR " RECEBER UM VALOR DIFERENTE
let podeDirigir = "";
if (idade > 17){
    podeDirigir = "Pode"
}
else{
    podeDirigir = "Não Pode"
}

// * USAMOS OPERADOR TERNARIO
// ? SINTAXE = condicao ? seVerdadeiro : seFalso
podeDirigir = idade > 17 ? "Pode" : "Não Pode";

// * Usamos ternária neste caso mesmo, quando o valor de uma variável depende de im IF, por isso do "let variavel = "
// ^ Ele salva na variável o valor passado

console.log(podeDirigir);

let salarioBase = 2000;
let tipo = "Gerente";
// * Aqui o novo salario é: E fazemos uma condição, pios depende do tipo de funcionário

let novoSalario = tipo == "Gerente" ? salarioBase * 1.30 : salarioBase * 1.10;


// * 23/10/2024

const temperatura = 30;

// * (:) significa (se não)
// * (?) significa (se)
const situacao = temperatura > 32 ? "Muito quente" : temperatura > 25 ? "Quente" : temperatura > 15 ? "Fresco" : temperatura > 5 ? "Frio" : "Muito Frio";

console.log("Situação temperaturaa: " + situacao);