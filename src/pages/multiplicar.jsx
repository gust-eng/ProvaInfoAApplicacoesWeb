import { useState } from "react";
import { Link } from "react-router";
import './multiplicar.scss'

export default function Pagina2() {
    const [resultado, setResultado] = useState(0)
    const [valor1, setValor1] = useState(  0)
    const [valor2, setValor2] = useState(  0)

    function calculo() {
        const calculo = Number(valor1) * Number(valor2)
        setResultado(calculo)

    }

    return (
        <div className="tudo">
            <div className="ttt">
            <h1>Exercício A - Multiplicação</h1>
            </div>
                <div className="tt">
                    <p>Informe os valores nos campos abaixo para calcular a multiplicação deles</p>
                </div>
            <div className="cartao">
                <div className="card">
                    <label>Número 01</label>
                    <input value={valor1} onChange={(e) => setValor1(e.target.value)} />
                    <label>Número 02</label>
                    <input value={valor2} onChange={(e) => setValor2(e.target.value)} />
                </div>
                <div className="bt">
                <button onClick={calculo}>Somar</button>
                </div>
            </div>
            <div className="resultado">
                <p>O resultado é {resultado}</p>
            </div>
            <div className="link">
            <Link to={'/dividir'}>Proxima Pagina</Link>
            </div>
        </div>
    )



}