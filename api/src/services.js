

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
        msg = "Sim"
    }
    else{
        msg = "Não"
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