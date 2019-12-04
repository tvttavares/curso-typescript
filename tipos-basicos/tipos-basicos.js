// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 29.99;
// string
var empresa = 'Algaworks';
// template Strings
var nome = 'Joao';
console.log("Ola, meu nome eh " + nome + " e " + idade + " anos.");
var concatenacaoTradicional = "Ola, meu nome eh " + nome + "e tenho " + idade;
console.log(concatenacaoTradicional);
// arrays
var notas = [8, 6, 7, 9];
// tuple
var alunos = ['Joao', 10, 'Matematica'];
console.log(alunos[0]);
console.log(alunos[1]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
// Any
var algumValor = 4;
algumValor = 'Agora eh uma string';
algumValor = true;
// Biblioteca de terceiros ...
// Migracao de JavaScript para TypeScript ...
// Outro exemplo: Arrays com varios tipos de dados ...
// void
function alerta() {
    // ... alert('Operacao nao permitida!');
}
// null e undefined -> Nao faz sentido!
var u = undefined;
var n = null;
// null e undefined sao subtipos dos outros tipos
nome = undefined;
nome = null;
