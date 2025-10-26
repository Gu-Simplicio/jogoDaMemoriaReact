import { useState } from "react";


function Home(){
    //useStates para quantidade de cartas e modo de jogo
    const [qntdCartas, setQntdCartas] = useState('');
    const [modoJogo, setModoJogo] = useState('');

    //funções para alterar modo de jogo e quantidade de cartas
    const alteraModoJogo = (event) => {
        setModoJogo(event.target.value);
    }
    const alteraQntdCartas = (event) => {
        setQntdCartas(event.target.value);
    }

    return (
        <main>
            <h1>Bem vindo ao jogo da memória!</h1>

            <h4>Escolha quantas cartas vai ter no jogo</h4>
            <ul>
                <li>
                    <label>
                        <input 
                            type="radio"
                            value="dez"
                            checked={qntdCartas === 'dez'}
                            onChange={alteraQntdCartas} />   

                            dez cartas
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type="radio"
                            value="dezoito"
                            checked={qntdCartas === 'dezoito'}
                            onChange={alteraQntdCartas} />   

                            dezoito cartas
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type="radio"
                            value="vinte"
                            checked={qntdCartas === 'vinte'}
                            onChange={alteraQntdCartas} />   

                            vinte cartas
                    </label>
                </li>
            </ul> { /* lista de qntd de carta */ }

            <h4>Escolha o modo de jogo</h4>
            <ul> 
                <li>
                    <label>
                        <input 
                        type="radio"
                        value="sozinho"
                        checked={modoJogo === 'sozinho'}
                        onChange={alteraModoJogo} />

                        Sozinho
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                        type="radio"
                        value="vsMaquina"
                        checked={modoJogo === 'vsMaquina'}
                        onChange={alteraModoJogo} />

                        Contra Máquina
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                        type="radio"
                        value="vsPlayer"
                        checked={modoJogo === 'vsPlayer'}
                        onChange={alteraModoJogo} />

                        Contra player
                    </label>
                </li>
            </ul> { /* lista dos modos de jogo*/ }

            { /* botão apenas ativa quando o modo de jogo e a quantidade de cartas estiverem setadas */ }
            <button disabled={ !(modoJogo && qntdCartas) }>Iniciar jogo</button>
        </main>
    )
}

export default Home;