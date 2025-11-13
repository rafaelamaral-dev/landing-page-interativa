const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.getElementById('main-header');
// Constante para definir a partir de quantos pixels o efeito deve ser ativado
const SCROLL_THRESHOLD = 50; // 50 pixels de rolagem já são suficientes

//Para mudar a cor do header
function toggleDarkMode() {
    // 1. Alterna a classe 'dark-mode' no <body>
    // O método .toggle() é perfeito: se a classe existe, ele remove; se não, ele adiciona.
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode'); // Aplica a classe ao header também.

    // 2. Atualiza o ícone do botão
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️'; // Solzinho para voltar ao claro
    } else {
        themeToggle.textContent = '🌙'; // Lua para ir para o escuro
    }
}


function applyStickyEffect() {
    // window.scrollY retorna a posição vertical da barra de rolagem
    if (window.scrollY >= SCROLL_THRESHOLD) {
        // O usuário rolou a página: adiciona a classe 'scrolled'
        header.classList.add('scrolled');
    } else {
        // O usuário voltou para o topo: remove a classe 'scrolled'
        header.classList.remove('scrolled');
    }
}

// Conecta a função ao evento de rolagem
// O evento 'scroll' dispara MUITAS vezes, por isso o JavaScript é a melhor ferramenta aqui.
window.addEventListener('scroll', applyStickyEffect);

// 3. Conecta o evento de clique ao botão
themeToggle.addEventListener('click', toggleDarkMode);