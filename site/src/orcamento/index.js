import axios from 'axios'
import {useState} from 'react'

export default function Index(){
    const [gastos, setGastos] = useState(0);
    const [ganhos, setGanhos] = useState(0);
    const [resposta, setResposta] = useState('');

    async function VerOrçamento(){
        const resp = await axios.post('http://localhost:5000/orcamento', {
            ganhos: ganhos,
            gastos : gastos
        })
        setResposta(resp.data.resposta);
    }
    return(
        <main className='main'>
            <h1> Orçamento do chambi </h1>

            <span>Informe seus ganhos: </span>
            <input type='text' value={ganhos} onChange={e => setGanhos(e.target.value)} />
            <br />

            <span>Informe seus gastos: </span>
            <input type='text' value={gastos} onChange={e => setGastos(e.target.value)} />

            <button onClick={VerOrçamento}> Verificar </button> 

            <p> Moral do sermão: {resposta} </p>
        </main>
    )
}