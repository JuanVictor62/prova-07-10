import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sorveteria from './sorveteria'
import Acai from './acai'
import Libra from './libra'
import Temperatura from './temperatura'
import Salario from './salario'
import Parada from './paradas'
import Orcamento from './orcamento'
import Ingresso from './ingresso' 
import ContarAte from './contarAte' 
import App from './App.js'
import Linha from './linha'

export default function index(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={< App />} />
            <Route path='/sorveteria' element={< Sorveteria />} />
            <Route path='/acai' element={< Acai />} />
            <Route path='libra' element={< Libra />} />
            <Route path='/temperatura' element={< Temperatura />} />
            <Route path='/salario' element={< Salario />} />
            <Route path='/paradas' element={< Parada />} />
            <Route path='/orcamento' element={< Orcamento />} />
            <Route path='/ingresso' element={< Ingresso />} />
            <Route path='/contarAte' element={< ContarAte />} />
            <Route path='/linha' element={< Linha />} />
        </Routes>
    </BrowserRouter>
    )
}