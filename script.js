const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de descobrir um dispositivo misterioso em sua casa que parece ser uma máquina do tempo. Você decide ligá-lo e, de repente, se vê no passado, em uma época medieval. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Eu fico apavorado e tento voltar para o presente o mais rápido possível!",
                afirmacao: "Você tem um impulso de fugir de tudo que é desconhecido, sem querer explorar o passado."
            },
            {
                texto: "Eu decido explorar o lugar e ver como era a vida naquela época!",
                afirmacao: "Você se sente empolgado com a oportunidade de viver uma experiência única no passado."
            }
        ]
    },
    {
        enunciado: "Após passar um tempo no passado, você encontra um grande segredo histórico que pode alterar os rumos da história. O que você faz?",
        alternativas: [
            {
                texto: "Eu decido voltar ao presente e contar tudo, mostrando o quanto o passado estava errado.",
                afirmacao: "Você acredita que tem a responsabilidade de corrigir os erros do passado para melhorar o futuro."
            },
            {
                texto: "Eu decido manter o segredo e não interferir no curso da história, por medo das consequências.",
                afirmacao: "Você opta por não mexer nas linhas do tempo, acreditando que o destino já foi traçado."
            }
        ]
    },
    {
        enunciado: "Você acaba de viajar para o futuro, mais precisamente para o ano de 3000. Como é a sociedade futurista que você encontra?",
        alternativas: [
            {
                texto: "As pessoas estão super conectadas à tecnologia, mas parecem um pouco distantes umas das outras.",
                afirmacao: "Você se sente intrigado com o quanto a tecnologia avançou, mas ao mesmo tempo sente falta das relações mais pessoais."
            },
            {
                texto: "A sociedade é muito mais harmoniosa e as pessoas vivem em equilíbrio com a natureza e a tecnologia.",
                afirmacao: "Você se sente maravilhado com o futuro sustentável e com a evolução que a humanidade alcançou."
            }
        ]
    },
    {
        enunciado: "Durante a sua viagem ao futuro, você tem a chance de conhecer um cientista que desenvolveu a primeira máquina de viagem no tempo. O que você pergunta a ele?",
        alternativas: [
            {
                texto: "Como você conseguiu criar a máquina do tempo? Quais foram os maiores desafios?",
                afirmacao: "Você está extremamente curioso sobre os detalhes da invenção e os impactos que isso tem no futuro."
            },
            {
                texto: "Se viajar no tempo pode mudar o futuro, por que não estamos vivendo em um mundo onde tudo já foi alterado?",
                afirmacao: "Você se questiona sobre as implicações filosóficas da viagem no tempo e o que ela pode significar para o destino da humanidade."
            }
        ]
    },
    {
        enunciado: "Você encontra uma versão mais jovem de si mesmo no passado. O que você faz?",
        alternativas: [
            {
                texto: "Eu tento avisá-lo sobre os erros que cometi e as escolhas que ele deve evitar.",
                afirmacao: "Você acredita que poderia ter feito as coisas de forma diferente, mas quer ajudar seu eu mais jovem."
            },
            {
                texto: "Eu decido não interferir, sabendo que cada um deve fazer suas próprias escolhas.",
                afirmacao: "Você entende que o aprendizado vem dos erros e que cada versão de si mesmo deve seguir o seu próprio caminho."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
    caixaPerguntas.textContent = "E no fim da sua jornada, você descobriu que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
