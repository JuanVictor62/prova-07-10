import './index.scss'
import axios from 'axios'
import { useState } from 'react';

export default function Salario(){
    const [salario, setSalario] = useState();
    const [bonus, setBonus] = useState();
    const [desc, setDesc] = useState();
    const [total, setTotal] = useState();

    async function verSalario(){
        const resp = await axios.post('http://localhost:5000/salarioLiquido', {
            salario,
            bonus,
            desc
        })

        setTotal(resp.data.resposta)
    }
    return(
        <main>
            <div>
                <h1>Verificar o seu Salario Liquido</h1>
            </div>
            <div>
                <span>Salario :</span>
                <input value={salario}  onChange={e => setSalario(Number(e.target.value))} />
            </div>

            <div>
            <span>bonus :</span>
            <input value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
            </div>
            <span>Desconto :</span>
            <input value={desc} onChange={e => setDesc(Number(e.target.value))} />

            <div>
                <button onClick={verSalario} >Calcular</button>
            </div>
            <div>
            {total}
            </div>
        </main>
    )
}