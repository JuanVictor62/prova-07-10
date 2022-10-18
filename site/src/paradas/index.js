import './index.scss'
import axios from 'axios'
import { useState } from 'react';

export default function Paradas(){
    const [capac, setCapac] = useState();
    const [consumo, setConsumo] = useState();
    const [dist, setDist] = useState();
    const [total, setTotal] = useState();

    async function verParadas(){
        const resp = await axios.post('http://localhost:5000/abastecer', {
            capac,
            consumo,
            dist
        })

        setTotal(resp.data.resposta);
    }

    return(
        <main>
            <h1>Paradas para Abastecer</h1>

            <div>
                <span>Capacidade de Gasolina no Seu Veiculo:</span>
                <input value={capac} onChange={e => setCapac(Number(e.target.value))} />
            </div>

            <div>
                <span>Consumo: </span>
                <input value={consumo} onChange={e => setConsumo(Number(e.target.value))} />
            </div>

            <div>
                <span>Distancia</span>
                <input value={dist} onChange={e => setDist(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={verParadas} >Calcular</button>
                <div>
                    {total}
                </div>
            </div>
        </main>
    )
}