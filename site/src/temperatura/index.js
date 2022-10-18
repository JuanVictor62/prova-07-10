import './index.scss'
import axios from 'axios'
import { useState } from 'react';

export default function Temperatura(){
    const [temperatura, setTemperatura] = useState();
    const [total, setTotal] = useState('    ');


    async function verTemperatura(){
        const resp = await axios.get('http://localhost:5000/temperatura/' + temperatura);
        setTotal(resp.data.resposta)
    }

    return(
        <main>
            <div>
                <h1>Temperatura</h1>
            </div>

            <div>
                 <input value={temperatura} onChange={e => setTemperatura(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={verTemperatura} >Calcular</button>
                <div>
                    {total}
                </div>
            </div>
        </main>
    )
}