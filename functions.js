// Carregar o conteúdo do cabeçalho
fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
});

// Carregar o conteúdo do rodapé
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;

const backToTopButton = document.getElementsByClassName('material-symbols-outlined')[0]; // Acesse o elemento
    
// Inicialmente, esconde a seta
backToTopButton.style.display = 'none';

// Função para exibir ou esconder a seta ao rolar a página
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block'; // Mostrar o botão
    } else {
        backToTopButton.style.display = 'none';  // Esconder o botão quando o topo da página for alcançado
    }
};

// Função para voltar ao topo quando o botão for clicado
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
});

// Função para saber em que página o usuário está
const currentLocation = window.location.pathname.split('/').pop(); // Obtém apenas o nome do arquivo
const menuItems = document.querySelectorAll('.a.menuItem');

// Adiciona a classe 'active' ao item correspondente
menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation) {
        item.classList.add('current');
    }
});

console.log('Current Location:', currentLocation);
menuItems.forEach(item => {
    console.log('.menuItem', item.getAttribute('href'));
    if (item.getAttribute('href') === currentLocation) {
        item.classList.add('current');
    }
});