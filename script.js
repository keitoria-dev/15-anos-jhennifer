const tela = document.getElementById("telaInicial");
const video = document.getElementById("videoAbertura");
const botao = document.getElementById("btnIniciar");
const abertura = document.getElementById("abertura");
const envelopeTela = document.getElementById("envelopeTela");

botao.addEventListener("click", () => {

    tela.style.display = "none";
    abertura.style.display = "flex";

    video.play().catch((erro) => {
        console.log(erro);
    });

});

video.addEventListener("ended", () => {

    abertura.style.display = "none";
    envelopeTela.classList.add("ativo");

});

const envelope = document.getElementById("envelope");
const selo = document.querySelector(".selo");

selo.addEventListener("click", () => {

    envelope.classList.add("aberto");

    setTimeout(() => {

        window.location.href = "convite.html";

    },1500);

});