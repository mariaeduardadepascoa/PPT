//math.random -> gera qualquer número inteiro e quebrado entre 0 e 1
//math.floor -> arredonda os números
//once: true -> executa os listeners apenas uma vez e os remove depois


// APARECER NOME JOGADOR
var submit = document.getElementById("button-jogar-menu");
var nomeJogador = document.getElementById("input-name-jogador");
var nomeJogadorFR = document.querySelector("#conjuntoJogador .nomes");


//SISTEMA DO JOGO
var ultimoClique = null;
var escolhido;
var vencedorValorJogador = 0;
var vencedorValorComputador = 0;
var mostrarEscolhas = document.querySelector("#conjuntoJogador .mostrarEscolhas");
var empate = document.getElementById("empate");

//ESCOLHA DO COMPUTADOR
var pedra = document.getElementById("escolha-jogador-pedra");
var papel = document.getElementById("escolha-jogador-papel");
var tesoura = document.getElementById("escolha-jogador-tesoura");
// const opcoes = [pedra, papel, tesoura];
const opcoes = [0, 1, 2];
var mostrarEscolhasComputador = document.querySelector("#conjuntoComputador .mostrarEscolhas");


//PLACAR
var placar = document.querySelector(".containerPontucao");
var numeroJ = document.getElementById("span-voce");
var numeroC = document.getElementById("span-computador");


//POP UP E RECOMEÇAR
var popUpJ = document.querySelector(".popUpVencedorJ");
var popUpC = document.querySelector(".popUpVencedorC");


//VERIFICANDO TUDO E DEPOIS MUDANDO DE PÁGINA NO JOGO
submit.addEventListener("click", function(event) {
    incializando();
});

nomeJogador.addEventListener('keydown', function(e) { //keydown é quando aperta a tecla
    if (e.key == 'Enter') {
        incializando();
    }
});

function incializando() {

    mudarSection();
    escolhaJogador();
    console.log("clicou");
    nomeJogadorFR.textContent = nomeJogador.value;

    if (nomeJogador.value.length > 15) {
        alert("Digite um nome que tenha menos que 15 caracteres.");
        mudarSection();
    }

    console.log("Nome do jogador: ", nomeJogadorFR);

    if (nomeJogador.value.trim() == "") { //.trim() -> remove espaços em branco
        nomeJogadorFR.textContent = "Você (sem nome)";
    }
}

function mudarSection() {

    let menu = document.getElementById("menu");
    let jogo = document.getElementById("jogo");

    if (menu.classList.contains("show")) { 
        menu.classList.remove("show"); 
        jogo.classList.add("show"); 

        numeroJ.textContent = 0;
        numeroC.textContent = 0;
        vencedorValorComputador = 0;
        vencedorValorJogador = 0;
        empate.classList.remove('show');

    } else { 
        jogo.classList.remove("show"); 
        menu.classList.add("show"); 
    }

}

//FUNÇÕES DO SISTEMA DO JOGO
function escolhaJogador(){ //jogador escolhendo

    //JOGADOR TEM QUE ESCOLHER UMA OPÇÃO-----------------------
    //OPÇÃO TEM QUE APARECER NO CIRCULO DELE-------------------
    //OPÇÃO DO COMPUTADOR TEM QUE APARECER NO CIRCULO----------
    //CODIGO TEM QUE DECIDIR QUEM GANHA------------------------
    //PLACAR LA NO CANTO TEM QUE MUDAR-------------------------
    //TEM QUE APARECER NA TELA QUEM GANHA----------------------
    //ARRUMAR IMAGENS  QUE FICAM UMA EM CIMA DA OUTRA----------
    //ARRUMAR PLACAR ERRADO QUANDO DÁ 3 PONTOS-----------------
    //MUDAR APPENDCHILD PARA INNERHTML-------------------------
    //ANIMAR TUDO

    pedra.addEventListener('click', function(event) {
        ultimoClique = opcoes[0];
        console.log("Pedra: ", ultimoClique);
        
        if (mostrarEscolhas.childNodes.length == 0) {

            mostrarEscolhas.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            let img = mostrarEscolhas.querySelector('img');
            img.addEventListener("animationend", () => { 
                mostrarEscolhas.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg">';
            });

        } else {

            mostrarEscolhas.innerHTML = "";
            mostrarEscolhas.innerHTML = ' <img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            let img = mostrarEscolhas.querySelector('img');
            img.addEventListener("animationend", () => { 
                mostrarEscolhas.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg">';
            });

        }

        escolhaComputador();
    });

    papel.addEventListener('click', function(e) {
        ultimoClique = opcoes[1];
        console.log("Papel: ", ultimoClique);
        
        if (mostrarEscolhas.childNodes.length == 0) {

            mostrarEscolhas.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            mostrarEscolhas.addEventListener("animationend", () => { 
                mostrarEscolhas.innerHTML = '<img src="imagens/715399.svg">';
            });
            

        } else {
            mostrarEscolhas.innerHTML = "";
            mostrarEscolhas.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            mostrarEscolhas.addEventListener("animationend", () => { 
                mostrarEscolhas.innerHTML = '<img src="imagens/715399.svg">';
            });

        }
        escolhaComputador();
    });

    tesoura.addEventListener('click', function(e) {
        ultimoClique = opcoes[2];
        console.log("Tesoura: ", ultimoClique);

        if (mostrarEscolhas.childNodes.length == 0) {
            mostrarEscolhas.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            mostrarEscolhas.addEventListener("animationend", () => { 
                mostrarEscolhas.innerHTML = '<img src="imagens/OIP-removebg-preview.svg">';
            });

        } else {
            mostrarEscolhas.innerHTML = "";
            mostrarEscolhas.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            mostrarEscolhas.addEventListener("animationend", () => { 
                mostrarEscolhas.innerHTML = '<img src="imagens/OIP-removebg-preview.svg">';
            });
        }
        escolhaComputador();
    });

}

