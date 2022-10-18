
export function precoAcai(qtdPeq, qtdMed, qtdGra, desc){
    let peq = qtdPeq * 13.50;
    let med = qtdMed * 15.00;
    let gra = qtdGra * 17.50;

    let resul = peq + med + gra;

    let desconto = (resul * desc) / 100;

    let aposDesconto = resul - desconto;

    return aposDesconto;
}

export function verificarLibra(dia, mes){
    let msg = ""

    if(dia >= 23 && dia <= 30 && mes == "setembro" ||dia > 0 && dia <= 22 && mes == "outubro" ){
        msg = " O seu signo é libra"
    }
    else{
        msg = "Você não é libriano"
    }

    return msg;
}

export function sorveteria(gramas){
    let total = 0;
    

    if(gramas >= 1000){
        total = (gramas / 100) * 3.00;
    }

    else{
        total = (gramas / 100) * 3.50;
    }

    return total
}






export function salarioLiquido(salario, bonus, desc){
    let salarioComBonus = salario + ((bonus * salario) / 100 );
    let resul = salarioComBonus - desc;
    return resul
}

export function paradasAbastecer(capac, consumo, dist){
    if(dist / consumo < capac){
        return 1
    }
    else if((dist / consumo) > capac){
        return 2
    }
}

export function verTemperatura(temperatura){
    let msg = ""
    if(temperatura <= 36){
        msg = "Hiportemia"
    }

    else if(temperatura >= 36 && temperatura < 37.6){
        msg = "Normal"
    }
    
    else if(temperatura >= 37.6 && temperatura < 39.6){
        msg = "Febre"
    }

    else if(temperatura >= 39.6 && temperatura < 41){
        msg = "Febre Alta"
    }

    else if(temperatura >= 41){
        msg = "Hipotermia"
    }

    return msg

}



export function verOrcamento(ganhos, gastos){
    let msg = '';
    // if(gastos > ganhos){
    //     msg = 'Orçamento comprometido! Hora de rever seus gastos!';
    // }
    // else if(gastos >= ((ganhos * 81) / 100) || gastos <= ((ganhos * 100) / 100)  ){
    //     msg = ' Cuidado, seu orçamento pode ficar comprometido!' ;
    // }
    // else if(gastos >= ((ganhos * 51) / 100) || gastos <= ((ganhos * 80) / 100) ){
    //     meg = 'Ateção, melhor conter seus gastos!'
    // }
    // else if(gastos >= ((ganhos * 51) / 100) || gastos <= ((ganhos * 80) / 100) ){
    //     meg = 'Muito bem, seus gastos são menores que seus ganhos!'
    // }

    let conta = (gastos * 100) / ganhos;

    if(conta > 100){
        msg = "Orçamento compromeito! Hora de rever seus gastos!";
    }

    else if(conta >= 81 && conta < 100){
        msg = ' Cuidado, seu orçamento pode ficar comprometido!';
    }
    else if(conta >= 51 && conta <= 80){
        msg = 'Atenção, melhor conter seus gastos!'
    }
    else if(conta >= 21 && conta <= 50){
        msg = 'Muito bem, seus gastos não ultrapassam metade dos ganhos!'
    }
    else if(conta >= 0 && conta <= 20){
        msg = 'Parabens, esta gerenciando bem seu orçamento!'
    }
    return msg;
}

export function verCinema(inteiras, meias, diaSemana, internacional){
    
    if( internacional == true){
        return (inteiras + meias) * 5;
    }
    else if(diaSemana == true){
        return (inteiras + meias) * 14.25;
    }

    else{
        return (inteiras * 28.5) * (meias * 14.25);
    }
}

export function ContarAte(inicio, fim){
    let resp = [];

    for(let i = inicio; i <= fim; i++){
        resp = [...resp, i];
    }
 
    console.log(resp)
    return [resp];
}

export function linha(qtd){
    let resp = [];
    for(let cont = 1; cont <= qtd; cont++){
        resp = [...resp, "* "]
    }

    return [resp];
}

export function retangulo(base, altura){
    let resp = [];
    for(let linha = 1; linha <= altura; linha++){
        for(let coluna = 1; coluna <= base; coluna++){
            resp = [...resp, "* "]
        }
    }
    
    return [resp];
}