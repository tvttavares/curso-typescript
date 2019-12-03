// var, let e const
// const
function iniciarTime(iniciarJogoEmUberlandia) {
    var nome = 'Messi e amigos';
    var cidade = "em Sao Paulo";
    if (iniciarJogoEmUberlandia) {
        cidade = 'em Uberlandia';
    }
    console.log(nome + " vao jogar " + cidade);
}
iniciarTime(true);
