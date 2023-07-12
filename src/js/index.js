const personagens =  document.querySelectorAll('.personagem') //seleciona todos os elementos pela classe

//foreach para ada elemento, personagem é o que passa na arrow function
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            });
        }

        removerSelecionado();

        personagem.classList.add('selecionado');
        
        alterarImagem(personagem);
        
        alterarNome(personagem);

        alterarDescricao(personagem);

    })
})

function removerSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function alterarImagem(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function alterarNome(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricao(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}
