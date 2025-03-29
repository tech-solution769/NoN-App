// Função para iniciar o efeito de fade-in, slide-in e zoom-in
const handleIntersection = () => {
    const sections = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
};

// Função para efeitos de hover nos cartões de preço
const handleCardHover = () => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
            card.style.boxShadow = '0px 5px 15px rgba(0, 212, 255, 0.6)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
};

// Espera o conteúdo da página ser carregado para executar as funções
document.addEventListener("DOMContentLoaded", () => {
    handleIntersection();
    handleCardHover();
    
    // Mostra o botão de rolar para o topo quando o usuário rolar a página
    const button = document.getElementById('scrollToTopBtn');
    if (button) {
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        };

        // Rolagem suave até o topo
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});