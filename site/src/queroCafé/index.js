import './index.scss'
import axios from 'axios'
import { useState } from 'react';

export default function Paradas(){
    const [n, setN] = useState();
    const [l, setL] = useState();
    const [d, setD] = useState();
    const [total, setTotal] = useState();

    async function verCafe(){
        const resp = await axios.post('http://localhost:5000/cafe', {
            n: n,
            l: l,
            d: d
        })

        setTotal(resp.data.resposta);
    }

    return(
        <main>
            <h1>Paradas para Abastecer</h1>

            <div>
                <span>Quantidade de Pessoas :</span>
                <input value={n} onChange={e => setN(Number(e.target.value))} />
            </div>

            <div>
                <span> Quantidade de Litros: </span>
                <input value={l} onChange={e => setL(Number(e.target.value))} />
            </div>

            <div>
                <span> Quantidade que cada um vai beber</span>
                <input value={d} onChange={e => setD(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={verCafe} >Calcular</button>
                <div>
                    {total}
                </div>
            </div>
        </main>
    )
}