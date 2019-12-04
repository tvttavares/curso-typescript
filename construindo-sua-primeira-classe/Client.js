var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ola, eu sou " + this.nome + " e tenho " + this.idade + " anos.";
    };
    return Cliente;
}());
var preco = 29.90;
var joao = new Cliente('Joao', 25);
var apresentacao = joao.apresentar();
console.log(apresentacao);
var maria = new Cliente('Maria', 23);
console.log(maria.apresentar());
