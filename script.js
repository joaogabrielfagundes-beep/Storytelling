const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem 16 anos e começa a pensar seriamente sobre o futuro. Entre tantas possibilidades, uma ideia se destaca: cursar Engenharia Mecânica na UTFPR e transformar sua paixão por carros em conhecimento. Como você decide encarar esse objetivo?",

        alternativas: [
            {
                texto: "Deixa o sonho de lado por enquanto, acreditando que ainda há muito tempo para pensar no futuro.",
                afirmacao: "Ao adiar seus objetivos, você percebeu que um sonho precisa de iniciativa para deixar de ser apenas uma ideia e começar a fazer parte da sua realidade. "
            },
            {
                texto: "Começa a se dedicar aos estudos e procura conhecer melhor a Engenharia Mecânica e o caminho até a UTFPR.",
                afirmacao: "Ao transformar seu interesse por carros em motivação para estudar, você deu os primeiros passos para construir o futuro que deseja. "
            }
        ]
    },
    {
        enunciado: "Durante sua preparação, matemática e física começam a exigir mais esforço do que você esperava. Alguns conteúdos parecem difíceis e fazem você questionar se realmente conseguirá chegar à Engenharia Mecânica. O que você faz?",
        alternativas: [
            {
                texto: "Desanima diante das dificuldades e passa a acreditar que talvez Engenharia Mecânica não seja para você.",
                afirmacao: "Ao permitir que as primeiras dificuldades definissem sua capacidade, você percebeu que desistir diante dos obstáculos pode afastá-lo de um objetivo que realmente importa. "
            },
            {
                texto: "Aceita que terá dificuldades, procura aprender com os erros e continua estudando até compreender os conteúdos.",
                afirmacao: "Ao persistir mesmo quando as matérias ficaram difíceis, você descobriu que dedicação e paciência podem transformar dificuldades em aprendizado. "
            }
        ]
    },
    {
        enunciado: "Você imagina sua vida na faculdade e pensa em tudo o que gostaria de aprender: motores, veículos, projetos, tecnologia e novas formas de tornar os carros mais eficientes. Como decide lidar com essa paixão?",
        alternativas: [
            {
                texto: "Mantém o interesse apenas como um hobby e não procura desenvolver conhecimentos além do que é exigido na escola.",
                afirmacao: "Ao manter sua paixão apenas como um passatempo, você percebeu que interesses pessoais também podem se transformar em oportunidades quando recebem dedicação e propósito. "
            },
            {
                texto: "Procura aprender mais sobre carros, mecânica e tecnologia, buscando transformar sua curiosidade em conhecimento.",
                afirmacao: "Ao aprofundar seu interesse por carros, você começou a enxergar que aquilo que gosta pode se tornar uma fonte de inspiração para sua formação profissional. "
            }
        ]
    },
    {
        enunciado: "Com o passar do tempo, você percebe que alcançar a UTFPR não dependerá apenas de vontade. Será necessário conciliar estudos, vida pessoal, descanso e preparação para o vestibular. Qual caminho escolhe?",
        alternativas: [
            {
                texto: "Coloca toda a sua energia nos estudos e deixa de lado descanso, lazer e outros aspectos importantes da sua vida.",
                afirmacao: "Ao tentar alcançar seus objetivos sacrificando completamente seu bem-estar, você percebeu que uma conquista não vale a pena quando o caminho até ela destrói seu equilíbrio. "
            },
            {
                texto: "Organiza sua rotina, estabelece prioridades e entende que cuidar de si também faz parte da preparação para o futuro.",
                afirmacao: "Ao encontrar equilíbrio entre dedicação e bem-estar, você entendeu que construir um futuro exige não apenas esforço, mas também consciência sobre seus próprios limites. "
            }
        ]
    },
    {
        enunciado: "Anos se passaram e você finalmente está diante de uma nova etapa. A Engenharia Mecânica na UTFPR deixou de ser apenas um sonho distante e passou a representar uma possibilidade concreta. Ao olhar para tudo o que viveu, qual reflexão leva consigo?",
        alternativas: [
            {
                texto: "Percebe que o medo das dificuldades fez você questionar seus objetivos e que poderia ter confiado mais na própria capacidade.",
                afirmacao: "Ao olhar para trás, você percebeu que o futuro não é definido apenas pelos resultados, mas também pela coragem de continuar tentando quando o caminho parece incerto. "
            },
            {
                texto: "Percebe que cada dificuldade, escolha e aprendizado ajudou a construir a pessoa que você se tornou e a aproximá-lo de seus objetivos.",
                afirmacao: "Ao olhar para sua trajetória, você percebeu que seu futuro começou a ser construído muito antes da faculdade, através das escolhas, da dedicação e da vontade de transformar sua paixão por carros em algo maior. "
            }
        ]
    }
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
