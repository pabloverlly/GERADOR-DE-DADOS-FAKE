// *********************** DELETA O MENU ******************** //
async function deleteAll()
{
  await chrome.contextMenus.remove("NOME");
  await chrome.contextMenus.remove("NASCIMENTO");
  await chrome.contextMenus.remove("CPF");
  await chrome.contextMenus.remove("RG");
  await chrome.contextMenus.remove("CELULAR");

  await chrome.contextMenus.remove("SEPARADOR1");

  await chrome.contextMenus.remove("CEP");
  await chrome.contextMenus.remove("ESTADO");
  await chrome.contextMenus.remove("CIDADE");
  await chrome.contextMenus.remove("BAIRRO");
  await chrome.contextMenus.remove("ENDERECO");
  await chrome.contextMenus.remove("NUMERO");

  await chrome.contextMenus.remove("SEPARADOR2");

  await chrome.contextMenus.remove("EMAIL");
  await chrome.contextMenus.remove("SENHA");
}


// *********************** DADOS PESSOAIS ******************** //

async function geraNome()
{
  await chrome.contextMenus.create({
    title: "NOME",
    id: "NOME",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        //envia os dados para o content.js
        await chrome.tabs.sendMessage(tab.id, data.dados.nome);
      });
    }
  });
}

async function geraNasc()
{
  await chrome.contextMenus.create({
    title: "NASCIMENTO",
    id: "NASCIMENTO",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        //envia os dados para o content.js
        await chrome.tabs.sendMessage(tab.id, data.dados.data_nasc);
      });
    }
  });
}

async function geraCpf()
{
  await chrome.contextMenus.create({
    title: "CPF",
    id: "CPF",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        //envia os dados para o content.js
        await chrome.tabs.sendMessage(tab.id, data.dados.cpf);
      });
    }
  });
}

async function geraRg()
{
  await chrome.contextMenus.create({
    title: "RG",
    id: "RG",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        //envia os dados para o content.js
        await chrome.tabs.sendMessage(tab.id, data.dados.rg);
      });
    }
  });
}

async function geraCel()
{
  await chrome.contextMenus.create({
    title: "CELULAR",
    id: "CELULAR",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        //envia os dados para o content.js
        await chrome.tabs.sendMessage(tab.id, data.dados.celular);
      });
    }
  });
}


// *********************** SEPARADOR ******************** //

async function SEPARADOR1()
{
  await chrome.contextMenus.create({
    title: "-",
    id: "SEPARADOR1",
    contexts:["all"],
  });
}
async function SEPARADOR2()
{
  await chrome.contextMenus.create({
    title: "-",
    id: "SEPARADOR2",
    contexts:["all"],
  });
}


// *********************** ENDERECO ******************** //

async function geraCep()
{
  await chrome.contextMenus.create({
    title: "CEP",
    id: "CEP",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        await chrome.tabs.sendMessage(tab.id, data.dados.cep);
      });
    }
  });
}

async function geraEstado()
{
  await chrome.contextMenus.create({
    title: "ESTADO",
    id: "ESTADO",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        await chrome.tabs.sendMessage(tab.id, data.dados.estado);
      });
    }
  });
}

async function geraCidade()
{
  await chrome.contextMenus.create({
    title: "CIDADE",
    id: "CIDADE",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        await chrome.tabs.sendMessage(tab.id, data.dados.cidade);
      });
    }
  });
}

async function geraBairro()
{
  await chrome.contextMenus.create({
    title: "BAIRRO",
    id: "BAIRRO",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        await chrome.tabs.sendMessage(tab.id, data.dados.bairro);
      });
    }
  });
}

async function geraEndereco()
{
  await chrome.contextMenus.create({
    title: "ENDERECO",
    id: "ENDERECO",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        await chrome.tabs.sendMessage(tab.id, data.dados.endereco);
      });
    }
  });
}

async function geraNumero()
{
  await chrome.contextMenus.create({
    title: "NUMERO",
    id: "NUMERO",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        await chrome.tabs.sendMessage(tab.id, data.dados.numero);
      });
    }
  });
}




// *********************** EMAIL E SENHA ******************** //

async function geraEmail()
{
  await chrome.contextMenus.create({
    title: "E-MAIL",
    id: "EMAIL",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["dados"], async(data) =>
      {
        let email = data.dados.email.split("@")[0];

        if(email.length>25)
        {
          email = email.substring(0,25);
        }
        email = email+"@yopmail.com";
        await chrome.tabs.sendMessage(tab.id, email);
      });
    }
  });
}

async function geraSenha()
{
  await chrome.contextMenus.create({
    title: "SENHA PADRAO",
    id: "SENHA",
    contexts:["all"],
    onclick: async (obj, tab) =>
    {
      await chrome.storage.local.get(["senha"], async(data) =>
      {
        if(data.senha==0)
        {
          alert("SENHA PADRAO AINDA NAO FOI DEFINIDA");
        }
        else
        {
          await chrome.tabs.sendMessage(tab.id, data.senha);
        }
      });
    }
  });
}
