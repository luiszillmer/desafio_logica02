// Exemplo de uso das funções
const win = 100;
const defeat = 20;
const balanceWin = calculateRank (win, defeat);
const level = calculateLevel (win);

console.log("O Herói tem saldo de", balanceWin, "está no nível de", level);

function calculateRank(win, defeat) {
    return win - defeat;
}

function calculateLevel(win) {
    if (win < 10) {
        return "Ferro";
    } else if (win >= 10 && win <= 20) {
        return "Bronze";
    } else if (win >= 21 && win <= 50) {
        return "Prata";
    } else if (win >= 51 && win <= 80) {
        return "Ouro";
    } else if (win >= 81 && win <= 90) {
        return "Diamante";
    } else if (win >= 91 && win <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}