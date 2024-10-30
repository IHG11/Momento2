import { Routes, Route } from "react-router-dom"
import { FormularioIngreso } from "../FormularioIngreso/FormularioIngreso"
import { Home } from "../Home/Home"
export function Rutas(){

    return (
        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/registroingreso" element={ <FormularioIngreso /> } />
          </Routes>
        </div>
      )
}