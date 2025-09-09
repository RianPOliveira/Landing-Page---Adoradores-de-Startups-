function showTab(event, tabId) {
    // Esconder todos os conteúdos das abas
    let tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        tabContents[i].classList.remove('active');
    }

    // Remover a classe 'active' de todos os botões
    let tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Mostrar o conteúdo da aba clicada e marcar o botão como ativo
    document.getElementById(tabId).style.display = 'block';
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Garante que a primeira aba seja exibida ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-button').click();
});