import { Link } from "react-router";
import './inicio.scss'

export default function Pagina1 (){
   
   
    return(
        <div>
<div className="inicio">
    <h1>Gustavo Lana Oliveira</h1>
    <h3>Informatica A</h3>
<div className="link">
    <Link to={'/multiplicar'}>Proxima Pagina</Link>
</div>
</div>
        </div>
   )


}