const botoesArtistas = document.querySelectorAll('.artista');

// Função para pausar todas as músicas
function pausarTodasMusicas() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Opcional: reseta a música ao início
    });
}

// Adiciona evento de clique em cada botão de artista
botoesArtistas.forEach(botao => {
    botao.addEventListener('click', () => {
        // Pausa todas as músicas antes de tocar a nova
        pausarTodasMusicas();

        // Seleciona o elemento <audio> dentro do botão clicado
        const audio = botao.querySelector('auio');
        
        // Toca a música
        audio.play();
    });
});
