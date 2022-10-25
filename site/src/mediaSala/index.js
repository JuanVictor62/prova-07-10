import './index.scss'
import { useState } from 'react'

export default function Index(){
    const [ alunos, setAlunos ] = useState();
    const [ qtdAlunos, setQtdAlunos] = useState();
    const [ resp, setResp] = useState([]);
    const [ nota, setNota] = useState();
    const [ notas, setNotas] = useState();

    const [total, setTotal] = useState();
    
    function mediaSala(){
    let mediaSala = 0;
    let resp = [];
    for(let x = 1; x <= qtdAlunos; x++){
        resp = [...resp, x];
        setResp(resp);
    }

    console.log(resp);
    return [resp];

    function adicionarNotas(){
        let n = nota;
        return setNotas(...notas, n)
        
    }
    
    // mediaSala = [...alunos, alunos + alunos] / alunos;
    // let mediaSala = resp.reduce(() =>)

    // const valorInicial = 0;
    // const somaInicial = resp.reduce(
    // (valorFinal, valorAtual ) => valorFinal + valorAtual,
    // valorInicial
    // );

    // let soma = alunos.reduce(function(soma, resp) {
    //     return soma + resp;
    // });
    
}

function calcular(){
    let soma = 0;
    for(var i = 0; i < resp.length; i++) {
        soma += resp[i];
        setTotal(soma);
    }
    let resultado = soma / qtdAlunos;
    setTotal(resultado)
}



    return(
        <main>
            <div>
                <h1> Media da Sala pdp?</h1>
            </div>

            <div>
                <input value={qtdAlunos} onChange={e => setQtdAlunos(e.target.value)} />
                <button onClick={mediaSala} >Ok</button>
            </div>
    
            {resp.map((item, i) => 
                <div>
                    <p>Aluno {i + 1} : </p>
                    <input value={nota} onChange={e => setNota(adicionarNotas((e.target.value)))} />
                </div>
            )}

                <button onClick={calcular} >Calcular</button>

                <div>
                    {total}
                </div>
        </main>
    )
}