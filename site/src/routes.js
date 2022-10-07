import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sorveteria from './sorveteria'
import Acai from './acai'
import Libra from './libra'

import App from './App.js'

export default function index(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/sorveteria' element={<Sorveteria/>} />
            <Route path='/acai' element={<Acai/>} />
            <Route path='libra' element={<Libra/>} />
        </Routes>
    </BrowserRouter>
    )
}