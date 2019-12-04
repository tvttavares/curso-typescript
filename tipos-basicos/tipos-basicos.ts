// boolean
let estaPago:boolean = true;

// number
let idade: number = 20;
let valor: number = 29.99;

// string
let empresa: string = 'Algaworks';

// template Strings
let nome: string = 'Joao';
console.log(`Ola, meu nome eh ${nome} e ${idade} anos.`);

let concatenacaoTradicional = "Ola, meu nome eh " + nome + "e tenho " + idade;
console.log(concatenacaoTradicional);

// arrays
let notas: number[] = [8, 6, 7, 9];

// tuple
let alunos: [string, number, string] = ['Joao', 10, 'Matematica'];
console.log(alunos[0]);
console.log(alunos[1]);

// Enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

// Any
let algumValor: any = 4;
algumValor = 'Agora eh uma string';
algumValor = true;

// Biblioteca de terceiros ...
// Migracao de JavaScript para TypeScript ...
// Outro exemplo: Arrays com varios tipos de dados ...

// void
function alerta(): void {
    // ... alert('Operacao nao permitida!');
}

// null e undefined -> Nao faz sentido!
let u: undefined = undefined;
let n: null = null;
// null e undefined sao subtipos dos outros tipos

nome = undefined;
nome = null;
