// Função para iniciar o jogo
function startGame() {
    document.getElementById('menu').style.display = 'none'; // Esconde o menu
    document.getElementById('boardContainer').style.display = 'block'; // Exibe o tabuleiro
    drawBoard(); // Função que desenha o tabuleiro (se você já tiver essa função em outro arquivo, apenas chame-a aqui)
}

// Função para mostrar as instruções
function showInstructions() {
    document.getElementById('menu').style.display = 'none'; // Esconde o menu
    document.getElementById('instructionsScreen').style.display = 'block'; // Exibe a tela de instruções
}

// Função para voltar ao menu principal
function backToMenu() {
    document.getElementById('instructionsScreen').style.display = 'none'; // Esconde a tela de instruções
    document.getElementById('menu').style.display = 'block'; // Exibe o menu principal
}

// Função para fechar o jogo (ou aba)
function exitGame() {
    window.close(); // Fecha a aba (funciona em alguns navegadores)
}

// Função para inicializar todos os event listeners do menu
function initMenu() {
    document.getElementById('startGame').addEventListener('click', startGame); // Iniciar jogo
    document.getElementById('instructions').addEventListener('click', showInstructions); // Instruções
    document.getElementById('backToMenu').addEventListener('click', backToMenu); // Voltar ao menu
    document.getElementById('exitGame').addEventListener('click', exitGame); // Fechar o jogo
}

// Chama a função para inicializar o menu quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', initMenu);