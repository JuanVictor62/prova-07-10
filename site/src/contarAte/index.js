import axios from 'axios'
import {useState} from 'react'

export default function Index(){
    const [comeco, setComeco] = useState();
    const [fim, setFim] = useState();
    const [resposta, setResposta] = useState([]);

    async function contarAte(){
        const resp = await axios.post('http://localhost:5000/contar', {
           comeco,
           fim
        })
        setResposta([resp.data]);
    }
    return(
        <main className='main'>
            <h1>Contar Até</h1>
            <div>
                <span>Começo: </span>
                <input type='text' value={comeco} onChange={e => setComeco(e.target.value)} />
           </div>
            <div>
                <span>Fim: </span>
                <input type='text' value={fim} onChange={e => setFim(e.target.value)} />
           </div>

           <div>
                <button onClick={contarAte}>Contar</button>
           </div>

            <div>
                {resposta.map(item =>
                    <p>resposta: {item.resposta}</p>
                )}
            </div>
          
        </main>
    )
}