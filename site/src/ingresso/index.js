import axios from 'axios'
import {useState} from 'react'

export default function Index(){
    const [inteiras, setInteiras] = useState();
    const [meias, setMeias] = useState();
    const [diaSemana, setDiaSemana] = useState(false);
    const [internacional, setInternacional] = useState(false); 
    const [resposta, setResposta] = useState();

    async function verCinema(){
        const resp = await axios.post('http://localhost:5000/verCinema', {
            inteiras: inteiras,
            meias: meias,
            diaSemana: diaSemana,
            internacional: internacional
        })

        setResposta(resp.data.resposta)
    }

    return(
        <main className='main'>
            <h1> Cinemark</h1>
            <div>
                Quantidade de Ingressos inteiros : <input value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />
            </div>

            <div>
                Quantidade de Ingressos meias : <input value={meias} onChange={e => setMeias(Number(e.target.value))} />
            </div>

            <div>
                Quarta Feira? <input type="checkbox"  value={diaSemana} onChange={e => setDiaSemana(e.target.checked)} />
            </div>

            <div>
                Nacional ? <input type="checkbox" value={internacional} onChange={e => setInternacional(e.target.checked)} />
            </div>

            <div>
                <button onClick={verCinema} >Você ira Pagar...</button>
            </div>

            <div>
                {resposta}
            </div>
        </main>
    )
}