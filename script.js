// --- Função para controlar as abas do cronograma ---
function showTab(event, tabId) {
    // Esconde todos os conteúdos das abas
    let tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        tabContents[i].classList.remove('active');
    }

    // Remove a classe 'active' de todos os botões
    let tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Mostra o conteúdo da aba clicada e marca o botão como ativo
    document.getElementById(tabId).style.display = 'block';
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// --- Código para as animações ---

// Espera o conteúdo da página carregar completamente antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {

    // Garante que a primeira aba seja exibida ao carregar a página
    if(document.querySelector('.tab-button')) {
        document.querySelector('.tab-button').click();
    }

    // --- EFEITO 1: Animação de Fade-in com Scroll ---
    const observerOptions = {
        root: null, // usa a viewport como área de observação
        rootMargin: '0px',
        threshold: 0.1 // aciona quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação definida no CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento para que a animação não se repita
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que queremos animar ao rolar
    const elementsToAnimate = document.querySelectorAll('.persona-card, .metodo-card, .mentor-card');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });


    // --- EFEITO 2: Efeito Aurora que segue o mouse no Header ---
    const header = document.querySelector('header');
    if(header){
        header.addEventListener('mousemove', (e) => {
            // Pega a posição X e Y do mouse em relação ao elemento header
            const rect = header.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Atualiza as variáveis CSS (--mouse-x e --mouse-y) que são usadas no estilo do header
            header.style.setProperty('--mouse-x', `${x}px`);
            header.style.setProperty('--mouse-y', `${y}px`);
        });
    }
    
    // MUDANÇA FINAL E MAIS IMPORTANTE:
    // Verifica se a biblioteca 'feather' realmente carregou antes de tentar usá-la.
    // Isso impede que a página quebre se o script dos ícones falhar.
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

});