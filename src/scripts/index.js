function mostrarNivel() {
    //declara variáveis
    let nomeHeroi = document.getElementById("nomeHeroi").value;
    let experiencia = document.getElementById("experiencia").value;
    let nivelHeroi = "";

    //analisa a condição e dá um alert com as informações.
    if (experiencia < 1000) {
        nivelHeroi = "Ferro!";
        alert("O herói " + nomeHeroi + " tem " + experiencia + " de experiência e está no nível " + nivelHeroi);
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivelHeroi = "Bronze!";
        alert("O herói " + nomeHeroi + " tem " + experiencia + " de experiência e está no nível " + nivelHeroi);
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivelHeroi = "Prata!";
        alert("O herói " + nomeHeroi + " tem " + experiencia + " de experiência e está no nível " + nivelHeroi);
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivelHeroi = "Ouro!";
        alert("O herói " + nomeHeroi + " tem " + experiencia + " de experiência e está no nível " + nivelHeroi);
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivelHeroi = "Platina!";
        alert("O herói " + nomeHeroi + " tem " + experiencia + " de experiência e está no nível " + nivelHeroi);
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivelHeroi = "Ascendente!";
        alert("O herói " + nomeHeroi + " tem " + experiencia + " de experiência e está no nível " + nivelHeroi);
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivelHeroi = "Imortal!";
        alert("O herói " + nomeHeroi + " tem " + experiencia + " de experiência e está no nível " + nivelHeroi);
    } else {
        nivelHeroi = "Radiante!!";
        alert("O herói " + nomeHeroi + " tem " + experiencia + " de experiência e está no nível " + nivelHeroi);
    }
}
