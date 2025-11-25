function scrollToProdutos() {
  // Rolagem suave para a seção de produtos
  const secaoProdutos = document.getElementById("produtos");
  secaoProdutos.scrollIntoView({ behavior: "smooth" });
}

function cadastrarEmail() {
  const email = document.getElementById("email").value;

  // Validação simples do e-mail
  if (email.includes("@") && email.includes(".")) {
    alert("Obrigado por se cadastrar! 💌");
    document.getElementById("email").value = "";
  } else {
    alert("Por favor, insira um e-mail válido.");
  }

  return false; // Impede o envio do formulário (sem recarregar a página)
}
