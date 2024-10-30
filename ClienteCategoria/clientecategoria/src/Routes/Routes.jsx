import { Routes, Route } from "react-router-dom"
import { FormularioCategoria } from "../FormularioCategoria/FomularioCategoria"
import { Home } from "../Home/Home"
export function Rutas(){
    return (
        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/registrocategoria" element={ <FormularioCategoria /> } />
          </Routes>
        </div>
      )
}