let peca = "RainHa".toLowerCase();

switch (peca) {
    case "rei":
        console.log("vertical, horizontal ou diagonal");
        break;
    case "rainha":
        console.log("colunas, fileiras e diagonal");
        break;
    case "cavalo":
        console.log("duas casas para frente e uma para a esquerda ou direita");
        break;
    case "torre":
        console.log("colunas ou fileiras");
        break;
    case "peao":
        console.log("diagonal");
        break;
    default:
        console.log("peça inválida");
        break;
}