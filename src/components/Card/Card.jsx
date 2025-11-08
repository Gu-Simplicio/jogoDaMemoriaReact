import { useRef } from "react";

function Card({ idCard, imgCard, tituloCard }) {   
    //cria uma referência que começa nula
    let classeAtual = useRef(null);

    //função que troca a classe do elemento referenciado
    const trocaClasse = () => {
        classeAtual.current.classList.toggle("escondido");
    }
    
    return (
        <div 
            id={idCard} 
            ref={classeAtual}
            onClick={() => trocaClasse()}>
            <img 
                src={imgCard} 
                alt={`Card com a imagem ${imgCard}`} />
            <p> { tituloCard } </p>
        </div>
    )
}

export default Card;