interface Pessoa {
    idade: number;
    sexo?: string;
}

function imprimirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: 'Joao Marcos', idade: 22};

imprimirIdade(joaoMarcos);