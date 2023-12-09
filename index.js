/*
 * Criação de um jogo do milhão para a materia de desenvolvimento web
 * @author : ednsoares
*/

const entrada = require("prompt-sync")();
let questaoPalavra;
let resposta;
let certa;
let alternativas = [];
let sair = "s" || "S";
let valor;
let op;
let a = 0;
let nome = entrada("digite um nome: ");
console.clear();

// criação de dicionario para ser usado na primeira etapa do jogo
let nivel1 = [
    pergunta1 = {
        q: "Qual é a capital do Brasil? ",
        s: {
            a: "Rio de Janeiro",
            b: "São Paulo ",
            c: "Brasília"
        },
        cr: "c"
    },
    pergunta2 = {
        q: "Quem foi o autor de Romeu e Julieta?",
        s: {
            a: "Charles Dickens",
            b: "William Shakespeare ",
            c: "Jane Austen"
        },
        cr: "b"
    },
    pergunta3 = {
        q: "Qual é o maior planeta do nosso sistema solar? ",
        s: {
            a: "Terra",
            b: "Júpiter",
            c: "Vênus"
        },
        cr: "b"
    },
    pergunta4 = {
        q: "Qual é o símbolo químico do ouro? ",
        s: {
            a: "Au",
            b: "Ag",
            c: "Fe"
        },
        cr: "a"
    },
    pergunta5 = {
        q: "Quem foi o primeiro presidente dos Estados Unidos? ",
        s: {
            a: "Abraham Lincoln",
            b: "George Washington",
            c: "Thomas Jefferson"
        },
        cr: "b"
    }
];
// criação de dicionario para ser usado na segunda etapa do jogo
let nivel2 = [
    pergunta1 = {
        q: "Em que ano começou a Primeira Guerra Mundial?",
        s: {
            a: "1914",
            b: "1920",
            c: "1939"
        },
        cr: "a"
    },
    pergunta2 = {
        q: "Qual é a fórmula química da água?",
        s: {
            a: "H2O",
            b: "CO2",
            c: "O2"
        },
        cr: "a"
    },
    pergunta3 = {
        q: "Quem é considerado o pai da psicanálise? ",
        s: {
            a: "Sigmund Freud",
            b: "Carl Jung ",
            c: "Ivan Pavlov"
        },
        cr: "a"
    },
    pergunta4 = {
        q: "Qual é o instrumento musical mais antigo do mundo? ",
        s: {
            a: "Flauta",
            b: "Tambor",
            c: "Harpa"
        },
        cr: "a"
    },
    pergunta5 = {
        q: "Quem escreveu Dom Quixote?",
        s: {
            a: "Miguel de Cervantes",
            b: "Leão Tolstói",
            c: "Dante Alighieri"
        },
        cr: "a"
    }
];
// criação de dicionario para ser usado na terceira etapa do jogo
let nivel3 = [
    pergunta1 = {
        q: "Em que país se encontra a Grande Muralha da China? ",
        s: {
            a: "Japão",
            b: "China",
            c: "Índia"
        },
        cr: "b"
    },
    pergunta2 = {
        q: "Qual é o elemento mais abundante na crosta terrestre?",
        s: {
            a: "Oxigênio",
            b: "Silício",
            c: "Alumínio"
        },
        cr: "b"
    },
    pergunta3 = {
        q: "Quem é o autor de A Revolução dos Bichos? ",
        s: {
            a: "George Orwell ",
            b: "Aldous Huxley",
            c: "Franz Kafka"
        },
        cr: "a"
    },
    pergunta4 = {
        q: "Qual é a capital da Austrália?",
        s: {
            a: "Sydney",
            b: "Camberra",
            c: "Melbourne"
        },
        cr: "b"
    },
    pergunta5 = {
        q: "Em que ano a primeira pessoa pisou na Lua? ",
        s: {
            a: "1969",
            b: "1975",
            c: "1982"
        },
        cr: "a"
    }
];
// criação de dicionario para ser usado na quarta etapa do jogo
let nivel4 = [
    pergunta1 = {
        q: "Quem foi o pintor do famoso quadro: A Noite Estrelada? ",
        s: {
            a: "Vincent van Gogh ",
            b: "Claude Monet ",
            c: "Pablo Picasso"
        },
        cr: "a"
    },
    pergunta2 = {
        q: "Qual é o segundo livro da trilogia: O Senhor dos Anéis?",
        s: {
            a: "A Sociedade do Anel",
            b: "As Duas Torres",
            c: "O Retorno do Rei"
        },
        cr: "b"
    },
    pergunta3 = {
        q: "Quem é considerado o: pai da computação?",
        s: {
            a: "Steve Jobs",
            b: "Alan Turing",
            c: "Bill Gates"
        },
        cr: "b"
    },
    pergunta4 = {
        q: "Qual é o segundo planeta do nosso sistema solar?",
        s: {
            a: "Vênus",
            b: "Marte",
            c: "Júpiter"
        },
        cr: "a"
    },
    pergunta5 = {
        q: "Quem descobriu a penicilina?",
        s: {
            a: "Jonas Salk",
            b: "Louis Pasteur",
            c: "Alexander Fleming"
        },
        cr: "c"
    }
];
// criação de dicionario para ser usado na quinta etapa do jogo
let nivel5 = [
    pergunta1 = {
        q: "Quem é conhecido como o: pai da filosofia ocidental? ",
        s: {
            a: "Sócrates",
            b: "Platão",
            c: "Aristóteles"
        },
        cr: "a"
    },
    pergunta2 = {
        q: "Qual é o único planeta do sistema solar que gira no sentido do horário? ",
        s: {
            a: "Júpiter",
            b: "Urano",
            c: "Vênus"
        },
        cr: "c"
    },
    pergunta3 = {
        q: "Quem é autor de: Orgulho e Preconceito ? ",
        s: {
            a: "Emily Brontë",
            b: "Jane Austen",
            c: "Charlotte Brontë"
        },
        cr: "b"
    },
    pergunta4 = {
        q: "Em que ano começou a Guerra Civil Americana?",
        s: {
            a: "1861",
            b: "1875",
            c: "1848"
        },
        cr: "a"
    },
    pergunta5 = {
        q: "Quem foi o primeiro ser humano a viajar para o espaço? ",
        s: {
            a: "Yuri Gagarin",
            b: "Neil Armstrong",
            c: "Buzz Aldrin"
        },
        cr: "a"
    }
];

