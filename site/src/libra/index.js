import './index.scss'
import axios from 'axios'
import { useState } from 'react';

export default function Index(){
    const [dia, setDia] = useState(0);
    const [mes, setMes] = useState('');
    const [resposta, setResposta] = useState('');

    async function verSigno(){
    const resp = await axios.post('http://localhost:5000/verificar/libra', {
            dia: dia,
            mes: mes
        })

        setResposta(resp.data.
            x)
    }
    return(
        <main className='main'>
            <h1>Ver signo</h1>

            <h1> Ver se você é libriano! </h1>

            
            <div> Digite o dia: 
                <input type='text' value={dia} onChange={e => setDia(Number(e.target.value))} />
            </div>

            <div> Escreva seu mês: 
                <input type='text' value={mes} onChange={e => setMes(e.target.value)} />
            </div>

        <div>
            <button onClick={verSigno}> Ver signo </button>
            Resposta:  {resposta}
        </div>
        </main>
    )
}

