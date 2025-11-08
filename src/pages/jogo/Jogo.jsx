import Card from "../../components/Card/Card";

function carregaConfig(){
    if(!localStorage.getItem("qntdCartas") || !localStorage.getItem("modoJogo")) return false;

    const qntdCartas = localStorage.getItem("qntdCartas");
    const modoJogo = localStorage.getItem("modoJogo");

    return { qntdCartas, modoJogo }
}

function Jogo(){
    //carrega as configurações de jogo.
    const { qntdCartas, modoJogo } = carregaConfig();
    
    const retornaHome = () => {
        alert("Modo de jogo e quantidade de cartas não foi setado \nRedirecionando..");
        location.href = "/";
    }

    if(!qntdCartas || !modoJogo || !carregaConfig()) retornaHome();


    return(
        <main>
            <Card 
                idCard="1"
                imgCard="card1"
                tituloCard="Card um" />
        </main>
    )
}

export default Jogo