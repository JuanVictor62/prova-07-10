import axios from 'axios'
import { useState } from 'react'

export default function Index(){
    const [gramas, setGramas] = useState(0);
    const [total, setTotal] = useState(0);

    async function calcularPreco(){
        const resp = await axios.post('http://localhost:5000/sorveteria', {
            gramas: gramas
        })

        setTotal(resp.data.x)
    }

    return(
        <main className='main'>
            <h1> Sorveteria Mil e Mel </h1>
            <p> Preço do sorvete pelas gramas </p>

            <h1> Faça seu Pedido </h1>
            <div>
                Quantidade de gramas
                <input type='text' value={gramas} onChange={e => setGramas(Number(e.target.value))} />
            </div>
            
            <div>
                <button onClick={calcularPreco} >Calcular</button>
            </div>

            <div>
                O preço total do sorvete é : {total}
            </div>
        </main>
    )
}