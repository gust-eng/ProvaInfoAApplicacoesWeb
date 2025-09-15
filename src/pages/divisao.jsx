import { useState } from "react";
import { Link } from "react-router";
import './divisao.scss'

export default function Pagina3 (){
   const [resultado , setResultado] = useState(0)
   const [num1 , setNum1] = useState(0)
   const [num2 , setNum2] = useState(0)

  function calculo (){
  const calculo = Number(num1) / Number(num2)
  setResultado(calculo)

   }

   return(
       <div className="tudo">
            <div className="ttt">
            <h1>Exercício B - Divisão</h1>
            </div>
                <div className="tt">
                    <p>Informe os valores nos campos abaixo para calcular a divisão deles</p>
                </div>
            <div className="cartao">
                <div className="card">
                    <label>Número 01</label>
                    <input value={num1} onChange={(e) => setNum1(e.target.value)} />
                    <label>Número 02</label>
                    <input value={num2} onChange={(e) => setNum2(e.target.value)} />
                </div>
                <div className="bt">
                <button onClick={calculo}>Somar</button>
                </div>
            </div>
            <div className="resultado">
                <p>O resultado é {resultado}</p>
            </div>
            <div className="link">
            <Link to={'/'}>Pagina Anterior</Link>
            </div>
        </div>
   )



}