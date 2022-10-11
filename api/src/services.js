
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