// criação de uma função para saltar linhas.
function espaco(){
    console.log("\n");
}
// criação de função para selecionar pergunta a ser usada na primeira etapa do jogo
function criarPergunta1(){
    const indexResposta = parseInt(Math.random() * nivel1.length)
    questaoPalavra  = nivel1[indexResposta].q;
    alternativas = nivel1[indexResposta].s;
    certa = nivel1[indexResposta].cr;
}
// criação de função para selecionar pergunta a ser usada na segunda etapa do jogo
function criarPergunta2(){
    const indexResposta = parseInt(Math.random() * nivel2.length)
    questaoPalavra  = nivel2[indexResposta].q;
    alternativas = nivel2[indexResposta].s;
    certa = nivel2[indexResposta].cr;
}
// criação de função para selecionar pergunta a ser usada na terrceira etapa do jogo
function criarPergunta3(){
    const indexResposta = parseInt(Math.random() * nivel3.length)
    questaoPalavra  = nivel3[indexResposta].q;
    alternativas = nivel3[indexResposta].s;
    certa = nivel3[indexResposta].cr;
}
// criação de função para selecionar pergunta a ser usada na quarta etapa do jogo
function criarPergunta4(){
    const indexResposta = parseInt(Math.random() * nivel4.length)
    questaoPalavra  = nivel4[indexResposta].q;
    alternativas = nivel4[indexResposta].s;
    certa = nivel4[indexResposta].cr;
}
// criação de função para selecionar pergunta a ser usada na quinta etapa do jogo
function criarPergunta5(){
    const indexResposta = parseInt(Math.random() * nivel5.length)
    questaoPalavra  = nivel5[indexResposta].q;
    alternativas = nivel5[indexResposta].s;
    certa = nivel5[indexResposta].cr;
}
//laço de repetição para executar o jogo
do{
    for(i=0;i<5;i++){
        if(i == 0){
            espaco();
            a++;
            criarPergunta1();
            console.log("Jogador = ", nome,"\nEtapa 1 - Pergunta valendo $100mil reais");
            console.log("ERRAR = $0 reais; Parar = $0 reais");
            espaco();
            console.log(questaoPalavra);
            console.log("a = ",alternativas.a);
            console.log("b = ",alternativas.b);
            console.log("c = ",alternativas.c);
            console.log("\ns = desistir...");
            resposta = entrada("Digite a resposta : ");
            resposta = resposta.toLowerCase();
            if(resposta == certa){
                valor = 100000;
                console.log("Acertou!!");
            }
            else if(sair == resposta){
                console.log("Você Desistiu");
                valor = 0;
                break;
            }
            else  {
                console.log("Errou, A alternativa correta era a letra", certa);
                valor = 0;
                break;
            }
        }
    
        else if(i == 1){
            espaco();
            a++;
            criarPergunta2();
            console.log("Jogador = ", nome,"\nEtapa 2 - Pergunta valendo $250mil reais");
            console.log("ERRAR = $ 10.000reais; Parar = $50.000 reais");
            espaco();
            console.log(questaoPalavra);
            console.log("a = ",alternativas.a);
            console.log("b = ",alternativas.b);
            console.log("c = ",alternativas.c);
            console.log("\ns = desistir...");
            resposta = entrada("Digite a resposta : ");
            resposta = resposta.toLowerCase();
            if(resposta == certa){
                valor = 250000;
                console.log("Acertou!!");
            }
            else if(sair == resposta){
                console.log("Você Desistiu");
                valor = 50000;
                break;
            }
            else {
                console.log("Errou, A alternativa correta era a letra", certa);
                valor = 10000;
                break;
            }
        }
    
        else if(i == 2){
            espaco();
            a++;;
            criarPergunta3();
            console.log("Jogador = ", nome,"\nEtapa 3 - Pergunta valendo $500mil reais");
            console.log("ERRAR = $100.000 reais; Parar = $200.000 reais");
            console.log(questaoPalavra);
            espaco();
            console.log("a = ",alternativas.a);
            console.log("b = ",alternativas.b);
            console.log("c = ",alternativas.c);
            console.log("\ns = desistir...");
            resposta = entrada("Digite a resposta : ");
            resposta = resposta.toLowerCase();
            if( resposta == certa){
                valor = 500000;
                console.log("Acertou!!");
            }
            else if(sair == resposta){
                console.log("Você Desistiu");
                valor = 200000;
                break;
            }
            else {
                console.log("Errou, A alternativa correta era a letra", certa);
                valor = 100000;
                break;
            }
        }
    
        else if(i == 3){
            espaco();
            a++;
            criarPergunta4();
            console.log("Jogador = ", nome,"\nEtapa 4 - Pergunta valendo $750mil reais");
            console.log("ERRAR = $250.000 reais; Parar = $450.000 reais");
            espaco();
            console.log(questaoPalavra);
            console.log("a = ",alternativas.a);
            console.log("b = ",alternativas.b);
            console.log("c = ",alternativas.c);
            console.log("\ns = desistir...");
            resposta = entrada("Digite a resposta : ");
            resposta = resposta.toLowerCase();
            if(resposta == certa){
                valor = 750000;
                console.log("Acertou!!");
            }
            else if(sair == resposta){
                console.log("Você Desistiu");
                valor = 450000;
                break;
            }
            else {
                console.log("Errou, A alternativa correta era a letra", certa);
                valor = 250000;
                break;
            }
            
        }
    
        else if(i == 4){
            espaco();
            a++;
            criarPergunta5();
            console.log("Jogador = ", nome,"\nEtapa 5 - Pergunta valendo um milhão de reais");
            console.log("ERRAR = $350.000 reais; Parar = $600.000 reais");
            espaco();
            console.log(questaoPalavra);
            console.log("a = ",alternativas.a);
            console.log("b = ",alternativas.b);
            console.log("c = ",alternativas.c);
            console.log("\ns = desistir...");
            resposta = entrada("Digite a resposta : ");
            resposta = resposta.toLowerCase();
            if(resposta == certa){
                valor = 1000000;
                console.log("Acertou!!");
            }
            else if(sair == resposta){
                console.log("Você Desistiu");
                valor = 600000;
                break;
            }
            else{
                console.log("Errou, A alternativa correta era a letra", certa);
                valor = 350000;
                break;
            }
        }
        console.clear();
    }
    console.log("Você encerrou o jogo na rodada",a,"faltavam",5 - a, "rodadas");
    console.log("A ultima alternativa correta era a letra ", certa);    
    console.log("\n\nJogador ", nome, "Ganhou R$: ", valor, "reais...");
    console.log("\n[ n ] - Jogar novamente\nQualquer outra tecla para sair.")
    op = entrada("resposta: ")
    a = 0;
    console.clear();
}while(op == "n" || op == "N");