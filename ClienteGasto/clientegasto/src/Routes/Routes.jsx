import { Routes, Route } from "react-router-dom"
import { FormularioGasto } from "../FormularioGasto/FormularioGasto"
import { Home } from "../Home/Home"
export function Rutas(){

    return (
        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/registrogasto" element={ <FormularioGasto /> } />
          </Routes>
        </div>
      )
}