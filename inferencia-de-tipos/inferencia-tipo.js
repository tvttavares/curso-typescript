var quantidade = 20;
// quantidade = 'qualquer'; ~ nao compila!
var x = [1, 2, null];
// x[0] = true; ~ nao compila!
// Contextual Typing
window.onmousedown = function (evento) {
    console.log(evento.button);
    // console.log(evento.buton); ~ nao compila!
};
