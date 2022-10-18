import{Router} from 'express'

import { precoAcai, sorveteria, verificarLibra, salarioLiquido, paradasAbastecer, verTemperatura, verOrcamento, verCinema, ContarAte, linha, retangulo } from './services.js'

const server = Router();

//Preco do Açai

server.post('/total/precoacai', (req, resp) => {
    try{
        const {qtdPeq, qtdMed, qtdGra, desc} = req.body;
        const resposta = precoAcai(qtdPeq, qtdMed, qtdGra, desc);
        resp.send({
            resposta:resposta
        })
    }
    catch(err){

    }
})

server.post('/verificar/libra', (req,resp) => {
    try {
        const { dia, mes} = req.body;
        const resposta = verificarLibra(dia, mes);
        resp.send({
            resposta:resposta
        })
    } catch (err) {
        
    }
})

server.post('/sorveteria', (req,resp) => {
    try{
        const { gramas } = req.body;
        const resposta = sorveteria(gramas);
        resp.send({
            resposta:resposta
        })
    }
    catch(err){

    }
})


server.post('/salarioLiquido', (req, resp) =>{
    try {
        const {salario, bonus, desc} = req.body;
        const resposta = salarioLiquido(salario,bonus,desc);
        resp.send({
            resposta:resposta
        })
    } catch (err) {
        
    }
})

server.post('/abastecer', (req,resp) =>{
    try {
        const { capac, consumo, dist } = req.body;
        const resposta = paradasAbastecer(capac, consumo, dist);
        resp.send({
            resposta:resposta
        })
    } catch (err) {
        
    }
})

server.get('/temperatura/:temperatura', (req,resp) =>{
    try {
        const temperatura = req.params.temperatura;
        const resposta = verTemperatura(temperatura);
        resp.send({
            resposta:resposta
        })
    } catch (err) {
        
    }
})

server.post('/orcamento', (req,resp) => {
    try {
        const {ganhos, gastos} = req.body;
        const resposta = verOrcamento(ganhos, gastos);
        resp.send({
            resposta:resposta
        })
    } catch (err) {
        

        
    }
})

server.post('/verCinema', (req,resp) => {
    try {
        const {inteiras, meias, diaSemana, internacional} = req.body;
        const resposta = verCinema(inteiras, meias, diaSemana, internacional);
        resp.send({
            resposta: resposta
        })
    } catch (err) {
        
    }
})

server.post('/contar', (req,resp) => {
    try {
        const {comeco, fim} = req.body;
        const resposta = ContarAte(comeco, fim);
        resp.send({
            resposta: resposta
        })
    } catch (err) {
        
    }
})

server.get('/linha/:qtd', (req,resp) => {
    try {
        const qtd = req.params.qtd;
        const resposta = linha(qtd);
        resp.send({
            resposta:resposta
        })
    } catch (err) {
        
    }
})

server.post('/retangulo', (req,resp) => {
    try {
        const {base, altura} = req.body;
        const resposta = retangulo(base, altura)
        resp.send({
            resposta: resposta
        })

    } catch (err) {
        
    }
})

export default server;
