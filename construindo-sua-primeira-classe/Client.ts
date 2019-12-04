class Cliente {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Ola, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

let preco: number = 29.90;
let joao: Cliente = new Cliente('Joao', 25);
let apresentacao = joao.apresentar();

console.log(apresentacao);

let maria: Cliente = new Cliente('Maria', 23);
console.log(maria.apresentar());