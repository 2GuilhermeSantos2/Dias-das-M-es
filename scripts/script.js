document.getElementById('vo').addEventListener('click', function() {
    window.location.href = 'paginaVo.html'; // Redireciona para a página da vó
});

document.getElementById('mae').addEventListener('click', function() {
    window.location.href = 'paginaMae.html'; // Redireciona para a página da mãe
});

// Obtém o elemento de áudio
const bgMusic = document.getElementById('bgMusic');

// Inicia a reprodução automática
bgMusic.play();

