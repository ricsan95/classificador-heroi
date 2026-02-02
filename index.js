const readline = require('readline-sync');

// Função para classificar nível do herói
function classificarHeroi(xp) {
    switch (true) {
        case xp < 1000:
            return "Ferro";
        case xp <= 2000:
            return "Bronze";
        case xp <= 5000:
            return "Prata";
        case xp <= 7000:
            return "Ouro";
        case xp <= 8000:
            return "Platina";
        case xp <= 9000:
            return "Ascendente";
        case xp <= 10000:
            return "Imortal";
        default:
            return "Radiante";
    }
}

// Função principal
function main() {
    let nome = readline.question("Digite o nome do herói: ");
    let xp = parseInt(readline.question("Digite a quantidade de XP: "));

    // Validação de entrada
    if (isNaN(xp) || xp < 0) {
        console.log("⚠️ Valor de XP inválido. Digite um número positivo.");
        return;
    }

    let nivel = classificarHeroi(xp);

    console.log(`🦸 O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Executa o programa
main();