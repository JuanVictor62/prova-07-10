import './index.scss'
import axios from 'axios'
import { useState } from 'react';

export default function Index(){
    const [altura, setAltura] = useState();
    const [base, setBase] = useState();
    const [resposta, setResposta] = useState([]);

    async function verRetangulo(){
        const resp = await axios.post('http://localhost:5000/retangulo', {
            base : base,
            altura : altura
        })

        setResposta([resp.data])
    }

    return(
        <main>
            <h1>Retangulo</h1>

            <div>
                Base : <input value={base} onChange={e => setBase(e.target.value)} />
                Altura : <input value={altura} onChange={e => setAltura(e.target.value)} />
            </div>

            <div>
                <button onClick={verRetangulo} >Calcular</button>
            </div>

            <div>
                {resposta.map(item =>
                    <p> {item.resposta} </p>    
                )}
            </div>
        </main>
    )
}