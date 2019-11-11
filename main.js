//inicializacao da extensao
chrome.storage.local.set({fakeData:0});


chrome.contextMenus.create({
  title: "GERAR NOVA IDENTIDADE",
  contexts:["all"],
  onclick: async () =>
  {
    //verifica se ja foi gerado dados
    await chrome.storage.local.get(["fakeData"], async(data) =>
    {
      if(data.fakeData!=0) {
        await deleteAll();
      }
      else {
        await chrome.storage.local.set({fakeData:1});
      }
    });

    
    const dados = await $.post("https://cors-anywhere.herokuapp.com/https://www.4devs.com.br/ferramentas_online.php",
    "acao=gerar_pessoa&sexo=H&pontuacao=N&idade=0&cep_estado=&txt_qtde=1&cep_cidade=", (resp) => resp).done(async(dados)=>
    {
      alert("NOVA IDENTIDADE GERADA!");

      //guarda os dados no armazenamento do navegador
      await chrome.storage.local.set({dados});

      //cria um menu contendo os dados da identidade gerada
      await geraNome();
      await geraCpf();
      await geraRg();
      await geraNasc();
      await geraCel();

      await SEPARADOR1();

      await geraCep();
      await geraEstado();
      await geraCidade();
      await geraBairro();
      await geraEndereco();
      await geraNumero();

      await SEPARADOR2();

      await geraEmail();
      await geraSenha();

    }).fail(()=>
    {
      alert("OCORREU UM ERRO AO GERAR OS DADOS!")
    })
  }
});