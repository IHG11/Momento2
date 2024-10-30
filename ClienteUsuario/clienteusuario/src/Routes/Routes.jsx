import { Routes, Route } from "react-router-dom"
import { FormularioUsuario } from "../FomularioUsuario/FormularioUsuario"
import { Home } from "../Home/Home"


export function Rutas(){

    return (
        <div>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/registrousuario" element={ <FormularioUsuario /> } />
          </Routes>
        </div>
      )
}