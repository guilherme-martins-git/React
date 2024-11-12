// ^  SEM AROOW FUNCTION / LAMBDA - MODO NORMAL
// ^ Amaryellow = colorful comments exetensão
// * NO JS - PODE SALVA FUNÇÃO EM VARÍAVEL

const introducao_1 = function (){
    return "Hello World";
}

// * Usar função
console.log(introducao_1());

// * ARROW FUNCTION => não tem palavra chave 'function' e adiciona um igualmaior =>
const bemVindo = () => {
    return "seja bem vindo meu amigo"
}

document.write(`<h2> ${bemVindo()} </h2>`);

// * () - Parâmetros
// * => - arrow function
// * "21/10/2024" = retorno
const dia = () => "21/10/2024";

document.write(`<h2> ${dia()} </h2>`);

// * (n1, n2, n3) = ´parâmetros
// * n1+n2+n3 = retorno (A soma deles)
const somar = (n1, n2, n3) => n1+n2+n3;

document.write(`<h2> SOMA: ${somar(90, 10, 25)} </h2>`);

// ^ FORMA MAIS SIMPLES AINDA - QUANDO SÓ TEME 1 UM (ONE, UNO) PARÂMETRO
// ^ Já que nome é um *PARAMETRO SÓ* os parêntes podem ser omitidos
const parabens = nome => "parabéns " + nome;

document.write(`<h2> Parabens: ${parabens("sucrilhos")} </h2>`);