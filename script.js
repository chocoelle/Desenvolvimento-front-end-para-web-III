// Máscara CPF
document.getElementById("cpf").addEventListener("input", function (e) {
    e.target.value = e.target.value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
});

// Telefone
document.getElementById("telefone").addEventListener("input", function (e) {
    e.target.value = e.target.value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
});

// CEP
document.getElementById("cep").addEventListener("input", function (e) {
    e.target.value = e.target.value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2");
});
document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("msg").textContent =
        "Cadastro enviado com sucesso! Obrigado por participar.";
    document.getElementById("msg").style.color = "green";
});