import { BrowserRouter, Routes , Route } from "react-router";
import Inicio from './pages/inicio.jsx'
import Multiplicar from './pages/multiplicar.jsx'
import Divisao from './pages/divisao.jsx'

export default function Navegacao (){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/multiplicar" element={<Multiplicar/>}/>
        <Route path="/dividir" element={<Divisao/>}/>
    </Routes>
    </BrowserRouter>
)}