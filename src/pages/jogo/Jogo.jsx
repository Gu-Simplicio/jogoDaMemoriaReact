import cards from "../../config/dadosCard.json"
import Card from "../../components/Card/Card";

//função para carregar os dados de configuração do jogo
function carregaConfig(){
    //caso não tenha nenhum dado configurado no localStorage
    if(!localStorage.getItem("qntdCartas") || !localStorage.getItem("modoJogo")) return false;

    //recebe e retorna as configurações
    const qntdCartas = localStorage.getItem("qntdCartas");
    const modoJogo = localStorage.getItem("modoJogo");

    return { qntdCartas, modoJogo }
}
//configura a lista de cards
function configuraListaCards() {
    let listaCards = new Array()
    listaCards = [...cards, ...cards];

    //loop para embaralhar a lista 
    for(let i = listaCards.length - 1; i > 0; i--){
        //escolhe um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));

        //troca o elemento atual pelo aleatório
        [ listaCards[i], listaCards[j] ] = [ listaCards[j], listaCards[i] ];
    }
    
    return listaCards;
}

function Jogo(){
    //carrega as configurações de jogo.
    const { qntdCartas, modoJogo } = carregaConfig();
    
    const retornaHome = () => {
        alert("Modo de jogo e quantidade de cartas não foi setado \nRedirecionando..");
        location.href = "/";
    }

    //caso algo seja errado
    if(!qntdCartas || !modoJogo || !carregaConfig()) retornaHome();

    const listaCards = configuraListaCards();
    console.table(listaCards);

    return(
        <main>
            {   
                // exibe os cards já embaralhados
                listaCards.map((card, index) => (
                    <Card 
                        idCard={index}
                        imgCard={card.img}  
                        tituloCard={card.titulo}
                        />
                ))
            }
        </main>
    )
}

export default Jogo