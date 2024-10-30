import { Routes, Route } from "react-router-dom"
import { FormularioMetodoPago } from "../FormularioMetodoPago/FormularioMetodoPago"
import { Home } from "../Home/Home"
export function Rutas(){

    return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/registrometodopago" element={ <FormularioMetodoPago /> } />
      </Routes>
    </div>
  )
}