import axios from 'axios'
import {useState} from 'react'

export default function Index(){
    const [qtdPeq, setQtdPeq] = useState(0);
    const [qtdMed, setQtdMed] = useState(0);
    const [qtdGra, setQtdGra] = useState(0);
    const [desc, setDesc] = useState(0);
    const [total, setTotal] = useState(0);
    
    async function vendaAcai(){
        const resp = await axios.post('http://localhost:5000/total/precoacai', {
            qtdPeq: qtdPeq,
            qtdMed: qtdMed,
            qtdGra: qtdGra,
            desc: desc
        })
        setTotal(resp.data.x);
    }


    return(
        <main>
            <h1>Açai do Vitão</h1>
            <p>Açai Pequeno = 13,50</p>
            <p>Açai Medio = 15,00</p>
            <p>Açai Grande = 17,50</p>

            <h1> Faça seu Pedido Logo Abaixo</h1>

            <div>
            Quantidade de Açai Pequeno :
            <input type='text' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))} />
            </div>

            <div>
                Quantidade de Açao Medio :
                <input type='text' value={qtdMed} onChange={e => setQtdMed(Number(e.target.value))} />
            </div>

            <div>
                Quantidade de Açai Grande :
                <input type='text' value={qtdGra} onChange={e => setQtdGra(Number(e.target.value))} />
            </div>

            <div>
                Quantidade de Desconto :
                <input type='text' value={desc} onChange={e => setDesc(Number(e.target.value))} />
            </div>

            <button onClick={vendaAcai}> Calcular </button>

            <div>
                O Total é : {total}
            </div>

        </main>
    )
}