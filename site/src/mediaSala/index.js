import './index.scss'
import { useState } from 'react'
import { calcMaior, calcMedia, calcMenor, criarArray } from './services';

export default function Index(){
    const [qtd, setQtd] = useState(0);
    const [notasAlunos, setNotasAlunos] = useState([]);
    const [media, setMedia] = useState(0);
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);

    function okQtd(){
        const x = criarArray(qtd);
        setNotasAlunos(x);
    }

    function alterar(pos, novoValor){
        notasAlunos[pos] = Number(novoValor);
        setNotasAlunos([...notasAlunos]);
    }

    function calcular(){
        const a = calcMedia(notasAlunos);
        const b = calcMaior(notasAlunos);
        const c = calcMenor(notasAlunos);

        setMedia(a);
        setMaior(b);
        setMenor(c);
    }


    return(
        <main>
            <div>
                <h1> Media da Sala pdp?</h1>
            </div>

            <div>
                Quantidade de Alunos: <input type="text" value={qtd} onChange={e => setQtd(e.target.value)} />
                <button onClick={okQtd} > ok</button>

            </div>

            {notasAlunos.map((item, pos) =>
                <div>
                    Aluno {pos + 1} <input type="text" value={notasAlunos[pos]} onChange={e => alterar(pos, e.target.value)} />                </div>
            )}

            <div>
                <button onClick={calcular} > Calcular </button>
            </div>

            <div>
                Media: {media}
            </div>

            <div>
                Maior: {maior}
            </div>

            <div> 
                Menor: {menor}
            </div>

        </main>
    )
}