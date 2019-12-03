// var, let e const

// const
function iniciarTime(iniciarJogoEmUberlandia: boolean) {
    const nome: string = 'Messi e amigos';
    let cidade: string = "em Sao Paulo";
    if (iniciarJogoEmUberlandia) {
        cidade = 'em Uberlandia';
    }

    console.log(`${nome} vao jogar ${cidade}`);
}

iniciarTime(true);