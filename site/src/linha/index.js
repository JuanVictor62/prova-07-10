import './index.scss'
import axios from 'axios'
import { useState } from 'react';

export default function Index(){
    const [qtd, setQtd] = useState();
    const [resposta, setResposta] = useState([]);

    async function verLinhas(){
        const resp = await axios.get('http://localhost:5000/linha/' + qtd);
        setResposta([resp.data]);
    }

    return(
        <main>
            <div>
                Linhas
            </div>

            <div>
                Quantos Asteriscos você vai querer: <input value={qtd} onChange={e => setQtd(e.target.value)} />
            </div>

            <div>
                <button onClick={verLinhas} >Calcular</button>
            </div>
            

            <div>
                {resposta.map(item =>
                    <p> resposta: {item.resposta} </p>
                )}
            </div>
        </main>
    )
}