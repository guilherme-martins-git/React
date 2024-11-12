// * criando um vetor pokemon
let pokemon = ["Charmander", "Charmelon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Bulbasaur", "Ivvysaur", "Venusaur"];

// * Selecionando um valor direto do vetor
document.write(`<h2> Pokemon: ${pokemon[6]} </h2>`);

// ^ Sem desestruturação:

let pokemon_1 = pokemon[0];
let pokemon_2 = pokemon[1];
let pokemon_3 = pokemon[2];

document.write(`
    <ul>
    <li>${pokemon_1}</li>
    <li>${pokemon_2}</li>
    <li>${pokemon_3}</li>
    </ul>
`)

// ^ Com Desestruturação

const console = ["Atari 2600", "Master System", "NES", "Mega Drive", "Super Nintendo", "Atari Jaguar", "Wonderswan", "Pc Engine", "3Do", "CDI", "Playstation"];

// * SINTAXE
// ^ let [variaveis que são separadas] = vetor ou objeto;


const [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11] = console;

document.write(`
    <h3>${c1}</h3>
    <h3>${c4}</h3>
`)

// * Exemplo e uso útil:
// * Esta função, vai calcular a média, e se o aluno foi aprovado e se excedeu o limite de faltas
function calculo(nota1, nota2, faltas, totalAulas){
    let media = (nota1+nota2);
    let porcentagem25 = totalAulas * 0.25;
    let seAprovado = "";
    let seEstourado = "";
    if (media >= 7){
        seAprovado = "Aprovado"
    }
    else{
        seAprovado = "Reprovado";
    }
    if (faltas <= porcentagem25){
        seEstourado = "Não";
    }
    else{
        seEstourou = "Sim";
    }

    // * Já que precisamos retornar 2 valores (Ele tem dois resultados no seu processamento) então podemos retorná-los como vetor.
    return[seAprovado, seEstourado]; 
}

// * Desestruturando o vetor
const [aluno1SeAprovado, aluno1SeEstourado] = calculo(5,6,6,22);
document.write(`<h2> O aluno 1 esta ${aluno1SeAprovado} em notas`);

if (aluno1SeEstourado == "Sim"){
    document.write(`<h2> style="color:red;"> Mas em faltas, ele está ESTOURADO`);
    
}

else{
    document.write(`<h2 style="color:green;"> Ele não excedeu o limite de faltas!`);
}

// * Desestruturção parcial

const numeros = [10, 20, 30, 40];
const [x, y] = numeros
// * x = 10
// * y = 20
// ^ Acima pegamos só dois valores

// * DesestruturaçÃO - pulando valores

const nomes = ["Zeus", "Hades", "Peseidon"];
// * Colocando vígula com espoço vazio, para pular
const [z, , p] = nomes;
// ? z = "Zeus";
// ? p = "Poseidon";

nomes.push("Dionísio");
nomes.push("Teseu");
nomes.push("Afrodite");
nomes.push("Artemis");
nomes.push("Hermes");
nomes.push("Apolo");
nomes.push("Tanatos");
nomes.push("Ares");
nomes.push("Atena");
nomes.push("Perséfone");
// * Comando REST na desestruturação
// * Quando queremos pegar alguns elementos em variáveis separadas, porém colocar o restante em um outro vetor CORTADO.
// ^ Usamos a reticências (3 pontinhos) ... = Para definir o subvetor que terá o restante dos itens.
const [deus, ,deus2, ...resto] = nomes
document.write(`<h4> ${resto} </h4>`);








