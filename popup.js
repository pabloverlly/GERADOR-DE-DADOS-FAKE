//verifica se ja existe alguma senha armazenada no navegador
chrome.storage.local.get(["senha"], async(data) =>
{
    if(data.senha === 0 || data.senha === undefined) {
        alert("SENHA PADRAO AINDA NAO FOI DEFINIDA");
    }
    else {
        document.getElementById("senha").value = data.senha;
    }
});

document.getElementById("salvar").addEventListener("click", (e) =>
{
    e.preventDefault();

    let senha = document.getElementById("senha").value;

    alert("NOVA SENHA DEFINIDA");

    chrome.storage.local.set({senha});
});