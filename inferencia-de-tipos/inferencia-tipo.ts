let quantidade = 20;

// quantidade = 'qualquer'; ~ nao compila!

let x = [1, 2, null];
// x[0] = true; ~ nao compila!

// Contextual Typing
window.onmousedown = function(evento: MouseEvent) {
    console.log(evento.button);
    // console.log(evento.buton); ~ nao compila!
}