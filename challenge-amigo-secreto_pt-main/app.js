//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 let amigos = ()
  function adicionarAmigo() {
 const input = document.getElementById("amigo");
 const nome = input.Value.trim ();

 if (nome) {
    if (amigos.includes (nome)) {
        alert('este nome já foi adicionado.');
    } else{
        amigos.push(nome);
        atualizarListaAmigos();
        input.Value= '';
    }
 } else {
    alert('por favor insira um nome válido');}
 }


  function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement ('li');
        li.textContent = amigo;
        lista.appendChild(li);
    })
  }
  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j]], array[i];
    }
  }

  if (amigos.length <2) {
    alert('adicione pelo menos 2 amigos para sortear.');
    return;
  } 

  embaralhar(amigos); 
  const participante = "amigo";
  const indice = amigos.indexOf(participante);
  
  if(indice !== -1) {
    const amigoSecreto = amigos[(indice +1) % amigos.length];
    exibirResultado('o participante ${participante} é: ${amigoSecreto}.');
  }  else {
    exibirResultado('o participante ${participante} não está na lista.')
  }

  
