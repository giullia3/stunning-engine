// -----------------------------
// 1. Rolagem suave para o menu
// -----------------------------
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// -----------------------------
// 2. Animação ao aparecer os cards
// -----------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});

// -----------------------------
// 3. Validação do formulário de contato
// -----------------------------
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const nome = form.querySelector("input[placeholder='Seu nome']");
        const email = form.querySelector("input[placeholder='Seu e-mail']");
        const msg = form.querySelector("textarea");

        if (nome.value.trim() === "" || email.value.trim() === "" || msg.value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Mensagem enviada com sucesso! ❤️");
        form.reset();
    });
}

// -----------------------------
// 4. Efeito ao clicar em Comprar
// -----------------------------
document.querySelectorAll(".btn-card").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("clicked");
        setTimeout(() => btn.classList.remove("clicked"), 300);
        alert("Produto adicionado ao carrinho!");
    });
});
