let passwordAttempts = 0;

function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "151252"; // Insira a senha correta aqui

    if (password === correctPassword) {
        showPoem();
        showPhoto(); // Mostra a foto quando a senha está correta
        playMusic(); // Inicia a reprodução da música quando a senha está correta

        // Muda o plano de fundo para lilás
        document.body.style.backgroundColor = "#8e44ad"; // Cor lilás
    } else {
        passwordAttempts++;
        if (passwordAttempts >= 3) {
            alert("Você excedeu o número de tentativas permitidas. Voltando para a página inicial.");
            window.location.href = "index.html";
        } else {
            alert("Senha incorreta. Tente novamente.");
            document.getElementById("passwordInput").value = ""; // Limpa o campo de senha
        }
    }
}

function showPoem() {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1>Poema para Minha Mãe</h1>
        <div class="poem">
            <p>
                Mãe querida, luz do meu viver,<br>
                Em teus braços encontro meu ser.<br>
                Teu amor é o sol que me aquece,<br>
                Tua ternura, a brisa que me embala,<br>
                Em teu olhar, o mundo se aquece,<br>
                E na tua voz, o eco que me fala.<br><br>
                
                Nos teus gestos, vejo a doçura,<br>
                Na tua força, a verdadeira bravura.<br>
                Mãe, és a estrela que guia meu caminho,<br>
                O porto seguro em meio ao mar bravio,<br>
                Teu abraço, meu mais doce carinho,<br>
                Teu sorriso, meu refúgio no desvario.<br><br>
                
                Em cada desafio, em cada luta,<br>
                Tua presença é minha fortaleza absoluta.<br>
                Mãe, és a fonte de amor inesgotável,<br>
                Teu cuidado, um bálsamo que acalma a alma,<br>
                Tua presença, um mundo inigualável,<br>
                Teu amor, a mais pura das calmas.<br><br>
                
                Neste dia, celebro tua existência,<br>
                Teu amor, tua dedicação, tua presença.<br>
                Mãe querida, és meu porto seguro,<br>
                Minha inspiração, meu exemplo mais puro,<br>
                Neste Dia das Mães, te dedico esta canção,<br>
                Pois és o mais belo verso do meu coração.<br>
            </p>
        </div>`;
}

function showPhoto() {
    const photoContainer = document.getElementById("photoContainer");
    const photo = document.getElementById("photo");
    photo.src = "images/fotoMae.jpg"; // Substitua "images/fotoMae.jpg" pelo caminho da foto da sua mãe
    photoContainer.style.display = "block";
}

function playMusic() {
    const bgMusic = new Audio("audios/Melhor Pedaco.mp3"); // Substitua "caminho/da/musica.mp3" pelo caminho da música dedicada à sua mãe
    bgMusic.play();
}
