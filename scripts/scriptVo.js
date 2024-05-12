let passwordAttempts = 0;

function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "010302"; // Senha correta

    if (password === correctPassword) {
        showPoem();
        showPhoto(); // Mostra a foto quando a senha está correta
        playMusic(); // Inicia a reprodução da música quando a senha está correta

        // Muda o plano de fundo para verde claro
        document.body.style.backgroundColor = "#a9dfbf"; // Verde claro
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
        <h1>Poema para Minha Vó</h1>
        <div class="poem">
            <p>
                Para minha avó querida, mãe em dobro,<br>
                Neste dia especial, um poema eu te ofereço.<br>
                Com carinho e gratidão, eu celebro<br>
                A sua presença, um tesouro tão precioso.<br><br>
                
                Nos seus olhos, vejo o brilho da sabedoria,<br>
                Na sua voz, o eco de amor e ternura.<br>
                Em cada gesto, uma doce melodia,<br>
                Que embala a nossa vida com doçura.<br><br>
                
                Você é a luz que guia os nossos passos,<br>
                O abraço que acalma e fortalece.<br>
                Seu sorriso é como um raio de sol nos laços,<br>
                Que nos envolve e aquece.<br><br>
                
                Mãe de mãe, seu amor é infinito,<br>
                Seu cuidado, constante e infinitamente forte.<br>
                Neste Dia das Mães, quero lhe dizer: bendito<br>
                Seja o seu amor, fonte de toda sorte.<br><br>
                
                Que seu dia seja repleto de alegria e amor,<br>
                Assim como o seu coração é cheio de bondade.<br>
                Para você, minha querida avó, todo o louvor,<br>
                Pois em seus braços encontramos felicidade.<br>
            </p>
        </div>`;
}

function showPhoto() {
    const photoContainer = document.getElementById("photoContainer");
    const photo = document.getElementById("photo");
    photo.src = "images/fotoVo.jpg"; // Substitua "caminho/da/foto.jpg" pelo caminho da sua foto
    photoContainer.style.display = "block";
}

function playMusic() {
    const bgMusic = new Audio("audios/Sorriso Resplandecente.mp3"); // Substitua "caminho/da/musica.mp3" pelo caminho da sua música
    bgMusic.play();
}
