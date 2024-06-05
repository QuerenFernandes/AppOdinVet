// Seleciona os elementos de entrada de rádio
var radios = document.querySelectorAll('input[type="radio"]');

// Adiciona um evento de clique a cada elemento de entrada de rádio
radios.forEach(function(radio) {
    radio.addEventListener('click', function() {
        // Verifica se o rádio clicado é o da fêmea
        if (this.value === 'femea') {
            // Muda a imagem da fêmea para a imagem desejada
            document.getElementById('femea-icon').src = '../img/femea\ -\ selecionado.png';
            // Volta a imagem do macho para a imagem original
            document.getElementById('macho-icon').src = '../img/macho.png';
        } else {
            // Muda a imagem do macho para a imagem desejada
            document.getElementById('macho-icon').src = '../img/macho\ -\ selecionado.png';
            // Volta a imagem da fêmea para a imagem original
            document.getElementById('femea-icon').src = '../img/femea.png';
        }
    });
});




