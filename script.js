const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Algo muito comum hoje em dia é a dúvida se estamos presos ou livres, mas querendo ou não, lá no fundo nossa mente é nosso proprio cárrasco e dentre outras ídeias é como se fosse um paradoxo de uma caverna, tem a oportunidade de sair mais prefere se contentar com o pouco.",
        alternativas: [
            {
                texto: "Você se considera uma pessoa livre de corpo e alma."
            },
            {
                texto: "Sou e me sinto aprisionado"
            }
        ]
    },
    {
        enunciado: "Imagine que você está preso em uma caverna, tem a oportunidade de sair, mas ao mesmo tempo você tem medo do que tem lá fora.",
        alternativas: [
            {
                texto: "Sair da caverna e arriscar."
            },
            {
                texto: "Contentar-se em ficar preso por medo."
            }
        ]
    },
    {
        enunciado: "Se agora seus pais morressem, ou apenas 1 deles, como você lidaria com a perda?",
        alternativas: [
            {
                texto: "Ficaria triste, e passaria a ver o mundo como um lugar horrivel."
            },
            {
                texto: "Ficaria triste, porém decide cuidar mais de sí e sua familia em vez de se tornar um ser rebelde."
            }
        ]
    },
    {
        enunciado: "Em um centro de adoção, exixtem apenas 2 cachorros, um labrador doente, e um pincher saudavel, (Sua intuição é caçar) qual você escolheria?",
        alternativas: [
            {
                texto: "Cuidar do cachorro doente e ter paciência."
            },
            {
                texto: "Pegar o Pincher apenas pelo momento e desistir de tudo."
            }
        ]
    },
    {
        enunciado: "Anfetamina poderia ajudar a sociedade de aluguma formal? ",
        alternativas: [
            {
                texto: "Sim, ajudaria em varias áreas."
            },
            {
                texto: "Não, provavelmente Causaria Problemas na sociedade."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "VEmos de certa forma com estás perguntas, como a nossa mente pode ser uma luz que ilumina ou uma sombra que propaga a confusão, isto só vai depender da gente em formas de se ajudar e caa dia se tornando uma pessoa melhor, todas essas perguntas são associadas com apsicologia humana de uma forma bem breve e fácil de entender.(Perdição, desigualdade, medo, ansiedade, falta de empatia.";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
