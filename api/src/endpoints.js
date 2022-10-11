import{Router} from 'express'

import { precoAcai, sorveteria, verificarLibra, salarioLiquido, paradasAbastecer, verTemperatura } from './services.js'

const server = Router();

//Preco do Açai

server.post('/total/precoacai', (req, resp) => {
    try{
        const {qtdPeq, qtdMed, qtdGra, desc} = req.body;
        const x = precoAcai(qtdPeq, qtdMed, qtdGra, desc);
        resp.send({
            x:x
        })
    }
    catch(err){

    }
})

server.post('/verificar/libra', (req,resp) => {
    try {
        const { dia, mes} = req.body;
        const x = verificarLibra(dia, mes);
        resp.send({
            x:x
        })
    } catch (err) {
        
    }
})

server.post('/sorveteria', (req,resp) => {
    try{
        const { gramas } = req.body;
        const x = sorveteria(gramas);
        resp.send({
            x:x
        })
    }
    catch(err){

    }
})


server.post('/salarioLiquido', (req, resp) =>{
    try {
        const {salario, bonus, desc} = req.body;
        const x = salarioLiquido(salario,bonus,desc);
        resp.send({
            x:x
        })
    } catch (err) {
        
    }
})

server.post('/abastecer', (req,resp) =>{
    try {
        const { capac, consumo, dist } = req.body;
        const x = paradasAbastecer(capac, consumo, dist);
        resp.send({
            x:x
        })
    } catch (err) {
        
    }
})

server.get('/temperatura/:temperatura', (req,resp) =>{
    try {
        const temperatura = req.params.temperatura;
        const x = verTemperatura(temperatura);
        resp.send({
            x:x
        })
    } catch (err) {
        
    }
})


export default server