function escolhaComputador(){ //computador escolhendo

    let indice = Math.floor(Math.random() * opcoes.length);
    console.log("Índice do computador: ", indice);
    escolhido = opcoes[indice];

    if (mostrarEscolhasComputador.innerHTML !== "") {
        mostrarEscolhasComputador.innerHTML = "";
    }

    switch (escolhido) {
        case opcoes[0]: 
            mostrarEscolhasComputador.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            mostrarEscolhasComputador.addEventListener("animationend", () => { 
                mostrarEscolhasComputador.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg">'
            });
            break;
        case opcoes[1]:
            mostrarEscolhasComputador.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            mostrarEscolhasComputador.addEventListener("animationend", () => { 
                mostrarEscolhasComputador.innerHTML = '<img src="imagens/715399.svg">'
            });
            break;
        case opcoes[2]:
            mostrarEscolhasComputador.innerHTML = '<img src="imagens/Fa-Team-Fontawesome-Emoji-FontAwesome-Emoji-Hand-Back-Fist.512 (1).svg" class="img-pedra show">';
            
            mostrarEscolhasComputador.addEventListener("animationend", () => { 
                mostrarEscolhasComputador.innerHTML = '<img src="imagens/OIP-removebg-preview.svg">'
            });
            break;
    }

    sistemaGeralVencedor();
}

function sistemaGeralVencedor() { //sistema geral do jogo -> determinando o vencedor

    // pedra = 0
    // papel = 1
    // tesoura = 2

    let buttons = document.querySelectorAll(".buttons");

    if ((ultimoClique == opcoes[0] && escolhido == opcoes[1]) || (ultimoClique == opcoes[1] && escolhido == opcoes[2]) || (ultimoClique == opcoes[2] && escolhido == opcoes[0])) {
        empate.classList.remove('show');
        vencedorValorComputador++;

        mostrarEscolhasComputador.addEventListener(("animationend"), () => {
            numeroC.textContent = vencedorValorComputador;
            numeroC.classList.add('animate-pontuacaoC');
            setTimeout(()=> {
                numeroC.classList.remove('animate-pontuacaoC');

                if (vencedorValorComputador == 3) {
                    popUpC.classList.add("show");
                    // buttons.classList.add("show");
                    popUpC.querySelector(".buttons").classList.add("show");
                    console.log("mostrando pop up -> COMPUTADOR");
                    mostrarEscolhas.innerHTML = '';
                    mostrarEscolhasComputador.innerHTML = '';
                }

            }, 500);
        }, { once: true });

        console.log("vencedor: COMPUTADOR -> pontuação: ", vencedorValorComputador);

    } else if ((ultimoClique == opcoes[1] && escolhido == opcoes[0]) || (ultimoClique == opcoes[2] && escolhido == opcoes[1]) || (ultimoClique == opcoes[0] && escolhido == opcoes[2])) {
        empate.classList.remove('show');
        vencedorValorJogador++;

        mostrarEscolhas.addEventListener(("animationend"), () => {
            numeroJ.textContent = vencedorValorJogador;
            
            numeroJ.classList.add('animate-pontuacaoJ');
            setTimeout(()=> {
                numeroJ.classList.remove('animate-pontuacaoJ');

                if (vencedorValorJogador == 3) {
                    popUpJ.classList.add("show");
                    // buttons.classList.add("show");
                    popUpJ.querySelector(".buttons").classList.add("show");
                    console.log("mostrando pop up -> JOGADOR");
                    mostrarEscolhas.innerHTML = '';
                    mostrarEscolhasComputador.innerHTML = '';
                }
            }, 500);
        }, { once: true });
        
        console.log("vencedor: JOGADOR -> pontuação: ", vencedorValorJogador);

    } else if ((ultimoClique == opcoes[0] && escolhido == opcoes[0]) || (ultimoClique == opcoes[1] && escolhido == opcoes[1]) || (ultimoClique == opcoes[2] && escolhido == opcoes[2]))  {

        console.log("EMPATE");
        console.log("Pontuação atual --> jogador: ", vencedorValorJogador, " computador: ", vencedorValorComputador);

        
        mostrarEscolhas.addEventListener(("animationend"), () => {
            empate.classList.add('show');

        }, {once: true});

        mostrarEscolhasComputador.addEventListener(("animationend"), () => {
            empate.classList.add('show');
        }, {once: true});
    }
}

function recomecar() { //recomecar o jogo a partir do botão de recomecar e de voltar

    vencedorValorComputador = 0;
    vencedorValorJogador = 0;

    numeroJ.textContent = 0;
    numeroC.textContent = 0;
    
    mostrarEscolhas.innerHTML = '<img src="gifs/bolinhas_pulando_transparente.gif"class="reticencias" alt="Gif de reticencias com animação" style="opacity: 75%;">';

    mostrarEscolhasComputador.innerHTML = '<img src="gifs/bolinhas_pulando_transparente.gif"class="reticencias" alt="Gif de reticencias com animação" style="opacity: 75%;">';

    popUpJ.classList.remove("show");
    popUpC.classList.remove("show");

}